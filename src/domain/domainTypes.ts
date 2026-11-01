export type RealmStage = 'early' | 'middle' | 'peak'
export type RootId = 'wood' | 'fire' | 'wind-metal' | 'earth' | 'water-ice'
export interface DomainCatalog {
  schemaVersion: number
  status: string
  source: { repository: string; commitSha: string; policy: string; indexBlobSha: string }
  regions: Array<{ id: string; number: number; name: string; theme: string; locations: string[]; source: string[] }>
  cultivation: {
    realms: Array<{ index: number; id: string; name: string; qi: Record<RealmStage, number> }>
    stageMultiplier: Record<RealmStage, number>
    spiritualRoots: Array<{ id: RootId; name: string; hpMultiplier: number; qiRegenMultiplier: number }>
    formulas: { qiCap: string; passiveRegen: string; meditation: string }
  }
  professions: Array<{ id: string; name: string; source: string; formula?: string; formulas?: string[]; soilGrowthMultiplier?: Record<string, number>; soilYieldMultiplier?: Record<string, number>; fertilizerDiscount?: number; woodRootBonus?: number; baseSpeedLiPerDay?: Record<string, number>; tiers?: number; contracts?: string[] }>
  economy: { currency: string[]; formulas: string[]; source: string }
  vitality: { formulas: string[]; source: string }
  combat: { formulas: string[]; source: string }
  bestiary: { tiers: number; source: string; dropFormula: string; coverage: string }
}
