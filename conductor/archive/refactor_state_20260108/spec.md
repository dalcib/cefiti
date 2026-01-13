# Spec: Refactor and Modernize State Management

## Overview
This track aims to refactor the central state management in `src/store.ts` to fully leverage Preact v10's signals architecture. The current implementation uses a mix of class-based patterns and `deepsignal`. Modernizing this will improve performance, testability, and alignment with modern Preact standards.

## Goals
- Transition `Store` logic to a more idiomatic Signals-based approach.
- Improve decoupling between data loading and business logic.
- Increase test coverage for complex search scenarios (host, origin, destination combinations).
- Ensure high performance for search result filtering.

## Requirements
- Maintain existing functionality for phytosanitary requirement lookups.
- Use `@preact/signals` for all reactive state.
- Ensure all business logic is covered by unit tests with >80% coverage.
- Adhere to the project's TypeScript and Preact v10 conventions.

## Implementation Details
- Refactor `src/store.ts` to use functional patterns or a more signals-friendly class structure.
- Decouple the data imports (`.db.js`) to allow for better mocking in tests.
- Update `src/store.ai.test.ts` to match the refactored store and include more edge cases.
