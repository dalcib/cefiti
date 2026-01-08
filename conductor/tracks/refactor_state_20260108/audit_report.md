# Audit Report: State Management in `src/store.ts`

## Current Architecture
The application uses `deepSignal` to wrap a cloned instance of a `Store` class.
- **Initialization:** `export const store = deepSignal<Store>(clone(new Store()))`
- **Mechanism:** The `clone` function strips the constructor and copies descriptors to a plain object, which `deepSignal` then proxies to make all properties deep-reactive.
- **Dependencies:** Hardcoded imports of `.db.js` files (`regras`, `pragas`, `hospedeiros`).

## Issues & Bottlenecks
1.  **Complexity:** The `clone` + `deepSignal` pattern is convoluted and non-idiomatic for modern Preact. It obscures the underlying data structure.
2.  **Testability:** Hard dependencies on external `.db.js` files make it difficult to mock data for unit tests. Testing the `store` export tests the proxy, not the logic in isolation.
3.  **Performance:**
    -   Getters on the class (e.g., `get result()`) become reactive, but `deepSignal`'s internal handling of extensive getters with array operations (`.filter`, `.map`) on every access might be less efficient than explicit `computed()` signals which optimize dependencies.
    -   `db` initialization happens once, but allows no lazy loading or updates.

## Refactoring Plan
1.  **Transition to Signals:** Replace `deepSignal` with explicit `signal()` and `computed()` from `@preact/signals`.
2.  **Functional/Class Hybrid:**
    -   Define state containers using `signal()`.
    -   Use `computed()` for derived state (`result`, `partes`).
    -   Keep actions as functions or methods that mutate the signals.
3.  **Decoupling:** Inject dependencies (database arrays) into the store factory or constructor, rather than importing them globally.

## Recommended Structure
```typescript
import { signal, computed } from "@preact/signals";

export class Store {
  // State
  dados = signal<Dados>({ ... });
  searched = signal(false);
  
  // Computed
  result = computed(() => { ... });

  constructor(private dbRegras: Regra[], ...) {}

  // Actions
  handleSearch() { ... }
}
```
