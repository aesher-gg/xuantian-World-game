# World Bible Import Pipeline

## Source of truth
The World Bible remains at https://github.com/aesher-gg/Xuantian-World. The game repository stores derived, versioned data; it does not replace or edit the canon source.

## Import stages
1. Read `INDEX.md` and build a manifest of module paths.
2. Fetch source Markdown without modifying it.
3. Preserve source snapshots under a versioned `world-bible/source/` directory (later phase).
4. Parse known structures into typed JSON records.
5. Validate references, duplicate IDs, missing fields and formula consistency.
6. Store provenance: repository, branch, path, blob SHA and import timestamp.
7. Produce a report of ambiguities; never silently guess canon.

## Initial domain mapping
| World Bible module | Game domain |
|---|---|
| 01–11 | regions, locations, travel graph, local environment |
| 12, 22–45 | organizations, sects, academies, NPC affiliations |
| 13, 47 | spiritual roots, cultivation realms, breakthrough rules |
| 14 | crafting, professions, recipes |
| 15 | herbs, soils, crop growth and harvest |
| 16, 21 | beast species, taming, ecology |
| 17 | airship routes, capacity, fuel and travel |
| 18 | currencies, base values, price formula |
| 19 | HP, hunger, vitality and toxins |
| 20 | turn-based combat |
| 46 | world events |
| 48–50 | custom sects, techniques, special items |
| players/ | read-only character templates, never live saves |

## Data contract
```ts
export interface CanonRecord<T> {
  id: string
  kind: string
  canonVersion: string
  sourceRepo: 'aesher-gg/Xuantian-World'
  sourcePath: string
  sourceBlobSha: string
  data: T
}
```

## Canon policy
- Source wording and source files are preserved.
- Parsed JSON is a derived representation, not a replacement.
- Runtime balance changes belong in explicit override files with rationale.
- Contradictions are reported as import warnings for human resolution.
- Player save state is stored separately from character templates.
