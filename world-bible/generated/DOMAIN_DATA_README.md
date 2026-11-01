# Canonical operational data

This is a derived, versioned extraction from the read-only World Bible. Formula functions require explicit inputs for modifiers that the source does not define. Every operational rule carries a source module path, line and Git blob SHA.

## Coverage

- 10 official region records and their known locations
- 9 cultivation realms × 3 stages and 5 standard spiritual-root families
- 7 professions
- 200 herb records and 344 beast records, each with source provenance
- 37 extracted formula/source records
- Operational rules for cultivation, farming, taming/evolution, alchemy, arrays, forging, talismans, airships, economy, vitality, hunger, toxins, combat, loot and status effects

The source-traced operational layer is simulation-rules.json. src/domain/canonFormulas.mjs reads its numeric coefficients and exposes formula provenance through evaluateWithSource(). The simulation validates source commit and module SHAs before advancing time or applying farming/cultivation actions.

## Source discrepancies deliberately retained

1. **Root attack multipliers:** module 13 lists Fire ×1.6, Wind/Metal ×1.4 and Water/Ice ×1.1; module 20's combat table lists ×1.4, ×1.25 and ×1.0. Combat actions currently use the combat-specific module 20 table; the discrepancy remains visible.
2. **Earth defense multiplier:** module 13 lists ×1.6; module 20 lists ×1.5. Combat uses module 20's combat-specific value.
3. **Wind/Metal critical bonus:** module 13 says +20%; module 20 says +5%. Combat uses module 20's combat-specific value.
4. **Realm 9 name:** modules 00 and 13 define Realm 9 as Hunyuan Jing and Fei Sheng as ascension after it; a parameter note in module 20 calls Realm 9 Fei Sheng. The indexed nine-realm table remains authoritative for realm indices.
5. **Vitality HP reference table:** module 19's stage-middle HP lookup table gives Lingquan a Qi value of 2,500, while modules 00 and 13 define Lingquan middle QiCap as 150. Runtime MaxHP uses the explicit module 19 formula with the indexed realm Qi table; the conflicting lookup table is not used.
6. **Economy faction-affinity discount:** module 18's written equation multiplies FactionAffinityBonus by 0.05, but its worked example says a +10% affinity bonus subtracts 0.10. The engine applies the written equation to the raw numeric input; it does not silently convert a percentage representation.
7. **Pill-toxin stacking:** module 13's Qi regeneration formula applies a continuous (1 - PillToxinPercent) factor; module 19 separately describes a -30% regeneration threshold above 30% toxin without specifying whether it stacks. The engine exposes both the direct formula factor and threshold status, but does not apply an extra penalty automatically.

These conflicts are not silently fixed. The CI validator checks that the source snapshots, domain catalog and operational rules all refer to the same canonical commit and module SHAs. A source update that changes relevant modules blocks the build until the derived mappings are reviewed and refreshed.

## Prototype-only fallback

The starter herb is Qi Cleansing Grass. Its official base-yield range is 2–5; until a canon-approved seeded roll distribution is defined, the prototype uses the documented lower bound (2) rather than inventing a probability distribution. Harvests enter inventory; no automatic sale or currency is fabricated.
