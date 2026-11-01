# Xuantian World — AI Living World

A browser-based cultivation sandbox built from the **Xuantian World World Bible**.

> The original lore repository is a read-only source of truth. This repository contains the game implementation, normalized game data, generated-asset registry, simulation and UI. Never edit the World Bible from this project.

## Repositories

- **World Bible (read-only):** https://github.com/aesher-gg/Xuantian-World
- **Game implementation (this repository):** https://github.com/aesher-gg/xuantian-World-game

## Product direction

Xuantian World is a persistent, systemic xianxia world. The player is one cultivator among many; NPCs have identities, needs, schedules, goals and relationships. The world advances through deterministic rules. AI supports NPC intent selection, dialogue and optional art generation, but **AI is never the game master and never commits authoritative game state**.

### Non-negotiable boundaries

1. **Simulation owns truth:** cultivation, combat, travel, inventory, crafting, farming, economy, time and consequences are deterministic, validated game code.
2. **AI proposes, engine disposes:** AI may return a schema-constrained intent or dialogue. The engine validates permissions, costs, time, location, requirements and outcomes before applying anything.
3. **World Bible is canonical:** preserve source modules and their provenance. Normalized JSON is a derived build artifact with source file + source hash metadata.
4. **Generated assets are cached:** portraits, locations, beasts, plants and items are generated asynchronously, stored by stable asset key and reused. Never regenerate every time a scene opens.
5. **NPC autonomy is bounded:** NPCs use utility/goal scoring and deterministic schedules first; an optional AI planner can suggest one legal action from the allowed action set.
6. **Reproducible worlds:** seeded randomness, event logs, versioned rules and snapshots make simulation replayable and debuggable.

## Current implementation status

This repository starts as a clean game project. The first milestone is a playable single-player vertical slice in **Shenmu Zhou / Qingling Village**:

- world clock and day/night cycle
- player profile, Qi, HP, stamina and inventory
- deterministic cultivation action
- deterministic gathering / spiritual-herb planting loop
- NPCs with schedules and local needs
- event log and save/load
- asset manifest with placeholder art; AI image provider is an optional later adapter

No AI provider key is required to run the first prototype.

## Architecture

```text
┌──────────────────────────── Browser Client ────────────────────────────┐
│ React UI: HUD / character / inventory / journal / village / map        │
│ Phaser scene: map, entities, camera, movement, sprite & background     │
└───────────────────────────────┬────────────────────────────────────────┘
                                │ typed commands / read models
┌───────────────────────────────▼────────────────────────────────────────┐
│ Application Layer                                                       │
│ Command handlers · validation · event dispatch · save/load              │
└───────────────┬──────────────────────────────┬─────────────────────────┘
                │                              │
┌───────────────▼────────────────┐  ┌──────────▼────────────────────────┐
│ Deterministic Simulation Core  │  │ AI & Asset Services               │
│ clock / cultivation / combat   │  │ NPC intent proposer (optional)    │
│ economy / travel / farming     │  │ dialogue generator (optional)     │
│ NPC schedules / ecology        │  │ image generation job queue        │
│ seeded RNG / rules / events    │  │ asset registry + cache            │
└───────────────┬────────────────┘  └──────────┬────────────────────────┘
                │                              │
┌───────────────▼──────────────────────────────▼────────────────────────┐
│ Persistence & Content                                                  │
│ save snapshots · event log · normalized World Bible JSON · asset map  │
│ IndexedDB/local save first; server DB and object storage later         │
└───────────────────────────────────────────────────────────────────────┘
```

### Recommended stack

- **Client:** React + TypeScript + Vite; Phaser 3 for world rendering and interaction.
- **Core:** TypeScript domain modules, independent from UI and AI provider.
- **Prototype persistence:** browser IndexedDB (local-first).
- **Later backend:** Node.js API + PostgreSQL; object storage for generated images.
- **AI adapters:** provider-neutral interfaces for NPC planning, dialogue and image generation. Keep API keys on a server, never in browser bundles.

## World Bible integration

The source index currently describes 10 major regions and modules for cultivation, professions, farming, beast taming, airships, economy, vitality, combat, bestiary, factions, events and special items.

The game should ingest modules in a controlled pipeline:

1. fetch source Markdown from the canonical repository;
2. store immutable source snapshots and SHA-256 hashes;
3. parse into versioned JSON schemas;
4. validate required fields and cross-references;
5. generate reports for ambiguities / conflicting rules;
6. ship only validated data into the runtime.

Do not silently rewrite contradictions or invent missing formulas. Preserve source wording and attach a migration note until a human-approved rule resolution exists.

## Development

```bash
npm install
npm run dev
```

## Milestones

- [x] Establish separate game repository and architecture contract.
- [ ] M1 — playable Shenmu/Qingling vertical slice and deterministic core.
- [ ] M2 — World Bible ingestion, validation and normalized data catalog.
- [ ] M3 — persistent NPC schedules, needs, relationships and autonomous legal actions.
- [ ] M4 — AI dialogue and bounded NPC planning adapters.
- [ ] M5 — async image generation, asset registry, caching and fallback art.
- [ ] M6 — expand to all ten regions and offline world simulation.

## Design references

See `docs/ARCHITECTURE.md`, `docs/WORLD_BIBLE_PIPELINE.md` and `docs/AI_BOUNDARIES.md`.
