# Plan: Integrate FastDeepSignal and Restore Legacy Store

## Phase 1: Integration & Restoration [checkpoint: 7d1807f]
- [x] Task: Copy `FastDeepSignal` implementation to `src/lib/fast-deep-signal.ts` [ef7e681]
- [x] Task: Restore `src/store.ts` to use `deepSignal` with `shallow` optimization for data arrays [ef7e681]
- [x] Task: Conductor - User Manual Verification 'Integration & Restoration' (Protocol in workflow.md) [7d1807f]

## Phase 2: Verification [checkpoint: 1d8ad84]
- [x] Task: Verify unit tests pass with the restored store [f2e5f21]
- [x] Task: Verify performance using the benchmark script (adapted for the restored store) [95fb836]
- [x] Task: Conductor - User Manual Verification 'Verification' (Protocol in workflow.md) [1d8ad84]
