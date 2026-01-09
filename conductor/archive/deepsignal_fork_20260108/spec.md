# Spec: Create High-Performance DeepSignal Fork

## Overview
Reimplement the core functionality of `deepsignal` to provide a transparent, class-based reactive API while matching the performance of explicit `@preact/signals`. The primary goal is to eliminate the 70x performance penalty observed when using proxies over large data structures.

## Goals
- **API Transparency:** Maintain the "no .value" accessor style for state objects and classes.
- **Granular Reactivity:** Ensure that computed properties only re-run when their specific dependencies change, even within deeply nested objects.
- **Performance:** Achieve sub-millisecond execution times for complex filtering operations on large arrays, comparable to the explicit signal implementation.
- **Minimal Overhead:** Reduce proxy trapping overhead during iteration and property access.

## Requirements
- Compatibility with `@preact/signals` (v2+).
- Support for classes with methods and getters.
- Efficient handling of large arrays (avoiding recursive signal wrapping for every element).
- Automatic tracking of property access within `computed` contexts.

## Technical Approach
- Investigate why the current `deepSignal` implementation causes high overhead during array iterations (likely due to excessive proxy traps).
- Implement a more efficient Proxy handler that optimizes for "read-heavy" scenarios.
- Provide a way to opt-out of deep reactivity for specific large data fields (e.g., database arrays) while keeping the parent object reactive.
