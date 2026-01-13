# Technology Stack

## Frontend
- **Framework:** [Preact](https://preactjs.com/) (v10) - A fast, 3kB alternative to React with the same modern API.
- **Reactivity:** `@preact/signals` for core high-performance state, using a custom `FastDeepSignal` implementation to maintain a transparent, class-based accessor API without performance penalty.
- **Language:** TypeScript - For type-safe development.

## Build and Tools
- **Bundler:** [esbuild](https://esbuild.github.io/) - An extremely fast JavaScript bundler.
- **Scripting:** Node.js for build orchestration (`dev.mjs`).

## PWA and Offline
- **Service Worker:** Custom implementation in `src/sw.js` for caching and offline capabilities.
- **Data Persistence (No-SQL/File-Based):**
    -   **Architecture:** The system does not use a traditional backend database. Data is stored in structured JavaScript files (`.db.js`) in the `public/` directory.
    -   **Structure:** Normalized into `Pragas` (Pests), `Hospedeiros` (Hosts), and `Regras` (Rules) to avoid redundancy and facilitate maintenance via Git versioning.
    -   **Loading:** Data is loaded as static assets, enabling full offline search capability.

## Quality Assurance
- **Testing:** Node.js native test runner (`node --test`).
- **Linting:** ESLint with TypeScript and React plugins.