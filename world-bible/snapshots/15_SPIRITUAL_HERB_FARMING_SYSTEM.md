# 🌾 Xuantian World — Sistem Pertanian & Berkebun Obat Spirit

> **Modul:** 15 — Spiritual Herb Farming System
> **Prinsip:** Anti-Cheat Enforced — Soil Grade & Growth Formula — Verified Item Origin Logging
> **Rujukan silang:** `00_CORE_RULES_AI_GM.md` (aturan wajib GM), `02_SHENMU_ZHOU.md` (wilayah kebun obat utama), `13_SPIRITUAL_ROOT_SYSTEM.md` (Akar Spiritual Kayu Abadi), `14_CRAFTING_AND_PROFESSIONS_SYSTEM.md` (profesi & alkimia), `18_ECONOMY_SYSTEM.md` (harga bahan & Item Origin Log), `32_PERGURUAN_BERKEBUN_BIYANG.md` (perguruan berkebun), `50_SPECIAL_ITEMS.md` (Dunia Kecil Gantungan Giok)

---

## 0. Filosofi Sistem Berkebun Obat Spirit

Sistem berkebun memungkinkan kultivator menanam, merawat, dan memanen benih herbal spirit untuk digunakan sendiri dalam Alkimia atau dijual ke pasar obat. Keberhasilan dan waktu tumbuh tanaman obat spirit tunduk pada formula matematis tetap.

### Aturan Emas Anti-Cheat Berkebun Spirit
- **Waktu Tumbuh Nyata In-Game:** Tanaman obat tidak tumbuh secara instan. AI GM WAJIB menghitung waktu tumbuh berdasarkan formula dan melacak akumulasi waktu in-game.
- **Wajib Item Origin Log:** Setiap panen herbal spirit Tier 3+ WAJIB mencatat **Item Origin Log** (penanam, grade tanah, lokasi, timestamp).
- **Hasil Panen Terikat Formula:** Jumlah panen dan kualitas hasil dipengaruhi langsung oleh grade tanah, pupuk Qi, level skill herbalis, dan Akar Spiritual Kayu Abadi.

---

## 1. Grade Tanah Spirit & Formula Waktu Tumbuh (Growth Time Calculation)

Waktu tumbuh tanaman obat spirit dihitung berdasarkan waktu standar benih dikurangi bonus grade tanah, pupuk Qi, dan Akar Spiritual Kayu Abadi:

```
BaseGrowthDays = SeedStandardGrowthDays
SoilMultiplier = Grade 1 (1.0) | Grade 2 (0.75) | Grade 3 (0.50) | Grade 4 (0.25)
FertilizerDiscount = 0.30 (jika menggunakan Pupuk Qi Kayu) | 0.00 (tanpa pupuk)
WoodRootBonus = 0.30 (jika kultivator memiliki Akar Spiritual Kayu Abadi) | 0.00
ActualGrowthDays = Max(1, BaseGrowthDays × SoilMultiplier × (1.0 - FertilizerDiscount - WoodRootBonus))
```

*Contoh Perhitungan:* Benih Lotus Es Abadi (Base: 14 hari) ditanam di Tanah Spirit Grade 3 (`SoilMultiplier = 0.50`) dengan Pupuk Qi (`0.30`) oleh kultivator ber-Akar Spiritual Kayu (`0.30`):
$$\text{ActualGrowthDays} = 14 \times 0.50 \times (1.0 - 0.30 - 0.30) = 7 \times 0.40 = 2.8 \text{ Hari (dibulatkan 3 Hari)}.$$

---

## 2. Formula Hasil Panen & Kualitas Herbal (Crop Yield & Quality)

```
HarvestYield = BaseYield (2–5 buah) × SoilYieldMultiplier × (1 + HerbalistSkillLevel × 0.10)
```

- **SoilYieldMultiplier:** Grade 1 (`1.0x`), Grade 2 (`1.3x`), Grade 3 (`1.6x`), Grade 4 (`2.0x`).
- **Peluang Panen Grade High (Perfect Herb):** `10% + (HerbalistSkillLevel × 5%)`.

---

## 3. Perguruan & Lokasi Utama Berkebun

- **Perguruan Berkebun Obat Biyang** (`32_PERGURUAN_BERKEBUN_BIYANG.md`): Pusat pelatihan analisis tanah spirit dan pupuk Qi.
- **Shenmu Zhou** (`02_SHENMU_ZHOU.md`): Wilayah utama kebun obat dengan bonus Wood Qi Modifier 1.25x.
- **Dunia Kecil Gantungan Giok Alam Hunyuan** (`50_SPECIAL_ITEMS.md`): Tanah Spirit Grade 9 khusus yang dapat menumbuhkan tanaman obat Tier tinggi dalam waktu **3 sampai 7 hari** tanpa bantuan pupuk/alat bantu lain.

---

## 4. Katalog Lengkap 200 Tanaman Spiritual Lintas Wilayah (Tier 1 – 9)

Katalog resmi komprehensif seluruh 200 spesies tanaman spiritual (herbal, rumput spirit, teh spirit, bambu spirit, pohon buah spirit, jamur purba, bunga spirit, sulur merambat, dan lotus air) yang tumbuh di 10 Wilayah Utama Xuantian World:


### 🌿 Tier 1 – Ranah Fana & Lingquan (Mortal & Foundation Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Rumput Penjernih Qi** *(Qi Cleansing Grass)* | Rumput Spirit | Shenmu Zhou / Zhonghua Zhou | 3 Hari | Bahan ramuan pembersih konsumsi Qi kabut -50% selama 1 jam | 50 Tael Tembaga (CT) / ikat |
| 2 | **Bambu Roh Hijau** *(Green Spirit Bamboo)* | Bambu Spirit | Shenmu Zhou (Hutan Bambu Giok) | 5 Hari | Bahan perkakas kebun, pedang kayu spirit, & komponen piringan formasi Tier 1 | 1 Tael Perak (ST) / batang |
| 3 | **Akar Wangi Spiritual** *(Fragrant Root)* | Akar Herbal | Shenmu Zhou | 4 Hari | Racikan Pil Penenang Jiwa & pakan serangga spirit | 80 Tael Tembaga (CT) / akar |
| 4 | **Teh Awan Hijau** *(Green Cloud Tea)* | Daun Teh Spirit | Zhonghua Zhou | 7 Hari | Minuman seduhan pemulih Stamina +15 HP & kejernihan pikiran | 2 Tael Perak (ST) / liang |
| 5 | **Rumput Pasir Emas** *(Golden Sand Grass)* | Rumput Spirit | Xixuan Zhou | 4 Hari | Tinta jimat pelindung ringan & ramuan Tahan Panas Gurun | 1 Tael Perak (ST) / ikat |
| 6 | **Bunga Embun Pagi** *(Morning Dew Flower)* | Bunga Spirit | Zhonghua Zhou | 3 Hari | Bahan dasar ramuan pemulihan HP ringan (+20 HP) | 60 Tael Tembaga (CT) / tangkai |
| 7 | **Jamur Jerami Kayu** *(Wood Straw Mushroom)* | Jamur Spirit | Shenmu Zhou | 5 Hari | Bahan pakan olahan beast & campuran sup pembawa Qi | 40 Tael Tembaga (CT) / buah |
| 8 | **Sulur Sirih Spirit** *(Spirit Betel Vine)* | Sulur Merambat | Shenmu Zhou | 6 Hari | Bahan tali pengikat herbal & campuran salep luka luar | 70 Tael Tembaga (CT) / gulung |
| 9 | **Daun Mint Es** *(Frost Mint Leaf)* | Rumput Spirit | Beihan Zhou | 4 Hari | Penawar dahaga & pereda demam akibat energi api ringan | 1 Tael Perak (ST) / ikat |
| 10 | **Akar Kunyit Api** *(Fire Turmeric Root)* | Akar Herbal | Chiyan Zhou | 5 Hari | Bahan pembuat ramuan penghangat tubuh di daerah es | 90 Tael Tembaga (CT) / akar |
| 11 | **Rumput Angin Berbisik** *(Whispering Wind Grass)* | Rumput Spirit | Canglong Zhou | 4 Hari | Bahan ramuan peningkat kecepatan gerak ringan (+5% Move Speed) | 1.5 Tael Perak (ST) |
| 12 | **Teh Melati Embun** *(Dew Jasmine Tea)* | Daun Teh Spirit | Zhonghua Zhou | 6 Hari | Seduhan penenang saraf dantian saat meditasi awal | 2 Tael Perak (ST) / liang |
| 13 | **Rumput Rawa Kabut** *(Mist Swamp Grass)* | Rumput Spirit | Youming Zhou | 5 Hari | Bahan racikan salep anti-gigitan serangga rawa | 50 Tael Tembaga (CT) / ikat |
| 14 | **Buah Bintang Kecil** *(Little Star Fruit)* | Pohon Buah Spirit | Tiangong Zhou | 8 Hari | Buah penyegar Stamina (+10 Stamina) saat perjalanan jauh | 2 Tael Perak (ST) / buah |
| 15 | **Lotus Kolam Tenang** *(Quiet Pond Lotus)* | Lotus Spirit | Canghai Zhou | 7 Hari | Daunnya digunakan untuk membungkus obat agar tidak menguap Qi-nya | 1.8 Tael Perak (ST) |
| 16 | **Rumput Jarum Perak** *(Silver Needle Grass)* | Rumput Spirit | Canglong Zhou | 4 Hari | Bahan pembuatan kertas jimat latihan pemula | 80 Tael Tembaga (CT) / ikat |
| 17 | **Bunga Matahari Spirit** *(Spirit Sunflower)* | Bunga Spirit | Zhonghua Zhou | 6 Hari | Ekstrak minyaknya untuk bahan bakar pelita meditasi malam | 1 Tael Perak (ST) |
| 18 | **Akar Jahe Merah Spirit** *(Red Spirit Ginger Root)* | Akar Herbal | Chiyan Zhou | 5 Hari | Mengeliminasi efek kram otot akibat cuaca dingin | 1 Tael Perak (ST) |
| 19 | **Jamur Kayu Pelangi** *(Rainbow Wood Mushroom)* | Jamur Spirit | Shenmu Zhou | 6 Hari | Pewarna alami kertas jimat & pencampur racikan ramuan | 70 Tael Tembaga (CT) |
| 20 | **Pohon Apel Spirit** *(Spirit Apple Tree)* | Pohon Buah Spirit | Zhonghua Zhou | 10 Hari | Menghasilkan buah penyegar HP (+15 HP) | 1.5 Tael Perak (ST) |
| 21 | **Rumput Pasir Merah** *(Red Sand Grass)* | Rumput Spirit | Xixuan Zhou | 4 Hari | Bahan penyerap kelembaban di gudang penyimpanan benih | 60 Tael Tembaga (CT) |
| 22 | **Teh Gunung Batu** *(Stone Mountain Tea)* | Daun Teh Spirit | Canglong Zhou | 7 Hari | Seduhan penghilang lelah fisik setelah latihan fisik | 2 Tael Perak (ST) / liang |
| 23 | **Bunga Kelopak Kuning** *(Yellow Petal Flower)* | Bunga Spirit | Xixuan Zhou | 5 Hari | Bahan bedak pelindung kulit dari radiasi debu pasir | 80 Tael Tembaga (CT) |
| 24 | **Akar Pakis Hijau** *(Green Fern Root)* | Akar Herbal | Shenmu Zhou | 4 Hari | Penawar racun tanaman liar ringan | 90 Tael Tembaga (CT) |
| 25 | **Bambu Buluh Air** *(Water Reed Bamboo)* | Bambu Spirit | Canghai Zhou | 6 Hari | Bahan seruling kayu spirit pemanggil burung pesan | 1.2 Tael Perak (ST) |

---

### 🌿 Tier 2 – Ranah Kaimai (Meridian Awakening Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Ginseng Nadi Merah** *(Red Vein Ginseng)* | Akar Herbal | Shenmu Zhou / Zhonghua Zhou | 10 Hari | Bahan utama Pil Pembuka Nadi (Bonus Breakthrough Realm 2 +10%) | 15 Tael Perak (ST) |
| 2 | **Teh Embun Bintang** *(Star Dew Tea)* | Daun Teh Spirit | Canglong Zhou / Tiangong Zhou | 12 Hari | Meningkatkan kecepatan regenerasi Qi +10% selama 6 jam saat diseduh | 25 Tael Perak (ST) / liang |
| 3 | **Bunga Es Hanbing** *(Hanbing Frost Flower)* | Bunga Spirit | Beihan Zhou | 8 Hari | Bahan racikan Pil Penawar Racun Api & Pil Alkimia Es Tier 2 | 20 Tael Perak (ST) |
| 4 | **Pohon Kayu Lumu** *(Lumu Wood Tree)* | Pohon Spirit | Shenmu Zhou | 15 Hari | Batang kayu fleksibel ber-Qi tinggi untuk perkakas & busur spirit | 50 Tael Perak (ST) / 0.5 JT |
| 5 | **Jamur Bayangan Kelam** *(Dark Shadow Mushroom)* | Jamur Spirit | Youming Zhou | 7 Hari | Bahan racun biologis pelumpuh saraf & Pil Penyamaran Bayangan | 18 Tael Perak (ST) |
| 6 | **Rumput Tembaga Merah** *(Red Copper Grass)* | Rumput Spirit | Chiyan Zhou | 9 Hari | Diolah menjadi serbuk penguat leburan perunggu spirit | 12 Tael Perak (ST) |
| 7 | **Bambu Belang Harimau** *(Tiger Stripe Bamboo)* | Bambu Spirit | Canglong Zhou | 14 Hari | Bahan gagang tombak & busur panah ketapel spirit | 40 Tael Perak (ST) |
| 8 | **Lotus Karang Laut** *(Sea Coral Lotus)* | Lotus Spirit | Canghai Zhou | 11 Hari | Menghasilkan minyak pelumas piringan formasi kapal laut | 16 Tael Perak (ST) |
| 9 | **Akar Licorice Spirit** *(Spirit Licorice Root)* | Akar Herbal | Zhonghua Zhou | 8 Hari | Bahan Penetralisir rasa pahit & penyeimbang reaksi kimia pill | 10 Tael Perak (ST) |
| 10 | **Pohon Pir Salju** *(Snow Pear Tree)* | Pohon Buah Spirit | Beihan Zhou | 18 Hari | Menghasilkan Buah Pir Salju (+30 HP & meredakan batuk darah) | 30 Tael Perak (ST) |
| 11 | **Bunga Violet Malam** *(Night Violet Flower)* | Bunga Spirit | Youming Zhou | 9 Hari | Bahan pembuatan tinta jimat penenang jiwa nocturnal | 14 Tael Perak (ST) |
| 12 | **Teh Bambu Giok** *(Jade Bamboo Tea)* | Daun Teh Spirit | Shenmu Zhou | 12 Hari | Meredakan emosi tidak stabil & memperlancar aliran Qi Kayu | 20 Tael Perak (ST) / liang |
| 13 | **Sulur Duridarah** *(Bloodthorn Vine)* | Sulur Merambat | Youming Zhou | 10 Hari | Diolah menjadi Cambuk Sulur Beracun atau jaring penjerat beast | 15 Tael Perak (ST) |
| 14 | **Rumput Halilintar** *(Lightning Bolt Grass)* | Rumput Spirit | Juejing Zhou | 8 Hari | Bahan campuran tinta jimat elemen petir Tier 2 | 22 Tael Perak (ST) |
| 15 | **Akar Teratai Batu** *(Stone Lotus Root)* | Akar Herbal | Xixuan Zhou | 13 Hari | Memperkeras kekebalan kulit terhadap serangan tumpul (+5 Def) | 25 Tael Perak (ST) |
| 16 | **Pohon Persik Spirit** *(Spirit Peach Tree)* | Pohon Buah Spirit | Zhonghua Zhou | 20 Hari | Menghasilkan Buah Persik Spirit (+25 Stamina & +20 HP) | 40 Tael Perak (ST) |
| 17 | **Bunga Krisan Emas** *(Golden Chrysanthemum)* | Bunga Spirit | Zhonghua Zhou | 9 Hari | Campuran ramuan pembersih racun mata & penajam penglihatan | 12 Tael Perak (ST) |
| 18 | **Jamur Bintik Merah** *(Red Speckled Mushroom)* | Jamur Spirit | Chiyan Zhou | 8 Hari | Bahan obat perangsang vitalitas bertarung sementara | 15 Tael Perak (ST) |
| 19 | **Teh Kabut Pegunungan** *(Mountain Mist Tea)* | Daun Teh Spirit | Canglong Zhou | 11 Hari | Meningkatkan fokus saat mempelajari kitab pedang dasar | 18 Tael Perak (ST) / liang |
| 20 | **Rumput Sisik Serpent** *(Serpent Scale Grass)* | Rumput Spirit | Canghai Zhou | 10 Hari | Bahan penyamak kulit spirit beast agar lebih lentur | 14 Tael Perak (ST) |
| 21 | **Bambu Serat Biru** *(Blue Fiber Bamboo)* | Bambu Spirit | Tiangong Zhou | 13 Hari | Bahan benang layang-layang pengintai & bingkai alat terbang | 35 Tael Perak (ST) |
| 22 | **Akar Bawang Spirit** *(Spirit Onion Root)* | Akar Herbal | Zhonghua Zhou | 7 Hari | Pemicu rasa hangat instan untuk pemulihan hipotermia ringan | 8 Tael Perak (ST) |
| 23 | **Lotus Daun Lebar** *(Broadleaf Lotus)* | Lotus Spirit | Canghai Zhou | 12 Hari | Alas pengeringan benih obat agar bebas jamur | 12 Tael Perak (ST) |
| 24 | **Jamur Kayu Hitam** *(Black Wood Fungus)* | Jamur Spirit | Youming Zhou | 9 Hari | Bahan racikan Pil Pemurni Darah Kotor | 16 Tael Perak (ST) |
| 25 | **Bunga Lavender Spirit** *(Spirit Lavender)* | Bunga Spirit | Shenmu Zhou | 8 Hari | Aroma terapi pemulih kelaparan & penenang jiwa | 10 Tael Perak (ST) |
| 26 | **Pohon Kayu Besi Spirit** *(Spirit Ironwood Tree)* | Pohon Spirit | Canglong Zhou | 22 Hari | Kayu keras sekeras besi untuk perisai kayu & tiang dermaga | 60 Tael Perak (ST) |
| 27 | **Rumput Angin Gurun** *(Desert Wind Grass)* | Rumput Spirit | Xixuan Zhou | 8 Hari | Campuran ramuan stamina pembawa barang di gurun pasir | 11 Tael Perak (ST) |
| 28 | **Teh Melati Perak** *(Silver Jasmine Tea)* | Daun Teh Spirit | Zhonghua Zhou | 10 Hari | Seduhan penenang racun alkohol & zat pemicu pusing | 15 Tael Perak (ST) / liang |
| 29 | **Akar Talas Spirit** *(Spirit Taro Root)* | Akar Herbal | Shenmu Zhou | 9 Hari | Bahan makanan olahan tinggi kalori pengganti ransum perjalanan | 10 Tael Perak (ST) |
| 30 | **Sulur Awan Melayang** *(Floating Cloud Vine)* | Sulur Merambat | Tiangong Zhou | 14 Hari | Tali panjat sangat ringan tahan beban hingga 500 jin | 40 Tael Perak (ST) |

---

### 🌿 Tier 3 – Ranah Ningyuan (Qi Condensed Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Lotus Es Abadi** *(Eternal Frost Lotus)* | Lotus Spirit | Beihan Zhou / Canghai Zhou | 20 Hari | Bahan utama Pil Penjernih Dantian & Pemulih Retak Dantian | 30 Tael Giok (JT) / 3 LSS |
| 2 | **Teh Niat Pedang Qingfeng** *(Qingfeng Sword Intent Tea)* | Daun Teh Spirit | Canglong Zhou | 25 Hari | Memberikan buff sementara Niat Pedang Tajam (+15% Physical Attack) | 45 Tael Giok (JT) / 4.5 LSS |
| 3 | **Buah Kristal Api Lava** *(Lava Fire Crystal Fruit)* | Pohon Buah Spirit | Chiyan Zhou | 30 Hari | Bahan utama Pil Pemurni Nyala Api & Pakan Beast Elemen Api | 50 Tael Giok (JT) / 5 LSS |
| 4 | **Serat Urat Giok** *(Jade Vein Fiber Bamboo)* | Bambu Spirit | Shenmu Zhou | 18 Hari | Benang piringan formasi ruang portabel & kertas jimat segel jiwa | 35 Tael Giok (JT) / 3.5 LSS |
| 5 | **Rumput Inskripsi Rune** *(Rune Inscription Grass)* | Rumput Spirit | Xixuan Zhou | 22 Hari | Tinta jimat khusus inskripsi rune pertahanan Benteng Pasir | 40 Tael Giok (JT) / 4 LSS |
| 6 | **Akar Ginseng Es Purba** *(Ancient Frost Ginseng)* | Akar Herbal | Beihan Zhou | 24 Hari | Bahan utama Pil Penahan Dingin Mutlak & Pemulih Suhu Tubuh | 38 Tael Giok (JT) / 3.8 LSS |
| 7 | **Bunga Teratai Darah** *(Blood Lotus)* | Lotus Spirit | Youming Zhou | 21 Hari | Bahan Baku Pil Penambah Darah & Pemulih Organ Dalam | 32 Tael Giok (JT) / 3.2 LSS |
| 8 | **Pohon Kayu Meteorit** *(Meteorite Wood Tree)* | Pohon Spirit | Chiyan Zhou | 28 Hari | Bahan baku gagang senjata tempaan grade tinggi | 48 Tael Giok (JT) / 4.8 LSS |
| 9 | **Jamur Kepala Singa Spirit** *(Spirit Lion Head Mushroom)* | Jamur Spirit | Shenmu Zhou | 19 Hari | Meningkatkan kekuatan otot & Pertahanan Fisik (+10 Def) | 28 Tael Giok (JT) / 2.8 LSS |
| 10 | **Teh Bunga Peony Emas** *(Golden Peony Tea)* | Daun Teh Spirit | Zhonghua Zhou | 22 Hari | Menjaga kestabilan kultivasi saat konsumsi pil berturut-turut | 36 Tael Giok (JT) / 3.6 LSS |
| 11 | **Rumput Sisik Naga Azure** *(Azure Dragon Scale Grass)* | Rumput Spirit | Canglong Zhou | 20 Hari | Bahan pemurni baja pedang & ramuan penguat sisik beast | 42 Tael Giok (JT) / 4.2 LSS |
| 12 | **Sulur Jiwa Terikat** *(Soulbound Vine)* | Sulur Merambat | Shenmu Zhou | 25 Hari | Bahan benang pengikat artefak jiwa & tali jimat penahan iblis | 40 Tael Giok (JT) / 4 LSS |
| 13 | **Bambu Bintang Awan** *(Star Cloud Bamboo)* | Bambu Spirit | Tiangong Zhou | 23 Hari | Bahan pipa saluran Qi pada sistem mesin Kapal Terbang | 50 Tael Giok (JT) / 5 LSS |
| 14 | **Akar Kunyit Emas Murni** *(Pure Gold Turmeric Root)* | Akar Herbal | Xixuan Zhou | 20 Hari | Bahan penyerap racun logam berat di Dantian | 30 Tael Giok (JT) / 3 LSS |
| 15 | **Bunga Es Mawar Salju** *(Snow Rose Frost Flower)* | Bunga Spirit | Beihan Zhou | 18 Hari | Bahan parfum pemikat spirit beast serigala salju | 25 Tael Giok (JT) / 2.5 LSS |
| 16 | **Jamur Api Lembah** *(Valley Fire Mushroom)* | Jamur Spirit | Chiyan Zhou | 22 Hari | Bahan ramuan penambah kecepatan tempa besi +15% | 35 Tael Giok (JT) / 3.5 LSS |
| 17 | **Pohon Buah Plum Giok** *(Jade Plum Tree)* | Pohon Buah Spirit | Shenmu Zhou | 26 Hari | Buah penyegar Qi (+50 Qi) & penawar rasa lelah Dantian | 38 Tael Giok (JT) / 3.8 LSS |
| 18 | **Lotus Lautan Dalam** *(Deep Sea Lotus)* | Lotus Spirit | Canghai Zhou | 24 Hari | Bahan pembuatan Pil Penahan Napas Dalam Air (12 Jam) | 42 Tael Giok (JT) / 4.2 LSS |
| 19 | **Teh Teratai Putih** *(White Lotus Tea)* | Daun Teh Spirit | Zhonghua Zhou | 20 Hari | Meredakan racun pikiran & menenangkan efek halusinasi | 30 Tael Giok (JT) / 3 LSS |
| 20 | **Rumput Tanduk Rusa Spirit** *(Spirit Deer Horn Grass)* | Rumput Spirit | Shenmu Zhou | 19 Hari | Bahan utama ramuan peningkat vitalitas & pembakar stamina | 28 Tael Giok (JT) / 2.8 LSS |
| 21 | **Sulur Bayangan Kelam** *(Dark Shadow Vine)* | Sulur Merambat | Youming Zhou | 21 Hari | Diolah menjadi jaring penangkap assassin atau serangga beracun | 34 Tael Giok (JT) / 3.4 LSS |
| 22 | **Akar Urat Besi** *(Iron Vein Root)* | Akar Herbal | Chiyan Zhou | 23 Hari | Pemicu pengerasan struktur tulang saat breakthrough Realm 3 | 36 Tael Giok (JT) / 3.6 LSS |
| 23 | **Bambu Petir Ringan** *(Light Thunder Bamboo)* | Bambu Spirit | Juejing Zhou | 25 Hari | Diolah menjadi tongkat pemicu kejutan petir ringan | 45 Tael Giok (JT) / 4.5 LSS |
| 24 | **Bunga Seruni Bulan** *(Moon Seruni Flower)* | Bunga Spirit | Beihan Zhou | 20 Hari | Bahan tinta jimat penyerap cahaya malam | 32 Tael Giok (JT) / 3.2 LSS |
| 25 | **Jamur Ungu Spirit** *(Spirit Purple Mushroom)* | Jamur Spirit | Shenmu Zhou | 18 Hari | Bahan pencampur pil pemurni energi Qi murni | 29 Tael Giok (JT) / 2.9 LSS |
| 26 | **Pohon Kurma Merah Spirit** *(Spirit Red Date Tree)* | Pohon Buah Spirit | Zhonghua Zhou | 27 Hari | Buah pemulih Stamina & darah (+40 HP) | 35 Tael Giok (JT) / 3.5 LSS |
| 27 | **Rumput Karang Bintang** *(Star Coral Grass)* | Rumput Spirit | Canghai Zhou | 22 Hari | Bahan ramuan pelindung gesekan air tekanan tinggi | 38 Tael Giok (JT) / 3.8 LSS |
| 28 | **Teh Daun Pinus Purba** *(Ancient Pine Leaf Tea)* | Daun Teh Spirit | Canglong Zhou | 24 Hari | Meningkatkan daya tahan tubuh terhadap cuaca ekstrem | 33 Tael Giok (JT) / 3.3 LSS |
| 29 | **Akar Keladi Spirit** *(Spirit Caladium Root)* | Akar Herbal | Shenmu Zhou | 21 Hari | Bahan dasar pembuatan perekat kertas jimat Tier 3 | 30 Tael Giok (JT) / 3 LSS |
| 30 | **Lotus Pelangi Gurun** *(Desert Rainbow Lotus)* | Lotus Spirit | Xixuan Zhou | 25 Hari | Bahan ramuan pencari mata air bawah tanah di gurun | 40 Tael Giok (JT) / 4 LSS |

---

### 🌿 Tier 4 – Ranah Lingyi (Spiritual Intent Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Lingzhi Darah Sembilan Urat** *(Nine-Vein Blood Lingzhi)* | Jamur Spirit | Shenmu Zhou / Zhonghua Zhou | 45 Hari | Bahan baku utama Pil Pemulih Jiwa & Nadi (+100% HP, memulihkan organ hancur) | 150 LSS (1.5 MSS) |
| 2 | **Pohon Meteorit Merah** *(Red Meteorite Tree)* | Pohon Spirit | Chiyan Zhou | 60 Hari | Kayu tahan leburan magma untuk arsitektur kuali & piringan formasi api | 200 LSS (2 MSS) |
| 3 | **Teh Bunga Es Lautan** *(Ocean Ice Blossom Tea)* | Daun Teh Spirit | Canghai Zhou | 40 Hari | Meredakan Pill Toxin Dantian -15% & memberikan perlindungan tekanan laut dalam | 180 LSS (1.8 MSS) / liang |
| 4 | **Spora Bunga Mayat** *(Corpse Flower Spores)* | Bunga Beracun | Youming Zhou | 35 Hari | Bahan racun tingkat tinggi pelumpuh Qi Yuan kultivator Realm 4 | 160 LSS (1.6 MSS) |
| 5 | **Bambu Petir Guruh** *(Thunder Conduit Bamboo)* | Bambu Spirit | Juejing Zhou / Tiangong Zhou | 50 Hari | Batang bambu penghantar energi petir tanah untuk Senjata & Formasi Kilat | 220 LSS (2.2 MSS) |
| 6 | **Ginseng Api Tujuh Daun** *(Seven Leaf Fire Ginseng)* | Akar Herbal | Chiyan Zhou | 42 Hari | Bahan utama Pil Terobos Realm 4 & peningkat Qi Elemen Api | 170 LSS (1.7 MSS) |
| 7 | **Lotus Es Kristal Biru** *(Blue Crystal Frost Lotus)* | Lotus Spirit | Beihan Zhou | 48 Hari | Bahan baku Pil Penenang Jiwa Es & Pemurni Kuali Alkimia | 190 LSS (1.9 MSS) |
| 8 | **Bunga Jiwa Ungu Purba** *(Ancient Purple Soul Flower)* | Bunga Spirit | Shenmu Zhou | 40 Hari | Memperkuat kehendak spiritual & daya ingat jurus baru | 165 LSS (1.65 MSS) |
| 9 | **Rumput Sisik Naga Api** *(Fire Dragon Scale Grass)* | Rumput Spirit | Chiyan Zhou | 38 Hari | Bahan campuran penyepuhan pedang agar memiliki efek terbakar | 155 LSS (1.55 MSS) |
| 10 | **Teh Bambu Embun Es** *(Frost Dew Bamboo Tea)* | Daun Teh Spirit | Beihan Zhou | 44 Hari | Mencegah demam Qi saat mempelajari jurus es tingkat menengah | 175 LSS (1.75 MSS) / liang |
| 11 | **Sulur Penjerap Jiwa** *(Soul Entangling Vine)* | Sulur Merambat | Youming Zhou | 46 Hari | Bahan baku cambuk pengikat roh & jaring perangkap iblis | 185 LSS (1.85 MSS) |
| 12 | **Jamur Batu Karang Laut** *(Sea Reef Stone Mushroom)* | Jamur Spirit | Canghai Zhou | 39 Hari | Memperkuat kepadatan tulang & kekebalan racun air laut | 145 LSS (1.45 MSS) |
| 13 | **Pohon Buah Giok Salju** *(Snow Jade Fruit Tree)* | Pohon Buah Spirit | Beihan Zhou | 55 Hari | Menghasilkan Buah Giok Salju (+150 HP & +100 Qi) | 210 LSS (2.1 MSS) |
| 14 | **Akar Kayu Hitam Purba** *(Ancient Ebony Root)* | Akar Herbal | Youming Zhou | 41 Hari | Bahan racikan ramuan kekebalan racun fisik Tier 4 | 160 LSS (1.6 MSS) |
| 15 | **Lotus Emas Gurun Purba** *(Ancient Desert Gold Lotus)* | Lotus Spirit | Xixuan Zhou | 47 Hari | Bahan utama Pil Pemurni Qi Tanah & Pembuka Nadi Jiwa | 195 LSS (1.95 MSS) |
| 16 | **Teh Niat Pedang Bintang** *(Star Intent Sword Tea)* | Daun Teh Spirit | Canglong Zhou | 43 Hari | Memberikan buff sementara Kecepatan Tebasan Pedang (+20%) | 180 LSS (1.8 MSS) / liang |
| 17 | **Rumput Angin Puyuh** *(Whirlwind Grass)* | Rumput Spirit | Tiangong Zhou | 37 Hari | Bahan baku ramuan peningkat kelincahan terbang & mendarat | 150 LSS (1.5 MSS) |
| 18 | **Bambu Sisik Hitam** *(Black Scale Bamboo)* | Bambu Spirit | Youming Zhou | 52 Hari | Bahan baku perisai kayu iblis & tiang kapal stealth | 200 LSS (2 MSS) |
| 19 | **Jamur Awan Putih** *(White Cloud Mushroom)* | Jamur Spirit | Tiangong Zhou | 40 Hari | Pemicu keringanan tubuh sementara saat melintasi tebing | 165 LSS (1.65 MSS) |
| 20 | **Pohon Delima Darah** *(Blood Pomegranate Tree)* | Pohon Buah Spirit | Zhonghua Zhou | 58 Hari | Buah pemulih darah & organ dalam hancur (+120 HP) | 220 LSS (2.2 MSS) |
| 21 | **Akar Keladi Beracun** *(Poisonous Caladium Root)* | Akar Beracun | Youming Zhou | 36 Hari | Bahan baku racun pelumpuh gerakan kaki dalam pertempuran | 140 LSS (1.4 MSS) |
| 22 | **Bunga Teratai Jiwa** *(Soul Teratai Flower)* | Bunga Spirit | Canghai Zhou | 49 Hari | Bahan pembuat jimat pelindung kesadaran dari hipnotis | 190 LSS (1.9 MSS) |
| 23 | **Rumput Karang Emas** *(Golden Coral Grass)* | Rumput Spirit | Canghai Zhou | 41 Hari | Bahan perekat piringan formasi bawah laut | 170 LSS (1.7 MSS) |
| 24 | **Teh Bunga Es Kemurnian** *(Purity Frost Flower Tea)* | Daun Teh Spirit | Beihan Zhou | 45 Hari | Memurnikan aliran Qi es & meredakan hawa panas Dantian | 185 LSS (1.85 MSS) / liang |
| 25 | **Sulur Cahaya Bintang** *(Starlight Vine)* | Sulur Merambat | Tiangong Zhou | 50 Hari | Bahan benang pelindung jubah terbang kultivator Realm 4 | 205 LSS (2.05 MSS) |

---

### 🌿 Tier 5 – Ranah Xuantian (Profound Sky Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Ginseng Spirit 1.000 Tahun** *(1000-Year Spirit Ginseng)* | Akar Herbal | Shenmu Zhou (Dataran Abu Hijau) | 90 Hari | Bahan racikan Pil Breakthrough Xuantian (Bonus Success Chance +20%) | 8 MSS (800 LSS) |
| 2 | **Lotus Giok Tiga Nadi** *(Three-Vein Jade Lotus)* | Lotus Spirit | Shenmu Zhou (Hutan Bambu Giok) | 75 Hari | Bahan resep Pil Pemurni Inti Dantian & Restorasi Akar Spiritual | 7.5 MSS (750 LSS) |
| 3 | **Teh Giok Leluhur Kekaisaran** *(Imperial Ancestral Jade Tea)* | Daun Teh Spirit | Zhonghua Zhou (Taman Sembilan Naga) | 100 Hari | Menjelaskan wawasan hukum Dao, memberikan akumulasi QiCap +5% permanen | 12 MSS (1.200 LSS) / liang |
| 4 | **Buah Batu Bintang Melayang** *(Floating Starstone Fruit)* | Pohon Buah Spirit | Tiangong Zhou | 80 Hari | Bahan inti penggerak gravitasi Kapal Terbang Kelas Galleon & Pill Levitasi | 9.5 MSS (950 LSS) |
| 5 | **Akar Hitam Penjernih Jiwa** *(Soul Cleansing Black Root)* | Akar Beracun | Youming Zhou | 85 Hari | Menghapus kutukan jiwa & memisahkan kesadaran iblis yang merintangi Dantian | 8.5 MSS (850 LSS) |
| 6 | **Bunga Api Teratai Sembilan Petal** *(Nine Petal Flame Lotus)* | Lotus Spirit | Chiyan Zhou | 82 Hari | Bahan utama Pil Pemurni Inti Api & Restorasi Kuali Lava | 8.9 MSS (890 LSS) |
| 7 | **Jamur Jiwa Es Abadi** *(Eternal Ice Soul Mushroom)* | Jamur Spirit | Beihan Zhou | 78 Hari | Membekukan racun fatal dalam tubuh sementara hingga ditemukan obatnya | 8.2 MSS (820 LSS) |
| 8 | **Pohon Kayu Naga Azure** *(Azure Dragon Wood Tree)* | Pohon Spirit | Canglong Zhou | 110 Hari | Kayu sakral untuk sarung pedang pusaka & tiang aula sekte | 11 MSS (1.100 LSS) |
| 9 | **Teh Embun Gurun Moko** *(Moko Desert Dew Tea)* | Daun Teh Spirit | Xixuan Zhou | 88 Hari | Memberikan wawasan ketahanan mental terhadap ilusi gurun | 9 MSS (900 LSS) / liang |
| 10 | **Bambu Petir Purba** *(Ancient Thunder Bamboo)* | Bambu Spirit | Juejing Zhou | 95 Hari | Inti piringan formasi penangkal petir tribulasi Realm 5 | 10.5 MSS (1.050 LSS) |
| 11 | **Rumput Sisik Naga Laut** *(Sea Dragon Scale Grass)* | Rumput Spirit | Canghai Zhou | 70 Hari | Bahan utama minyak peningkat kecepatan kapal laut +30% | 7.8 MSS (780 LSS) |
| 12 | **Akar Ginseng Darah Purba** *(Ancient Blood Ginseng)* | Akar Herbal | Shenmu Zhou | 85 Hari | Bahan baku Pil Pemurni Darah & Pembentuk Jiwa Baru | 8.4 MSS (840 LSS) |
| 13 | **Sulur Penjerat Jiwa Iblis** *(Demon Soul Snare Vine)* | Sulur Merambat | Youming Zhou | 92 Hari | Diolah menjadi tali segel penahan iblis Realm 5 | 9.2 MSS (920 LSS) |
| 14 | **Buah Kristal Es Abadi** *(Eternal Frost Crystal Fruit)* | Pohon Buah Spirit | Beihan Zhou | 105 Hari | Buah pemulih Qi & Dantian beku (+500 Qi) | 11.5 MSS (1.150 LSS) |
| 15 | **Bunga Seruni Emas Purba** *(Ancient Golden Seruni Flower)* | Bunga Spirit | Zhonghua Zhou | 80 Hari | Bahan racikan Pil Pelindung Organ Dalam dari ledakan kuali | 8.6 MSS (860 LSS) |
| 16 | **Jamur Darah Sembilan Bintang** *(Nine Star Blood Mushroom)* | Jamur Spirit | Chiyan Zhou | 76 Hari | Memunculkan potensi kemurkaan fisik bertarung sementara | 8 MSS (800 LSS) |
| 17 | **Teh Niat Pedang Naga** *(Dragon Intent Sword Tea)* | Daun Teh Spirit | Canglong Zhou | 90 Hari | Memberikan aura pedang penindas ketakutan lawan | 9.8 MSS (980 LSS) / liang |
| 18 | **Akar Keladi Hitam Purba** *(Ancient Black Caladium Root)* | Akar Herbal | Youming Zhou | 84 Hari | Bahan pembuatan cat pelindung senjata dari asam racun | 8.3 MSS (830 LSS) |
| 19 | **Lotus Karang Laut Purba** *(Ancient Sea Coral Lotus)* | Lotus Spirit | Canghai Zhou | 88 Hari | Bahan utama ramuan pembuat kubah udara di dasar laut | 9.1 MSS (910 LSS) |
| 20 | **Rumput Inskripsi Jiwa** *(Soul Inscription Grass)* | Rumput Spirit | Xixuan Zhou | 82 Hari | Tinta jimat segel jiwa tingkat tinggi Tier 5 | 8.7 MSS (870 LSS) |
| 21 | **Pohon Kayu Meteorit Purba** *(Ancient Meteorite Wood Tree)* | Pohon Spirit | Chiyan Zhou | 115 Hari | Kayu penempa senjata tingkat tinggi tahan leburan api surga | 12.5 MSS (1.250 LSS) |
| 22 | **Buah Delima Jiwa Spirit** *(Spirit Soul Pomegranate Fruit)* | Pohon Buah Spirit | Shenmu Zhou | 98 Hari | Memperkuat jiwa spiritual dari serangan mental musuh | 10 MSS (1.000 LSS) |
| 23 | **Teh Awan Melayang Purba** *(Ancient Floating Cloud Tea)* | Daun Teh Spirit | Tiangong Zhou | 86 Hari | Memberikan ketenangan melayang di angkasa tinggi tanpa pusing | 8.9 MSS (890 LSS) / liang |
| 24 | **Sulur Duri Emas Purba** *(Ancient Golden Thorn Vine)* | Sulur Merambat | Xixuan Zhou | 90 Hari | Bahan cambuk emas tahan patah senjata sharp | 9.4 MSS (940 LSS) |
| 25 | **Bambu Bintang Perak** *(Silver Star Bamboo)* | Bambu Spirit | Tiangong Zhou | 100 Hari | Bahan antena transmisi sinyal piringan formasi jarak jauh | 10.8 MSS (1.080 LSS) |

---

### 🌿 Tier 6 – Ranah Tongtian (Heaven Connecting Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Buah Giok Leluhur** *(Ancestral Jade Fruit)* | Pohon Buah Spirit | Shenmu Zhou (Sanctum Pohon Leluhur) | 150 Hari | Bahan baku utama Pill Terobos Nadi Giok (Breakthrough Realm 5–6) | 35 MSS (0.35 HSS) |
| 2 | **Anggrek Jiwa Kristal Es Purba** *(Ancient Ice Crystal Orchid)* | Bunga Spirit | Beihan Zhou (Danau Es Cermin Jiwa) | 120 Hari | Mencegah Qi Deviation tingkat berat saat penerobosan Ranah Tongtian | 30 MSS (0.3 HSS) |
| 3 | **Bambu Pedang Naga** *(Dragon Sword Bamboo)* | Bambu Spirit | Canglong Zhou | 140 Hari | Bahan lebur pedang spirit tiada tanding ber-Qi Niat Pedang Azure Dragon | 40 MSS (0.4 HSS) |
| 4 | **Teh Nirwana Api Berapi** *(Fiery Nirvana Tea)* | Daun Teh Spirit | Chiyan Zhou (Kawah Kristal Api) | 160 Hari | Memberikan kekebalan Kerusakan Api 80% selama 24 jam & memicu pembakaran Dantian murni | 45 MSS (0.45 HSS) / liang |
| 5 | **Bunga Moko Gurun Suci** *(Sacred Desert Moko Flower)* | Bunga Spirit | Xixuan Zhou | 130 Hari | Bahan utama jimat pelindung jiwa purba Grade 6 & Pil Transformasi Tubuh Emas | 32 MSS (0.32 HSS) |
| 6 | **Ginseng Naga Emas 3.000 Tahun** *(3000-Year Golden Dragon Ginseng)* | Akar Herbal | Zhonghua Zhou | 180 Hari | Memulihkan Dantian hancur total & memberikan akumulasi QiCap +10% | 50 MSS (0.5 HSS) |
| 7 | **Lotus Jiwa Samudra Purba** *(Ancient Sea Soul Lotus)* | Lotus Spirit | Canghai Zhou | 135 Hari | Bahan utama Pil Penyelamat Jiwa Tenggelam di laut purba | 34 MSS (0.34 HSS) |
| 8 | **Jamur Petir Tribulasi Purba** *(Ancient Tribulation Thunder Mushroom)* | Jamur Spirit | Juejing Zhou | 145 Hari | Bahan ramuan peredam kejutan petir tribulasi Realm 6 | 38 MSS (0.38 HSS) |
| 9 | **Pohon Kayu Cendana Spirit Purba** *(Ancient Spirit Sandalwood Tree)* | Pohon Spirit | Zhonghua Zhou | 200 Hari | Bahan dupa meditasi penembus batas wawasan Dao | 55 MSS (0.55 HSS) |
| 10 | **Teh Bintang Awan Melayang** *(Floating Cloud Star Tea)* | Daun Teh Spirit | Tiangong Zhou | 155 Hari | Meningkatkan kontrol penerbangan Kapal Terbang dalam badai | 42 MSS (0.42 HSS) / liang |
| 11 | **Rumput Sisik Serpent Purba** *(Ancient Serpent Scale Grass)* | Rumput Spirit | Youming Zhou | 125 Hari | Bahan racikan minyak penangkal racun tingkat raja iblis | 31 MSS (0.31 HSS) |
| 12 | **Akar Keladi Jiwa Purba** *(Ancient Soul Caladium Root)* | Akar Herbal | Youming Zhou | 130 Hari | Bahan baku tinta jimat penyegel jiwa iblis Realm 6 | 33 MSS (0.33 HSS) |
| 13 | **Sulur Jiwa Terikat Emas** *(Golden Bound Soul Vine)* | Sulur Merambat | Xixuan Zhou | 140 Hari | Bahan jaring penangkap beast raksasa Realm 6 | 36 MSS (0.36 HSS) |
| 14 | **Buah Teratai Kristal Api** *(Fire Crystal Lotus Fruit)* | Pohon Buah Spirit | Chiyan Zhou | 165 Hari | Buah pemicu evolusi elemen api pada spirit beast | 44 MSS (0.44 HSS) |
| 15 | **Bunga Seruni Bulan Es** *(Ice Moon Seruni Flower)* | Bunga Spirit | Beihan Zhou | 138 Hari | Bahan resep Pil Pemurni Aliran Jiwa Es Murni | 35 MSS (0.35 HSS) |
| 16 | **Jamur Darah Naga Purba** *(Ancient Dragon Blood Mushroom)* | Jamur Spirit | Canglong Zhou | 142 Hari | Memunculkan fisik pertahanan sisik naga sementara | 37 MSS (0.37 HSS) |
| 17 | **Teh Giok Bambu Purba** *(Ancient Jade Bamboo Tea)* | Daun Teh Spirit | Shenmu Zhou | 150 Hari | Penyenang jiwa saat menghadapi tribulasi mental | 41 MSS (0.41 HSS) / liang |
| 18 | **Pohon Kayu Ironwood Purba** *(Ancient Ironwood Tree)* | Pohon Spirit | Canglong Zhou | 190 Hari | Bahan baku struktur utama Benteng Melayang Tiangong | 52 MSS (0.52 HSS) |
| 19 | **Rumput Karang Bintang Purba** *(Ancient Star Coral Grass)* | Rumput Spirit | Canghai Zhou | 132 Hari | Bahan perekat piringan formasi pelindung kota pelabuhan | 33.5 MSS (0.335 HSS) |
| 20 | **Lotus Pelangi Mitos** *(Mythic Rainbow Lotus)* | Lotus Spirit | Shenmu Zhou | 170 Hari | Bahan obat penyeimbang 5 elemen dalam Dantian | 48 MSS (0.48 HSS) |

---

### 🌿 Tier 7 – Ranah Faxiang (Avatar Manifestation Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Pohon Induk Wanling Spirit** *(Wanling Mother Tree Branch)* | Pohon Spirit | Shenmu Zhou (Kerajaan Wanling) | 300 Hari | Bahan baku Artefak Jiwa Avatar & Pil Penjelmaan Avatar Dao | 1.5 HSS (150 MSS) |
| 2 | **Buah Teratai Samudra Bintang** *(Star Ocean Lotus Fruit)* | Lotus Spirit | Canghai Zhou (Palung Bintang Giok) | 250 Hari | Membuka koordinat lautan jiwa & memperluas kapasitas Avatar Faxiang +30% | 1.2 HSS (120 MSS) |
| 3 | **Teh Bintang Sembilan Naga** *(Nine Dragon Star Tea)* | Daun Teh Spirit | Zhonghua Zhou | 280 Hari | Menyuntikkan kehendak Kekaisaran Purba, meningkatkan Hit Chance Avatar +25% | 1.8 HSS (180 MSS) / liang |
| 4 | **Jamur Retakan Ruang Purba** *(Void Crack Ancient Mushroom)* | Jamur Spirit | Juejing Zhou | 220 Hari | Bahan piringan formasi pemindah ruang antar-wilayah jarak jauh | 1.4 HSS (140 MSS) |
| 5 | **Rumput Petir Tribulasi Es** *(Ice Tribulation Thunder Grass)* | Rumput Spirit | Beihan Zhou / Juejing Zhou | 260 Hari | Bahan peredam serangan Tribulasi Petir Es Realm 7 (-40% Damage Tribulasi) | 1.6 HSS (160 MSS) |
| 6 | **Ginseng Jiwa Purba 5.000 Tahun** *(5000-Year Ancient Soul Ginseng)* | Akar Herbal | Shenmu Zhou | 320 Hari | Bahan baku utama Pil Pembuka Avatar Faxiang Realm 7 | 2.2 HSS (220 MSS) |
| 7 | **Lotus Api Neraka Sembilan Layer** *(Nine Layer Hellfire Lotus)* | Lotus Spirit | Chiyan Zhou / Youming Zhou | 270 Hari | Bahan utama Pil Pembakar Jiwa & Pemurni Dantian Iblis | 1.7 HSS (170 MSS) |
| 8 | **Bambu Bintang Ungu Mitos** *(Mythic Purple Star Bamboo)* | Bambu Spirit | Tiangong Zhou | 290 Hari | Bahan baku pilar utama Menara Navigasi Bintang Tiangong | 1.9 HSS (190 MSS) |
| 9 | **Bunga Seruni Moko Purba** *(Ancient Sacred Moko Seruni)* | Bunga Spirit | Xixuan Zhou | 240 Hari | Bahan jimat pelindung jiwa mati suri saat terdesak | 1.35 HSS (135 MSS) |
| 10 | **Teh Embun Es Cermin Jiwa** *(Soul Mirror Ice Dew Tea)* | Daun Teh Spirit | Beihan Zhou | 260 Hari | Meningkatkan kejernihan jiwa saat membentuk Avatar Faxiang | 1.55 HSS (155 MSS) / liang |
| 11 | **Akar Keladi Naga Hitam** *(Black Dragon Caladium Root)* | Akar Herbal | Youming Zhou | 250 Hari | Bahan cat pelindung zirah dari asam perusak senjata | 1.45 HSS (145 MSS) |
| 12 | **Sulur Jiwa Emas Purba** *(Ancient Golden Soul Vine)* | Sulur Merambat | Xixuan Zhou | 280 Hari | Bahan tali pengikat beast tingkat Raja Naga | 1.85 HSS (185 MSS) |
| 13 | **Buah Batu Bintang Purba** *(Ancient Starstone Fruit)* | Pohon Buah Spirit | Tiangong Zhou | 310 Hari | Bahan penggerak Benteng Melayang Tiangong Utama | 2 HSS (200 MSS) |
| 14 | **Jamur Darah Sembilan Naga** *(Nine Dragon Blood Mushroom)* | Jamur Spirit | Canglong Zhou | 265 Hari | Bahan racikan Pil Pemulih Vitalitas Avatar yang hancur | 1.65 HSS (165 MSS) |
| 15 | **Pohon Kayu Cendana Emas Purba** *(Ancient Golden Sandalwood Tree)* | Pohon Spirit | Zhonghua Zhou | 350 Hari | Kayu pembuat takhta kekaisaran penarik Qi Langit & Bumi | 2.5 HSS (250 MSS) |
| 16 | **Rumput Sisik Naga Azure Purba** *(Ancient Azure Dragon Scale Grass)* | Rumput Spirit | Canglong Zhou | 245 Hari | Bahan penyepuhan pedang pusaka sekte utama | 1.4 HSS (140 MSS) |
| 17 | **Lotus Samudra Gelap Purba** *(Ancient Dark Sea Lotus)* | Lotus Spirit | Canghai Zhou | 275 Hari | Bahan obat penawar racun monster laut purba Realm 7 | 1.75 HSS (175 MSS) |
| 18 | **Teh Niat Pedang Bambu Langit** *(Celestial Bamboo Sword Tea)* | Daun Teh Spirit | Shenmu Zhou (Hutan Bambu Giok) | 300 Hari | Seduhan pemicu kehendak Niat Pedang Bambu Langit Mutlak | 2.1 HSS (210 MSS) / liang |
| 19 | **Akar Ginseng Es Purba 5.000 Tahun** *(5000-Year Ancient Ice Ginseng)* | Akar Herbal | Beihan Zhou | 310 Hari | Bahan utama Pil Pembeku Dantian Sementara penyelamat nyawa | 2.15 HSS (215 MSS) |
| 20 | **Bunga Mawar Api Purba** *(Ancient Fire Rose Flower)* | Bunga Spirit | Chiyan Zhou | 255 Hari | Bahan ramuan pemurni nyala api surga Alkemis Tier 7 | 1.5 HSS (150 MSS) |

---

### 🌿 Tier 8 – Ranah Shenhuang (Divine Emperor Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Buah Domain Dewa Primordial** *(Primordial God Domain Fruit)* | Pohon Buah Spirit | Shenmu Zhou / Tiangong Zhou | 500 Hari | Inti racikan Pil Pembuka Domain Shenhuang (Menjamin pembentukan Domain Elemen) | 8 HSS (800 MSS) |
| 2 | **Kayu Pohon Shenmu Purba** *(Ancient Shenmu Core Wood)* | Pohon Spirit | Shenmu Zhou (Pohon Induk Shenmu) | 600 Hari | Bahan pembuat Kuali Alkimia Grade 8 & Struktur Kapal Terbang Kelas Battleship Utama | 12 HSS (1200 MSS) |
| 3 | **Teh Abadi Hunyuan** *(Hunyuan Immortal Tea)* | Daun Teh Spirit | Di Mana Saja (Sangat Langka) | 450 Hari | Menghapus seluruh akumulasi Pill Toxin Dantian menjadi 0% seketika | 9 HSS (900 MSS) / liang |
| 4 | **Bunga Api Iblis Sembilan Neraka** *(Nine Hells Demon Fire Flower)* | Bunga Beracun | Youming Zhou | 480 Hari | Bahan resep Pil Pembalik Takdir Iblis & Pembakar Jiwa Musuh | 7.5 HSS (750 MSS) |
| 5 | **Lotus Bintang Laut Purba** *(Ancient Star Sea Lotus)* | Lotus Spirit | Canghai Zhou | 520 Hari | Bahan pembuat Zirah Pelindung Jiwa Bintang (Menolak 1x serangan mati) | 8.5 HSS (850 MSS) |
| 6 | **Ginseng Keabadian 10.000 Tahun** *(10000-Year Immortality Ginseng)* | Akar Herbal | Shenmu Zhou | 550 Hari | Memperpanjang usia kultivator +500 tahun & memulihkan organ hancur | 10 HSS (1000 MSS) |
| 7 | **Bambu Naga Emas Mitos** *(Mythic Golden Dragon Bamboo)* | Bambu Spirit | Canglong Zhou | 580 Hari | Bahan lebur Pedang Pusaka Mitos Grade 8 | 11 HSS (1100 MSS) |
| 8 | **Jamur Retakan Ruang Mitos** *(Mythic Void Crack Mushroom)* | Jamur Spirit | Juejing Zhou | 460 Hari | Bahan batu kunci piringan formasi gerbang teleportasi benua | 8.2 HSS (820 MSS) |
| 9 | **Teh Dao Bintang Kekaisaran** *(Imperial Star Dao Tea)* | Daun Teh Spirit | Zhonghua Zhou | 490 Hari | Memberikan pemahaman instan 1 hukum Domain Elemen | 8.8 HSS (880 MSS) / liang |
| 10 | **Akar Naga Hitam Purba 10.000 Tahun** *(10000-Year Black Dragon Root)* | Akar Herbal | Youming Zhou | 510 Hari | Bahan pembuatan obat pemurni racun kutukan iblis purba | 8.4 HSS (840 MSS) |
| 11 | **Sulur Ikat Jiwa Dewa** *(God Soul Binding Vine)* | Sulur Merambat | Tiangong Zhou / Shenmu Zhou | 530 Hari | Bahan cambuk pusaka segel dewa iblis Realm 8 | 8.7 HSS (870 MSS) |
| 12 | **Buah Teratai Es Mitos** *(Mythic Ice Lotus Fruit)* | Pohon Buah Spirit | Beihan Zhou | 540 Hari | Buah penyegar Qi (+5.000.000 Qi) & penawar panas Dantian | 9.5 HSS (950 MSS) |
| 13 | **Bunga Seruni Emas Mitos** *(Mythic Golden Seruni Flower)* | Bunga Spirit | Xixuan Zhou | 470 Hari | Bahan pembuat jimat pelindung domain dari kehancuran | 7.8 HSS (780 MSS) |
| 14 | **Pohon Kayu Cendana Dewa** *(God Sandalwood Tree Wood)* | Pohon Spirit | Zhonghua Zhou | 620 Hari | Bahan Kuali Alkimia Dewa penangkal ledakan kuali total | 13 HSS (1300 MSS) |
| 15 | **Rumput Petir Tribulasi Dewa** *(God Tribulation Thunder Grass)* | Rumput Spirit | Juejing Zhou | 500 Hari | Bahan jimat peredam 60% serangan Tribulasi Petir Realm 8 | 9.2 HSS (920 MSS) |

---

### 🌿 Tier 9 – Ranah Hunyuan & Fei Sheng (Immortal / Ascendant Plants)
| # | Nama Tanaman | Kategori / Jenis | Wilayah Asal | Standar Waktu Tumbuh | Utama Kegunaan / Efek | Harga Pasaran Standar |
|---|---|---|---|---|---|---|
| 1 | **Buah Dewa Hunyuan Purba** *(Primordial Hunyuan Divine Fruit)* | Pohon Buah Spirit | Shenmu Zhou (Sanctum Pohon Induk) | 1000 Hari | Bahan resep utama Pil Kenaikan Abadi (Fei Sheng Dan) — Peluang lolos Tribulasi +50% | 5 ASS (50 HSS / Rumah Lelang Wanbao) |
| 2 | **Teh Dao Abadi Primordial** *(Primordial Immortal Dao Tea)* | Daun Teh Spirit | Dunia Kecil Gantungan Giok / Shenmu | 800 Hari | Menyatu penuh dengan kehendak Dewa Primordial Hunyuan, memicu pemahaman Dao Mutlak | 3.5 ASS (35 HSS) / liang |
| 3 | **Pohon Bintang Teratai Langit** *(Celestial Lotus Star Tree)* | Pohon Spirit | Tiangong Zhou / Juejing Zhou | 1200 Hari | Bahan konstruksi Artefak Kayu Grade 9 & Istana Melayang Abadi | 6 ASS (60 HSS) |
| 4 | **Rebung Bambu Purba Hunyuan** *(Hunyuan Ancient Bamboo Shoot)* | Bambu Spirit | Shenmu Zhou (Hutan Bambu Giok Layer III) | 900 Hari | Menembus batas Dantian, memberikan QiCap tambahan +10.000.000 permanen | 4 ASS (40 HSS) |
| 5 | **Ginseng Keabadian Jiwa Purba** *(Immortal Soul Ancient Ginseng)* | Akar Herbal | Zhonghua Zhou / Shenmu Zhou | 1500 Hari | Menghidupkan kembali kultivator yang telah gugur fisik (selama Jiwa Abadi belum hancur) | 7.5 ASS (75 HSS) |
| 6 | **Lotus Dewa Primordial Hunyuan** *(Primordial Hunyuan Divine Lotus)* | Lotus Spirit | Shenmu Zhou | 1100 Hari | Bahan pembuat Dantian Hunyuan Abadi (Mencegah kematian akibat kehancuran Dantian) | 6.5 ASS (65 HSS) |
| 7 | **Bunga Api Surga Mitos Hunyuan** *(Hunyuan Heavenly Fire Flower)* | Bunga Spirit | Chiyan Zhou | 950 Hari | Bahan resep Pil Pembakar Takdir Abadi & Pemurni Api Dewa | 4.5 ASS (45 HSS) |
| 8 | **Jamur Retakan Ruang Hunyuan** *(Hunyuan Void Crack Mushroom)* | Jamur Spirit | Juejing Zhou | 850 Hari | Bahan pembuat Piringan Formasi Teleportasi Antar-Dunia | 3.8 ASS (38 HSS) |
| 9 | **Akar Jiwa Dewa Primordial** *(Primordial God Soul Root)* | Akar Herbal | Youming Zhou / Shenmu Zhou | 1300 Hari | Bahan pemurni jiwa abadi dari segala racun & kutukan tingkat dewa | 5.5 ASS (55 HSS) |
| 10 | **Sulur Teratai Abadi Hunyuan** *(Hunyuan Immortal Lotus Vine)* | Sulur Merambat | Canghai Zhou / Shenmu Zhou | 1050 Hari | Tali pengikat makhluk tingkat dewa primordial & penahan runtuhnya benua | 4.8 ASS (48 HSS) |

---

## 5. Material Kustom & Resep Spesialis Pertanian Regional

### 5.1 Material & Resep Hutan Bambu Giok
Material langka dari Hutan Bambu Giok (`02_SHENMU_ZHOU.md` §2.6):

| Nama Material / Resep | Jenis Profesi / Kegunaan | Tier Bahan | Efek / Hasil Olahan |
|---|---|---|---|
| **Bambu Roh Hijau** *(Green Spirit Bamboo)* | Penempaan / Kerajinan | Tier 1–2 | Bahan baku pedang kayu spirit, tongkat formasi, dan perabotan kebun obat. |
| **Embun Giok** *(Jade Dew)* | Alkimia / Herbal | Tier 1 | Bahan pencampur ramuan pemulihan ringan (+15 HP, meredakan haus). |
| **Rumput Penjernih Qi** *(Qi Cleansing Grass)* | Alkimia / Herbal | Tier 1–2 | Bahan baku *Pil Penjernih Qi* (Meredakan konsumsi Qi kabut -50% selama 1 jam). |
| **Serat Urat Giok** *(Jade Vein Fiber)* | Jimat / Formasi | Tier 3–4 | Bahan baku benang piringan formasi dan kertas jimat pelindung jiwa. |
| **Pecahan Pedang Giok** *(Jade Sword Shard)* | Penempaan / Niat Pedang | Tier 4–5 | Bahan campuran peleburan zirah giok dan penelitian inskripsi pedang kuno. |
| **Benih Leluhur Giok** *(Ancestral Jade Seed)* | Berkebun / Alkimia | Tier 6–7 | Benih purba langka untuk ditanam di Tanah Spirit Grade 4 (Menghasilkan *Buah Giok Leluhur*). |
| **Inti Roh Purba** *(Ancient Spirit Core)* | Alkimia / Penempaan | Tier 6–7 | Bahan baku utama *Pill Terobos Nadi Giok* (Breakthrough Realm 5–6) dan Artefak Jiwa. |

### 5.2 Material & Resep Ekspansi Shenmu Zhou
Material kustom dari lokasi-lokasi baru Shenmu Zhou (`02_SHENMU_ZHOU.md` §2.13–2.24):

| Nama Material / Resep | Jenis Profesi / Kegunaan | Tier Bahan | Efek / Hasil Olahan |
|---|---|---|---|
| **Akar Wangi Spiritual** *(Fragrant Root)* | Alkimia / Herbal | Tier 1–2 | Bahan racikan Pil Penenang Jiwa & pakan khusus serangga spirit. |
| **Sutra Spiritual Qingshang** *(Qingshang Spirit Silk)* | Penempaan / Kerajinan | Tier 2–3 | Bahan kain pelindung Qi ringan, jubah perjalanan tahan gesekan, dan perban herbal. |
| **Kayu Lumu Terdaftar** *(Registered Lumu Wood)* | Kerajinan / Formasi | Tier 2–3 | Bahan baku utama perkakas kebun, busur kayu spirit, dan komponen piringan formasi. |
| **Mineral Penghantar Guruh** *(Thunder Conductor Mineral)* | Penempaan / Formasi | Tier 3–4 | Komponen piringan formasi petir dan campuran leburan zirah tahan kilat. |
| **Anyaman Akar Spiritual** *(Spiritual Root Weave)* | Kerajinan Penjelajah | Tier 2–3 | Bahan baku tali panjat ber-Qi tinggi, jembatan gantung portabel, dan jaring penjinak beast. |
| **Spora Bunga Mayat** *(Corpse Flower Spores)* | Toksikologi / Alkimia | Tier 4–5 | Bahan baku racun biologis pelumpuh dan racikan obat pemurni sampel purba. |

### 5.3 Material & Resep Dataran Makam Kekaisaran
Material bersejarah dan spiritual dari Dataran Makam Kekaisaran (`03_ZHONGHUA_ZHOU.md` §2.5):

| Nama Material / Resep | Jenis Profesi / Kegunaan | Tier Bahan | Efek / Hasil Olahan |
|---|---|---|---|
| **Batu Prasasti Kuno** *(Ancient Stele Stone)* | Formasi / Penempaan | Tier 1–2 | Bahan baku penyusun piringan formasi segel dan restorasi jalan batu kekaisaran. |
| **Kayu Pinus Tua** *(Old Pine Wood)* | Kerajinan / Penempaan | Tier 1–2 | Bahan perabotan kayu spirit tahan cuaca dan tiang penyangga lorong makam. |
| **Pecahan Formasi** *(Array Shard)* | Formasi / Jimat | Tier 3–4 | Komponen penarik energi Qi untuk piringan formasi pertahanan portabel. |
| **Logam Pemakaman** *(Mausoleum Metal)* | Penempaan Besi | Tier 3–4 | Bahan campuran pembuatan zirah pengawal dan senjata pembunuh roh. |
| **Fragmen Senjata Kuno** *(Ancient Weapon Shard)* | Penempaan / Penelitian | Tier 4–5 | Bahan lebur besi tua ber-Qi tinggi untuk menempa ulang senjata bersertifikat kekaisaran. |
| **Catatan Dinasti** *(Dynasty Record Scroll)* | Penelitian / Quest | Tier 4–5 | Bahan analisis sejarah kuno yang dijual ke rumah lelang atau diserahkan ke peneliti. |
| **Inti Konstruksi** *(Construct Core)* | Formasi / Penempaan | Tier 4–5 | Inti penggerak boneka penjaga batu dan formasi otomatis makam. |
| **Segel Kekaisaran Rusak** *(Damaged Imperial Seal)* | Identifikasi / Quest | Tier 5–6 | Barang kuno bernilai tinggi untuk membuktikan klaim silsilah dinasti atau membuka rahasia segel. |
