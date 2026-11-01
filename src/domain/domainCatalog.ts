import raw from '../../world-bible/generated/domain-catalog.json'
import type { DomainCatalog } from './domainTypes'
export const domainCatalog = raw as unknown as DomainCatalog
