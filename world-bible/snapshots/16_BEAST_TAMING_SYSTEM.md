# 🐾 Xuantian World — Sistem Penjinakan, Evolusi & Pengembangbiakan Spirit Beast

> **Modul:** 16 — Beast Taming & Evolution System
> **Prinsip:** Anti-Cheat Enforced — Bloodline Resonance — Multi-Branch Evolution — Verified Beast Registry
> **Rujukan silang:** `00_CORE_RULES_AI_GM.md` (aturan wajib GM), `12_CROSS_REGION_ORGANIZATIONS.md` (Serikat Penjinak Beast), `13_SPIRITUAL_ROOT_SYSTEM.md` (Akar Spiritual & QiCap), `14_CRAFTING_AND_PROFESSIONS_SYSTEM.md` (profesi & kuali pemurni pakan), `15_SPIRITUAL_HERB_FARMING_SYSTEM.md` (bahan pakan & rumput spirit), `18_ECONOMY_SYSTEM.md` (harga & lisensi jimat), `20_COMBAT_SYSTEM.md` (combat stats & aksi kombinasi), `21_BESTIARY.md` (katalog beast komprehensif), `33_PERGURUAN_BEAST_QINGLING.md` (perguruan penjinak utama)

---

## 0. Filosofi Sistem Penjinakan & Evolusi Beast

Di Benua Xuantian, Spirit Beast (*Ling Shou* / 灵兽) bukanlah sekadar hewan liar atau alat angkut, melainkan **wujud nyata hukum alam yang memadat**. Menurut *Kitab Perjanjian Kuno Qingling*, manusia dan beast berbagi asal-usul yang sama dari hembusan nafas Dewa Primordial Hunyuan puluhan juta tahun silam. Sementara manusia memadatkan Qi di Dantian mereka, Spirit Beast menyerap esensi langit dan bumi langsung ke dalam sumsum tulang, tanduk, taring, dan inti jiwa (*Neidan* / 内丹).

Jalan Penjinak Beast (*Yushoushi* / 御兽师) adalah seni menyelaraskan jiwa, memahami bahasa naluri hewani, dan membimbing Spirit Beast menembus belenggu genetik menuju wujud **Beast Mitos & Naga Langit**.

```
===============================================================================
                       ATURAN EMAS ANTI-CHEAT PENJINAKAN
===============================================================================
 1. NO INSTANT TAMING: Dilarang mengklaim beast liar langsung jinak tanpa roll.
 2. BLOODLINE PURITY LIMIT: Beast tidak bisa berevolusi melompati 2 tier sekaligus.
 3. TRIBULATION REQUIREMENT: Evolusi ke Tier 6+ WAJIB menghadapi Tribulasi Petir.
 4. PERSISTENT LOYALTY & HUNGER: Status lapar dan kesetiaan tercatat berkelanjutan.
 5. BEAST REGISTRY ORIGIN: Beast Tier 3+ wajib tercatat di Registry resmi AI GM.
===============================================================================
```

---

## 1. Tiga Hukum Perjanjian Jiwa (The Three Soul Pacts)

Seorang Penjinak Beast wajib memilih jenis kontrak batin sebelum mengikat Spirit Beast:

| Jenis Kontrak | Nama Resmi | Biaya Jiwa / Syarat | Karakteristik & Efek Statistik | Risiko Kegagalan / Kematian |
|---|---|---|---|---|
| **1. Kontrak Kesetaraan (Equal Blood Pact)** | *Pingdeng Xiyue* (平等契约) | Setetes darah murni kultivator + persetujuan sukarela beast | Berbagi 15% persepsi batin; Beast bertarung dengan inisiatif bebas; Sinergi Serangan Kombinasi **+20% Damage**. | Jika beast mati, kultivator mengalami trauma mental ringan (Debuff Qi -10% selama 7 hari). |
| **2. Kontrak Tuan-Hamba (Master-Servant Pact)** | *Zhupu Xiyue* (主仆契约) | Jimat Segel Penjinak resmi + roll penaklukan paksa | Tuan memiliki kontrol mutlak; Beast dipaksa mematuhi perintah meski terluka parah; Loyalty rentan turun cepat. | Jika tuan mati, beast bebas seketika atau mengamuk; jika beast mati, tuan tidak terkena dampak jiwa. |
| **3. Kontrak Jiwa Simbiosis (Symbiotic Life Pact)** | *Benming Xiyue* (本命契约) | Ritual Khusus Qingling + Penyuntikan Inti Jiwa | Tuan dan Beast berbagi HP pool (30%); Stat Pertahanan & Serangan menyatu; Beast dapat dipanggil instan dari Dantian. | **Kematian bersama:** Jika salah satu gugur, pihak lainnya terluka parah permanen atau gugur seketika. |

---

## 2. Mekanisme Penjinakan & Formula Roll Resmi

### 2.1 Formula Keberhasilan Penjinakan (Taming Chance Formula)

```
BaseChance = 30%
RealmDiffBonus = (CharacterRealmIndex - BeastRealmIndex) × 10%
HPDepletionBonus = (100% - BeastCurrentHP_Percent) × 0.40
SealTierBonus = SealTier × 10%
BaitBonus = 15% (jika menggunakan Pakan Herbal Kesukaan Beast)
WildnessPenalty = BeastTier × 5%
TamingSuccessChance = Clamp(BaseChance + RealmDiffBonus + HPDepletionBonus + SealTierBonus + BaitBonus - WildnessPenalty, 5%, 95%)
```

#### 📐 Contoh Perhitungan Worked-Out (Menjinakkan Serigala Es Tier 3):
Kultivator Ranah *Ningyuan Jing* (Realm 3) mencoba menjinakkan Serigala Es Abadi (*Tier 3*, sisa HP 30%) menggunakan Jimat Segel Tier 3 dan Pakan Daging Berbumbu Es:
```
RealmDiffBonus = (3 - 3) × 10% = 0%
HPDepletionBonus = (100% - 30%) × 0.40 = 70% × 0.40 = +28%
SealTierBonus = 3 × 10% = +30%
BaitBonus = +15%
WildnessPenalty = 3 × 5% = -15%
TamingSuccessChance = 30% + 0% + 28% + 30% + 15% - 15% = 88%.
```
*Roll AI GM (1d100):* Jika hasil $\le 88$, penjinakan berhasil; jika $> 88$, serigala menyerang balik (*Beast Backlash*).

---

## 3. Sistem Kesetiaan, Kelaparan & Perawatan Harian

Spirit Beast membutuhkan pakan teratur untuk menjaga kestabilan energi Qi dan tingkat loyalitas:

### 3.1 Skala Loyalty & Pengaruh Tempur
```
LoyaltyGainPerFeeding = 5 + (AlchemistPillQuality × 2)
LoyaltyLossInBattleDefeat = 15 Points
LoyaltyLossStarvationDay = 10 Points / hari
```

| Tingkat Loyalty | Status Sikap | Efek Tempur & Perilaku |
|---|---|---|
| **90 – 100** | Sahabat Sejati (*Absolute Devotion*) | Bonus Attack & Defense **+15%**; Siap menjadi tameng pengorbanan saat tuan diserang fatal. |
| **70 – 89** | Sangat Setia (*Loyal Guardian*) | Bonus Attack & Defense **+10%**; Mematuhi semua taktik tempur tanpa ragu. |
| **31 – 69** | Normal / Jinak Biasa (*Tamed*) | Statistik tempur standar (100%); Berpeluang mundur jika HP tersisa $< 15\%$. |
| **11 – 30** | Ragu & Ketakutan (*Distrustful*) | 30% peluang menolak menyerang; Diskon kecepatan gerak -20%. |
| **0 – 10** | Membangkang (*Rebellious*) | **Berisiko kabur atau menyerang balik tuannya** saat diperintahkan bertarung! |

---

## 4. Sistem Evolusi & Pemurnian Garis Darah (Bloodline Evolution System)

Setiap Spirit Beast membawa benih garis darah purba (*Ancestral Bloodline Seed*). Dengan asupan pil pemurni darah, katalis elemen, dan penempaan pertempuran, beast dapat menembus batas spesiesnya menuju wujud yang lebih agung.

### 4.1 Tingkat Kemurnian Darah (Bloodline Purity Tiers)
1. **Darah Biasa (Common Bloodline - 0% s/d 29%):** Bentuk binatang liar biasa ber-Qi tipis.
2. **Darah Spirit Murni (Refined Spirit Bloodline - 30% s/d 59%):** Bentuk Spirit Beast sejati, mampu memuntahkan elemen murni.
3. **Darah Bangsawan Kuno (Ancient Royal Bloodline - 60% s/d 89%):** Tubuh membesar, muncul tanduk/sisik kristal, menguasai domain aura mini.
4. **Darah Primordial Mitos (Primordial Mythic Bloodline - 90% s/d 100%):** Garis keturunan langsung binatang suci (Qilin, Fenghuang, True Dragon, Baihu, Xuanwu).

---

### 4.2 Formula Peluang Keberhasilan Evolusi (Evolution Success Formula)

```
BaseEvolutionChance = 40%
BloodlinePurityBonus = (CurrentBloodlinePurity_Percent) × 0.30
EvolutionPillQualityBonus = PillPurityGrade (Low: +5% | Mid: +15% | High: +25% | Perfect: +35%)
ElementalCatalystBonus = +15% (jika menggunakan material katalis Grade sesuai)
TierJumpPenalty = (TargetTier - CurrentTier) × 25%
FinalEvolutionChance = Clamp(BaseEvolutionChance + BloodlinePurityBonus + EvolutionPillQualityBonus + ElementalCatalystBonus - TierJumpPenalty, 5%, 90%)
```

> **Risiko Kegagalan Evolusi:**
> - Jika gagal dengan selisih $\le 15\%$: Beast mempertahankan wujud lama, bahan baku hangus, Beast terluka selama 3 hari.
> - Jika gagal fatal (selisih $> 30\%$): Inti Neidan retak (*Qi Deviation*), darah turun 1 tingkat, membutuhkan *Pil Pemulih Jiwa Beast* untuk penyembuhan.

---

### 4.3 Jalur Percabangan Evolusi Spesies Populer (Evolutionary Branches)

Berikut adalah bagan jalur evolusi resmi yang diakui oleh *Perguruan Penjinak Beast Qingling*:

```
[Ular Rumput Hijau (Tier 1)]
   ├── [Jalur Racun] ──> [Ular Belati Berbisa (Tier 2)] ──> [Python Bayangan Rawa (Tier 4)] ──> [Ular Sembilan Kepala Youming (Tier 6)]
   └── [Jalur Naga]  ──> [Ular Tanduk Giok (Tier 2)]    ──> [Jiaolong Sisik Biru (Tier 4)]    ──> [Shenlong Langit Mengaum (Tier 7)]

[Serigala Abu-Abu (Tier 1)]
   ├── [Jalur Es]    ──> [Serigala Es Lembah (Tier 2)]  ──> [Serigala Es Bertaring Pedang (Tier 4)] ──> [Serigala Penelan Bulan Hanbing (Tier 6)]
   └── [Jalur Angin] ──> [Serigala Angin Cepat (Tier 2)]──> [Serigala Sayap Badai (Tier 4)]       ──> [Serigala Badai Langit Canglong (Tier 6)]

[Burung Pipit Gunung (Tier 1)]
   ├── [Jalur Api]   ──> [Burung Api Lembah (Tier 2)]   ──> [Rajawali Sayap Magma (Tier 4)]   ──> [Burung Fenghuang Nirwana (Tier 7)]
   └── [Jalur Petir] ──> [Elang Bulu Kilat (Tier 2)]    ──> [Elang Petir Tribulasi (Tier 4)]  ──> [Garuda Guntur Pemecah Awan (Tier 7)]

[Kera Hutan Biasa (Tier 1)]
   └── [Jalur Tubuh Besi] ──> [Kera Bertangan Batu (Tier 2)] ──> [Gorila Gunung Tinju Emas (Tier 4)] ──> [Kera Purba Penghancur Langit (Tier 7)]
```

---

## 5. Resep Pakan Spirit, Katalis & Jamu Penguat Beast

Nutrisi harian dan katalis evolusi diolah oleh Alkemis dan Herbalis menggunakan bahan dari `15_SPIRITUAL_HERB_FARMING_SYSTEM.md`:

| Nama Pakan / Katalis | Tier | Bahan Utama | Efek Konsumsi / Khasiat | Harga Pasar |
|---|---|---|---|---|
| **Pil Pakan Rumput Embun** | Tier 1 | Rumput Penjernih Qi + Akar Wangi | Memulihkan 30 Satiety Beast & menambah +5 Loyalty | 80 Tael Tembaga (CT) |
| **Daging Olahan Serigala Es** | Tier 2 | Daging Beast Tier 2 + Daun Mint Es | Mempercepat pemulihan HP beast elemen es +20% | 15 Tael Perak (ST) |
| **Pil Pemurni Darah Beast Rendah** | Tier 3 | Serat Urat Giok + Neidan Beast Tier 3 | Meningkatkan Kemurnian Garis Darah +10% (Batas Tier 3) | 35 Tael Giok (JT) / 3.5 LSS |
| **Ekstrak Kristal Magma Cair** | Tier 4 | Buah Kristal Api Lava + Batubara Vulkanik | Katalis wajib evolusi beast elemen api menuju Tier 4 | 180 LSS |
| **Pil Terobos Inti Naga Purba** | Tier 5 | Ginseng Spirit 1.000 Tahun + Neidan Jiaolong | Memicu evolusi ular/kadal spirit menjadi spesies berkepala naga | 8 MSS |
| **Air Embun Mata Air Wanling** | Tier 6 | Buah Giok Leluhur + Embun Giok Purba | Menghilangkan status racun dan debuff kutukan pada beast seketika | 35 MSS |

---

## 6. Jenjang Lisensi Profesi Penjinak & Organisasi Resmi

Serikat Penjinak Beast Xuantian (`12_CROSS_REGION_ORGANIZATIONS.md`) mengeluarkan lisensi resmi berdasar kemampuan kontrol batin:

- **Penjinak Magang (Tier 1–2):** Menguasai dasar tali jimat; kapasitas memelihara: **1 Spirit Beast**.
- **Penjinak Terdaftar (Tier 3–4):** Mampu mengikat Kontrak Kesetaraan; kapasitas memelihara: **2 Spirit Beast**.
- **Master Penjinak Senior (Tier 5–6):** Menguasai teknik peleburan serangan gabungan (*Beast Synergy Strike*); kapasitas: **3 Spirit Beast**.
- **Grandmaster Beast Sovereign (Tier 7–9):** Mampu mengendalikan kawanan beast liar dan menunggangi Naga/Qilin purba; kapasitas: **5 Spirit Beast**.
