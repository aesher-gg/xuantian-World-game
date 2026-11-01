# World Bible data pipeline

- `snapshots/`: immutable Markdown copies fetched from the canonical read-only source.
- `generated/catalog.json`: parsed, provenance-rich JSON catalog for game systems.
- `generated/validation-report.json`: machine-readable validation output.
- `public/data/world-bible/`: same validated JSON copied to the Vite public directory so the game can load it through `loadWorldBibleCatalog()` in `src/domain/worldBible.ts`.
- `schema/catalog.schema.json`: versioned JSON contract.

Run `npm run import:world-bible` to refresh all modules listed in the official `INDEX.md`. The importer verifies Git blob SHAs and never writes to the source repository.
