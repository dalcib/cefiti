# Analysis of DeepSignal Performance Bottlenecks

## Findings
The 70x performance gap between `deepsignal` and explicit `@preact/signals` is primarily caused by **Proxy Trap Overhead during Array Iteration**.

### The Mechanism
1.  `deepsignal` wraps the target object (e.g., `Store`) and its nested objects (e.g., arrays like `dbRegras`) in Proxies.
2.  When a native array method like `filter`, `map`, or `forEach` is called on the proxied array (`store.db`), the Javascript engine invokes the method on the Proxy.
3.  Since `deepsignal` does not implement optimized overrides for these methods in `arrayHandlers`, the default `Array.prototype` implementation is used.
4.  The default implementation accesses the `length` property and then iterates from `0` to `length - 1`, accessing each index.
5.  **Each access** (e.g., `proxy[0]`) triggers the `get` trap in `deepsignal`.
6.  The `get` trap performs significant work:
    -   Checks for `peeking` and special keys.
    -   Lookup in `proxyToSignals`.
    -   Lazy Signal creation if missing.
    -   **Recursive Proxying:** If the value at the index is an object (which is true for the database rows), `deepsignal` checks `shouldProxy` and wraps that object in *another* Proxy.
    -   Dependency tracking (accessing `.value`).

### The Impact
For a database of ~700 items, a single `filter` operation triggers:
-   700+ calls to the `get` trap.
-   700+ creations/lookups of nested Proxies (one for each row).
-   700+ Signal dependency trackings (fine-grained, but expensive in bulk).

In contrast, the explicit `@preact/signals` implementation:
-   Accesses `this._dbRegras.value`, which returns the *raw* array.
-   Calls `filter` on the raw array.
-   Iterates 700 items with **zero** proxy overhead.
-   Tracks only the *collection* signal (`_dbRegras`), not every element.

## Proposed Solution: FastDeepSignal
To close this gap while maintaining API transparency, we must implement **Optimized Array Methods** on the Proxy.

### Strategy
1.  **Override `arrayHandlers`**: Implement `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every` on the Proxy handler (or via `get` intercepting these keys).
2.  **Implementation Logic**:
    -   When `proxy.filter` is accessed, return a wrapped function.
    -   The wrapper function should:
        -   Track the array's identity (e.g., access a `$self` signal or `length` to register dependency).
        -   Access the **raw target array** (unproxied).
        -   Execute the native method on the raw array.
        -   (Optional) If the result needs to be reactive, wrap the result. But for `filter` inside a `computed`, we usually want the raw data processing to be fast. If the result of `filter` is assigned to a UI component, the UI component will access properties on the result items. If those items are raw objects (from the raw array), they won't be reactive?
        -   **Crucial Detail**: If `filter` returns raw objects, and we pass them to a component, mutations on them won't be tracked?
            -   In `deepsignal`, mutations *must* go through the proxy to be tracked.
            -   If we return raw objects, we break reactivity for *mutations* on the result.
            -   BUT, for the `CEFiTI` use case (readonly database), this is acceptable/desired.
            -   For general use, we might need to re-wrap the result items in proxies *on demand* or return a proxy of the result array?
            -   Actually, if `filter` runs on raw items, the callback receives raw items.
            -   If the callback just checks properties, it's fast.
            -   If the result is a subset of the array, and we return it.
            -   If the user then does `result[0].prop = 'new'`, it won't update?
            -   **Refined Strategy**: The `filter` runs on raw data for speed. The result is an array of raw objects. We should wrap the *result array* in a `deepSignal` (or simple proxy) so that accessing items *later* re-proxies them?
            -   Or better: `deepsignal` already caches proxies. `objToProxy`.
            -   If we run `filter` on raw items, we get raw items.
            -   We can map the result back to proxies using `objToProxy.get(raw) || createProxy(raw)`?
            -   This re-introduces overhead, but only for the *results* (subset), not the whole iteration?
            -   Wait, the overhead is the *iteration itself*.
            -   If `filter` runs on raw, iteration is fast.
            -   Mapping 10 results to proxies is fast.
            -   **Verdict**: This is the winning strategy. Run on raw, map result to proxies.

### Benchmark Target
-   Reduce execution time from ~1400ms to <50ms for the test scenario.
