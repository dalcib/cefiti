# Spec: Integrate FastDeepSignal and Restore Legacy Store

## Overview
This track involves integrating the `FastDeepSignal` implementation (developed in the previous track) into the project source code and restoring the original `Store` implementation. This restores the preferred class-based API while leveraging the performance optimizations of the fork.

## Goals
- **Integration:** Move `FastDeepSignal` source code into `src/lib/deepsignal` (or similar).
- **Restoration:** Revert `src/store.ts` to its original class-based structure that used `deepSignal`.
- **Optimization:** Update the restored `Store` to use `shallow()` for the large database arrays (`dbRegras`, `dbPragas`, etc.) to activate the performance optimization.
- **Verification:** Ensure all tests pass and performance remains high.

## Requirements
- `src/store.ts` should resemble the original implementation (using `deepSignal` proxy).
- `FastDeepSignal` implementation must be included in the project.
- Data arrays must be wrapped in `shallow()`.
- Existing tests must pass.

## Implementation Details
- Create `src/lib/fast-deep-signal.ts` with the code from the archived track.
- Rewrite `src/store.ts` to use `import { deepSignal, shallow } from './lib/fast-deep-signal'`.
- Wrap static data imports in `shallow()` in the `Store` initialization.
