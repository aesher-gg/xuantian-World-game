# Xuantian World — Technical Architecture

## Product identity
Xuantian World is an AI Living World cultivation RPG, not an AI Game Master chat wrapper. The world persists as a simulation; the player is one actor inside it. AI provides expressive intelligence and generative content, while deterministic systems remain authoritative for outcomes.

## Repository boundary
- Canonical source: `aesher-gg/Xuantian-World` (read-only).
- Game implementation: `aesher-gg/xuantian-World-game`.
- Never push runtime data, generated files, or code changes into the World Bible repository.
- Imported canon records retain source repository, path, blob SHA and import timestamp.

## Logical architecture
```text
React Web Client (World Scene / HUD / Journal / Inventory / Cultivation)
                 │ typed commands and snapshots
                 ▼
Game Application Layer (validation, save orchestration, sessions)
                 │
       ┌─────────┴──────────┐
       ▼                    ▼
AI Gateway             Deterministic Simulation Core
- NPC dialogue         - World clock / scheduler
- Personality          - Cultivation / spiritual roots
- Asset generation     - Vitality / hunger / fatigue
- Event proposals      - Combat / economy / farming
       │               - NPC routine / ecology
       └──────┬────────────┘
              ▼
 World State + Append-only Event Log + Asset Registry
              ▼
 localStorage (prototype) → SQLite → PostgreSQL
 Object storage for generated visual assets
```

## Authority boundaries
| Concern | Authority | AI role |
|---|---|---|
| Damage, hit, initiative, combat outcome | Combat engine | Explain result; never decide it |
| Qi, realm, breakthrough requirements | Cultivation engine | Give guidance / dialogue |
| Currency, prices, item ownership | Economy + inventory | Merchant voice; no direct mutation |
| Time, travel, weather, crop growth | World scheduler | Describe atmosphere |
| NPC identity, schedule, needs | NPC state machine | Natural dialogue within facts |
| Portraits, scene art, props | Asset pipeline | Generate candidate assets |
| Ambient events | Rules + validator | Propose bounded candidates |

AI output is an untrusted proposal. Validate schemas, canon constraints and deterministic preconditions before any state mutation. Prefer AI outputs that are read-only presentation.

## Suggested stack
- Client: React + TypeScript + Vite; Phaser/PixiJS can be introduced for a richer world renderer.
- Simulation: pure TypeScript domain modules with seeded PRNG.
- API: local simulation first; later Fastify or Hono.
- Persistence: localStorage prototype; SQLite single-player; PostgreSQL hosted worlds.
- AI: provider-agnostic gateway for LLM dialogue and image generation.
- Assets: object storage + manifest registry; cache by stable key and prompt/model fingerprint.

## Core domain model
- `WorldDefinition`: canon regions, locations, factions, species, items, rules.
- `WorldState`: date/time, weather, regional state, markets, ecology, events.
- `PlayerState`: realm, stage, Qi, HP, stamina, hunger, inventory, location, professions.
- `NpcDefinition`: immutable identity/personality baseline, role, home and schedule template.
- `NpcState`: location, needs, relationships, memories and schedule deviations.
- `AssetRecord`: stable key, category, prompt, provider/model, status, dimensions, hash, storage URI.
- `WorldEvent`: timestamped cause, affected entities and provenance.
- `EventLog`: append-only accepted state transitions.

## Simulation loop
1. Accept a typed player command.
2. Validate preconditions against current state.
3. Advance world time by canonical duration.
4. Run scheduled systems in stable order (needs, NPC routines, crops, market, ecology, events).
5. Resolve command using deterministic formulas.
6. Append event log and persist snapshot.
7. Request optional AI narrative/visual presentation from committed facts.
8. Render updated state.

## AI asset lifecycle
`requested → queued → generating → review → approved → cached`
- Generate from structured prompts derived from canon.
- Use stable keys such as `location.shenmu.qingling.village.day.clear.v1`.
- Reuse approved assets; do not regenerate on every scene visit.
- Record prompt, provider, model, seed where available, and content hash.
- Provide fallback placeholders when generation is unavailable.
- Do not let image generation invent canon-critical map geometry or named NPC identities.

## Security and reliability
- API keys are server-side only.
- Validate AI response schemas.
- Use seeded randomness for reproducible simulation tests and replay.
- Persist state transitions transactionally and log them.
- Rate-limit asynchronous asset generation.
- Version save migrations.
- World Bible imports are reproducible and never overwrite live saves.
