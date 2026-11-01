import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
export const SOURCE_REPOSITORY = 'aesher-gg/Xuantian-World'
export const SOURCE_BRANCH = 'main'
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SNAPSHOTS = resolve(ROOT, 'world-bible/snapshots')
const GENERATED = resolve(ROOT, 'world-bible/generated')
const PUBLIC_DATA = resolve(ROOT, 'public/data/world-bible')
export function gitBlobSha(content) {
  const bytes = Buffer.from(content, 'utf8')
  return createHash('sha1').update(Buffer.concat([Buffer.from('blob ' + bytes.length + '\0'), bytes])).digest('hex')
}
export function parseIndex(markdown) {
  const found = []
  for (const line of markdown.split(/\r?\n/)) {
    const m = line.match(/^\|\s*([^|]+?)\s*\|\s*`([^`]+\.md)`\s*\|\s*([^|]+?)\s*\|/)
    if (!m) continue
    const label = m[1].trim()
    found.push({ id: /^\d+$/.test(label) ? Number(label) : label.toLowerCase(), moduleLabel: label, path: m[2].trim(), description: m[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() })
  }
  return [...new Map(found.map((item) => [item.path, item])).values()]
}
export function parseMarkdown(path, markdown) {
  const lines = markdown.split(/\r?\n/), headings = [], sections = [], tables = [], codeBlocks = []
  let section = null, table = null, code = null
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i], heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/)
    if (heading) { section = { level: heading[1].length, title: heading[2].trim(), line: i + 1, content: '' }; headings.push({ level: section.level, title: section.title, line: i + 1 }); sections.push(section); table = null; continue }
    if (/^\s*```/.test(line)) {
      if (code) { codeBlocks.push({ language: code.language, content: code.lines.join('\n'), startLine: code.startLine, endLine: i + 1 }); code = null }
      else code = { language: line.replace(/^\s*```/, '').trim() || 'text', lines: [], startLine: i + 1 }
      continue
    }
    if (code) { code.lines.push(line); continue }
    if (/^\s*\|/.test(line)) {
      if (!table) { table = { headers: [], rows: [], startLine: i + 1 }; tables.push(table) }
      const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((v) => v.trim().replace(/`/g, ''))
      if (cells.every((v) => /^:?-{3,}:?$/.test(v))) continue
      if (!table.headers.length) table.headers = cells; else table.rows.push(cells)
      continue
    }
    table = null
    if (section) section.content += (section.content ? '\n' : '') + line
  }
  if (code) codeBlocks.push({ language: code.language, content: code.lines.join('\n'), startLine: code.startLine, endLine: lines.length })
  const references = [...new Set([...markdown.matchAll(/(?:\.\/)?([0-9]{2}_[A-Z0-9_]+\.md|players\.md|INDEX\.md)/g)].map((m) => m[1]))]
  return { path, title: headings.find((h) => h.level === 1)?.title ?? path, lineCount: lines.length, headings, sections, tables, codeBlocks, formulaBlocks: codeBlocks.filter((b) => /(?:=|×|formula|clamp|random|multiplier)/i.test(b.content)), references }
}
export function validateCatalog(catalog) {
  const errors = [], warnings = [], paths = new Set()
  if (catalog.schemaVersion !== 1) errors.push('schemaVersion must be 1')
  if (!catalog.source?.repository || !catalog.source?.branch || !catalog.source?.commitSha) errors.push('source provenance is incomplete')
  if (!Array.isArray(catalog.modules) || !catalog.modules.length) errors.push('modules must be a non-empty array')
  for (const module of catalog.modules ?? []) {
    if (!module.path || !module.title || !module.blobSha || !Number.isInteger(module.lineCount)) errors.push('module metadata missing: ' + (module.path ?? 'unknown'))
    if (paths.has(module.path)) errors.push('duplicate module path: ' + module.path)
    paths.add(module.path)
    for (const field of ['sections','tables','codeBlocks','references']) if (!Array.isArray(module[field])) errors.push(field + ' missing: ' + module.path)
  }
  for (const required of ['00_CORE_RULES_AI_GM.md','01_WORLD_OVERVIEW_AND_CAPITAL.md','02_SHENMU_ZHOU.md','13_SPIRITUAL_ROOT_SYSTEM.md','15_SPIRITUAL_HERB_FARMING_SYSTEM.md','18_ECONOMY_SYSTEM.md','20_COMBAT_SYSTEM.md']) if (!paths.has(required)) errors.push('required module missing: ' + required)
  for (const module of catalog.modules ?? []) for (const ref of module.references ?? []) if (!paths.has(ref) && ref !== 'INDEX.md') warnings.push(module.path + ' references unindexed file ' + ref)
  return { valid: errors.length === 0, errors, warnings, moduleCount: catalog.modules?.length ?? 0 }
}
async function getText(url) { const response = await fetch(url, { headers: { 'User-Agent': 'Xuantian-World-Importer/1.0' } }); if (!response.ok) throw new Error('HTTP ' + response.status + ' fetching ' + url); return response.text() }
async function getJson(url) { const headers = { 'User-Agent': 'Xuantian-World-Importer/1.0', Accept: 'application/vnd.github+json' }; if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN; const response = await fetch(url, { headers }); if (!response.ok) throw new Error('HTTP ' + response.status + ' fetching ' + url); return response.json() }
async function parallel(items, limit, fn) { const results = new Array(items.length); let cursor = 0; await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => { while (cursor < items.length) { const i = cursor++; results[i] = await fn(items[i], i) } })); return results }

const normalizeHeader = (value) => value.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\*\*/g, '').replace(/\*/g, '').trim()
function tableRecords(module, requiredHeaders) {
  const records = []
  for (const table of module?.tables ?? []) {
    const headers = table.headers.map(normalizeHeader)
    if (!requiredHeaders.every((required) => headers.some((header) => header.includes(required)))) continue
    const section = [...(module.sections ?? [])].filter((item) => item.line <= table.startLine).sort((a, b) => b.line - a.line)[0]
    for (const row of table.rows) {
      records.push({
        source: module.path,
        sourceBlobSha: module.blobSha,
        sourceLine: table.startLine,
        section: section?.title ?? null,
        fields: Object.fromEntries(headers.map((header, index) => [header || 'column_' + index, row[index] ?? '']))
      })
    }
  }
  return records
}
export function buildDomainCatalog(seed, catalog) {
  const byPath = new Map(catalog.modules.map((module) => [module.path, module]))
  const herbModule = byPath.get('15_SPIRITUAL_HERB_FARMING_SYSTEM.md')
  const beastModule = byPath.get('21_BESTIARY.md')
  const herbCatalog = tableRecords(herbModule, ['Nama Tanaman', 'Standar Waktu Tumbuh'])
  const beastCatalog = tableRecords(beastModule, ['Nama Beast', 'Loot'])
  const regionSourceData = seed.regions.map((region) => {
    const module = byPath.get(region.source[1])
    return { id: region.id, source: region.source[1], sourceBlobSha: module?.blobSha ?? null, title: module?.title ?? region.name, headings: module?.headings ?? [], tables: module?.tables ?? [], sections: module?.sections ?? [] }
  })
  const formulaRegistry = []
  for (const module of catalog.modules) {
    if (!/13_SPIRITUAL_ROOT|14_CRAFTING|15_SPIRITUAL_HERB|16_BEAST|17_AIRSHIP|18_ECONOMY|19_VITALITY|20_COMBAT/.test(module.path)) continue
    for (const block of module.codeBlocks ?? []) formulaRegistry.push({ source: module.path, sourceBlobSha: module.blobSha, startLine: block.startLine, expression: block.content })
    for (const section of module.sections ?? []) for (const line of section.content.split(/\r?\n/)) {
      if (/^[A-Za-z][A-Za-z0-9_]*(?:\([^)]*\))?\s*=/.test(line.trim())) formulaRegistry.push({ source: module.path, sourceBlobSha: module.blobSha, startLine: section.line, section: section.title, expression: line.trim() })
    }
  }
  return {
    ...seed,
    status: 'source-synced-domain-extract',
    source: { ...seed.source, commitSha: catalog.source.commitSha, importedAt: catalog.source.importedAt },
    coverage: { regionCount: regionSourceData.length, realmCount: seed.cultivation.realms.length, spiritualRootCount: seed.cultivation.spiritualRoots.length, professionCount: seed.professions.length, herbCount: herbCatalog.length, expectedHerbCount: 200, herbCatalogComplete: herbCatalog.length >= 200, beastRecordCount: beastCatalog.length, formulaCount: formulaRegistry.length },
    regionSourceData,
    herbCatalog,
    beastCatalog,
    economyTables: byPath.get('18_ECONOMY_SYSTEM.md')?.tables ?? [],
    formulaRegistry,
    completenessWarnings: [
      ...(herbCatalog.length < 200 ? ['Herb tables currently expose ' + herbCatalog.length + ' rows; source index describes a 200-plant catalog.'] : []),
      ...(beastCatalog.length === 0 ? ['No bestiary species tables were recognized; inspect source table headers.'] : [])
    ]
  }
}

export async function runImport() {
  const base = 'https://api.github.com/repos/' + SOURCE_REPOSITORY
  const index = await getText('https://raw.githubusercontent.com/' + SOURCE_REPOSITORY + '/' + SOURCE_BRANCH + '/INDEX.md')
  const commit = await getJson(base + '/commits/' + SOURCE_BRANCH)
  const tree = await getJson(base + '/git/trees/' + commit.commit.tree.sha + '?recursive=1')
  const blobs = new Map((tree.tree ?? []).filter((item) => item.type === 'blob').map((item) => [item.path, item.sha]))
  if (gitBlobSha(index) !== blobs.get('INDEX.md')) throw new Error('Git blob SHA mismatch for INDEX.md')
  const entries = parseIndex(index)
  if (!entries.some((item) => item.path === 'players.md')) entries.push({ id: 'hub', moduleLabel: 'Hub', path: 'players.md', description: 'Read-only starter character catalog' })
  const missing = entries.filter((item) => !blobs.has(item.path))
  if (missing.length) throw new Error('INDEX paths missing in source tree: ' + missing.map((x) => x.path).join(', '))
  const imported = await parallel(entries, 6, async (entry) => {
    const markdown = await getText('https://raw.githubusercontent.com/' + SOURCE_REPOSITORY + '/' + SOURCE_BRANCH + '/' + entry.path)
    const blobSha = gitBlobSha(markdown), expected = blobs.get(entry.path)
    if (blobSha !== expected) throw new Error('Git blob SHA mismatch for ' + entry.path + ': ' + expected + ' != ' + blobSha)
    return { entry, markdown, blobSha, parsed: parseMarkdown(entry.path, markdown) }
  })
  const catalog = {
    schemaVersion: 1,
    source: { repository: SOURCE_REPOSITORY, branch: SOURCE_BRANCH, commitSha: commit.sha, treeSha: tree.sha, sourceIndexBlobSha: blobs.get('INDEX.md'), policy: 'read-only', importedAt: new Date().toISOString() },
    summary: { indexedModuleCount: entries.length, importedModuleCount: imported.length, regionModules: imported.filter((x) => /^0[2-9]_.*_ZHOU\.md$|^1[01]_.*_ZHOU\.md$/.test(x.entry.path)).map((x) => ({ id: x.entry.id, path: x.entry.path, title: x.parsed.title })), systemModules: imported.filter((x) => /SYSTEM|COMBAT|BESTIARY|EVENT|PROFESSION|CUSTOM|ECONOMY|VITALITY|AIRSHIP|CRAFTING/i.test(x.entry.path)).map((x) => ({ id: x.entry.id, path: x.entry.path, title: x.parsed.title })) },
    modules: imported.map((x) => ({ id: x.entry.id, moduleLabel: x.entry.moduleLabel, path: x.entry.path, description: x.entry.description, title: x.parsed.title, blobSha: x.blobSha, lineCount: x.parsed.lineCount, headings: x.parsed.headings, sections: x.parsed.sections, tables: x.parsed.tables, codeBlocks: x.parsed.codeBlocks, formulaBlocks: x.parsed.formulaBlocks, references: x.parsed.references }))
  }
  const validation = validateCatalog(catalog)
  const domainSeed = JSON.parse(await readFile(resolve(GENERATED, 'domain-catalog.json'), 'utf8'))
  const domainCatalog = buildDomainCatalog(domainSeed, catalog)
  await mkdir(SNAPSHOTS, { recursive: true }); await mkdir(GENERATED, { recursive: true }); await mkdir(PUBLIC_DATA, { recursive: true })
  await writeFile(resolve(SNAPSHOTS, 'INDEX.md'), index, 'utf8')
  for (const item of imported) { const target = resolve(SNAPSHOTS, item.entry.path); await mkdir(dirname(target), { recursive: true }); await writeFile(target, item.markdown, 'utf8') }
  await writeFile(resolve(GENERATED, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8')
  await writeFile(resolve(PUBLIC_DATA, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8')
  await writeFile(resolve(GENERATED, 'domain-catalog.json'), JSON.stringify(domainCatalog, null, 2) + '\n', 'utf8')
  await writeFile(resolve(PUBLIC_DATA, 'domain-catalog.json'), JSON.stringify(domainCatalog, null, 2) + '\n', 'utf8')
  await writeFile(resolve(GENERATED, 'validation-report.json'), JSON.stringify({ ...validation, source: catalog.source, checkedAt: new Date().toISOString() }, null, 2) + '\n', 'utf8')
  await writeFile(resolve(PUBLIC_DATA, 'validation-report.json'), JSON.stringify({ ...validation, source: catalog.source, checkedAt: new Date().toISOString() }, null, 2) + '\n', 'utf8')
  await writeFile(resolve(PUBLIC_DATA, 'simulation-rules.json'), await readFile(resolve(ROOT, 'world-bible/generated/simulation-rules.json'), 'utf8'), 'utf8')
  if (!validation.valid) throw new Error('Validation failed: ' + validation.errors.join('; '))
  console.log('Imported ' + validation.moduleCount + ' official modules; ' + validation.warnings.length + ' cross-reference warning(s).')
  console.log('Domain extract: ' + domainCatalog.coverage.regionCount + ' regions, ' + domainCatalog.coverage.herbCount + ' herb rows, ' + domainCatalog.coverage.beastRecordCount + ' beast rows, ' + domainCatalog.coverage.formulaCount + ' formula records.')
  console.log('Source commit: ' + catalog.source.commitSha + '; source policy: read-only.')
  return { catalog, validation }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) runImport().catch((error) => { console.error(error); process.exitCode = 1 })