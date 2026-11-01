# Canonical operational data

The versioned domain catalog is a conservative extraction from the read-only World Bible. Formula functions require explicit inputs for every modifier not defined by a canonical default.

Coverage includes 10 region records, 9 cultivation realms, 3 stages, 5 root families, and core formulas for farming, taming, alchemy, arrays, forging, talismans, airships, economy, vitality and combat.

Review flags:
- The vitality module's MaxHP reference table uses Lingquan base QiCap 2,500, while the core cultivation table defines Lingquan early Qi as 100. The formula accepts realmBaseQiCap explicitly; do not reconcile this discrepancy silently.
- The combat module labels RealmIndex 1–9 and describes Realm 9 as Fei Sheng in one parameter note, while the core realm table names Realm 9 Hunyuan Jing.
- The successful source sync extracted all 200 herb rows and 344 beast records. Each record retains its module path, source blob SHA, source line/table and section context.
