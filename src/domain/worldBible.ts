export interface WorldBibleSource {
  repository: 'aesher-gg/Xuantian-World'
  branch: string
  commitSha: string
  treeSha?: string
  sourceIndexBlobSha?: string
  policy: 'read-only'
  importedAt?: string
}

export interface WorldBibleSection {
  level: number
  title: string
  line: number
  content: string
}

export interface WorldBibleTable {
  headers: string[]
  rows: string[][]
  startLine: number
}

export interface WorldBibleCodeBlock {
  language: string
  content: string
  startLine: number
  endLine: number
}

export interface WorldBibleModule {
  id: number | string
  moduleLabel: string
  path: string
  description: string
  title: string
  blobSha: string
  lineCount: number
  headings: Array<{ level: number; title: string; line: number }>
  sections: WorldBibleSection[]
  tables: WorldBibleTable[]
  codeBlocks: WorldBibleCodeBlock[]
  formulaBlocks: WorldBibleCodeBlock[]
  references: string[]
}

export interface WorldBibleCatalog {
  schemaVersion: 1
  source: WorldBibleSource
  summary: {
    indexedModuleCount: number
    importedModuleCount: number
    regionModules: Array<{ id: number | string; path: string; title: string }>
    systemModules: Array<{ id: number | string; path: string; title: string }>
  }
  modules: WorldBibleModule[]
}

const REQUIRED_MODULES = [
  '00_CORE_RULES_AI_GM.md',
  '01_WORLD_OVERVIEW_AND_CAPITAL.md',
  '02_SHENMU_ZHOU.md',
  '13_SPIRITUAL_ROOT_SYSTEM.md',
  '15_SPIRITUAL_HERB_FARMING_SYSTEM.md',
  '18_ECONOMY_SYSTEM.md',
  '20_COMBAT_SYSTEM.md',
]

export function validateWorldBibleCatalog(value: unknown): value is WorldBibleCatalog {
  if (!value || typeof value !== 'object') return false
  const catalog = value as Partial<WorldBibleCatalog>
  if (catalog.schemaVersion !== 1 || !catalog.source || catalog.source.policy !== 'read-only') return false
  if (catalog.source.repository !== 'aesher-gg/Xuantian-World' || !catalog.source.commitSha) return false
  if (!Array.isArray(catalog.modules) || catalog.modules.length === 0) return false
  const paths = new Set<string>()
  for (const module of catalog.modules) {
    if (!module.path || !module.title || !/^[a-f0-9]{40}$/.test(module.blobSha)) return false
    if (!Number.isInteger(module.lineCount) || module.lineCount < 1 || paths.has(module.path)) return false
    if (!Array.isArray(module.sections) || !Array.isArray(module.tables) || !Array.isArray(module.codeBlocks)) return false
    paths.add(module.path)
  }
  return REQUIRED_MODULES.every((path) => paths.has(path))
}

export async function loadWorldBibleCatalog(signal?: AbortSignal): Promise<WorldBibleCatalog> {
  const response = await fetch('/data/world-bible/catalog.json', { signal })
  if (!response.ok) throw new Error('World Bible catalog is not available. Run npm run import:world-bible first.')
  const payload: unknown = await response.json()
  if (!validateWorldBibleCatalog(payload)) throw new Error('World Bible catalog failed runtime validation.')
  return payload
}
