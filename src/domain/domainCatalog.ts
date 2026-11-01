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
}
export function getCanonicalRegion(regionId: string) {
  return domainCatalog.regions.find((region) => region.id === regionId) ?? null
}
