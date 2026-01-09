# Benchmark Report: Old vs New Store Performance

## Methodology
- **Old Implementation:** Reimplemented `src/store.old.ts` using `deepSignal` and `clone` pattern.
- **New Implementation:** Current `src/store.ts` using explicit `@preact/signals` and `computed`.
- **Scenario:** 
    1. Reset store.
    2. Select 'Citrus spp.' (Host).
    3. Select 'SP' (Origin).
    4. Select 'BA' (Destination).
    5. Access `result` computed property after each step to trigger computation.
- **Iterations:** 1000 runs per store.
- **Environment:** Node.js v23.7.0.

## Results

| Metric | Old Store (deepSignal) | New Store (@preact/signals) | Delta |
| :--- | :--- | :--- | :--- |
| **Setup Time** | 0.0629ms | **0.0544ms** | -0.0085ms (Faster) |
| **Execution Time (Total)** | 1432.35ms | **20.44ms** | -1411.91ms (Faster) |
| **Avg per Iteration** | 1.43ms | **0.02ms** | **~70x Faster** |
| **Memory (Heap)** | ~12.81 MB | ~12.98 MB | +0.17 MB (Negligible) |

## Analysis
The new implementation is approximately **70 times faster** in execution. 

### Key Drivers:
1.  **Proxy Overhead:** The old implementation wrapped the entire `Store` and its arrays in `deepSignal` proxies. Iterating over large arrays (like the database) through a proxy adds significant overhead to every property access. The new implementation iterates over the raw array values inside `computed` callbacks.
2.  **Optimized Reactivity:** Explicit `computed` signals allow for more efficient dependency tracking and memoization compared to the deep proxy approach.

### Conclusion
While the new code is more verbose (explicit signal definitions), the performance gain is massive and justifies the change. The memory footprint remains stable.
