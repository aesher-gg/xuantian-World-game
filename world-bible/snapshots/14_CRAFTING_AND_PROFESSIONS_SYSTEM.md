# 🛠️ Xuantian World — Sistem Kerajinan, Profesi & Kerajinan Spiritual

> **Modul:** 14 — Crafting & Professions System
> **Prinsip:** Anti-Cheat Enforced — Material-Matching Tier Scaling — Verified Item Origin Logging
> **Rujukan silang:** `00_CORE_RULES_AI_GM.md` (aturan wajib GM), `13_SPIRITUAL_ROOT_SYSTEM.md` (Akar Spiritual & QiCap), `15_SPIRITUAL_HERB_FARMING_SYSTEM.md` (sistem berkebun spirit), `16_BEAST_TAMING_SYSTEM.md` (sistem penjinakan beast), `17_AIRSHIP_NAVIGATION_SYSTEM.md` (sistem kapal terbang), `18_ECONOMY_SYSTEM.md` (harga bahan & Item Origin Log), `19_VITALITY_HUNGER_SYSTEM.md` (Pill Toxin), `21_BESTIARY.md` (bahan beast), file regional `02`–`11` (kebun obat & sumber daya)

---

## 0. Filosofi Sistem Profesi & Kerajinan

Di Xuantian World, jalan profesi (Alkemis, Penjinak Beast, Petani Obat Spirit, Master Formasi, Penempa Besi Spirit, Master Jimat, dan Pilot Kapal Terbang) bukan sekadar pendukung narasi, melainkan **fondasi ekonomi dan pilar kultivasi**. Sama seperti Qi tunduk pada `QiCap` dan harga tunduk pada `FinalBuyPrice`, seluruh produk profesi dan keberhasilan proses pembuatan item **tunduk pada formula matematis tetap**.

**AI GM WAJIB menghitung hasil pembuatan item secara adil lewat formula di bawah ini — DILARANG menerima klaim keberhasilan sepihak dari player tanpa proses perhitungan dan konsumsi bahan yang sah.**

### Aturan Emas Anti-Cheat Profesi & Kerajinan
- **Hasil Tidak Boleh Dideklarasikan Sepihak:** Player **TIDAK BISA** menyatakan "aku berhasil membuat Pill Danwen 100%" atau "senjata tempaanku langsung Grade 8" tanpa roll probabilitas AI GM dan pemenuhan syarat resep/bahan.
- **Wajib Item Origin Log:** Setiap barang bernilai profesi (Tier 3+ atau Pill Purity 70%+) WAJIB mencatat **Item Origin Log** (pembuat, lokasi pembuatan, bahan yang dipakai, timestamp). Barang tanpa origin log tidak sah digunakan untuk breakthrough atau dijual di Rumah Lelang Wanbao.
- **Prinsip Keselarasan Tier (Tier Matching):** Pembuatan item Tier X memerlukan bahan baku minimal Tier X-1 hingga Tier X. Bahan berkualitas rendah tidak bisa dipaksa untuk menghasilkan item ber-grade tinggi.
- **Risiko Kegagalan Realistis:** Kegagalan proses alkimia, penempaan, atau penjinakan beast berisiko menghancurkan bahan baku, memicu ledakan kuali (damage HP), atau serangan balik dari Spirit Beast.
- **Skala Waktu Proses In-Game:** Pembuatan item atau proses retret profesi memakan waktu in-game nyata (`00_CORE_RULES_AI_GM.md` §1.8), bukan selesai dalam hitungan sekejap tanpa jeda waktu.

---

## 🌾 1. Sistem Pertanian & Berkebun Obat Spirit (Spiritual Herb Farming)

> **Modul Utama Terpisah:** `15_SPIRITUAL_HERB_FARMING_SYSTEM.md`

Sistem berkebun, grade tanah spirit, formula waktu tumbuh tanaman obat, serta daftar material kustom pertanian dari Shenmu Zhou dan Zhonghua Zhou diatur secara mendalam di **Modul 15 (`15_SPIRITUAL_HERB_FARMING_SYSTEM.md`)**.

---

## 🐾 2. Sistem Penjinakan & Pelatihan Beast (Beast Taming System)

> **Modul Utama Terpisah:** `16_BEAST_TAMING_SYSTEM.md`

Formula keberhasilan penjinakan beast, sistem kesetiaan (loyalty), pakan spirit, serta sertifikasi penjinak diatur secara spesifik di **Modul 16 (`16_BEAST_TAMING_SYSTEM.md`)** dan katalog **`21_BESTIARY.md`**.

---

## 🧪 3. Sistem Alkemis & Pemurnian Pill (Alchemy System)

Alkemis meracik tanaman obat spirit dan organ beast menjadi Pill Penyembuh, Pill Pemurni, dan Pill Breakthrough.

### 3.1 Formula Kemurnian Pill (Alchemy Purity Formula)

```
BasePurity = 50%
FlameQualityBonus = Mortal (0%) | Earth Qi (10%) | Natural Flame (20%) | Heavenly Flame (35%)
CauldronGradeBonus = CauldronTier × 5%
AlchemistSkillBonus = AlchemistLevel × 3%
DifficultyPenalty = (PillTier - AlchemistTier) × 15%
FinalPurity = Clamp(BasePurity + FlameQualityBonus + CauldronGradeBonus + AlchemistSkillBonus - DifficultyPenalty, 10%, 100%)
```

### 3.2 Tabel Efek Kemurnian & Toxin Dantian

| Purity Range | Category | Multiplier Efek Pill | Akumulasi Pill Toxin Dantian |
|---|---|---|---|
| **10% – 49%** | Failed / Defective | 30% Efek | **+20% Toxin** (Memicu Dantian Membeku) |
| **50% – 69%** | Low Purity | 70% Efek | **+10% Toxin** |
| **70% – 89%** | Mid Purity | 100% Efek | **+3% Toxin** |
| **90% – 99%** | High Purity | 130% Efek | **0% Toxin (Sangat Bersih)** |
| **100%** | Perfect Pill (Danwen) | **160% Efek + Permanent Stat** | **0% Toxin (Murni Sempurna)** |

*Risiko Ledakan Kuali (Cauldron Explosion):* Jika `FinalPurity < 20%`, kuali berisiko meledak memberikan Kerusakan Api `PillTier × 50 HP` pada Alkemis.

### 3.3 Sekte & Perguruan Alkimia Utama
- **Sekte Alkimia Danhuang** (`23_DANHUANG_ALCHEMIST_SECT.md`): Penguasa resep Pill Breakthrough di Chiyan Zhou.
- **Perguruan Alkimia Es Beihan** (`39_PERGURUAN_ALKEMIA_ES_BEIHAN.md`): Spesialis ramuan es pemulih dantian retak.

---

## 🛸 4. Sistem Kapal Terbang Lintas Wilayah (Tiankong Feichuan Airship)

> **Modul Utama Terpisah:** `17_AIRSHIP_NAVIGATION_SYSTEM.md`

Klasifikasi armada kapal terbang melayang, formula kecepatan penerbangan, konsumsi batu spirit fuel, dan navigasi badai diatur secara spesifik di **Modul 17 (`17_AIRSHIP_NAVIGATION_SYSTEM.md`)**.

---

## 🔮 5. Sistem Formasi, Penempaan Besi Spirit & Jimat

### 5.1 Formula Barrier HP Formasi (Array Barrier Formula)

```
BarrierHP = ArrayDiscBaseHP × (1 + ArrayMasterLevel × 0.15) × EnvironmentQiMultiplier
```
* **Perguruan Formasi Tiangong** (`36_PERGURUAN_FORMASI_TIANGONG.md`): Pusat pembuatan piringan formasi portabel.

### 5.2 Formula Durability & Damage Senjata Penempa (Forging Formula)

```
WeaponDamage = BaseWeaponDamage × (1 + BlacksmithLevel × 0.08) × (1 + MetalTier × 0.10)
SoulBindingBonus = +20% Damage saat digunakan pemilik sah.
```
* **Perguruan Penempa Besi Shendu** (`34_PERGURUAN_PENEMPA_SHENDU.md`): Pusat penempaan zirah dan senjata meteorit lava.

### 5.3 Formula Success Rate Inskripsi Jimat (Talisman Crafting)

```
TalismanSuccessChance = Clamp(60% + (TalismanMasterLevel - TalismanTier) × 10% + PaperQualityBonus, 10%, 95%)
```
* **Sekte Jimat Gurun Huangsha** (`35_PERGURUAN_JIMAT_HUANGSHA.md`): Pusat pembuatan jimat pelindung dan tinta darah beast.
