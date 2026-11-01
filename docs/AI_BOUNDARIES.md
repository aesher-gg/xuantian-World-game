# AI Boundaries and World Identity

## What the AI is

Xuantian Intelligence is an in-world intelligence layer: it can give NPCs a distinctive voice, generate optional art assets, summarize events, and propose bounded actions for non-player characters. It is not a narrator with unrestricted authority and not a substitute for the game engine.

## What AI may do

- Generate dialogue from an NPC's known identity, current location, relationships, memories and available knowledge.
- Suggest an NPC goal or one candidate action from an explicit legal-action list.
- Propose ambient events that are checked against region rules, schedules, time and world state.
- Generate portraits, environment art, spirit beasts, plants, equipment and UI illustrations from canon-grounded prompts.
- Produce descriptive summaries of events already committed by the simulation.

## What AI may never do directly

- Set or increase player/NPC Qi, realm, HP, currency, inventory or equipment.
- Decide hit chance, initiative, damage, death, breakthrough or crafting success.
- Teleport characters, bypass travel time, skip required costs or ignore cooldowns.
- Invent a canon faction, named location, species, technique or item as established fact.
- Write directly to save files or canonical World Bible files.

## Validated action pipeline

`AI proposal → JSON schema validation → identity/knowledge validation → legal-action validation → deterministic simulation → committed event log → optional AI narration`

If any validation fails, reject the proposal and use a deterministic fallback. AI provider failure must never stop the world simulation.

## NPC memory

NPC memory is a structured record, not an unrestricted prompt transcript. Each memory entry should contain:
- timestamp and location;
- event/entity references;
- what the NPC directly observed versus heard from another source;
- confidence and emotional significance;
- retention/decay policy.

NPCs must not know private player state or distant events unless an in-world information path exists.

## Visual generation and asset identity

Every generated asset receives a stable key and provenance metadata. The asset registry stores provider/model, prompt version, seed when available, dimensions, hash, review status and storage URI. Approved assets are cached and reused. Regeneration requires an explicit version change or asset-review request.

## Principle

**AI makes the world expressive. Simulation makes the world true.**
