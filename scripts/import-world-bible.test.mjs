import test from 'node:test'
import assert from 'node:assert/strict'
import { gitBlobSha, parseIndex, parseMarkdown, validateCatalog } from './import-world-bible.mjs'
test('parses official index module rows', () => {
 const md = ['| Modul | Nama File | Deskripsi | RAW |','|---|---|---|---|','| 00 | `00_CORE_RULES_AI_GM.md` | Aturan inti | url |','| 01 | `01_WORLD_OVERVIEW_AND_CAPITAL.md` | Geografi | url |'].join('\n')
 const modules = parseIndex(md); assert.equal(modules.length, 2); assert.equal(modules[0].id, 0); assert.equal(modules[1].path, '01_WORLD_OVERVIEW_AND_CAPITAL.md')
})
test('parses headings, tables, formulas and references', () => {
 const md = ['# Modul Uji','## Rumus','```text','Damage = Attack × 1.5','```','| Nama | Nilai |','|---|---|','| Qi | 10 |','Rujuk `13_SPIRITUAL_ROOT_SYSTEM.md`.'].join('\n')
 const p = parseMarkdown('20_COMBAT_SYSTEM.md', md); assert.equal(p.title, 'Modul Uji'); assert.equal(p.headings.length, 2); assert.equal(p.tables[0].rows.length, 1); assert.equal(p.formulaBlocks.length, 1); assert.deepEqual(p.references, ['13_SPIRITUAL_ROOT_SYSTEM.md'])
})
test('computes Git blob SHA', () => assert.equal(gitBlobSha('test'), '30d74d258442c7c65512eafab474568dd706c430'))
test('rejects missing required canon modules', () => {
 const report = validateCatalog({ schemaVersion: 1, source: { repository: 'aesher-gg/Xuantian-World', branch: 'main', commitSha: 'abc' }, modules: [] });
 assert.equal(report.valid, false); assert.ok(report.errors.some((e) => e.includes('required module missing')))
})