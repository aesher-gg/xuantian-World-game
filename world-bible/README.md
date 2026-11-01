# World Bible data pipeline

- `snapshots/`: immutable Markdown copies fetched from the canonical read-only source.
- `generated/catalog.json`: parsed, provenance-rich JSON catalog for game systems.
- `generated/validation-report.json`: machine-readable validation output.
- `generated/domain-catalog.json`: operational 10-region/9-realm catalog, 200 herb rows, 344 beast records and formula registry.
- `generated/DOMAIN_DATA_README.md`: coverage and known source discrepancy notes.
- `public/data/world-bible/`: runtime copies of the validated catalog and domain catalog.
- `schema/catalog.schema.json`: versioned JSON contract.

Run `npm run import:world-bible` to refresh all modules listed in the official `INDEX.md`. The importer verifies Git blob SHAs and never writes to the source repository.
