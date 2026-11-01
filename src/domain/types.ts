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
  herbId: string
  name: string
  plantedAtMinute: number | null
  growthMinutes: number
  requiredMinutes: number
  baseGrowthDays: number
  soilGrade: 1 | 2 | 3 | 4
  fertilized: boolean
  woodRoot: boolean
  baseYield: number
  baseYieldMax: number
  herbalistSkillLevel: number
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
  herbInventory: Record<string, number>
  npcs: Npc[]
}
