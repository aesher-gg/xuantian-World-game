# ⚔️ Xuantian World — Sistem Pertempuran Turn-Based & Formula Combat

> **Modul:** 20 — Combat System
> **Prinsip:** Anti-Cheat Enforced — Strict Turn-Based — Root-Integrated Combat Math
> **Rujukan:** `00_CORE_RULES_AI_GM.md`, `13_SPIRITUAL_ROOT_SYSTEM.md`, `14_CRAFTING_AND_PROFESSIONS_SYSTEM.md`, `19_VITALITY_HUNGER_SYSTEM.md`, `21_BESTIARY.md`, `INDEX.md`

---

## 0. Filosofi Sistem Pertempuran & Anti-Cheat

Pertarungan di Xuantian World berlangsung secara **Strict Turn-Based** yang adil bagi **SEMUA** pihak — player, NPC, maupun Spirit Beast. Setiap pihak yang terlibat pertarungan memiliki hak giliran yang sama, dan tidak ada pihak yang dapat "menyerang beruntun tanpa henti" sementara pihak lain dipaksa pasif.

```
===============================================================================
                       ATURAN EMAS ANTI-CHEAT PERTEMPURAN
===============================================================================
 1. STRICT TURN ORDER: Giliran bertindak ditentukan oleh Initiative Score.
 2. ACTION LIMIT: 1 Giliran = 1 Aksi Utama + 1 Aksi Kecil + 1 Aksi Gerak.
 3. NO NARRATIVE OVERPOWER: Deskripsi naratif tidak bisa mengubah hitungan damage.
 4. AI GM ENFORCED DAMAGE: Semua damage dan status effect dihitung resmi AI GM.
 5. LOGGED COMBAT: Seluruh log serangan dan sisa HP/Qi dicatat bertimestamp.
===============================================================================
```

---

## 1. Alur Pertempuran & Formula Inisiatif (Turn Initiative)

### 1.1 Formula Inisiatif (Initiative Score)

```
InitiativeScore = (RealmIndex × 100) + StageBonus + RootSpeedBonus + EquipmentSpeedBonus + Random(1–20)
```

*Parameter Formula:*
* **RealmIndex:** 1–9 *(Ranah 1 = Lingquan s/d Ranah 9 = Fei Sheng)*.
* **StageBonus:** Stage Awal = `0`, Stage Tengah = `10`, Stage Puncak = `20`.
* **RootSpeedBonus:** Akar Spiritual Angin/Logam = `+15`, Akar Spiritual lainnya = `+0`.
* **Random(1–20):** Lemparan dadu virtual AI GM.

*Karakter/Musuh dengan `InitiativeScore` tertinggi bertindak lebih dahulu.*

---

### 1.2 Struktur Aksi per Giliran (Turn Action Allocation)

* **1 Aksi Utama (Main Action):** Menggunakan Teknik Senjata, Serangan Mantra Elemen, Melempar Talisman Combat, Memasang Formasi Portabel, atau Memerintahkan Spirit Beast.
* **1 Aksi Kecil (Bonus Action):** Mengonsumsi Pill Penyembuh, Memasang/Mengganti Equipment (1 item), Mengaktifkan Barrier Formasi.
* **1 Aksi Gerak (Movement Action):** Mendekat atau menjauh dari target (Jarak Maksimal = 20 li / Turn di darat atau 40 li / Turn di udara).

---

## 2. Formula Matematika Damage, Defense, Hit Chance & Critical

### 2.1 Formula Attack Power (AP)

```
AttackPower = CharacterQiCap × 0.15 × SpiritualRootAttackMultiplier × WeaponMultiplier × (1 + WeaponSoulBindingBonus)
```

*Tabel Multiplier Attack Power:*
* **Akar Spiritual Api Purba (Fire Root):** `× 1.40` *(Daya ledak serangan tertinggi)*
* **Akar Spiritual Angin & Logam (Wind/Metal Root):** `× 1.25` *(Ketajaman tebasan & penetrasi)*
* **Akar Spiritual Kayu Abadi (Wood Root):** `× 1.00` *(Standar serangan)*
* **Akar Spiritual Air & Es (Water/Ice Root):** `× 1.00` *(Standar serangan)*
* **Akar Spiritual Tanah & Segel (Earth Root):** `× 0.90` *(Fokus pada pertahanan)*

*WeaponMultiplier:* Tier 1 (1.1x) | Tier 2 (1.25x) | Tier 3 (1.40x) | Tier 4 (1.60x) | Tier 5+ (2.0x+)

---

### 2.2 Formula Passive Defense (PD)

```
PassiveDefense = CharacterQiCap × 0.05 × SpiritualRootDefenseMultiplier + ArmorDefenseRating
```

*Tabel Multiplier Passive Defense:*
* **Akar Spiritual Tanah & Segel (Earth Root):** `× 1.50` *(Kepadatan perisai raga tertinggi)*
* **Akar Spiritual Kayu / Air / Es:** `× 1.20`
* **Akar Spiritual Angin / Logam / Api:** `× 1.00`

---

### 2.3 Formula Hit Chance & Dodge

```
BaseHit = 70%
RealmAdvantage = (AttackerRealmIndex - DefenderRealmIndex) × 5%
FinalHitChance = Clamp(BaseHit + RealmAdvantage - DodgePenalty + AccuracyBonus, 10%, 95%)
```

---

### 2.4 Formula Critical Hit & Final Damage

```
CritChance = 5% + (AttackerDexterity × 0.5%) + WindMetalRootBonus (5%)
IsCrit = 1.50 jika Dadu Crit Berhasil, sebaliknya 1.00
FinalDamage = Max(1, ((AttackPower × SkillMultiplier) - PassiveDefense) × IsCrit)
```

#### 📐 Contoh Perhitungan Pertempuran Worked-Out:
*Pendekar Ranah Ningyuan Jing Stage Tengah (Fire Root, Qi Cap 25.000, AP = 5.250)* menyerang *Serigala Raja Spirit (PD = 1.250)* menggunakan teknik *Tebasan Api Merah (SkillMultiplier 1.5x)* dan menghasilkan Critical Hit (1.5x):
```
AttackPower × SkillMultiplier = 5.250 × 1.5 = 7.875
Net Damage = 7.875 - 1.250 = 6.625
FinalDamage = 6.625 × 1.5 (Crit) = 9.937 HP Damage!
```

---

## 3. Efek Status & Debuff Pertempuran (Status Effects)

| Status Debuff | Efek Mekanik Pertempuran | Durasi Standar | Cara Menetralkan |
|---|---|---|---|
| **Burn (Terbakar)** | Menerima Fire Damage kontinyu sebesar 5% Max HP per turn | 3 Turn | Mantra Air / Pill Antidot / Salep Es |
| **Freeze (Membeku)** | Tidak dapat melakukan Aksi Gerak & Evasion berkurang menjadi 0% | 1 Turn | Sihir Api / Ramuan Penyejuk Dantian |
| **Poison (Teracuni)** | Menerima Poison Damage kontinyu & Regenerasi Qi -50% | 3 Turn | Antidot Rawa / Sihir Kayu Shenmu |
| **Stun (Terpesona/Terhempas)**| Karakter kehilangan Aksi Utama & Aksi Kecil pada giliran tersebut | 1 Turn | Imunitas Lonceng Emas / Segel Hukum |
| **Bleeding (Pendarahan)** | HP berkurang 3% Max HP setiap kali melakukan Aksi Gerak | 2 Turn | Perban Herbal / Akupunktur Jarum Emas |
| **Qi Drain (Penyedotan Qi)**| Menguras 10% Current Qi karakter dan mengonversinya ke penyerang | Instant | Pill Energi Qi / Segel Dantian |

---

## 4. Integrasi Aksi Profesi dalam Pertempuran

Karakter yang memiliki lisensi profesi resmi (`14_CRAFTING_AND_PROFESSIONS_SYSTEM.md`) dapat menggunakan aksi profesi khusus saat bertarung:

* **Alkemis (Pill Bomb & Poison Gas):**
  `PillBombDamage = AlchemistLevel × 50 + FireFlameBonus` *(Mengabaikan 30% Passive Defense musuh).*
* **Penjinak Beast (Spirit Beast Companion Action):**
  Spirit Beast bertindak dengan Inisiatif sendiri dan melakukan serangan `AttackPower = BeastBaseQiCap × 0.12`.
* **Pembuat Formasi (Array Disc Barrier):**
  Memasang piringan formasi portabel yang menciptakan perisai `BarrierHP = ArrayDiscBaseHP × (1 + ArrayMasterLevel × 0.15)`.
* **Pembuat Jimat (Combat Talisman Throw):**
  Melempar jimat pertempuran instan `TalismanElementalDamage = TalismanTier × 100` *(Konsumsi Qi = 0).*
* **Penempa Bintang (Armor Breaker Strike):**
  Tebasan khusus penempa yang menghancurkan 40% Armor Defense Rating musuh selama 2 turn.
