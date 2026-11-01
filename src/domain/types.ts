export interface PlayerState {
  name: string
  realm: string
  realmIndex: number
  comprehensionLevel: number
  spiritStoneGatheringBonus: number
  stage: 'Awal' | 'Tengah' | 'Puncak'
  qi: number
  qiCap: number
  hp: number
  maxHp: number
  stamina: number
  hunger: number
  spiritStones: number
  locationId: string
  cultivationMinutes: number
}
export interface WorldState {
  day: number
  hour: number
  minute: number
  weather: string
  woodQi: number
  eventLog: string[]
}
export interface HerbPlot {
  name: string
  plantedAtMinute: number | null
  growthMinutes: number
  requiredMinutes: number
  yield: number
}
export interface Npc {
  id: string
  name: string
  role: string
  location: string
  mood: string
  dialogue: string
}
export interface GameSnapshot {
  version: 1
  player: PlayerState
  world: WorldState
  herb: HerbPlot
  npcs: Npc[]
}
