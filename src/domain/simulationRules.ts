import raw from '../../world-bible/generated/simulation-rules.json'
import { domainCatalog } from './domainCatalog'

export const simulationRules = raw
export type SimulationRules = typeof raw

export interface SimulationReadiness {
  valid: boolean
  regionCount: number
  realmCount: number
  spiritualRootCount: number
  professionCount: number
  herbCount: number
  beastCount: number
  formulaCount: number
  unresolvedConflicts: number
  errors: string[]
}

export function validateSimulationRules(): SimulationReadiness {
  const errors: string[] = []
  const rules = simulationRules
  if (rules.schemaVersion !== 1) errors.push('Unsupported simulation rules schema')
  if (rules.source.repository !== 'aesher-gg/Xuantian-World') errors.push('Unexpected canon source repository')
  if (rules.source.policy !== 'read-only') errors.push('Canon source policy must remain read-only')
  if (rules.source.commitSha !== domainCatalog.source.commitSha) errors.push('Simulation rules and domain catalog were imported from different source commits')
  for (const [path, sha] of Object.entries(rules.source.moduleShas)) {
    if (domainCatalog.sourceShas[path] !== sha) errors.push('Source SHA mismatch: ' + path)
  }
  if (rules.world.regions.length !== 10 || rules.world.regionCount !== 10) errors.push('Expected exactly 10 canonical regions')
  if (rules.cultivation.realms.length !== 9) errors.push('Expected exactly 9 canonical cultivation realms')
  if (rules.cultivation.spiritualRoots.length !== 5) errors.push('Expected exactly 5 standard spiritual roots')
  if (rules.professions.length !== 7) errors.push('Expected exactly 7 canonical professions')
  if (rules.herbalism.catalogCount !== domainCatalog.herbCatalog.length || !rules.herbalism.catalogComplete) errors.push('Herb catalog coverage mismatch')
  if (rules.bestiary.recordCount !== domainCatalog.beastCatalog.length) errors.push('Beast catalog coverage mismatch')
  if (rules.formulaRegistry.length !== domainCatalog.formulaRegistry.length) errors.push('Formula registry coverage mismatch')
  if (rules.sourceConflicts.some((conflict) => conflict.status !== 'unresolved')) errors.push('Conflict status is invalid')
  return {
    valid: errors.length === 0,
    regionCount: rules.world.regions.length,
    realmCount: rules.cultivation.realms.length,
    spiritualRootCount: rules.cultivation.spiritualRoots.length,
    professionCount: rules.professions.length,
    herbCount: domainCatalog.herbCatalog.length,
    beastCount: domainCatalog.beastCatalog.length,
    formulaCount: rules.formulaRegistry.length,
    unresolvedConflicts: rules.sourceConflicts.length,
    errors,
  }
}

export function getUnresolvedSimulationConflicts() {
  return simulationRules.sourceConflicts.filter((conflict) => conflict.status === 'unresolved')
}

export function getSimulationRegion(regionId: string) {
  return simulationRules.world.regions.find((region) => region.id === regionId) ?? null
}
