# 🦁 Xuantian World — Bestiarium & Spirit Beast 10 Wilayah

> **Modul:** 21 — Bestiary
> **Prinsip:** Anti-Cheat Enforced — Ecosystem Danger Scaling — Verified Loot Logging
> **Rujukan:** `00_CORE_RULES_AI_GM.md` (aturan GM), `14_CRAFTING_AND_PROFESSIONS_SYSTEM.md` (profesi & bahan), `18_ECONOMY_SYSTEM.md` (harga & origin log), `20_COMBAT_SYSTEM.md` (combat stats), `33_PERGURUAN_BEAST_QINGLING.md` (penjinakan beast), `50_SPECIAL_ITEMS.md` (item legendaris), `INDEX.md`

---

## 0. Filosofi Sistem Bestiarium

Spirit Beast dan monster di Xuantian World bukan sekadar target buruan pasif — mereka adalah entitas hidup yang mengisi ekosistem 10 Wilayah Utama. Kemunculan monster di perjalanan (*Ambush / Encounter*) dihitung otomatis oleh AI GM berdasarkan tingkat bahaya wilayah dan waktu perjalanan in-game.

### Aturan Emas Anti-Cheat & Aturan Tunggangan (Mount Rules)
- **Status Liar Tetap Berbahaya:** Seluruh Spirit Beast jenis tunggangan (Serigala, Harimau, Singa, Panther, dsb.) di alam liar bersifat liar, teritorial, dan **SANGAT BERBAHAYA**. Mereka akan menyerang pembudidaya jika diganggu.
- **Syarat Wajib Ditunggangi:** Spirit Beast **TIDAK BISA** ditunggangi sebelum berhasil **Dijinakkan (Tamed)** melalui metode Kontrak Kesetaraan / Kontrak Penjinakan (`33_PERGURUAN_BEAST_QINGLING.md`).
- Kemunculan monster dan serangan mendadak (*Ambush*) TIDAK PERNAH dideklarasikan sepihak oleh player — dihitung AI GM berdasarkan Danger Modifier wilayah dan waktu perjalanan.
- Player **TIDAK BISA** menentukan sendiri jenis loot yang didapatkan dari monster — AI GM melempar peluang drop item berdasarkan formula resmi *setelah* monster benar-benar dikalahkan.
- Setiap loot bernilai yang didapatkan dari pemburuan Spirit Beast WAJIB dicatat di **Item Origin Log** (`18_ECONOMY_SYSTEM.md`) sebelum dapat dijual, ditempa, atau digunakan untuk breakthrough.

---

## 1. Klasifikasi Tier Spirit Beast & Tingkat Bahaya

Spirit Beast di Xuantian World diklasifikasikan ke dalam 9 Tier yang setara dengan 9 Ranah Kultivasi. Khusus untuk bangsa Naga China (Loong / Long) dan Spirit Beast Tunggangan (Serigala, Harimau, Singa, Panther, dsb.), hirarki evolusi membentang dari anak beast / beast muda di Tier 1–3, beast elit / raja tunggangan di Tier 4–6, hingga beast purba suci / mythical sovereign mount di Tier 7–9.

| Tier Beast | Setara Ranah Kultivasi | Tingkat Penjinakan | Karakteristik & Habitat Utama |
|---|---|---|---|
| **Tier 1 (Unggas/Binatang Spirit Muda/Chilong Muda)** | Lingquan Jing | Sangat Mudah | Unggas Hutan, Kelinci Spirit, Serigala Angin Muda, Panther Bayangan Muda |
| **Tier 2 (Beast Hutan Terlatih/Chilong)** | Kaimai Jing | Mudah | Harimau Taring Besi, Ular Hijau Kayu, Bangau Zamrud, Serigala/Panther Tunggangan Terlatih |
| **Tier 3 (Beast Spirit Elit/Panlong)** | Ningyuan Jing | Sedang | Serigala Salju Es, Beruang Spirit Kayu, Elang Badai, Macan Tutul Petir, Naga Panlong |
| **Tier 4 (Raja Beast Regional/Jiaolong)** | Lingyi Jing | Sulit | Naga Laut Bersisik Giok, Singa Bintang, Harimau Taring Awan, Jiaolong Sungai |
| **Tier 5 (Beast Kuno Berkesadaran/Shenlong)** | Xuantian Jing | Sangat Sulit | Burung Feniks Api Chiyan, Kura-kura Batu Purba, Shenlong Spirit, Singa Surai Purba |
| **Tier 6 (Bentuk Bencana Alam/Dilong & Fucanglong)** | Tongtian Jing | Ekstrem | Naga Terbang Langit Tiangong, Serpent Retakan Ruang, Dilong Urat Bumi, Serigala Raja Purba |
| **Tier 7–9 (Beast Mythical Purba/Qinglong, Yinglong, Tianlong, Zhulong)** | Faxiang Jing ke atas | Mitos / Kuno | Rajawali Purba Hunyuan, Qilin Kayu Shenmu Purba, Qinglong Purba, Harimau/Singa Raja Purba Hunyuan |

---

## 2. Formula & Penentuan Sistem Drop Loot

Drop item dievaluasi oleh AI GM **setelah** pertempuran selesai. Perhitungan peluang mendapatkan item loot mengikuti formula standar Xuantian World di bawah ini:

$$\text{PeluangDrop(Item)} = \text{BaseRate(Rarity)} \times \text{TierModifier(TierBeast)} - (\text{KerusakanJasad} \times 10\%)$$

### Tabel Rarity & Base Drop Rate Item

| Rarity Item | Base Drop Rate | Contoh Jenis Item |
|---|---|---|
| **Umum (Common)** | 70% – 90% | Daging spirit, bulu, kulit, taring biasa, cangkang, surai, sisik naga muda |
| **Jarang (Rare)** | 30% – 50% | Inti Spirit Beast (Tier 1–3), empedu, kelenjar racun, taring raja tunggangan |
| **Langka (Epic)** | 10% – 25% | Sisik naga dewasa, kulit tunggangan elit, Inti Beast (Tier 4–6), kristal naga |
| **Legendaris (Mythic)** | 1% – 5% | Inti Beast Purba (Tier 7–9), Kristal Ruang Purba, Mutiara Qinglong / Zhulong Hunyuan |

---

## 3. Spirit Beast Lintas Wilayah (Cross-Region Beasts)

Beast lintas wilayah adalah entitas spiritual yang dapat ditemukan mengembara di perbatasan, jalur perdagangan kapal terbang, maupun di seluruh 10 Wilayah Utama.

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Burung Merpati Pos Spirit | Unggas Udara | Tier 1 | Bulu Merpati Spirit (85% (Umum))<br>Daging Spirit (75% (Umum)) |
| Kuda Spirit Langkah Cepat | Mamalia / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Kuda Spirit (80% (Umum))<br>Inti Qi Muda (35% (Jarang)) |
| Serigala Pengembara Lintas Perbatasan | Canid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Taring Serigala Spirit (80% (Umum))<br>Kulit Serigala Spirit (75% (Umum)) |
| Rajawali Badai Langit | Unggas Udara | Tier 3 | Sayap Besi Spirit (75% (Umum))<br>Inti Beast Tier 3 (30% (Jarang)) |
| Naga Chilong Pengembara Awan | Naga Lintas Wilayah | Tier 3 | Sisik Chilong Awan (75% (Umum))<br>Tanduk Chilong (35% (Jarang))<br>Inti Naga Tier 3 (30% (Jarang)) |
| Harimau Taring Besi Lintas Rimba | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Harimau Taring Besi (75% (Umum))<br>Taring Besi Spirit (35% (Jarang)) |
| Paus Udara Melayang | Aquatic / Aerial | Tier 4 | Kulit Paus Udara (70% (Umum))<br>Inti Air-Ruang Tier 4 (20% (Langka)) |
| Naga Jiaolong Sungai Seribu Li | Dragonkin Lintas Sungai | Tier 4 | Sisik Jiaolong Sungai (65% (Umum))<br>Darah Naga Spirit (20% (Langka)) |
| Singa Surai Emas Pengembara | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Singa Emas (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Serpent Raksasa Retakan Ruang | Anomali Purba | Tier 6 | Kristal Ruang Purba (60% (Umum))<br>Darah Beast Purba (15% (Langka))<br>Inti Ruang Tier 6 (5% (Legendaris)) |
| Naga Shenlong Awan Kuno | Naga Awan Lintas Langit | Tier 6 | Sisik Shenlong Awan (55% (Umum))<br>Darah Naga Murni (12% (Langka))<br>Inti Naga Tier 6 (8% (Langka)) |
| Rajawali Purba Hunyuan | Beast Mythical | Tier 9 | Bulu Suci Langit (50% (Umum))<br>Inti Rajawali Hunyuan (2% (Legendaris)) |

---

## 4. Katalog Spirit Beast 10 Wilayah Utama

---

### 4.1 🌿 Shenmu Zhou (Kayu & Hutan Purba)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Kelinci Spirit Daun Hijau | Mamalia Kecil | Tier 1 | Bulu Kelinci Spirit (85% (Umum))<br>Daging Spirit (75% (Umum)) |
| Ulat Sutra Spiritual | Serangga Spirit | Tier 1 | Benang Sutra Spirit (85% (Umum))<br>Kepompong Spirit (40% (Jarang)) |
| Kelinci Giok Roh | Mamalia Spirit | Tier 1 | Bulu Kelinci Giok (85% (Umum))<br>Daging Spirit (75% (Umum)) |
| Unggas Hutan Shenmu | Unggas Hutan | Tier 1 | Bulu Unggas Spirit (80% (Umum))<br>Telur Spirit (40% (Jarang)) |
| Anak Naga Sulur Kayu (Chilong Muda) | Reptil Naga | Tier 1 | Sisik Naga Kayu Muda (85% (Umum))<br>Darah Naga Spirit Muda (35% (Jarang)) |
| **Serigala Bayangan Kabut Hijau** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Kabut (85% (Umum))<br>Taring Serigala Spirit (35% (Jarang)) |
| Bangau Bulu Zamrud | Unggas Udara | Tier 2 | Bulu Zamrud (80% (Umum))<br>Inti Kayu Tier 2 (35% (Jarang)) |
| Ular Hijau Sulur Kayu | Reptil Kayu | Tier 2 | Kulit Ular Kayu (75% (Umum))<br>Bisa Kayu Ringan (35% (Jarang)) |
| Chilong Tunas Kayu | Naga Kayu Muda | Tier 2 | Sisik Tunas Kayu (80% (Umum))<br>Tanduk Chilong Tunas (35% (Jarang))<br>Inti Kayu Tier 2 (35% (Jarang)) |
| **Panther Urat Giok Rimba** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Giok (80% (Umum))<br>Cakar Urat Giok (35% (Jarang)) |
| Cacing Spiritual Akar Merah | Annelida Spirit | Tier 2 | Lendir Akar Merah (75% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Ular Bambu Bercorak | Reptil Bambu | Tier 2 | Bisa Ular Bambu (75% (Umum))<br>Kantung Racun Bambu (35% (Jarang))<br>Kulit Ular (35% (Jarang)) |
| Kera Batu Hijau | Primata Hutan | Tier 2 | Batu Mineral Giok (75% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Babi Hutan Taring Bambu | Mamalia Darat | Tier 2 | Taring Bambu (80% (Umum))<br>Daging Spirit (75% (Umum)) |
| Serigala Angin Shenmu | Predator Darat | Tier 2 | Taring Serigala Spirit (75% (Umum))<br>Inti Tier 2 (30% (Jarang)) |
| Beruang Spirit Elemen Kayu | Spirit Beast / Tank | Tier 3 | Kulit Tebal (75% (Umum))<br>Empedu Beruang Spirit (35% (Jarang))<br>Inti Kayu Tier 3 (30% (Jarang)) |
| Rusa Tanduk Kristal Spirit | Herbivora Spirit | Tier 3 | Tanduk Kristal Spirit (70% (Umum))<br>Darah Spirit Murni (30% (Jarang)) |
| Rusa Kabut Giok | Herbivora Spirit | Tier 3 | Tanduk Obat Giok (70% (Umum))<br>Darah Spirit Murni (30% (Jarang)) |
| Kera Pembawa Benih Obat | Primata Spirit | Tier 3 | Benih Obat Spirit Random (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Bambu Spirit | Naga Hutan Terbelit | Tier 3 | Sisik Panlong Bambu (75% (Umum))<br>Darah Murni Naga Kayu (30% (Jarang))<br>Inti Kayu Tier 3 (30% (Jarang)) |
| **Macan Tutul Dahan Shenmu** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Tutul Dahan (75% (Umum))<br>Cakar Kayu Spirit (30% (Jarang)) |
| Serigala Giok Berkabut | Predator Kabut | Tier 3 | Bulu Serigala Giok (75% (Umum))<br>Inti Kayu Tier 3 (30% (Jarang)) |
| Belalang Pedang Bambu | Serangga Penyerang | Tier 3 | Sayap Bilah Bambu (75% (Umum))<br>Cakar Pedang (35% (Jarang)) |
| Kura-kura Tempurung Lumut Purba | Reptil Air/Darat | Tier 4 | Tempurung Batu Kayu (70% (Umum))<br>Inti Kayu Tier 4 (20% (Langka)) |
| Jiaolong Sungai Shenmu | Naga Sungai Kayu | Tier 4 | Sisik Jiaolong Kayu (65% (Umum))<br>Empedu Jiaolong (20% (Langka))<br>Inti Naga Kayu Tier 4 (20% (Langka)) |
| **Harimau Taring Awan Hijau** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Awan Hijau (65% (Umum))<br>Taring Spirit Awan (20% (Langka)) |
| Laba-laba Sulur Pelumpuh | Serangga Spirit | Tier 4 | Sutra Pelumpuh Spirit (65% (Umum))<br>Bisa Laba-laba (20% (Langka)) |
| Laba-laba Urat Giok | Serangga Lorong | Tier 4 | Sutra Urat Giok (65% (Umum))<br>Inti Kayu Tier 4 (20% (Langka)) |
| Beruang Roh Bambu Hitam | Tank / Beast Elit | Tier 4 | Kulit Bambu Hitam (70% (Umum))<br>Empedu Beruang (20% (Langka))<br>Inti Tier 4 (18% (Langka)) |
| Elang Hijau Pelindung Kanopi | Unggas Udara | Tier 4 | Bulu Sayap Angin (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Harimau Dahan Shenmu | Predator Elit | Tier 5 | Taring Harimau Spirit (60% (Umum))<br>Inti Kayu Tier 5 (15% (Langka)) |
| **Serigala Raja Spirit Wansen** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 5 | Bulu Serigala Raja Wansen (60% (Umum))<br>Taring Raja Spirit (15% (Langka)) |
| Shenlong Kanopi Hijau | Naga Spirit Kanopi | Tier 5 | Sisik Shenlong Kanopi (60% (Umum))<br>Darah Murni Naga Kayu (15% (Langka))<br>Inti Naga Kayu Tier 5 (12% (Langka)) |
| Ular Sulur Sembilan Daun | Reptil Purba | Tier 5 | Sisik Sembilan Daun (60% (Umum))<br>Bisa Racun Shenmu (12% (Langka)) |
| Bunga Mayat Leluhur | Tumbuhan Purba / Boss | Tier 5 | Spora Bunga Mayat (60% (Umum))<br>Akar Purba Beracun (12% (Langka)) |
| Roh Bambu Tanpa Nama | Entitas Spiritual | Tier 5 | Esensi Jiwa Bambu (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Penjaga Leluhur Berakar | Boss Elit / Guardian | Tier 5 | Kayu Akar Purba (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Gajah Akar Kayu Purba | Beast Raksasa | Tier 6 | Gading Kayu Purba (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Singa Surai Daun Purba** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 6 | Surai Daun Purba (55% (Umum))<br>Inti Singa Kayu Tier 6 (10% (Langka)) |
| Ular Naga Giok Purba (Dilong Urat Kayu) | Naga Penguasa Tanah | Tier 6 | Sisik Naga Giok (55% (Umum))<br>Inti Naga Kayu Tier 6 (10% (Langka)) |
| Kura-kura Segel Gunung | Penjaga Kuno | Tier 6 | Tempurung Segel Giok (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Kelinci Bulan Shenmu | Beast Spirit Suci | Tier 6 | Bulu Bulan Spirit (55% (Umum))<br>Darah Suci Kayu (8% (Langka)) |
| Merak Bulu Pelangi Spirit | Unggas Spirit | Tier 7 | Bulu Pelangi Shenmu (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Akar Leluhur** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Akar Purba (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Trenggiling Pelindung Akar | Beast Pertahanan | Tier 7 | Sisik Pelindung Akar (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Fucanglong Hutan Purba Wansen | Naga Penjaga Harta | Tier 7 | Sisik Fucanglong Kayu (50% (Umum))<br>Kristal Urat Kayu Purba (15% (Langka))<br>Inti Naga Tier 7 (4% (Legendaris)) |
| Naga Kayu Hijau Purba (Yinglong Sayap Daun) | Naga Purba Bersayap | Tier 8 | Sisik Naga Kayu (45% (Umum))<br>Sayap Daun Yinglong (15% (Langka))<br>Inti Naga Tier 8 (2% (Legendaris)) |
| **Harimau Raja Pelindung Rimba Shenmu** | Sovereign Felid / Tunggangan [Wajib Dijinakkan] | Tier 8 | Kulit Harimau Raja Shenmu (45% (Umum))<br>Taring Harimau Purba (15% (Langka))<br>Inti Tier 8 (2% (Legendaris)) |
| Feniks Kayu Penyeimbang Alam | Feniks Spirit | Tier 8 | Bulu Abadi Feniks (40% (Umum))<br>Darah Feniks Kayu (2% (Legendaris)) |
| Naga Suci Qinglong Purba Shenmu Hunyuan | Primordial Mythical Dragon | Tier 9 | Sisik Qinglong Purba (40% (Umum))<br>Mutiara Qinglong Hunyuan (1% (Legendaris))<br>Inti Qinglong Tier 9 (1% (Legendaris)) |
| Qilin Kayu Shenmu Purba | Mythical Guardian | Tier 9 | Tanduk Qilin Purba (40% (Umum))<br>Darah Hunyuan (1% (Legendaris))<br>Inti Qilin Tier 9 (1% (Legendaris)) |

---

### 4.2 🏰 Zhonghua Zhou (Dataran Tengah & Kekaisaran)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Anjing Penjaga Halaman Spirit | Mamalia Kecil | Tier 1 | Kulit Anjing Spirit (85% (Umum)) |
| Gagak Batu | Unggas Spiritual | Tier 1 | Bulu Gagak Batu (85% (Umum))<br>Cakar Spirit (75% (Umum)) |
| Anak Naga Batu Perunggu (Chilong Tanah Muda) | Naga Tanah Muda | Tier 1 | Sisik Naga Batu Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Anjing Serigala Perunggu** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Kulit Anjing Perunggu (85% (Umum))<br>Taring Spirit (35% (Jarang)) |
| Babi Hutan Taring Besi | Mamalia Darat | Tier 2 | Taring Besi (80% (Umum))<br>Daging Spirit (75% (Umum)) |
| Roh Prajurit Gugur | Undead / Spirit | Tier 2 | Serpihan Baju Zirah Kuno (75% (Umum))<br>Kristal Jiwa Tier 2 (35% (Jarang)) |
| Chilong Karang Perunggu | Naga Karang Perunggu | Tier 2 | Sisik Naga Perunggu (80% (Umum))<br>Tanduk Perunggu Spirit (35% (Jarang)) |
| **Panther Batu Marmer Kekaisaran** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Marmer (80% (Umum))<br>Cakar Batu Spirit (35% (Jarang)) |
| Boneka Penjaga Rusak | Konstruksi Spiritual | Tier 2 | Pecahan Inti Konstruksi (75% (Umum))<br>Komponen Mekanis (35% (Jarang)) |
| Macan Besi Pegunungan | Predator Darat | Tier 3 | Kulit Macan Besi (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Ular Danau Leluhur | Reptil Danau | Tier 3 | Sisik Ular Danau (75% (Umum))<br>Empedu Ular (35% (Jarang)) |
| Panlong Tanah Pegunungan | Naga Terbelit Batu | Tier 3 | Sisik Panlong Batu (75% (Umum))<br>Inti Tanah Tier 3 (30% (Jarang)) |
| **Harimau Taring Perunggu Pegunungan** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Harimau Perunggu (75% (Umum))<br>Taring Perunggu (30% (Jarang)) |
| Elang Pengawal Bukit | Unggas Udara | Tier 3 | Bulu Elang Spirit (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Serigala Karang Sungai | Predator Air/Darat | Tier 3 | Taring Serigala Sungai (70% (Umum))<br>Kulit Serigala (35% (Jarang)) |
| Naga Sungai Longjiang (Jiaolong Air-Tanah) | Aquatic Dragon | Tier 4 | Sisik Naga Sungai (65% (Umum))<br>Inti Air Tier 4 (20% (Langka)) |
| **Singa Bintang Pelindung Tahta** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 4 | Surai Singa Bintang (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Prajurit Boneka Kekaisaran | Konstruksi Spiritual | Tier 4 | Inti Konstruksi Tier 4 (65% (Umum))<br>Pecahan Zirah Batu (18% (Langka)) |
| Pengawal Batu | Konstruksi Spiritual | Tier 4 | Batu Formasi Makam (65% (Umum))<br>Komponen Mekanis (18% (Langka)) |
| Banteng Tanduk Perunggu | Beast Raga Besi | Tier 4 | Tanduk Perunggu Spirit (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Beruang Pelindung Lembah | Tank / Elit | Tier 4 | Empedu Beruang (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Singa Bintang Kekaisaran | Spirit Beast Elit | Tier 5 | Surai Singa Bintang (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| **Serigala Karang Nadi Bumi** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 5 | Bulu Serigala Nadi Bumi (60% (Umum))<br>Inti Tanah Tier 5 (12% (Langka)) |
| Dilong Lembah Kekaisaran | Naga Perut Bumi | Tier 5 | Sisik Dilong Emas (60% (Umum))<br>Kristal Nadi Bumi (15% (Langka))<br>Inti Naga Tier 5 (12% (Langka)) |
| Ular Emas Pelindung Makam | Reptil Purba | Tier 5 | Sisik Emas Purba (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Roh Pelayan Makam | Roh Spiritual | Tier 5 | Fragmen Memori Kuno (60% (Umum))<br>Kristal Jiwa Tier 5 (15% (Langka)) |
| Penjaga Segel Tanpa Nama | Entitas Penjaga | Tier 5 | Batu Segel Kekaisaran (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Kuda Sembrani Langit | Beast Terbang | Tier 6 | Sayap Sembrani Spirit (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Macan Tutul Zirah Batu Emas** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Kulit Macan Zirah Emas (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Fucanglong Emas Perut Bumi | Naga Penjaga Tambang | Tier 6 | Sisik Naga Emas Perut Bumi (55% (Umum))<br>Inti Naga Tier 6 (8% (Langka)) |
| Bao-Penguasa Bukit Bintang | Predator Mitos | Tier 6 | Kulit Totem Bao (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Naga Emas Pelindung Dinasti (Shenlong Emas) | Imperial Dragon | Tier 7 | Sisik Naga Emas (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Kekaisaran Tianjing** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Tianjing (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Burung Hong Kekaisaran | Unggas Suci | Tier 7 | Bulu Hong Suci (50% (Umum))<br>Darah Spirit Hong (3% (Legendaris)) |
| Tianlong Bintang Emas Kekaisaran | Naga Langit Emas | Tier 8 | Sisik Tianlong Emas (45% (Umum))<br>Inti Naga Tier 8 (2% (Legendaris)) |
| **Singa Raja Emas Bintang Hunyuan** | Sovereign Lion / Tunggangan [Wajib Dijinakkan] | Tier 8 | Surai Singa Emas Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Kura-kura Bintang Sembilan Naga | Guardian Purba | Tier 8 | Tempurung Bintang Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Qilin Mas Kekaisaran | Mythical Beast | Tier 8 | Tanduk Qilin Emas (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Bintang Hunyuan Kekaisaran (Huanglong Primordial) | Primordial Imperial Dragon | Tier 9 | Sisik Bintang Hunyuan (40% (Umum))<br>Mutiara Huanglong Hunyuan (1% (Legendaris))<br>Inti Naga Bintang Tier 9 (1% (Legendaris)) |

---

### 4.3 🐉 Canglong Zhou (Pegunungan Pedang & Wind/Metal Qi)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Tupai Angin Puncak | Mamalia Kecil | Tier 1 | Bulu Tupai Spirit (85% (Umum)) |
| Kambing Tebing Taring Besi | Herbivora Tebing | Tier 1 | Tanduk Kambing Besi (80% (Umum)) |
| Anak Naga Taring Pedang (Chilong Perak Muda) | Naga Perak Muda | Tier 1 | Sisik Naga Perak Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Angin Taring Besi** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Besi (85% (Umum))<br>Taring Besi Spirit (35% (Jarang)) |
| Elang Angin Taring Besi | Unggas Udara | Tier 2 | Bulu Besi Spirit (80% (Umum))<br>Inti Angin Tier 2 (35% (Jarang)) |
| Monyet Pedang Tebing | Primata Tebing | Tier 2 | Cakar Monyet Tebing (75% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Chilong Besi Tebing Pedang | Naga Besi Tebing | Tier 2 | Sisik Chilong Besi (80% (Umum))<br>Tanduk Besi Naga (35% (Jarang)) |
| **Panther Bilah Perak Tebing** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Perak (80% (Umum))<br>Cakar Bilah Perak (35% (Jarang)) |
| Macan Tutul Petir Pegunungan | Predator Kilat | Tier 3 | Kulit Macan Tutul Petir (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Serigala Taring Logam | Predator Besi | Tier 3 | Taring Logam Spirit (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Bilah Angin | Naga Terbelit Angin | Tier 3 | Sisik Panlong Angin (75% (Umum))<br>Inti Angin Tier 3 (30% (Jarang)) |
| **Macan Tutul Petir Puncak Canglong** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Tutul Petir (75% (Umum))<br>Inti Petir Tier 3 (30% (Jarang)) |
| Naga Spirit Sisik Perak (Jiaolong Tebing Pedang) | Naga Pegunungan | Tier 4 | Sisik Perak Spirit (65% (Umum))<br>Inti Naga Tier 4 (20% (Langka)) |
| Gryphon Angin Puncak | Flying Beast | Tier 4 | Sayap Gryphon Spirit (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| **Harimau Pedang Badai Perak** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Perak (65% (Umum))<br>Taring Pedang Perak (20% (Langka)) |
| Ular Taring Pedang | Reptil Tajam | Tier 4 | Taring Pedang Spirit (65% (Umum))<br>Bisa Ular (18% (Langka)) |
| Elang Badai Logam | Unggas Badai | Tier 5 | Bulu Badai Besi (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Singa Taring Pedang Canglong | Predator Elit | Tier 5 | Surai Taring Pedang (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| **Singa Surai Pedang Besi Kuno** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Pedang Besi (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Shenlong Angin Besi Canglong | Naga Spirit Angin-Logam | Tier 5 | Sisik Shenlong Besi (60% (Umum))<br>Darah Murni Naga Perak (15% (Langka))<br>Inti Naga Tier 5 (12% (Langka)) |
| Beruang Besi Pembelah Batu | Tank Beast | Tier 6 | Cakar Besi Beruang (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Serigala Raja Badai Bintang** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Badai (55% (Umum))<br>Inti Angin Tier 6 (10% (Langka)) |
| Naga Angin Canglong Purba (Dilong Tebing Canglong) | Naga Wind-Qi Purba | Tier 6 | Sisik Naga Angin (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Rajawali Pedang Bintang | Unggas Pedang | Tier 7 | Bulu Pedang Bintang (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Pedang Angin** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Pedang (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Harimau Taring Naga Perak | Beast Elit Perak | Tier 7 | Taring Naga Perak (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Yinglong Sayap Pedang Perak | Naga Purba Bersayap Pedang | Tier 7 | Sisik Yinglong Perak (50% (Umum))<br>Sayap Pedang Perak (15% (Langka))<br>Inti Naga Tier 7 (4% (Legendaris)) |
| Naga Terbang Pedang Canglong (Tianlong Pedang) | Naga Udara Pedang | Tier 8 | Sayap Naga Pedang (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Harimau Raja Taring Naga Perak** | Sovereign Felid / Tunggangan [Wajib Dijinakkan] | Tier 8 | Taring Naga Perak Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Burung Feniks Angin Perak | Feniks Angin | Tier 8 | Bulu Feniks Perak (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Purba Canglong Sword-Intent (Zhulong Pedang Hunyuan) | Ancient Sword Dragon | Tier 9 | Kristal Sword-Intent Purba (40% (Umum))<br>Mutiara Sword-Intent Hunyuan (1% (Legendaris))<br>Inti Naga Canglong Tier 9 (1% (Legendaris)) |

---

### 4.4 🌋 Chiyan Zhou (Api & Lava)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Tikus Api Kawah | Mamalia Kecil | Tier 1 | Bulu Tahan Api (85% (Umum)) |
| Kadal Batu Panas | Reptil Panas | Tier 1 | Sisik Batu Panas (80% (Umum)) |
| Anak Naga Api Abu Vulkanik (Chilong Api Muda) | Naga Api Muda | Tier 1 | Sisik Naga Api Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Api Abu Kawah** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Api Abu (85% (Umum))<br>Taring Api Spirit (35% (Jarang)) |
| Kadal Lava Berlapis Besi | Reptil Lava | Tier 2 | Kulit Tahan Api (80% (Umum))<br>Inti Api Tier 2 (35% (Jarang)) |
| Ular Api Merah | Reptil Beracun | Tier 2 | Bisa Api (75% (Umum))<br>Kulit Ular Api (35% (Jarang)) |
| Chilong Api Lava Kawah | Naga Api Lava | Tier 2 | Sisik Chilong Api (80% (Umum))<br>Tanduk Api Lava (35% (Jarang)) |
| **Panther Bara Lava Shendu** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Bara (80% (Umum))<br>Cakar Fire Spirit (35% (Jarang)) |
| Kalajengking Abu Vulkanik | Serangga Abu | Tier 3 | Sengat Kalajengking Abu (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Serigala Api Neraka | Predator Api | Tier 3 | Bulu Api Neraka (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Api Neraka | Naga Terbelit Bara | Tier 3 | Sisik Panlong Api (75% (Umum))<br>Inti Api Tier 3 (30% (Jarang)) |
| **Harimau Taring Lava Merah** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Harimau Lava (75% (Umum))<br>Taring Lava Spirit (30% (Jarang)) |
| Salamander Api Purba | Amfibi Lava | Tier 4 | Kulit Salamander Api (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| Banteng Lava Taring Merah | Beast Lava | Tier 4 | Tanduk Lava Spirit (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Jiaolong Lava Kawah Shendu | Naga Lava Kawah | Tier 4 | Sisik Jiaolong Lava (65% (Umum))<br>Inti Api Tier 4 (20% (Langka)) |
| **Singa Surai Api Chiyan** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 4 | Surai Api Chiyan (65% (Umum))<br>Inti Api Tier 4 (18% (Langka)) |
| Burung Feniks Api Chiyan | Feniks Api | Tier 5 | Bulu Feniks Chiyan (60% (Umum))<br>Inti Api Tier 5 (15% (Langka)) |
| Kera Api Kawah Shendu | Primata Api | Tier 5 | Taring Kera Api (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| **Macan Tutul Meteorit Api** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 5 | Kulit Macan Meteorit (60% (Umum))<br>Inti Api Tier 5 (12% (Langka)) |
| Shenlong Bara Chiyan | Naga Spirit Api | Tier 5 | Sisik Shenlong Api (60% (Umum))<br>Darah Murni Naga Api (15% (Langka))<br>Inti Naga Tier 5 (12% (Langka)) |
| Naga Lava Sisik Merah (Dilong Lava) | Naga Lava Purba | Tier 6 | Sisik Naga Lava (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Serigala Raja Neraka Kawah** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Neraka (55% (Umum))<br>Inti Api Tier 6 (10% (Langka)) |
| Golem Lava Kawah | Elemental Lava | Tier 6 | Batu Meteorit Api (55% (Umum))<br>Kristal Inti Lava (8% (Langka)) |
| Singa Api Chiyan Purba | Beast Api Purba | Tier 7 | Surai Api Chiyan (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Api Hitam** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Api Hitam (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Ular Berkepala Tiga Api Lava | Reptil Tiga Warna | Tier 7 | Sisik Api Tiga Warna (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Fucanglong Lava Perut Kawah | Naga Penjaga Biji Besi Lava | Tier 7 | Sisik Fucanglong Api (50% (Umum))<br>Inti Naga Tier 7 (4% (Legendaris)) |
| Naga Api Bintang Chiyan (Tianlong Api) | Naga Bintang Api | Tier 8 | Sisik Naga Bintang Api (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Singa Raja Bintang Lava Purba** | Sovereign Lion / Tunggangan [Wajib Dijinakkan] | Tier 8 | Surai Singa Bintang Lava (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Feniks Api Abadi Lava | Feniks Lava Purba | Tier 8 | Bulu Abadi Chiyan (40% (Umum))<br>Darah Feniks Api (2% (Legendaris)) |
| Naga Purba Jantung Bintang Api (Zhulong Api Hunyuan) | Primordial Fire Dragon | Tier 9 | Kristal Api Purba Hunyuan (40% (Umum))<br>Mutiara Zhulong Api Hunyuan (1% (Legendaris))<br>Inti Bintang Api Tier 9 (1% (Legendaris)) |

---

### 4.5 🌊 Canghai Zhou (Lautan & Kepulauan)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Ikan Terbang Spirit | Ikan Terbang | Tier 1 | Sisik Ikan Spirit (85% (Umum)) |
| Kepiting Cangkang Batu | Krustasea | Tier 1 | Cangkang Batu Spirit (80% (Umum)) |
| Anak Naga Air Mutiara (Chilong Laut Muda) | Naga Laut Muda | Tier 1 | Sisik Naga Laut Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Rawa Pasang Laut** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Pasang (85% (Umum))<br>Taring Spirit (35% (Jarang)) |
| Siput Mutiara Spirit | Moluska Laut | Tier 2 | Cangkang Siput (80% (Umum))<br>Mutiara Spirit Low-Grade (35% (Jarang)) |
| Ular Laut Sisik Hijau | Reptil Laut | Tier 2 | Sisik Hijau (75% (Umum))<br>Bisa Ular Laut (35% (Jarang)) |
| Chilong Gelombang Laut | Naga Air Muda | Tier 2 | Sisik Chilong Laut (80% (Umum))<br>Tanduk Chilong Laut (35% (Jarang)) |
| **Panther Sisik Perak Samudra** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Perak (80% (Umum))<br>Sisik Perak Spirit (35% (Jarang)) |
| Hiu Bersisik Perak | Predator Laut | Tier 3 | Taring Hiu Spirit (75% (Umum))<br>Sisik Perak (35% (Jarang))<br>Inti Tier 3 (30% (Jarang)) |
| Gurita Gurita Rawa Laut | Moluska Tentakel | Tier 3 | Tentakel Gurita Spirit (70% (Umum))<br>Tinta Hitam Laut (30% (Jarang)) |
| Panlong Karang Biru | Naga Terbelit Laut | Tier 3 | Sisik Panlong Laut (75% (Umum))<br>Inti Air Tier 3 (30% (Jarang)) |
| **Harimau Gelombang Bintang Giok** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Harimau Gelombang (75% (Umum))<br>Inti Air Tier 3 (30% (Jarang)) |
| Naga Laut Bersisik Giok (Jiaolong Laut) | Naga Laut | Tier 4 | Sisik Giok Laut (65% (Umum))<br>Inti Naga Air Tier 4 (20% (Langka)) |
| **Singa Surai Gelombang Samudra** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 4 | Surai Gelombang Samudra (65% (Umum))<br>Inti Air Tier 4 (18% (Langka)) |
| Paus Spirit Samudra | Beast Raksasa Laut | Tier 4 | Minyak Paus Spirit (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Kepulauan Kraken Muda | Kraken Laut | Tier 5 | Tentakel Kraken Spirit (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Pari Elektrik Samudra | Ikan Elektrik | Tier 5 | Kulit Elektrik Spirit (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| **Macan Tutul Petir Badai Laut** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 5 | Kulit Macan Badai Laut (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Shenlong Gelombang Samudra | Naga Spirit Air | Tier 5 | Sisik Shenlong Air (60% (Umum))<br>Darah Murni Naga Air (15% (Langka))<br>Inti Naga Tier 5 (12% (Langka)) |
| Naga Air Gelombang Samudra (Dilong Dasar Laut) | Naga Gelombang | Tier 6 | Sisik Naga Air (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Serigala Raja Es Samudra** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Es Samudra (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Kura-kura Island-Back Purba | Kura-kura Raksasa | Tier 6 | Tempurung Pulau Purba (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Kraken Raksasa Samudra | Mythical Kraken | Tier 7 | Tinta Kraken Purba (50% (Umum))<br>Inti Kraken Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Palung Laut Dalam** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Palung Laut (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Naga Laut Sisik Emas (Yinglong Air Purba) | Naga Laut Emas | Tier 7 | Sisik Naga Emas Laut (50% (Umum))<br>Sayap Air Yinglong (15% (Langka))<br>Inti Tier 7 (3% (Legendaris)) |
| Ular Laut Sembilan Kepala | Reptil Samudra | Tier 8 | Sisik Sembilan Kepala (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Harimau Raja Mutiara Samudra Purba** | Sovereign Felid / Tunggangan [Wajib Dijinakkan] | Tier 8 | Kulit Harimau Mutiara Samudra (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Tianlong Samudra Mutiara Suci | Naga Langit Samudra | Tier 8 | Sisik Tianlong Laut (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Paus Purba Samudra Canghai | Beast Samudra | Tier 8 | Kristal Samudra Purba (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Purba Canghai Mutiara Suci (Zhulong Samudra Hunyuan) | Primordial Sea Dragon | Tier 9 | Inti Naga Samudra (40% (Umum))<br>Mutiara Purba Canghai Hunyuan (1% (Legendaris))<br>Inti Zhulong Samudra Tier 9 (1% (Legendaris)) |

---

### 4.6 🏜️ Xixuan Zhou (Gurun Pasir Suci)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Kadal Pasir Emas | Reptil Gurun | Tier 1 | Sisik Pasir (85% (Umum)) |
| Kumbang Pasir Besi | Serangga Gurun | Tier 1 | Cangkang Kumbang (80% (Umum)) |
| Anak Naga Pasir Emas (Chilong Gurun Muda) | Naga Pasir Muda | Tier 1 | Sisik Naga Pasir Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Pasir Emas Gurun** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Pasir Emas (85% (Umum))<br>Taring Spirit (35% (Jarang)) |
| Cacing Pasir Besi | Cacing Gurun | Tier 2 | Kulit Cacing Besi (80% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Ular Pasir Taring Merah | Reptil Beracun | Tier 2 | Bisa Pasir (75% (Umum))<br>Kulit Ular (35% (Jarang)) |
| Chilong Gurun Pasir Emas | Naga Pasir Gurun | Tier 2 | Sisik Chilong Gurun (80% (Umum))<br>Tanduk Pasir Emas (35% (Jarang)) |
| **Panther Pasir Gila Emas** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Pasir Gila (80% (Umum))<br>Cakar Pasir (35% (Jarang)) |
| Kalajengking Emas Pasir | Serangga Emas | Tier 3 | Sengat Emas Spirit (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Elang Badai Gurun | Unggas Udara | Tier 3 | Bulu Elang Badai (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Badai Pasir | Naga Terbelit Gurun | Tier 3 | Sisik Panlong Pasir (75% (Umum))<br>Inti Tanah-Angin Tier 3 (30% (Jarang)) |
| **Macan Tutul Badai Pasir Xixuan** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Badai Pasir (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Serigala Pasir Gurun | Predator Gurun | Tier 4 | Taring Serigala Pasir (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| Cacing Pasir Raksasa | Cacing Raksasa | Tier 4 | Kulit Cacing Raksasa (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Jiaolong Reruntuhan Gurun | Naga Reruntuhan Gurun | Tier 4 | Sisik Jiaolong Pasir (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| **Harimau Taring Emas Oasis** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Taring Emas (65% (Umum))<br>Taring Emas Gurun (18% (Langka)) |
| Elang Pasir Iblis | Unggas Iblis | Tier 5 | Bulu Iblis Gurun (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Banteng Batu Gurun Emas | Beast Batu Pasir | Tier 5 | Tanduk Emas Gurun (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| **Singa Surai Pasir Suci Gurun** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Pasir Suci (60% (Umum))<br>Inti Tanah Tier 5 (12% (Langka)) |
| Dilong Pasir Suci Xixuan | Naga Perut Bumi Gurun | Tier 5 | Sisik Dilong Pasir (60% (Umum))<br>Kristal Pasir Emas (15% (Langka))<br>Inti Naga Tier 5 (12% (Langka)) |
| Skorpion Emas Legendaris | Ancient Guardian | Tier 6 | Sengat Skorpion Emas (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Naga Pasir Emas Gurun (Shenlong Pasir) | Naga Pasir | Tier 6 | Sisik Naga Pasir (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| **Serigala Raja Reruntuhan Moko** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Moko (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Gryphon Pasir Suci | Flying Beast | Tier 7 | Bulu Gryphon Gurun (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Cacing Ruang Pasir Purba | Cacing Anomali | Tier 7 | Kulit Pasir Purba (50% (Umum))<br>Inti Cacing Ruang (3% (Legendaris)) |
| **Panther Bayangan Segel Tanah** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Segel Tanah (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Fucanglong Karavan Pasir Emas | Naga Penjaga Harta Gurun | Tier 7 | Sisik Fucanglong Pasir (50% (Umum))<br>Inti Naga Tier 7 (4% (Legendaris)) |
| Naga Gurun Pasir Emas Purba (Tianlong Gurun) | Naga Gurun Purba | Tier 8 | Sisik Naga Gurun (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Singa Raja Emas Gurun Purba** | Sovereign Lion / Tunggangan [Wajib Dijinakkan] | Tier 8 | Surai Singa Emas Gurun (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Sphinx Batu Segel Purba | Guardian Reruntuhan | Tier 8 | Kristal Batu Segel (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Zhulong Pasir Emas Purba Hunyuan | Primordial Desert Dragon | Tier 9 | Sisik Zhulong Pasir (40% (Umum))<br>Mutiara Pasir Hunyuan (1% (Legendaris))<br>Inti Zhulong Pasir Tier 9 (1% (Legendaris)) |
| Qilin Pasir Suci Hunyuan | Mythical Guardian | Tier 9 | Tanduk Qilin Gurun (40% (Umum))<br>Inti Qilin Pasir Tier 9 (1% (Legendaris)) |

---

### 4.7 ❄️ Beihan Zhou (Padang Es Abadi)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Kelinci Es Salju | Mamalia Kecil | Tier 1 | Bulu Kelinci Es (85% (Umum)) |
| Unggas Es Salju | Unggas Salju | Tier 1 | Bulu Unggas Es (80% (Umum)) |
| Anak Naga Es Salju (Chilong Frost Muda) | Naga Es Muda | Tier 1 | Sisik Naga Es Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Salju Pemburu Muda** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Salju Muda (85% (Umum))<br>Taring Es (35% (Jarang)) |
| Rubah Es Berekor Dua | Mamalia Es | Tier 2 | Bulu Rubah Es (80% (Umum))<br>Inti Es Tier 2 (35% (Jarang)) |
| Ular Es Salju | Reptil Salju | Tier 2 | Bisa Es Salju (75% (Umum))<br>Kulit Ular Es (35% (Jarang)) |
| Chilong Frost Padang Salju | Naga Es Muda | Tier 2 | Sisik Chilong Frost (80% (Umum))<br>Tanduk Es Salju (35% (Jarang)) |
| **Panther Kristal Es Abadi** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Kristal Es (80% (Umum))<br>Cakar Es Spirit (35% (Jarang)) |
| Serigala Salju Pemburu | Predator Salju | Tier 3 | Taring Serigala Salju (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Burung Hantu Kristal Es | Unggas Malam | Tier 3 | Bulu Kristal Es (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Kristal Es | Naga Terbelit Es | Tier 3 | Sisik Panlong Es (75% (Umum))<br>Inti Es Tier 3 (30% (Jarang)) |
| **Macan Tutul Badai Salju Beihan** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Badai Salju (75% (Umum))<br>Inti Es Tier 3 (30% (Jarang)) |
| Beruang Es Kristal Purba | Tank Es | Tier 4 | Empedu Beruang Es (65% (Umum))<br>Inti Es Tier 4 (20% (Langka)) |
| Rubah Salju Berekor Sembilan | Spirit Fox | Tier 4 | Bulu Rubah Sembilan Ekor (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Jiaolong Danau Beku | Naga Danau Salju | Tier 4 | Sisik Jiaolong Es (65% (Umum))<br>Inti Es Tier 4 (20% (Langka)) |
| **Harimau Taring Es Salju** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Taring Es (65% (Umum))<br>Taring Es Abadi (18% (Langka)) |
| Serigala Es Abadi Guardian | Ancient Guardian | Tier 5 | Taring Serigala Abadi (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| **Singa Surai Frost Abadi** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Frost Abadi (60% (Umum))<br>Inti Es Tier 5 (12% (Langka)) |
| Naga Es Kristal Salju (Shenlong Frost) | Naga Es | Tier 5 | Sisik Naga Es (60% (Umum))<br>Darah Murni Naga Es (15% (Langka))<br>Inti Tier 5 (12% (Langka)) |
| Goliath Es Padang Salju | Golem Es | Tier 6 | Kristal Es Padang Salju (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Burung Feniks Salju Abadi | Feniks Es | Tier 6 | Bulu Feniks Salju (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| **Serigala Raja Kutub Es Purba** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Kutub Es (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Dilong Es Abadi | Naga Perut Bumi Es | Tier 6 | Sisik Dilong Es (55% (Umum))<br>Inti Naga Tier 6 (8% (Langka)) |
| Naga Padang Es Abadi (Yinglong Es Purba) | Naga Abadi Bersayap | Tier 7 | Sisik Naga Es Abadi (50% (Umum))<br>Sayap Es Yinglong (15% (Langka))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Salju Abadi** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Salju Abadi (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Beruang Es Purba Hunyuan | Beast Purba | Tier 7 | Cakar Beruang Es Purba (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Feniks Es Salju Purba | Feniks Purba | Tier 8 | Bulu Feniks Es Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Harimau Raja Es Salju Bintang Purba** | Sovereign Felid / Tunggangan [Wajib Dijinakkan] | Tier 8 | Kulit Harimau Bintang Es (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Es Kristal Bintang (Tianlong Frost) | Naga Bintang Es | Tier 8 | Sisik Naga Bintang Es (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Purba Beihan Es Abadi (Zhulong Frost Hunyuan) | Primordial Frost Dragon | Tier 9 | Kristal Es Suci Hunyuan (40% (Umum))<br>Mutiara Zhulong Es Hunyuan (1% (Legendaris))<br>Inti Es Abadi Beihan Tier 9 (1% (Legendaris)) |

---

### 4.8 🖤 Youming Zhou (Bayangan & Racun)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Kelelawar Bayangan Malam | Unggas Malam | Tier 1 | Sayap Kelelawar Spirit (85% (Umum)) |
| Katak Rawa Beracun | Amfibi Toksik | Tier 1 | Bisa Katak Rawa (80% (Umum)) |
| Anak Naga Bayangan Rawa (Chilong Kelam Muda) | Naga Bayangan Muda | Tier 1 | Sisik Naga Bayangan Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Bayangan Rawa Kelam** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Bayangan Rawa (85% (Umum))<br>Taring Kelam (35% (Jarang)) |
| Ular Rawa Taring Hitam | Reptil Beracun | Tier 2 | Bisa Taring Hitam (80% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Laba-laba Bayangan Malam | Serangga Bayangan | Tier 2 | Sutra Bayangan (75% (Umum))<br>Bisa Laba-laba (35% (Jarang)) |
| Chilong Racun Kelam | Naga Racun Muda | Tier 2 | Sisik Chilong Racun (80% (Umum))<br>Bisa Chilong Kelam (35% (Jarang)) |
| **Panther Taring Racun Youming** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Racun (80% (Umum))<br>Kelenjar Racun Spirit (35% (Jarang)) |
| Kutu Iblis Pemakan Qi | Serangga Iblis | Tier 3 | Cangkang Kutu Iblis (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Serigala Api Hitam | Predator Api Hitam | Tier 3 | Bulu Api Hitam (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Api Hitam | Naga Terbelit Bayangan | Tier 3 | Sisik Panlong Bayangan (75% (Umum))<br>Inti Bayangan Tier 3 (30% (Jarang)) |
| **Macan Tutul Kabut Hitam Sunyi** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Kabut Hitam (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Kalajengking Bayangan Purba | Serangga Purba | Tier 4 | Sengat Bayangan Purba (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| Mayat Hidup Rawa Jiwa | Undead Rawa | Tier 4 | Sisa Zirah Lapuk (65% (Umum))<br>Kristal Jiwa Kelam (18% (Langka)) |
| Jiaolong Rawa Youming | Naga Rawa Kelam | Tier 4 | Sisik Jiaolong Bayangan (65% (Umum))<br>Bisa Naga Youming (20% (Langka))<br>Inti Tier 4 (20% (Langka)) |
| **Harimau Api Hitam Bayangan** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Api Hitam (65% (Umum))<br>Inti Bayangan Tier 4 (18% (Langka)) |
| Naga Bayangan Api Hitam (Shenlong Bayangan) | Naga Bayangan | Tier 5 | Sisik Naga Bayangan (60% (Umum))<br>Darah Murni Naga Bayangan (15% (Langka))<br>Inti Tier 5 (15% (Langka)) |
| **Singa Surai Bayangan Kelam** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Bayangan Kelam (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Ular Rawa Sembilan Kepala Racun | Reptil Sembilan Kepala | Tier 5 | Bisa Sembilan Racun (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Serigala Bayangan Youming | Predator Bayangan | Tier 6 | Kulit Serigala Bayangan (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Serigala Raja Iblis Rawa Duwu** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Iblis Duwu (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Golem Bayangan Rawa Kelam | Golem Bayangan | Tier 6 | Kristal Bayangan Kelam (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Dilong Youming Kelam | Naga Perut Bumi Kelam | Tier 6 | Sisik Dilong Kelam (55% (Umum))<br>Inti Naga Tier 6 (8% (Langka)) |
| Naga Api Hitam Youming Purba (Fucanglong Bayangan) | Naga Purba Api Hitam | Tier 7 | Sisik Naga Api Hitam (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Tujuh Langkah** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Tujuh Langkah (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Hydra Racun Rawa Youming | Mythical Hydra | Tier 7 | Darah Hydra Racun (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Naga Bayangan Sembilan Jiwa (Tianlong Kelam) | Naga Sembilan Jiwa | Tier 8 | Sisik Naga Sembilan Jiwa (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Singa Raja Api Hitam Youming Purba** | Sovereign Lion / Tunggangan [Wajib Dijinakkan] | Tier 8 | Surai Singa Api Hitam Purba (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Iblis Bayangan Purba Youming | Demon Purba | Tier 8 | Kristal Iblis Purba (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Purba Youming Api Hitam Hunyuan (Zhulong Bayangan Purba) | Primordial Shadow Dragon | Tier 9 | Kristal Bayangan Suci (40% (Umum))<br>Mutiara Zhulong Bayangan Hunyuan (1% (Legendaris))<br>Inti Youming Api Hitam Tier 9 (1% (Legendaris)) |

---

### 4.9 🛸 Tiangong Zhou (Penerbangan Udara & Langit)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Burung Pipit Angin Udara | Unggas Udara | Tier 1 | Bulu Pipit Spirit (85% (Umum)) |
| Kelelawar Angin Langit | Mamalia Udara | Tier 1 | Sayap Kelelawar Spirit (80% (Umum)) |
| Anak Naga Awan Langit (Chilong Udara Muda) | Naga Udara Muda | Tier 1 | Sisik Naga Udara Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Angin Awan Udara** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Awan Udara (85% (Umum))<br>Taring Udara Spirit (35% (Jarang)) |
| Burung Angin Taring Besi | Unggas Besi | Tier 2 | Bulu Angin Besi (80% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Elang Udara Awan Tipis | Unggas Awan | Tier 2 | Bulu Elang Awan (75% (Umum))<br>Inti Tier 2 (35% (Jarang)) |
| Chilong Badai Awan | Naga Awan Muda | Tier 2 | Sisik Chilong Awan (80% (Umum))<br>Tanduk Chilong Udara (35% (Jarang)) |
| **Panther Sayap Awan Tipis** | Aerial Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Sayap Awan (80% (Umum))<br>Bulu Sayap Awan (35% (Jarang)) |
| Rajawali Badai Langit | Unggas Badai | Tier 3 | Sayap Besi Spirit (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Burung Hantu Angin Malam | Unggas Malam | Tier 3 | Bulu Angin Malam (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Petir Langit | Naga Terbelit Petir | Tier 3 | Sisik Panlong Petir (75% (Umum))<br>Inti Petir Tier 3 (30% (Jarang)) |
| **Macan Tutul Petir Awan Hitam** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Petir Awan (75% (Umum))<br>Inti Petir Tier 3 (30% (Jarang)) |
| Gryphon Udara Tiangong | Flying Beast | Tier 4 | Bulu Gryphon Langit (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| Paus Udara Melayang | Beast Raksasa | Tier 4 | Kulit Paus Udara (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| Jiaolong Udara Tiangong | Naga Udara | Tier 4 | Sisik Jiaolong Udara (65% (Umum))<br>Inti Udara Tier 4 (20% (Langka)) |
| **Harimau Sayap Badai Langit** | Aerial Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Bulu Sayap Harimau Badai (65% (Umum))<br>Inti Udara Tier 4 (18% (Langka)) |
| Naga Angin Langit Tiangong (Shenlong Awan) | Naga Langit | Tier 5 | Sisik Naga Angin (60% (Umum))<br>Darah Murni Naga Udara (15% (Langka))<br>Inti Tier 5 (15% (Langka)) |
| **Singa Surai Awan Melayang** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Awan Melayang (60% (Umum))<br>Inti Udara Tier 5 (12% (Langka)) |
| Rajawali Petir Awan Hitam | Unggas Petir | Tier 5 | Bulu Petir Awan (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Naga Terbang Langit Tiangong (Dilong Udara) | Naga Airship Guard | Tier 6 | Sayap Naga Terbang (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| **Serigala Raja Ruang Udara Tiangong** | Aerial Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Ruang Udara (55% (Umum))<br>Inti Ruang Tier 6 (10% (Langka)) |
| Paus Langit Melayang Purba | Beast Langit Purba | Tier 6 | Kristal Paus Langit (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Gryphon Badai Petir Tiangong | Flying Gryphon Elit | Tier 7 | Bulu Gryphon Petir (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Bintang Langit** | Aerial Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Bintang Langit (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Naga Langit Ruang Tiangong (Yinglong Awan Langit) | Naga Ruang | Tier 7 | Sisik Naga Ruang (50% (Umum))<br>Sayap Yinglong Langit (15% (Langka))<br>Inti Tier 7 (3% (Legendaris)) |
| Rajawali Purba Langit Tiangong | Unggas Purba | Tier 8 | Bulu Rajawali Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Angin Bintang Tiangong (Tianlong Bintang) | Naga Bintang | Tier 8 | Sisik Naga Bintang (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Harimau Raja Sayap Badai Bintang Purba** | Sovereign Flying Felid / Tunggangan [Wajib Dijinakkan] | Tier 8 | Sayap Harimau Bintang Purba (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Zhulong Langit Tiangong Purba Hunyuan | Primordial Sky Dragon | Tier 9 | Sisik Zhulong Langit (40% (Umum))<br>Mutiara Zhulong Langit Hunyuan (1% (Legendaris))<br>Inti Zhulong Langit Tier 9 (1% (Legendaris)) |
| Rajawali Purba Hunyuan Tiangong | Primordial Sky Eagle | Tier 9 | Bulu Suci Langit (40% (Umum))<br>Inti Rajawali Hunyuan Tier 9 (1% (Legendaris)) |

---

### 4.10 ☠️ Juejing Zhou (Zona Terlarang & Anomali Ruang)

| Nama Beast | Jenis / Kategori | Tier | Loot |
|---|---|---|---|
| Tikus Anomali Ruang | Mamalia Kecil | Tier 1 | Bulu Anomali (85% (Umum)) |
| Kadal Petir Tanah Purba | Reptil Petir | Tier 1 | Sisik Petir Tanah (80% (Umum)) |
| Anak Naga Retakan Ruang (Chilong Anomali Muda) | Naga Anomali Muda | Tier 1 | Sisik Naga Ruang Muda (85% (Umum))<br>Darah Naga Spirit (35% (Jarang)) |
| **Serigala Taring Ruang Muda** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 1 | Bulu Serigala Ruang Muda (85% (Umum))<br>Taring Ruang (35% (Jarang)) |
| Chilong Anomali Dimensi | Naga Anomali Muda | Tier 2 | Sisik Chilong Dimensi (80% (Umum))<br>Tanduk Naga Anomali (35% (Jarang)) |
| **Panther Anomali Retakan Ruang** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 2 | Kulit Panther Anomali Ruang (80% (Umum))<br>Inti Ruang Muda (35% (Jarang)) |
| Serigala Taring Ruang | Predator Ruang | Tier 3 | Taring Serigala Ruang (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Kera Anomali Petir | Primata Anomali | Tier 3 | Kulit Kera Petir (70% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Panlong Petir Anomali | Naga Terbelit Dimensi | Tier 3 | Sisik Panlong Anomali (75% (Umum))<br>Inti Ruang Tier 3 (30% (Jarang)) |
| **Macan Tutul Petir Tanah Purba** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 3 | Kulit Macan Petir Tanah (75% (Umum))<br>Inti Tier 3 (30% (Jarang)) |
| Chimera Batu Purba | Beast Purba | Tier 4 | Tanduk Chimera Purba (65% (Umum))<br>Inti Tier 4 (20% (Langka)) |
| Ular Retakan Ruang (Jiaolong Anomali) | Reptil Ruang | Tier 4 | Sisik Retakan Ruang (65% (Umum))<br>Inti Tier 4 (18% (Langka)) |
| **Harimau Anomali Dimensi Purba** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 4 | Kulit Harimau Dimensi (65% (Umum))<br>Inti Ruang Tier 4 (20% (Langka)) |
| Beast Kuno Juejing | Beast Kuno | Tier 5 | Taring Beast Kuno (60% (Umum))<br>Inti Tier 5 (15% (Langka)) |
| Serigala Anomali Ruang Purba | Predator Purba | Tier 5 | Kulit Ruang Purba (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| **Singa Surai Ruang Purba Juejing** | Lion / Tunggangan [Wajib Dijinakkan] | Tier 5 | Surai Ruang Purba (60% (Umum))<br>Inti Ruang Tier 5 (12% (Langka)) |
| Dilong Retakan Ruang (Shenlong Anomali) | Naga Anomali Perut Bumi | Tier 5 | Sisik Dilong Ruang (60% (Umum))<br>Inti Tier 5 (12% (Langka)) |
| Serpent Raksasa Retakan Ruang (Dilong Ruang Purba) | Serpent Ruang | Tier 6 | Darah Beast Purba (55% (Umum))<br>Kristal Ruang Purba (10% (Langka))<br>Inti Tier 6 (5% (Legendaris)) |
| **Serigala Raja Retakan Dimensi** | Canid / Tunggangan [Wajib Dijinakkan] | Tier 6 | Bulu Serigala Retakan Ruang (55% (Umum))<br>Inti Tier 6 (10% (Langka)) |
| Golem Anomali Ruang Juejing | Golem Anomali | Tier 6 | Kristal Golem Ruang (55% (Umum))<br>Inti Tier 6 (8% (Langka)) |
| Chimera Retakan Ruang Purba | Chimera Ruang | Tier 7 | Tanduk Chimera Ruang (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| **Panther Bayangan Anomali Dimensi** | Felid / Tunggangan [Wajib Dijinakkan] | Tier 7 | Kulit Panther Anomali Dimensi (50% (Umum))<br>Inti Tier 7 (4% (Legendaris)) |
| Beast Ruang Purba Juejing | Beast Anomali Elit | Tier 7 | Kulit Beast Ruang (50% (Umum))<br>Inti Tier 7 (3% (Legendaris)) |
| Yinglong Anomali Ruang Juejing | Naga Ruang Bersayap | Tier 7 | Sisik Yinglong Ruang (50% (Umum))<br>Sayap Dimensi Yinglong (15% (Langka))<br>Inti Tier 7 (4% (Legendaris)) |
| Naga Retakan Ruang Purba (Tianlong Dimensi) | Naga Ruang Purba | Tier 8 | Sisik Naga Ruang Purba (45% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| **Singa Raja Retakan Ruang Hunyuan** | Sovereign Lion / Tunggangan [Wajib Dijinakkan] | Tier 8 | Surai Singa Ruang Hunyuan (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Iblis Anomali Ruang Juejing | Demon Ruang | Tier 8 | Kristal Iblis Ruang (40% (Umum))<br>Inti Tier 8 (2% (Legendaris)) |
| Naga Purba Retakan Ruang Hunyuan (Zhulong Anomali Dimensi) | Primordial Rift Dragon | Tier 9 | Kristal Ruang Purba Hunyuan (40% (Umum))<br>Mutiara Dimensi Hunyuan (1% (Legendaris))<br>Inti Retakan Ruang Tier 9 (1% (Legendaris)) |
