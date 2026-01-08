# Plan: Refactor and Modernize State Management

## Phase 1: Foundation & Analysis
- [ ] Task: Audit current `src/store.ts` for signal usage and bottlenecks
- [ ] Task: Conductor - User Manual Verification 'Foundation & Analysis' (Protocol in workflow.md)

## Phase 2: Refactoring Core State
- [ ] Task: Refactor data loading and initialization logic in Store
- [ ] Task: Transition `dados` and `searched` state to Preact Signals
- [ ] Task: Implement signal-based computed properties for `result`, `hospedeirosRegulamentados`, and `partes`
- [ ] Task: Conductor - User Manual Verification 'Refactoring Core State' (Protocol in workflow.md)

## Phase 3: Testing & Optimization
- [ ] Task: Update unit tests in `src/store.ai.test.ts` to cover complex search edge cases
- [ ] Task: Optimize filtering logic for large datasets
- [ ] Task: Conductor - User Manual Verification 'Testing & Optimization' (Protocol in workflow.md)
