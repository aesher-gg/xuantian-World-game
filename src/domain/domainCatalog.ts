import raw from '../../world-bible/generated/domain-catalog.json'
import type { DomainCatalog } from './domainTypes'
export const domainCatalog = raw as unknown as DomainCatalog

export function validateDomainCatalog(): boolean {
  return domainCatalog.schemaVersion === 1
    && domainCatalog.source.repository === 'aesher-gg/Xuantian-World'
    && domainCatalog.source.policy === 'read-only'
    && domainCatalog.regions.length === 10
    && new Set(domainCatalog.regions.map((region) => region.id)).size === 10
    && domainCatalog.cultivation.realms.length === 9
    && domainCatalog.cultivation.spiritualRoots.length === 5
    && domainCatalog.professions.length >= 7
    && domainCatalog.coverage.regionCount === 10
    && domainCatalog.coverage.realmCount === 9
    && domainCatalog.coverage.herbCatalogComplete
    && domainCatalog.herbCatalog.length === domainCatalog.coverage.herbCount
    && domainCatalog.beastCatalog.length === domainCatalog.coverage.beastRecordCount
    && domainCatalog.formulaRegistry.length === domainCatalog.coverage.formulaCount
}
export function getCanonicalRegion(regionId: string) {
  return domainCatalog.regions.find((region) => region.id === regionId) ?? null
}

export function getHerbRecords() {
  return domainCatalog.herbCatalog
}
export function findCanonicalHerb(name: string) {
  const query = name.trim().toLocaleLowerCase()
  return domainCatalog.herbCatalog.find((record) =>
    (record.fields['Nama Tanaman'] ?? '').toLocaleLowerCase().includes(query)
  ) ?? null
}
export function getBeastRecords() {
  return domainCatalog.beastCatalog
}
export function findCanonicalBeast(name: string) {
  const query = name.trim().toLocaleLowerCase()
  return domainCatalog.beastCatalog.find((record) =>
    (record.fields['Nama Beast'] ?? '').toLocaleLowerCase().includes(query)
  ) ?? null
}
export function getCanonicalFormulaRecords(sourcePath?: string) {
  return sourcePath
    ? domainCatalog.formulaRegistry.filter((record) => record.source === sourcePath)
    : domainCatalog.formulaRegistry
}
