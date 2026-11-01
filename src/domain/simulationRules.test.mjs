import test from 'node:test'
import assert from 'node:assert/strict'
import rules from '../../world-bible/generated/simulation-rules.json' with { type: 'json' }
import domain from '../../world-bible/generated/domain-catalog.json' with { type: 'json' }
import {
  qiCap, maxHp, canonicalAttackPower, canonicalPassiveDefense,
  canonicalInitiativeScore, canonicalCriticalChance, fastingMultiplierForRealm, satietyDropForRealm,
  finalBuyPrice, toxinStatus, accumulatePillToxin, naturalToxinCleansing,
  formulaSource, evaluateWithSource, weaponMultiplierForTier,
} from './canonFormulas.mjs'

test('operational rules are tied to the exact imported canon snapshot', () => {
  assert.equal(rules.source.commitSha, domain.source.commitSha)
  assert.equal(rules.source.policy, 'read-only')
  assert.equal(rules.world.regions.length, 10)
  assert.equal(rules.cultivation.realms.length, 9)
  assert.equal(rules.cultivation.spiritualRoots.length, 5)
  assert.equal(rules.professions.length, 7)
  assert.equal(rules.herbalism.catalogCount, 200)
  assert.equal(rules.bestiary.recordCount, 344)
  assert.equal(rules.formulaRegistry.length, 37)
  assert.equal(rules.sourceConflicts.length, 7)
  for (const [path, sha] of Object.entries(rules.source.moduleShas)) assert.equal(domain.sourceShas[path], sha)
})

test('cultivation and vitality formulas use official Qi caps and explicit formula', () => {
  assert.equal(qiCap(1, 'middle'), 150)
  assert.equal(qiCap(9, 'peak'), 78125000)
  assert.equal(maxHp({ realmBaseQiCap: 100, stage: 'middle', root: 'wood', bodyFortificationBonus: 0 }), 90)
})

test('combat root multipliers are read from combat module table', () => {
  assert.equal(canonicalAttackPower({ qiCap: 100, root: 'fire', weaponTier: 1 }), 23.1)
  assert.equal(canonicalPassiveDefense({ qiCap: 100, root: 'earth', armorDefenseRating: 0 }), 7.5)
  assert.equal(canonicalCriticalChance({ attackerDexterity: 10, root: 'wind-metal' }), 0.15)
  assert.throws(() => weaponMultiplierForTier(5), /provide its exact official item multiplier/)
})

test('initiative and fasting use official indexed values', () => {
  assert.equal(canonicalInitiativeScore({ realmIndex: 3, stage: 'middle', root: 'wind-metal', randomRoll: 5 }), 330)
  assert.equal(fastingMultiplierForRealm(1), 2)
  assert.equal(satietyDropForRealm(1), 0.05)
  assert.equal(fastingMultiplierForRealm(5), null)
  assert.equal(satietyDropForRealm(5), 0)
})

test('economy price uses official discount and scarcity bounds', () => {
  assert.equal(finalBuyPrice({ baseValue: 20, barterSkillLevel: 3, factionAffinityBonus: 0.1, regionScarcityMultiplier: 1.5 }), 24.45)
  assert.equal(finalBuyPrice({ baseValue: 20, barterSkillLevel: 3, factionAffinityBonus: 2, regionScarcityMultiplier: 1.5 }), 24.3)
  assert.equal(finalBuyPrice({ baseValue: 100, barterSkillLevel: 20, factionAffinityBonus: 1, regionScarcityMultiplier: 9 }), 175)
})

test('pill toxin exposes threshold status without inventing stacking behavior', () => {
  assert.equal(accumulatePillToxin(0.4, 0.3), 0.7)
  const status = toxinStatus(0.4)
  assert.equal(status.qiRegenThresholdActive, true)
  assert.equal(status.directFormulaMultiplier, 0.6)
  assert.match(status.stackingResolution, /unresolved/)
  assert.equal(naturalToxinCleansing({ currentToxinPercent: 0.5, meditationHours: 24 }), 0.45)
  assert.equal(naturalToxinCleansing({ currentToxinPercent: 0.5, meditationHours: 24, consumedPillDuringPeriod: true }), 0.5)
})

test('formula evaluations include immutable source provenance', () => {
  const source = formulaSource('attackPower')
  assert.equal(source.path, '20_COMBAT_SYSTEM.md')
  assert.equal(source.line, 57)
  assert.match(source.blobSha, /^[a-f0-9]{40}$/)
  const result = evaluateWithSource('maxHp', { realmBaseQiCap: 100, stage: 'middle', root: 'wood', bodyFortificationBonus: 0 })
  assert.equal(result.value, 90)
  assert.equal(result.source.path, '19_VITALITY_HUNGER_SYSTEM.md')
  const qi = evaluateWithSource('qiCap', { realmIndex: 1, stage: 'middle' })
  assert.equal(qi.value, 150)
  assert.equal(qi.source.path, '13_SPIRITUAL_ROOT_SYSTEM.md')
})

test('operational validator rejects stale or incomplete source mappings', () => {
  const report = validateOperationalData({ catalog: { source: { commitSha: 'a', repository: 'aesher-gg/Xuantian-World', policy: 'read-only' }, modules: [] }, validationReport: { valid: true, source: { commitSha: 'a' } }, domainCatalog: { source: { commitSha: 'a', repository: 'aesher-gg/Xuantian-World', policy: 'read-only' }, regions: [], cultivation: { realms: [], spiritualRoots: [] }, professions: [], herbCatalog: [], beastCatalog: [], formulaRegistry: [], sourceShas: {} }, simulationRules: { source: { commitSha: 'a', repository: 'aesher-gg/Xuantian-World', policy: 'read-only', moduleShas: {} }, world: { regions: [] }, cultivation: { realms: [], spiritualRoots: [] }, professions: [], herbalism: { catalogCount: 0, catalogComplete: false }, bestiary: { recordCount: 0 }, formulaRegistry: [], sourceConflicts: [], runtimePolicy: {} } })
  assert.equal(report.valid, false)
  assert.ok(report.errors.length > 0)
})
