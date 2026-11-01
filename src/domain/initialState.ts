import type { GameSnapshot } from './types'
import { findCanonicalHerb } from './domainCatalog'

const starterHerb = findCanonicalHerb('Rumput Penjernih Qi')
const starterHerbName = (starterHerb?.fields['Nama Tanaman'] ?? 'Rumput Penjernih Qi')
  .replace(/\*\*/g, '')
  .split(' *(')[0]
const starterGrowthDays = Number(starterHerb?.fields['Standar Waktu Tumbuh']?.match(/\d+/)?.[0] ?? 3)

export const initialState: GameSnapshot = {
  version: 1,
  player: { name: 'Xuan Yu', realm: 'Lingquan Jing', realmIndex: 1, stage: 'Awal', qi: 60, qiCap: 100, comprehensionLevel: 0, spiritStoneGatheringBonus: 1, hp: 180, maxHp: 180, stamina: 90, hunger: 12, spiritStones: 8, locationId: 'qingling-village', cultivationMinutes: 0 },
  world: { day: 1, hour: 7, minute: 0, weather: 'Kabut pagi', woodQi: 1.25, eventLog: ['Hari baru dimulai di Desa Qingling. Kabut tipis menyelimuti kebun-kebun spirit.'] },
  herb: {
    herbId: 'qi-cleansing-grass',
    name: starterHerbName,
    plantedAtMinute: null,
    growthMinutes: 0,
    requiredMinutes: starterGrowthDays * 1440,
    baseGrowthDays: starterGrowthDays,
    soilGrade: 1,
    fertilized: false,
    woodRoot: false,
    // Official base-yield range is 2–5; use its lower bound until a seeded roll policy is defined.
    baseYield: 2,
    baseYieldMax: 5,
    herbalistSkillLevel: 0,
    yield: 0,
  },
  herbInventory: {},
  npcs: [
    { id: 'npc-herbalist', name: 'Perawat Kebun (contoh)', role: 'Perawat kebun', location: 'Kebun Biyang', mood: 'Tenang', dialogue: 'Embun pagi hari ini membawa Wood Qi yang cukup baik.' },
    { id: 'npc-merchant', name: 'Pedagang Keliling (contoh)', role: 'Pedagang keliling', location: 'Paviliun pasar', mood: 'Berhitung', dialogue: 'Benih segar baru tiba dari lembah. Jangan menunda terlalu lama.' },
    { id: 'npc-disciple', name: 'Murid Luar (contoh)', role: 'Murid luar', location: 'Lapangan latihan', mood: 'Bersemangat', dialogue: 'Suatu hari aku akan menembus Kaimai Jing.' },
  ],
}
