import type { GameSnapshot } from './types'

export const initialState: GameSnapshot = {
  version: 1,
  player: { name: 'Xuan Yu', realm: 'Lingquan Jing', stage: 'Awal', qi: 120, qiCap: 500, hp: 180, maxHp: 180, stamina: 90, hunger: 12, spiritStones: 8, locationId: 'qingling-village', cultivationMinutes: 0 },
  world: { day: 1, hour: 7, minute: 0, weather: 'Kabut pagi', woodQi: 1.25, eventLog: ['Hari baru dimulai di Desa Qingling. Kabut tipis menyelimuti kebun-kebun spirit.'] },
  herb: { name: 'Rumput Penjernih Qi', plantedAtMinute: null, growthMinutes: 0, requiredMinutes: 4320, yield: 3 },
  npcs: [
    { id: 'npc-herbalist', name: 'Perawat Kebun (contoh)', role: 'Perawat kebun', location: 'Kebun Biyang', mood: 'Tenang', dialogue: 'Embun pagi hari ini membawa Wood Qi yang cukup baik.' },
    { id: 'npc-merchant', name: 'Pedagang Keliling (contoh)', role: 'Pedagang keliling', location: 'Paviliun pasar', mood: 'Berhitung', dialogue: 'Benih segar baru tiba dari lembah. Jangan menunda terlalu lama.' },
    { id: 'npc-disciple', name: 'Murid Luar (contoh)', role: 'Murid luar', location: 'Lapangan latihan', mood: 'Bersemangat', dialogue: 'Suatu hari aku akan menembus Kaimai Jing.' },
  ],
}
