import { readFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

export function validateOperationalData({ catalog, validationReport, domainCatalog, simulationRules }) {
  const errors = []
  if (validationReport.valid !== true) errors.push('World Bible import validation report is not valid')
  const commit = catalog.source?.commitSha
  if (!commit || domainCatalog.source?.commitSha !== commit || simulationRules.source?.commitSha !== commit || validationReport.source?.commitSha !== commit) {
    errors.push('Imported catalog, domain catalog, simulation rules and validation report must share one source commit SHA')
  }
  if (catalog.source?.repository !== 'aesher-gg/Xuantian-World' || domainCatalog.source?.repository !== 'aesher-gg/Xuantian-World' || simulationRules.source?.repository !== 'aesher-gg/Xuantian-World') {
    errors.push('Unexpected World Bible source repository')
  }
  if (catalog.source?.policy !== 'read-only' || domainCatalog.source?.policy !== 'read-only' || simulationRules.source?.policy !== 'read-only') errors.push('Canonical World Bible must remain read-only')
  const modules = new Map((catalog.modules ?? []).map((module) => [module.path, module.blobSha]))
  for (const [path, sha] of Object.entries(domainCatalog.sourceShas ?? {})) {
    if (modules.get(path) !== sha) errors.push('Domain catalog source SHA is stale: ' + path)
  }
  for (const [path, sha] of Object.entries(simulationRules.source?.moduleShas ?? {})) {
    if (modules.get(path) !== sha) errors.push('Simulation rules source SHA is stale: ' + path)
  }
  for (const formula of simulationRules.formulaRegistry ?? []) {
    if (modules.get(formula.source) !== formula.sourceBlobSha) errors.push('Formula provenance mismatch: ' + formula.source + ':' + formula.startLine)
  }
  const regionIds = (domainCatalog.regions ?? []).map((region) => region.id).sort()
  const ruleRegionIds = (simulationRules.world?.regions ?? []).map((region) => region.id).sort()
  if (regionIds.length !== 10 || JSON.stringify(regionIds) !== JSON.stringify(ruleRegionIds)) errors.push('Operational region mapping does not match the canonical ten regions')
  if (domainCatalog.cultivation?.realms?.length !== 9 || simulationRules.cultivation?.realms?.length !== 9) errors.push('Nine canonical cultivation realms are required')
  if (domainCatalog.cultivation?.spiritualRoots?.length !== 5 || simulationRules.cultivation?.spiritualRoots?.length !== 5) errors.push('Five standard spiritual roots are required')
  if (domainCatalog.professions?.length !== 7 || simulationRules.professions?.length !== 7) errors.push('Seven canonical professions are required')
  if (domainCatalog.herbCatalog?.length !== 200 || simulationRules.herbalism?.catalogCount !== domainCatalog.herbCatalog.length || simulationRules.herbalism?.catalogComplete !== true) errors.push('Complete 200-record herb catalog is required')
  if (domainCatalog.beastCatalog?.length !== 344 || simulationRules.bestiary?.recordCount !== domainCatalog.beastCatalog.length) errors.push('344-record beast catalog is required')
  if (domainCatalog.formulaRegistry?.length !== 37 || simulationRules.formulaRegistry?.length !== domainCatalog.formulaRegistry.length) errors.push('Canonical formula registry coverage mismatch')
  if (!(simulationRules.sourceConflicts?.length > 0) || simulationRules.sourceConflicts.some((conflict) => conflict.status !== 'unresolved')) errors.push('Source conflicts must remain explicitly unresolved until authoritatively reconciled')
  if (simulationRules.runtimePolicy?.canonicalSourceIsReadOnly !== true || simulationRules.runtimePolicy?.unresolvedConflictsMustBeExposed !== true) errors.push('Operational safety policy is missing')
  return { valid: errors.length === 0, errors }
}

async function main() {
  const [catalog, validationReport, domainCatalog, simulationRules] = await Promise.all([
    readFile(resolve(root, 'world-bible/generated/catalog.json'), 'utf8').then(JSON.parse),
    readFile(resolve(root, 'world-bible/generated/validation-report.json'), 'utf8').then(JSON.parse),
    readFile(resolve(root, 'world-bible/generated/domain-catalog.json'), 'utf8').then(JSON.parse),
    readFile(resolve(root, 'world-bible/generated/simulation-rules.json'), 'utf8').then(JSON.parse),
  ])
  const report = validateOperationalData({ catalog, validationReport, domainCatalog, simulationRules })
  if (!report.valid) {
    console.error('Operational data validation failed:')
    for (const error of report.errors) console.error('- ' + error)
    process.exitCode = 1
    return
  }
  console.log('Operational data valid: 10 regions, 9 realms, 5 roots, 7 professions, 200 herbs, 344 beasts, 37 formula records.')
  console.log('Source conflicts are retained explicitly: ' + simulationRules.sourceConflicts.length + '.')
  console.log('All derived data traces to source commit ' + catalog.source.commitSha + '.')
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => { console.error(error); process.exitCode = 1 })
}
