# Plan: Refactor and Modernize State Management

## Phase 1: Foundation & Analysis [checkpoint: a511c44]
- [x] Task: Audit current `src/store.ts` for signal usage and bottlenecks [f333f9f]
- [x] Task: Conductor - User Manual Verification 'Foundation & Analysis' (Protocol in workflow.md) [a511c44]

## Phase 2: Refactoring Core State
- [x] Task: Refactor data loading and initialization logic in Store [f67b5da]
- [x] Task: Transition `dados` and `searched` state to Preact Signals [92158b6]
- [x] Task: Implement signal-based computed properties for `result`, `hospedeirosRegulamentados`, and `partes` [92158b6]
- [ ] Task: Conductor - User Manual Verification 'Refactoring Core State' (Protocol in workflow.md)

## Phase 3: Testing & Optimization
- [ ] Task: Update unit tests in `src/store.ai.test.ts` to cover complex search edge cases
- [ ] Task: Optimize filtering logic for large datasets
- [ ] Task: Conductor - User Manual Verification 'Testing & Optimization' (Protocol in workflow.md)
