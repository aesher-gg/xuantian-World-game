# 💰 Xuantian World — Sistem Ekonomi, Perdagangan & Valuation

> **Modul:** 18 — Economy System
> **Prinsip:** Anti-Cheat Enforced — Dynamic Supply-Demand — Item Origin Logging — Fixed Math Valuation
> **Rujukan:** `00_CORE_RULES_AI_GM.md`, `12_CROSS_REGION_ORGANIZATIONS.md`, `14_CRAFTING_AND_PROFESSIONS_SYSTEM.md`, `42_PERGURUAN_DAGANG_JIUZHOU.md`, `45_SERIKAT_YOUXIA_SANXIU.md`, `INDEX.md`

---

## 0. Filosofi Sistem Ekonomi & Anti-Cheat Valuation

Sama seperti konsentrasi Qi tunduk pada `QiCap` formula (`13_SPIRITUAL_ROOT_SYSTEM.md`), setiap nilai komoditas, barang, artefak, dan jasa di Xuantian World tunduk pada **Formula Harga Dasar** yang tetap. AI GM WAJIB menghitung seluruh harga jual-beli melalui formula di bawah ini dan DILARANG MENERIMA klaim harga sepihak dari pemain tanpa dasar perhitungan matematis.

```
===============================================================================
                       ATURAN EMAS ANTI-CHEAT EKONOMI
===============================================================================
 1. NO ARBITRARY PRICE: Harga tidak boleh ditebak atau disepakati sepihak.
 2. ITEM ORIGIN LOG REQUIRED: Barang Tier 3+ WAJIB memiliki Origin Log.
 3. BARTER HARD CAP: Tawar-menawar dibatasi maksimal ±15% dari harga formula.
 4. SCARCITY MODIFIER: Fluktuasi wilayah dibatasi multiplier 0,5× s/d 2,5×.
 5. TIMESTAMPED TRANSACTION: Seluruh transaksi dicatat bertimestamp resmi.
===============================================================================
```

---

## 1. Mata Uang Resmi & Formula Konversi Benua

Transaksi di Xuantian World membedakan sirkulasi mata uang fana (*Mortal Currency*), mata uang transisi komoditas ber-Qi (*Jade Tael*), dan batu spirit kultivator (*Spiritual Stones*):

### 1.1 Mata Uang Fana (Mortal Currency)
* **Tael Tembaga (Copper Tael - CT):** Unit terkecil untuk kebutuhan harian mortal.
* **Tael Perak (Silver Tael - ST):** `1 ST = 100 CT`

### 1.2 Mata Uang Transisi Fana & Kultivator (Spiritual Commodity Currency)
* **Tael Giok (Jade Tael - JT):** `1 JT = 100 ST = 10.000 CT`
  *Mata uang perantara yang digunakan oleh kalangan fana kaya, pedagang besar, dan kultivator saat bertransaksi untuk bahan herbal, benih, komoditas kerajinan, atau benda yang memiliki energi spiritual/Qi ringan.*

### 1.3 Batu Spirit Kultivator (Spiritual Stones)
* **Batu Spirit Kualitas Rendah (Low-Grade Spirit Stone - LSS):** `1 LSS = 10 JT = 1.000 ST = 100.000 CT`
* **Batu Spirit Kualitas Sedang (Mid-Grade Spirit Stone - MSS):** `1 MSS = 100 LSS`
* **Batu Spirit Kualitas Tinggi (High-Grade Spirit Stone - HSS):** `1 HSS = 100 MSS = 10.000 LSS`
* **Batu Spirit Purba (Ancient Spirit Stone - ASS):** `1 ASS = 100 HSS = 10.000 MSS = 1.000.000 LSS`

---

## 2. Formula Matematika Ekonomi & Perdagangan

### 2.1 Formula Harga Pembelian Dinamis (Dynamic Buying Price)

```
FinalBuyPrice = ItemBaseValue × DiscountModifier × RegionScarcityMultiplier
```

*Parameter Formula:*
* **ItemBaseValue:** Nilai acuan standar barang berdasarkan Grade/Tier.
* **DiscountModifier:** `1.0 - (BarterSkillLevel × 0.03) - (FactionAffinityBonus × 0.05)` *(Maksimal diskon 30% / Modifier minimal 0.70).*
* **RegionScarcityMultiplier:** Indeks kelangkaan wilayah (0.5× untuk wilayah asal produsen, 1.0× wilayah normal, 1.5× s/d 2.5× wilayah terisolasi/gurun/zona terlarang).

#### 📐 Contoh Perhitungan Worked-Out (Buying Lotus Es):
Seorang kultivator membeli *Lotus Es Abadi Grade 4* (Base: 20 LSS) di *Shenmu Zhou* (Scarcity 1.5x) dengan Skill Barter Level 3 (0.09) dan Affinity Faksi +10% (0.10):
```
DiscountModifier = 1.0 - 0.09 - 0.10 = 0.81
FinalBuyPrice = 20 LSS × 0.81 × 1.5 = 24.3 LSS (Dibulatkan: 24 LSS + 3 JT).
```

---

### 2.2 Formula Penjualan Barang / Loot Player (Player Selling Price)

```
PlayerSellValue = ItemBaseValue × 0.50 × (1 + (BarterSkillLevel × 0.05))
```
*(Maksimal harga jual player ke NPC / Tokoh Guild = 80% dari ItemBaseValue).*

---

### 2.3 Formula Pajak Komisi Lelang Wanbao & Guild

```
AuctionCommission = FinalBidAmount × (0.10 - (YouxiaRankBonus × 0.01))
SellerPayout = FinalBidAmount - AuctionCommission
```

---

## 3. Katalog Harga Acuan Komoditas, Barang & Jasa Benua

### 3.1 Bahan Profesi, Benih & Hasil Panen Herbal
| Komoditas / Bahan | Grade / Tier | Base Price | Wilayah Produsen Utama (Scarcity 0.5×) |
|---|---|---|---|
| Benih Lingzhi Hijau | Tier 1 | 5 ST | Shenmu Zhou (2.5 ST) |
| Benih Rumput Qi Yuan | Tier 2 | 2 JT | Shenmu Zhou (1 JT) |
| Benih Lotus Es Abadi | Tier 4 | 20 LSS | Beihan Zhou (10 LSS) |
| Benih Ginseng Naga Purba | Tier 7 | 50 MSS | Shenmu Zhou (25 MSS) |
| Pupuk Qi Kayu Shenmu | Grade 2 Soil | 50 ST / karung | Lembah Biyang (25 ST) |
| Ingot Besi Spirit (Spirit Iron) | Tier 1–3 | 1 JT / ingot | Chiyan Zhou (0.5 JT) |
| Bijih Besi Meteorit Merah | Tier 4–6 | 10 LSS / ingot | Shendu / Chiyan (5 LSS) |
| Kertas Sutra Jimat Kosong | Tier 1–3 | 1 ST / lembar | Xixuan Zhou (0.5 ST) |
| Botol Bisa Ular Rawa | Tier 2–4 | 5 ST / botol | Youming Zhou (2.5 ST) |

### 3.2 Tiket & Layanan Transportasi Kapal Terbang (Tiankong Feichuan)
| Jenis Rute / Moda Feichuan | Kapasitas Moda | Harga Tiket Standard | Durasi Tempuh Lintas Wilayah |
|---|---|---|---|
| **Lokal Antar-Kota** *(Skiff)* | 1–3 Penumpang | 1–3 JT | 2–6 Jam |
| **Lintas Wilayah Tetangga** *(Galleon)* | 50–100 Penumpang | 15 LSS | 12–15 Jam |
| **Lintas Wilayah Jauh** *(Heavy Galleon)* | 200+ Penumpang | 28 LSS | 22–26 Jam |
| **Rute Zona Terlarang** *(Warship)* | Pasukan Pengawal | 100 LSS | 36 Jam (Sangat Berbahaya) |

### 3.3 Spirit Beast, Egg & Jimat Penjinak
| Item / Beast | Tier / Rank | Harga Pasar Standard | Pemasok Utama |
|---|---|---|---|
| Jimat Penjinak Beast Pemula | Tier 1 | 1 LSS | Perguruan Qingling / Guild |
| Jimat Penjinak Beast Master | Tier 3 | 20 LSS | Perguruan Qingling / Guild |
| Egg Spirit Beast Unggas Hutan | Tier 1 Beast | 5 LSS | Desa Qingling (Shenmu) |
| Egg Serigala Bayangan Kabut | Tier 2 Beast | 15 LSS | Desa Qingling (Shenmu) |
| Egg Spirit Beast Serigala Es | Tier 3 Beast | 50 LSS | Kota Hanbing (Beihan) |
| Egg Spirit Beast Dragonblood | Tier 6 Beast | 10 HSS | Wanbao Auction House |

---

## 4. Sistem Registrasi Item Origin Log Resmi

Setiap barang bernilai tinggi (Tier 3+ / Grade High / Artefak Legendaris) WAJIB mencantumkan catatan **Origin Log** di profil barang:

```
[ITEM ORIGIN LOG]
- Item Name: Pedang Besi Meteorit Grade 5
- Origin Creator: Master Penempa Shendu (NPC ID: 24-01)
- Timestamp: Year 15000, Month 3, Day 12
- Extraction Location: Kawah Shendu, Chiyan Zhou
- Verifier Stamp: Serikat Youxia Sanxiu Tianjing (Log #YX-88421)
```
