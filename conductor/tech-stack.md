# Technology Stack

## Frontend
- **Framework:** [Preact](https://preactjs.com/) (v10) - A fast, 3kB alternative to React with the same modern API.
- **Reactivity:** `@preact/signals` and `deepsignal` for efficient state management.
- **Language:** TypeScript - For type-safe development.

## Build and Tools
- **Bundler:** [esbuild](https://esbuild.github.io/) - An extremely fast JavaScript bundler.
- **Scripting:** Node.js for build orchestration (`dev.mjs`).

## PWA and Offline
- **Service Worker:** Custom implementation in `src/sw.js` for caching and offline capabilities.
- **Data Persistence:** Static JavaScript files (`.db.js`) acting as a portable, versioned database.

## Quality Assurance
- **Testing:** Node.js native test runner (`node --test`).
- **Linting:** ESLint with TypeScript and React plugins.
