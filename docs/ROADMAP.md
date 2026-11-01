# Prototype Roadmap

## Phase 0 — Foundation
- [x] Create a separate game repository.
- [x] Define authority boundaries and architecture.
- [x] Establish React + TypeScript + Vite client.
- [ ] Add automated build verification in CI.

## Phase 1 — First playable vertical slice
- [x] Qingling-inspired starting scene and navigation shell.
- [x] World clock and deterministic time progression.
- [x] Player status and cultivation state.
- [x] NPC presence and ambient activity.
- [x] Spiritual herb plot: plant, advance time, harvest.
- [x] Local save/load snapshot.
- [ ] Verify build and refine simulation rules.

## Phase 2 — Deterministic simulation
- [x] Add typed domain catalog for regions, realms, roots, professions, economy, vitality and combat.
- [x] Implement core deterministic formula functions with explicit input modifiers.
- [x] Add unit tests for canonical worked examples.
- [ ] Complete formula parity and seeded random outcomes; wire each formula into all relevant gameplay actions.
- [ ] NPC needs, routines, relationships and memory records.

## Phase 3 — AI identity
- [ ] AI gateway with provider adapters.
- [ ] NPC dialogue grounded in structured facts and memory.
- [ ] Event proposal workflow with validation.
- [ ] Image generation queue for portraits, locations, beasts, herbs and items.
- [ ] Asset registry, cache and approval workflow.

## Phase 4 — Living world
- [ ] Background world ticks while player is away.
- [ ] Dynamic markets, ecology, faction influence and regional events.
- [ ] Persistence service and multi-save support.

## Phase 5 — Expansion
- [x] Define all ten region records and extract regional source tables during the full importer run.
- [ ] Verify complete CI snapshot sync and review catalog completeness warnings.
- [ ] Add exploration, airship travel, crafting, beast taming and professions.
- [ ] Add optional Phaser/PixiJS world renderer and responsive mobile controls.

A phase is complete only when the feature works, state survives reload, deterministic rules have tests, and no canon data has been silently altered.
