# 🛸 Xuantian World — Sistem Kapal Terbang Lintas Wilayah (Airship System)

> **Modul:** 17 — Airship Navigation System
> **Prinsip:** Anti-Cheat Enforced — Speed & Spirit Stone Fuel Formulas — Flight Permit Licensing
> **Rujukan silang:** `00_CORE_RULES_AI_GM.md` (aturan wajib GM), `01_WORLD_OVERVIEW_AND_CAPITAL.md` (jarak & peta benua), `10_TIANGONG_ZHOU.md` (pusat galangan & dermaga airship), `12_CROSS_REGION_ORGANIZATIONS.md` (Serikat Airship Tiangong), `18_ECONOMY_SYSTEM.md` (harga tiket & konsumsi Batu Spirit), `37_PERGURUAN_KEMUDI_TIANGONG.md` (perguruan kemudi udara)

---

## 0. Filosofi Sistem Kapal Terbang (Tiankong Feichuan)

Master Kemudi dan Mekanik mengoperasikan armada penerbangan melayang untuk transportasi barang dan penumpang antar-wilayah. Pengoperasian Kapal Terbang (*Tiankong Feichuan*) memerlukanLisensi kemudi, konsumsi Batu Spirit (*LSS*), dan/atau daya dorong Qi Yuan dari kultivator.

### Aturan Emas Anti-Cheat Kapal Terbang
- **Perhitungan Waktu Tempuh & Konsumsi Bahan Bakar:** Jarak penerbangan, kecepatan kapal, dan biaya Batu Spirit wajib dihitung secara presisi menggunakan formula resmi. Dilarang berpindah antar-wilayah secara instan tanpa memperhitungkan durasi penerbangan.
- **Lisensi & Sertifikasi Navigasi:** Mengemudikan Kapal Terbang Kelas Menengah (Freighter/Galleon/Battleship) memerlukan sertifikasi resmi dari *Perguruan Kemudi Udara Tiangong*.
- **Risiko Badai Qi & Serangan Beast Udara:** Penerbangan melintasi zona berbahaya atau badai ruang membutuhkan roll Navigasi Pilot.

---

## 1. Klasifikasi Kapal Terbang & Formula Kecepatan (Airship Speed Formula)

```
BaseSpeed = Skiff (500 li/hari) | Freighter (1.000 li/hari) | Galleon (2.500 li/hari) | Battleship (4.000 li/hari)
PilotSkillBonus = PilotTier × 10%
Realm3QiDriveBonus = 100% (jika Pilot/Penumpang Realm 3+ menyuntikkan Qi Yuan)
FinalAirshipSpeed = BaseSpeed × (1.0 + PilotSkillBonus + Realm3QiDriveBonus)
```

*Contoh Perhitungan:* Kapal Terbang jenis Galleon (`BaseSpeed = 2.500 li/hari`) dikemudikan Pilot Tier 2 (`PilotSkillBonus = 20%`) dengan dukungan suntikan Qi Yuan kultivator Realm 3 (`Realm3QiDriveBonus = 100%`):
$$\text{FinalAirshipSpeed} = 2.500 \times (1.0 + 0.20 + 1.00) = 2.500 \times 2.20 = 5.500 \text{ li/hari}.$$

---

## 2. Formula Konsumsi Batu Spirit (Fuel Consumption)

```
SpiritStoneCostPerHour = (AirshipTier × 2 LSS) / (1.0 + Realm3QiDriveEfficiencyBonus)
```

- **Skiff (Tier 1):** 2 LSS / jam
- **Freighter (Tier 2):** 4 LSS / jam
- **Galleon (Tier 3):** 6 LSS / jam
- **Battleship (Tier 4):** 8 LSS / jam

---

## 3. Perguruan & Serikat Airship Utama

- **Serikat Airship Tiangong** (`12_CROSS_REGION_ORGANIZATIONS.md`): Monopoli lisensi penerbangan, jadwal penerbangan komersial, & galangan kapal.
- **Perguruan Kemudi Udara Tiangong** (`37_PERGURUAN_KEMUDI_TIANGONG.md`): Lembaga pendidikan sertifikasi pilot, mekanik piringan Qi, dan navigasi badai.
- **Tiangong Zhou** (`10_TIANGONG_ZHOU.md`): Pusat dermaga levitasi awan dan jaringan galangan kapal melayang utama Benua Xuantian.
