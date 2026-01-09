# Plan: Refactor and Modernize State Management

## Phase 1: Foundation & Analysis [checkpoint: a511c44]
- [x] Task: Audit current `src/store.ts` for signal usage and bottlenecks [f333f9f]
- [x] Task: Conductor - User Manual Verification 'Foundation & Analysis' (Protocol in workflow.md) [a511c44]

## Phase 2: Refactoring Core State [checkpoint: ab69d1f]
- [x] Task: Refactor data loading and initialization logic in Store [f451304]
- [x] Task: Transition `dados` and `searched` state to Preact Signals [d0da9c9]
- [x] Task: Implement signal-based computed properties for `result`, `hospedeirosRegulamentados`, and `partes` [982edb9]
- [x] Task: Conductor - User Manual Verification 'Refactoring Core State' (Protocol in workflow.md) [ab69d1f]

## Phase 3: Testing & Optimization
- [x] Task: Benchmark Performance: Old vs New Store [95fb836]
- [x] Task: Update unit tests in `src/store.ai.test.ts` to cover complex search edge cases [a525c81]
- [ ] Task: Optimize filtering logic for large datasets
- [ ] Task: Conductor - User Manual Verification 'Testing & Optimization' (Protocol in workflow.md)
