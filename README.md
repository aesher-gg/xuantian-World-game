# Xuantian World — AI Living World

Browser-based cultivation RPG prototype built from the **Xuantian World World Bible**.

> The original lore repository is a read-only source of truth. All game code, derived data, saves and generated assets belong in this repository. Never edit the World Bible from this project.

## Repositories

- **World Bible (read-only):** https://github.com/aesher-gg/Xuantian-World
- **Game implementation:** https://github.com/aesher-gg/xuantian-World-game

## Product direction

Xuantian World is a persistent, systemic xianxia world. The player is one cultivator among many; NPCs have identities, needs, schedules, goals and relationships. The world advances through deterministic rules. AI supports NPC intent proposals, dialogue and optional art generation, but **AI is not the Game Master and never commits authoritative game state**.

### Non-negotiable boundaries

1. **Simulation owns truth:** cultivation, combat, travel, inventory, crafting, farming, economy, time and consequences are deterministic, validated game code.
2. **AI proposes, engine disposes:** AI may return schema-constrained dialogue or candidate intents. The engine validates permissions, costs, time, location, requirements and outcomes before applying anything.
3. **World Bible is canonical:** preserve source modules and provenance. Normalized JSON is derived data with source file and blob SHA metadata.
4. **Generated assets are cached:** portraits, locations, beasts, plants and items are generated asynchronously, stored by stable asset key and reused.
5. **NPC autonomy is bounded:** deterministic schedules and legal action sets first; optional AI can suggest actions but cannot bypass rules.
6. **Reproducible worlds:** seeded randomness, event logs, versioned rules and snapshots make simulation replayable.

## Current prototype (0.1)

Implemented in this repository:
- React + TypeScript + Vite browser client and Qingling starting scene
- Player state and local save/load
- World clock and deterministic action progression
- Cultivation action now calls the official Module 13 meditation formula, with QiCap enforcement
- Typed, provenance-aware domain catalog for 10 regions, 9 realms, 5 spiritual-root families and 7 profession systems
- Source-traced operational rules JSON for all ten regions, nine realms, roots, seven professions, 200 herbs, 344 beasts and 37 formula records
- Deterministic formula functions for cultivation, farming, taming, alchemy, airships, economy, vitality and combat, with formula source metadata
- Six explicit cross-module conflicts retained for review; combat-specific values are scoped to Module 20 rather than silently overwriting Module 13
- Formula tests and CI validation that blocks stale source SHA mappings

Still pending: formula parity for every sub-system; seeded combat/loot rolls; full UI integration of all 10 regions and the 200 herbs/344 beasts; NPC autonomy; AI providers; and production persistence. Unspecified modifiers are explicit function inputs, not guessed constants.

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), [docs/WORLD_BIBLE_PIPELINE.md](docs/WORLD_BIBLE_PIPELINE.md), [docs/AI_BOUNDARIES.md](docs/AI_BOUNDARIES.md), and [docs/ROADMAP.md](docs/ROADMAP.md).

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## World Bible integration

The canonical index describes 10 major regions and systems for cultivation, professions, farming, beast taming, airships, economy, vitality, combat, bestiary, factions, events and special items.

The importer is implemented in `scripts/import-world-bible.mjs`. Run `npm run import:world-bible` to fetch every module indexed by the canonical `INDEX.md` and the starter-character catalog. It verifies every file against the source Git blob SHA, preserves snapshots under `world-bible/snapshots/`, and writes `catalog.json`, `validation-report.json`, plus `domain-catalog.json` under `world-bible/generated/` and the runtime copy under `public/data/world-bible/`.

The domain extraction retains all official tables for the 200-herb and bestiary catalogs, region source tables, and formula expressions with source paths and SHAs. simulation-rules.json maps the extracted data into operational constants for cultivation, farming, beast taming, economy, vitality, combat, movement and profession systems. `src/domain/canonFormulas.mjs` contains deterministic functions for rules already mapped; missing modifiers must be supplied by game state. `npm test` checks importer and formula examples. CI performs the full sync, build, and artifact upload. The source repository is read-only and is never written.

## Milestones

- [x] Separate game repository and architecture contract.
- [x] Initial React/TypeScript browser prototype and local deterministic gameplay loop.
- [x] M1 — CI build pipeline and parser/formula unit tests (10/10 passed).
- [x] M2 — importer, source-SHA verification, immutable snapshots, validated JSON catalog, domain extraction and successful CI sync (52 modules, 200 herbs, 344 beasts, 37 formula records).
- [ ] M3 — finish formula parity, seeded random outcomes and apply every domain formula to gameplay actions.
- [ ] M3 — persistent NPC schedules, needs, relationships and autonomous legal actions.
- [ ] M4 — AI dialogue and bounded NPC planning adapters.
- [ ] M5 — async image generation, asset registry, caching and fallback art.
- [ ] M6 — expand to all ten regions and offline world simulation.
