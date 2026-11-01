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
- React + TypeScript + Vite browser client
- Qingling / Shenmu-inspired starting scene and responsive dashboard
- Player profile, Qi, HP, stamina, hunger and spirit-stone display
- Deterministic time advancement, cultivation and rest actions
- Spiritual herb planting, growth and harvest loop
- Local NPC roster, ambient descriptions and world event journal
- Local save/load through browser localStorage

Not implemented yet: live LLM provider, generated image provider, full NPC autonomy, all combat/economy/cultivation formula ports, complete World Bible import, and production persistence. The current scene illustration is CSS placeholder art. No AI provider key is required to run this prototype.

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

The importer is implemented in `scripts/import-world-bible.mjs`. Run `npm run import:world-bible` to fetch the full index, every indexed Markdown module, and the starter-character catalog from the canonical repository. It verifies every download against the Git blob SHA in the source tree, stores immutable copies under `world-bible/snapshots/`, and writes `world-bible/generated/catalog.json` plus `validation-report.json`.

The catalog retains provenance, headings, section text, tables, fenced formulas/code blocks and cross-references. Its JSON contract is in `world-bible/schema/catalog.schema.json`; parser/validator tests run with `npm test`. The importer only reads the source repository. It does not silently rewrite contradictions or invent missing mechanics; ambiguous rules remain visible for review. Player saves remain separate from canon.

## Milestones

- [x] Separate game repository and architecture contract.
- [x] Initial React/TypeScript browser prototype and local deterministic gameplay loop.
- [ ] M1 — automated build verification and tests for simulation rules.
- [x] M2 foundation — importer, source-SHA verification, immutable snapshots, JSON catalog schema, validation report and parser tests (full source sync runs with `npm run import:world-bible`).
- [ ] M3 — persistent NPC schedules, needs, relationships and autonomous legal actions.
- [ ] M4 — AI dialogue and bounded NPC planning adapters.
- [ ] M5 — async image generation, asset registry, caching and fallback art.
- [ ] M6 — expand to all ten regions and offline world simulation.
