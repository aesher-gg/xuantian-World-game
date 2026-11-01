# 🩸 Xuantian World — Sistem Vitalitas (HP), Kelaparan (Bigu) & Pill Toxins

> **Modul:** 19 — Vitality & Hunger System
> **Prinsip:** Anti-Cheat Enforced — Spiritual Root HP Scaling — Fasting Multiplier — Pill Toxin Cleansing
> **Rujukan:** `00_CORE_RULES_AI_GM.md`, `13_SPIRITUAL_ROOT_SYSTEM.md`, `18_ECONOMY_SYSTEM.md`, `20_COMBAT_SYSTEM.md`, `44_WANDERING_PHYSICIAN_ASSOCIATION.md`, `INDEX.md`

---

## 0. Filosofi Sistem Vitalitas & Anti-Cheat

Di Xuantian World, daya tahan fisik (*Max HP*), kecepatan regenerasi raga, dan kebutuhan makanan (*Satiety*) ditentukan secara matematis berdasar **Ranah Kultivasi** dan **Elemen Akar Spiritual** karakter. Pemain DILARANG MENERIMA atau MENETAPKAN statistik HP dan regenerasi secara sepihak tanpa formula resmi.

```
===============================================================================
                       ATURAN EMAS ANTI-CHEAT VITALITAS
===============================================================================
 1. FIXED HP FORMULA: Max HP dihitung AI GM lewat formula resmi.
 2. LOGGED DAMAGE: Kerusakan raga dan healing dicatat bertimestamp resmi.
 3. BIGU/FASTING SCALING: Ranah Xuantian Jing ke atas kebal kelaparan (Inedia).
 4. PILL TOXINS ACCUMULATION: Pengonsumsian pil berlebih memicu racun Dantian.
 5. MEDICAL RESTORATION: Pemulihan Dantian retak hanya lewat Tabib Suci/Alkemis.
===============================================================================
```

---

## 1. Formula Matematika Max HP, Stamina & Regenerasi Alami

### 1.1 Formula HP Maksimal (Max HP Formula)

```
MaxHP = RealmBaseQiCap × StageMultiplier × 0.40 × SpiritualRootHPMultiplier × (1 + BodyFortificationBonus)
```

*Parameter StageMultiplier:*
* **Stage Awal (Early):** `1.0`
* **Stage Tengah (Mid):** `1.5`
* **Stage Puncak (Peak):** `2.0`

*Tabel Multiplier HP Elemen Akar Spiritual (SpiritualRootHPMultiplier):*
* **Akar Spiritual Kayu Abadi (Wood Root):** `× 1.50` *(Vitalitas alami & regenerasi sel tinggi)*
* **Akar Spiritual Tanah & Segel (Earth Root):** `× 1.40` *(Kepadatan raga & pertahanan kokoh)*
* **Akar Spiritual Air & Es (Water/Ice Root):** `× 1.20` *(Kelenturan jaringan otot & keheningan)*
* **Akar Spiritual Angin & Logam (Wind/Metal Root):** `× 1.00` *(Standar kecepatan & ketajaman)*
* **Akar Spiritual Api Purba (Fire Root):** `× 0.90` *(Daya ledak energi tinggi, raga lebih rentan)*

---

### 📐 Tabel Acuan Max HP Berdasarkan Ranah & Akar Spiritual (Stage Tengah)

| Ranah (Realm) | Base Qi Cap | Max HP (Fire - 0.9x) | Max HP (Wind/Metal - 1.0x) | Max HP (Water/Ice - 1.2x) | Max HP (Earth - 1.4x) | Max HP (Wood - 1.5x) |
|---|---|---|---|---|---|---|
| **Ranah 1 - Lingquan Jing** | 2.500 | 1.350 HP | 1.500 HP | 1.800 HP | 2.100 HP | **2.250 HP** |
| **Ranah 2 - Kaimai Jing** | 5.000 | 2.700 HP | 3.000 HP | 3.600 HP | 4.200 HP | **4.500 HP** |
| **Ranah 3 - Ningyuan Jing** | 25.000 | 13.500 HP | 15.000 HP | 18.000 HP | 21.000 HP | **22.500 HP** |
| **Ranah 4 - Lingyi Jing** | 125.000 | 67.500 HP | 75.000 HP | 90.000 HP | 105.000 HP | **112.500 HP** |
| **Ranah 5 - Xuantian Jing** | 125.000 | 67.500 HP | 75.000 HP | 90.000 HP | 105.000 HP | **112.500 HP** |
| **Ranah 6 - Tongtian Jing** | 625.000 | 337.500 HP | 375.000 HP | 450.000 HP | 525.000 HP | **562.500 HP** |
| **Ranah 7 - Faxiang Jing** | 3.125.000 | 1.687.500 HP | 1.875.000 HP | 2.250.000 HP | 2.625.000 HP | **2.812.500 HP** |
| **Ranah 8 - Shenhuang Jing**| 15.625.000| 8.437.500 HP | 9.375.000 HP | 11.250.000 HP| 13.125.000 HP| **14.062.500 HP**|

---

### 1.2 Formula Regenerasi HP Alami per Jam

```
HPRegenPerHour = MaxHP × 0.05 × RootRegenMultiplier × EnvironmentQiMultiplier
```
*(Akar Spiritual Kayu memberikan RootRegenMultiplier 1.5x, lingkungan Shenmu Zhou memberikan EnvironmentQiMultiplier 1.3x).*

---

## 2. Sistem Kelaparan & Puasa Kultivasi (Bigu / Inedia Mechanics)

Semakin tinggi Ranah Kultivasi seseorang, semakin sedikit kebutuhan makanan mortal karena tubuh dipenuhi oleh pasokan Qi Yuan murni.

### 2.1 Formula Penurunan Satiety (Tingkat Kelaparan)

```
SatietyDropPerHour = 10% / FastingMultiplier(realm)
```

| Index | Ranah Kultivasi (Realm) | FastingMultiplier | Waktu Sampai Kosong (0% Satiety) |
|---|---|---|---|
| 1 | **Lingquan Jing** | 2.0x | 20 Jam |
| 2 | **Kaimai Jing** | 7.2x | 3 Hari (72 Jam) |
| 3 | **Ningyuan Jing** | 33.6x | 14 Hari (336 Jam) |
| 4 | **Lingyi Jing** | 72.0x | 30 Hari (720 Jam) |
| **5–9**| **Xuantian Jing ke atas** | **Tak Terbatas (Inedia / Bigu)** | **Kebal Kelaparan (0% Drop)** |

### 2.2 Penalti Debuff Kelaparan
* **Satiety 26% – 100%:** Normal (Tanpa Debuff).
* **Satiety 11% – 25%:** Kelelahan Ringan (Stamina Regen -30%, Movement Speed -10%).
* **Satiety 1% – 10%:** Kelaparan Berat (Attack Power -25%, Qi Cost Skill +20%).
* **Satiety 0%:** Kelaparan Ekstrem (HP berkurang 5% MaxHP per jam sampai konsumsi makanan/pill atau pingsan).

---

## 3. Formula Racun Pil (Pill Toxins) & Pembersihan Dantian

Setiap kali mengonsumsi Pill Kultivasi atau Pill Penyembuh, residu bahan kimia obat (*Pill Toxins*) akan menumpuk di dalam Dantian.

### 3.1 Penumpukan & Debuff Pill Toxins

```
CurrentToxinPercent = Clamp(PreviousToxin + ConsumedPillToxin, 0%, 100%)
```

* **Toxin > 30%:** Kecepatan Regenerasi Qi Alami -30%.
* **Toxin > 60%:** Memicu *Qi Deviation* saat Breakthrough (-30% Breakthrough Chance, +20% Damage Tribulasi).
* **Toxin 100%:** Dantian Membeku (Karakter tidak dapat menyerap Qi dari batu spirit sampai Toxin dibersihkan).

### 3.2 Pembersihan Toxin Dantian
* **Pembersihan Alami:** `5% Toxin terbuang per 24 jam meditasi tanpa konsumsi pil`.
* **Pengobatan Tabib Suci:** Perhimpunan Tabib Pengembara (`44_WANDERING_PHYSICIAN_ASSOCIATION.md`) dan Perguruan Alkemis Es Beihan (`39_PERGURUAN_ALKEMIA_ES_BEIHAN.md`) dapat meracik ramuan pembersih Toxin instan.
