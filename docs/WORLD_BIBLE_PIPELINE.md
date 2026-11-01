# World Bible Import Pipeline

## Source of truth

The World Bible remains at https://github.com/aesher-gg/Xuantian-World. The game repository stores derived, versioned data; it does not replace or edit the canon source.

## Import stages

1. Read INDEX.md and resolve the canonical source commit.
2. Fetch all indexed source Markdown and starter-character data without modifying the source.
3. Verify every downloaded file against its Git blob SHA.
4. Preserve exact source snapshots under world-bible/snapshots/.
5. Parse modules into a provenance-rich catalog and build the normalized domain catalog.
6. Keep the operational simulation rules in a separately versioned JSON file with formula coefficients, source references and explicit source-conflict records.
7. Validate required modules, duplicate paths, cross-references, source SHAs and derived-data coverage.
8. Copy runtime catalogs to public/data/world-bible/.
9. Run formula tests, operational-data validation and the production build.

## Operational coverage

| World Bible module | Game domain |
|---|---|
| 01–11 | 10 regions, locations, regional environment |
| 12, 22–45 | organizations, sects, academies, NPC affiliations |
| 13, 47 | spiritual roots, nine cultivation realms, breakthrough and Qi |
| 14 | seven professions, crafting and recipes |
| 15 | 200 herbs, soils, crop growth and harvest |
| 16, 21 | taming, beast evolution, 344 bestiary records and loot |
| 17 | airship routes, capacity, fuel and travel |
| 18 | currencies, base values, dynamic prices and auctions |
| 19 | HP, hunger, vitality and pill toxins |
| 20 | initiative, turn actions, damage, defense and status effects |
| 46 | world events |
| 48–50 | custom sects, techniques and special items |
| players.md | read-only character templates, never live saves |

## Provenance and consistency gates

- catalog.json retains all indexed module paths, source commit and blob SHAs.
- domain-catalog.json retains normalized records and per-record source path, line and blob SHA.
- simulation-rules.json stores operational coefficients and source references.
- validate-operational-data.mjs checks that all three derived layers reference the same canonical source commit and module SHAs.
- If a source module changes but its derived operational mapping has not been reviewed, CI fails before production build. It never silently applies stale formulas.
- All source conflicts remain explicit until reconciled by an authoritative World Bible change or decision.

## Canon policy

- Source wording and source files are preserved.
- Parsed JSON is a derived representation, not a replacement.
- Runtime balance changes belong in explicit override files with rationale.
- Contradictions are reported and cannot be silently normalized.
- Player save state is stored separately from character templates.
- The canonical source repository is read-only from this project.
