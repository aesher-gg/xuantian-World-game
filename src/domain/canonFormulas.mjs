import catalog from '../../world-bible/generated/domain-catalog.json' with { type: 'json' }
import rules from '../../world-bible/generated/simulation-rules.json' with { type: 'json' }
const clamp = (n, min, max) => Math.min(max, Math.max(min, n))
const root = (id) => catalog.cultivation.spiritualRoots.find((r) => r.id === id)
export function qiCap(realmIndex, stage) {
  const realm = catalog.cultivation.realms.find((r) => r.index === realmIndex)
  if (!realm) throw new RangeError('Unknown cultivation realm: ' + realmIndex)
  return realm.qi[stage]
}
export function passiveQiRegenPerHour({ qiCap: cap, root: rootId, environmentQiModifier, pillToxinPercent }) {
  const r = root(rootId)
  if (!r) throw new RangeError('Unknown spiritual root: ' + rootId)
  if (environmentQiModifier < 0 || pillToxinPercent < 0 || pillToxinPercent > 1) throw new RangeError('Invalid Qi regeneration modifier')
  return cap * rules.cultivation.qiRegen.baseRate * r.qiRegenMultiplier * environmentQiModifier * (1 - pillToxinPercent)
}
export function meditationQiPerMinute({ qiCap: cap, comprehensionLevel, spiritStoneGatheringBonus }) {
  return cap * rules.cultivation.meditation.baseRate * (1 + comprehensionLevel * rules.cultivation.meditation.comprehensionBonusPerLevel) * spiritStoneGatheringBonus
}
export function actualGrowthDays({ baseGrowthDays, soilGrade, fertilized, woodRoot }) {
  const soil = catalog.professions.find((p) => p.id === 'herb-farming').soilGrowthMultiplier['grade' + soilGrade]
  return Math.max(1, baseGrowthDays * soil * (1 - (fertilized ? 0.3 : 0) - (woodRoot ? 0.3 : 0)))
}
export function harvestYield({ baseYield, soilGrade, herbalistSkillLevel }) {
  const soil = catalog.professions.find((p) => p.id === 'herb-farming').soilYieldMultiplier['grade' + soilGrade]
  return baseYield * soil * (1 + herbalistSkillLevel * 0.1)
}
export function tamingChance({ characterRealmIndex, beastRealmIndex, beastCurrentHpPercent, sealTier, hasPreferredBait, beastTier }) {
  return clamp(0.3 + (characterRealmIndex - beastRealmIndex) * 0.1 + (1 - beastCurrentHpPercent) * 0.4 + sealTier * 0.1 + (hasPreferredBait ? 0.15 : 0) - beastTier * 0.05, 0.05, 0.95)
}
export function pillPurity({ flameBonus, cauldronTier, alchemistLevel, pillTier, alchemistTier }) {
  return clamp(0.5 + flameBonus + cauldronTier * 0.05 + alchemistLevel * 0.03 - (pillTier - alchemistTier) * 0.15, 0.1, 1)
}
export function airshipSpeed({ baseSpeedLiPerDay, pilotTier, realm3QiDrive }) {
  return baseSpeedLiPerDay * (1 + pilotTier * 0.1 + (realm3QiDrive ? 1 : 0))
}
export function buyPrice({ baseValue, discountModifier, regionScarcityMultiplier }) {
  return baseValue * discountModifier * regionScarcityMultiplier
}
export function sellPrice({ baseValue, barterSkillLevel }) {
  return baseValue * 0.5 * (1 + barterSkillLevel * 0.05)
}
export function auctionCommission({ finalBidAmount, youxiaRankBonus }) {
  return finalBidAmount * (0.1 - youxiaRankBonus * 0.01)
}
export function maxHp({ realmBaseQiCap, stage, root: rootId, bodyFortificationBonus }) {
  const r = root(rootId)
  if (!r) throw new RangeError('Unknown spiritual root: ' + rootId)
  return realmBaseQiCap * catalog.cultivation.stageMultiplier[stage] * 0.4 * r.hpMultiplier * (1 + bodyFortificationBonus)
}
export function hpRegenPerHour({ maxHp: hp, root: rootId, environmentQiMultiplier }) {
  const r = root(rootId)
  if (!r) throw new RangeError('Unknown spiritual root: ' + rootId)
  return hp * 0.05 * r.qiRegenMultiplier * environmentQiMultiplier
}
export function finalHitChance({ attackerRealmIndex, defenderRealmIndex, dodgePenalty, accuracyBonus }) {
  return clamp(rules.combat.hitChance.base + (attackerRealmIndex - defenderRealmIndex) * rules.combat.hitChance.realmAdvantagePerRank - dodgePenalty + accuracyBonus, rules.combat.hitChance.min, rules.combat.hitChance.max)
}
export function attackPower({ qiCap: cap, rootAttackMultiplier, weaponMultiplier, weaponSoulBindingBonus }) {
  return cap * rules.combat.attack.baseFactor * rootAttackMultiplier * weaponMultiplier * (1 + weaponSoulBindingBonus)
}
export function passiveDefense({ qiCap: cap, rootDefenseMultiplier, armorDefenseRating }) {
  return cap * rules.combat.defense.baseFactor * rootDefenseMultiplier + armorDefenseRating
}
export function finalDamage({ attackPower: ap, skillMultiplier, passiveDefense: defense, isCrit }) {
  return Math.max(rules.combat.damage.minimum, (ap * skillMultiplier - defense) * (isCrit ? rules.combat.critical.multiplier : 1))
}
export function evolutionChance({ currentBloodlinePurityPercent, evolutionPillQualityBonus, hasMatchingElementalCatalyst, currentTier, targetTier }) {
  return clamp(0.4 + currentBloodlinePurityPercent * 0.3 + evolutionPillQualityBonus + (hasMatchingElementalCatalyst ? 0.15 : 0) - (targetTier - currentTier) * 0.25, 0.05, 0.9)
}
export function satietyDropPerHour({ fastingMultiplier }) {
  if (fastingMultiplier <= 0) throw new RangeError('Fasting multiplier must be positive')
  return 0.1 / fastingMultiplier
}
export function criticalChance({ attackerDexterity, windMetalRoot }) {
  return rules.combat.critical.base + attackerDexterity * rules.combat.critical.dexterityFactor + (windMetalRoot ? rules.combat.rootMultipliers.criticalChanceBonus['wind-metal'] : 0)
}
export function beastDropChance({ baseRarityRate, tierModifier, carcassDamagePercent }) {
  return baseRarityRate * tierModifier - carcassDamagePercent * 0.1
}
export function initiativeScore({ realmIndex, stageBonus, rootSpeedBonus, equipmentSpeedBonus, randomRoll }) {
  if (!Number.isInteger(randomRoll) || randomRoll < 1 || randomRoll > 20) throw new RangeError('Initiative random roll must be 1..20')
  return realmIndex * rules.combat.initiative.realmIndexMultiplier + stageBonus + rootSpeedBonus + equipmentSpeedBonus + randomRoll
}


const formulaSources = {
  qiCap: ['13_SPIRITUAL_ROOT_SYSTEM.md', 49],
  passiveQiRegenPerHour: ['13_SPIRITUAL_ROOT_SYSTEM.md', 117],
  meditationQiPerMinute: ['13_SPIRITUAL_ROOT_SYSTEM.md', 126],
  actualGrowthDays: ['15_SPIRITUAL_HERB_FARMING_SYSTEM.md', 24],
  harvestYield: ['15_SPIRITUAL_HERB_FARMING_SYSTEM.md', 39],
  tamingChance: ['16_BEAST_TAMING_SYSTEM.md', 45],
  evolutionChance: ['16_BEAST_TAMING_SYSTEM.md', 104],
  pillPurity: ['14_CRAFTING_AND_PROFESSIONS_SYSTEM.md', 46],
  airshipSpeed: ['17_AIRSHIP_NAVIGATION_SYSTEM.md', 22],
  buyPrice: ['18_ECONOMY_SYSTEM.md', 51],
  buyDiscountModifier: ['18_ECONOMY_SYSTEM.md', 57],
  finalBuyPrice: ['18_ECONOMY_SYSTEM.md', 52],
  sellPrice: ['18_ECONOMY_SYSTEM.md', 71],
  auctionCommission: ['18_ECONOMY_SYSTEM.md', 80],
  maxHp: ['19_VITALITY_HUNGER_SYSTEM.md', 31],
  hpRegenPerHour: ['19_VITALITY_HUNGER_SYSTEM.md', 66],
  satietyDropPerHour: ['19_VITALITY_HUNGER_SYSTEM.md', 79],
  finalHitChance: ['20_COMBAT_SYSTEM.md', 87],
  attackPower: ['20_COMBAT_SYSTEM.md', 57],
  passiveDefense: ['20_COMBAT_SYSTEM.md', 74],
  finalDamage: ['20_COMBAT_SYSTEM.md', 97],
  criticalChance: ['20_COMBAT_SYSTEM.md', 98],
  initiativeScore: ['20_COMBAT_SYSTEM.md', 31],
  fastingMultiplierForRealm: ['19_VITALITY_HUNGER_SYSTEM.md', 83],
  toxinAccumulation: ['19_VITALITY_HUNGER_SYSTEM.md', 105],
  naturalToxinCleansing: ['19_VITALITY_HUNGER_SYSTEM.md', 114],
  beastDropChance: ['21_BESTIARY.md', 41],
}

export function formulaSource(name) {
  const ref = formulaSources[name]
  if (!ref) throw new RangeError('Unknown canonical formula source: ' + name)
  const [path, line] = ref
  const blobSha = rules.source.moduleShas[path]
  if (!blobSha) throw new Error('Missing source SHA for formula: ' + name)
  return { repository: rules.source.repository, commitSha: rules.source.commitSha, path, line, blobSha }
}

export function evaluateWithSource(name, args) {
  const functions = {
    qiCap, passiveQiRegenPerHour, meditationQiPerMinute, actualGrowthDays, harvestYield,
    tamingChance, evolutionChance, pillPurity, airshipSpeed, buyPrice, buyDiscountModifier, finalBuyPrice, sellPrice,
    auctionCommission, maxHp, hpRegenPerHour, satietyDropPerHour, finalHitChance,
    attackPower, passiveDefense, finalDamage, criticalChance, initiativeScore, beastDropChance,
  }
  const fn = functions[name]
  if (!fn) throw new RangeError('Unknown canonical formula: ' + name)
  const value = name === 'qiCap' ? fn(args.realmIndex, args.stage) : fn(args)
  return { value, source: formulaSource(name) }
}

export function combatRootMultipliers(rootId) {
  const attack = rules.combat.rootMultipliers.attack[rootId]
  const defense = rules.combat.rootMultipliers.defense[rootId]
  if (attack === undefined || defense === undefined) throw new RangeError('Unknown combat root: ' + rootId)
  return {
    attack,
    defense,
    criticalChanceBonus: rules.combat.rootMultipliers.criticalChanceBonus[rootId] ?? rules.combat.rootMultipliers.criticalChanceBonus.default,
    source: rules.combat.rootMultipliers.source,
    conflicts: rules.sourceConflicts.filter((item) => item.affectedSystem.startsWith('combat.')),
  }
}

export function canonicalAttackPower({ qiCap: cap, root: rootId, weaponTier, weaponMultiplier: explicitWeaponMultiplier, weaponSoulBindingBonus = 0 }) {
  const rootStats = combatRootMultipliers(rootId)
  const weapon = explicitWeaponMultiplier ?? weaponMultiplierForTier(weaponTier)
  return attackPower({ qiCap: cap, rootAttackMultiplier: rootStats.attack, weaponMultiplier: weapon, weaponSoulBindingBonus })
}

export function canonicalPassiveDefense({ qiCap: cap, root: rootId, armorDefenseRating }) {
  const rootStats = combatRootMultipliers(rootId)
  return passiveDefense({ qiCap: cap, rootDefenseMultiplier: rootStats.defense, armorDefenseRating })
}

export function weaponMultiplierForTier(tier) {
  const known = rules.combat.weaponMultipliers['tier' + tier]
  if (known !== undefined) return known
  if (tier >= 5) throw new RangeError('Tier 5+ weapon multiplier is specified as 2.0x+; provide its exact official item multiplier.')
  throw new RangeError('Unknown weapon tier: ' + tier)
}

export function canonicalInitiativeScore({ realmIndex, stage, root: rootId, equipmentSpeedBonus = 0, randomRoll }) {
  const stageBonus = rules.combat.initiative.stageBonus[stage]
  if (stageBonus === undefined) throw new RangeError('Unknown cultivation stage: ' + stage)
  const rootSpeedBonus = rules.combat.initiative.rootSpeedBonus[rootId] ?? rules.combat.initiative.rootSpeedBonus.default
  return initiativeScore({ realmIndex, stageBonus, rootSpeedBonus, equipmentSpeedBonus, randomRoll })
}

export function fastingMultiplierForRealm(realmIndex) {
  const row = rules.vitality.fasting.values.find((entry) => entry.realmIndex === realmIndex)
  if (!row) throw new RangeError('Unknown cultivation realm: ' + realmIndex)
  return row.multiplier
}

export function satietyDropForRealm(realmIndex) {
  const multiplier = fastingMultiplierForRealm(realmIndex)
  return multiplier === null ? 0 : satietyDropPerHour({ fastingMultiplier: multiplier })
}

export function buyDiscountModifier({ barterSkillLevel, factionAffinityBonus }) {
  const raw = 1 - barterSkillLevel * 0.03 - factionAffinityBonus * 0.05
  return Math.max(rules.economy.buy.minDiscountModifier, raw)
}

export function finalBuyPrice({ baseValue, barterSkillLevel, factionAffinityBonus, regionScarcityMultiplier }) {
  const scarcity = Math.min(rules.economy.buy.maxScarcityMultiplier, Math.max(rules.economy.buy.minScarcityMultiplier, regionScarcityMultiplier))
  return buyPrice({ baseValue, discountModifier: buyDiscountModifier({ barterSkillLevel, factionAffinityBonus }), regionScarcityMultiplier: scarcity })
}

export function toxinStatus(currentToxinPercent) {
  if (currentToxinPercent < 0 || currentToxinPercent > 1) throw new RangeError('Toxin percent must be 0..1')
  return {
    qiRegenThresholdActive: currentToxinPercent > rules.vitality.toxins.qiRegenThreshold,
    breakthroughPenaltyActive: currentToxinPercent > rules.vitality.toxins.breakthroughPenaltyThreshold,
    absorptionBlocked: currentToxinPercent >= rules.vitality.toxins.absorptionBlockedAt,
    directFormulaMultiplier: 1 - currentToxinPercent,
    stackingResolution: 'unresolved; do not apply an additional threshold penalty automatically',
    sourceConflict: rules.sourceConflicts.find((item) => item.id === 'pill-toxin-stacking'),
  }
}

export function accumulatePillToxin(previousToxin, consumedPillToxin) {
  return clamp(previousToxin + consumedPillToxin, 0, 1)
}

export function naturalToxinCleansing({ currentToxinPercent, meditationHours, consumedPillDuringPeriod = false }) {
  if (consumedPillDuringPeriod) return currentToxinPercent
  return Math.max(0, currentToxinPercent - meditationHours / 24 * rules.vitality.toxins.naturalCleansingPer24HourMeditation)
}


export function canonicalCriticalChance({ attackerDexterity, root: rootId }) {
  const rootBonus = combatRootMultipliers(rootId).criticalChanceBonus
  return rules.combat.critical.base + attackerDexterity * rules.combat.critical.dexterityFactor + rootBonus
}
