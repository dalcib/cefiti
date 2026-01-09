# CEFiTI - Project Context

@docs/overview.md
@docs/architecture.md
@docs/glossary.md

@conductor/product.md
@conductor/product-guidelines.md
@conductor/tech-stack.md
@conductor/workflow.md

## Overview

CEFiTI (Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual) is a web application designed to help users identify phytosanitary requirements for the interstate transport of agricultural products in Brazil. It provides a searchable interface to check regulations based on host species, origin, and destination states.

## Architecture & Technologies

This project is a Single Page Application (SPA) and Progressive Web App (PWA).

- **Frontend Framework:** [Preact](https://preactjs.com/) (v10) - chosen for its lightweight nature, replacing React in v8.0.0.
- **State Management:** `deepsignal` and `@preact/signals`. The central logic resides in `src/store.ts`.
- **Language:** TypeScript.
- **Build Tool:** [esbuild](https://esbuild.github.io/) - Used for bundling and minification. The build process is orchestrated by `dev.mjs`.
- **Testing:** Node.js native test runner (`node --test`).
- **Data Source:** Data is loaded from static JS files in `public/` (e.g., `dbRegras.db.js`, `dbPragas.db.js`, `dbHospedeiros.db.js`) which export data arrays.

## Key Files & Directories

- `src/index.tsx`: Application entry point. Renders the App and registers the Service Worker.
- `src/app.tsx`: Main application component.
- `src/store.ts`: Central store containing business logic, data filtering, and state management.
- `src/store.ai.test.ts`: Unit tests for the store logic.
- `public/*.db.js`: "Database" files containing the rules, pests, and host data.
- `dev.mjs`: Custom script handling the development server and build context via `esbuild`.
- `package.json`: Project metadata and scripts.

## Development Workflow

### Prerequisites

- Node.js (v20+ recommended based on `node --test` usage).

### Common Commands

- **Start Development Server:**

  ```bash
  npm start
  ```

  Runs `node dev.mjs`. Starts a local server at `http://localhost:3001` with hot reloading (via esbuild watch).

- **Build for Production:**

  ```bash
  npm run build
  ```

  Bundles the application into `public/index.js` using `esbuild`.

- **Run Tests:**

  ```bash
  npm test
  ```

  Executes unit tests defined in `src/store.ai.test.ts`.

- **Linting:**
  ```bash
  npm run lint
  ```
  Runs `eslint` to check for code style and errors.

## Coding Conventions

- **State:** The project uses a global `store` instance exported from `src/store.ts`. State changes are reactive via signals.
- **Styling:** CSS files are located in `src/css/` and imported in `src/index.tsx`.
- **Database:** Data is treated as read-only arrays loaded at runtime.
- **Formatting:** Prettier is used for code formatting.

## Notes

- The project recently migrated from React/MobX/Webpack to Preact/Signals/Esbuild (v8.0.0).
- `src/expect.ts` seems to be a custom wrapper or helper for assertions in tests.
