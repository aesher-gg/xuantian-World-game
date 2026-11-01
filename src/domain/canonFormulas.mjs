import catalog from '../../world-bible/generated/domain-catalog.json' with { type: 'json' }
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
  return cap * 0.05 * r.qiRegenMultiplier * environmentQiModifier * (1 - pillToxinPercent)
}
export function meditationQiPerMinute({ qiCap: cap, comprehensionLevel, spiritStoneGatheringBonus }) {
  return cap * 0.02 * (1 + comprehensionLevel * 0.1) * spiritStoneGatheringBonus
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
  return clamp(0.7 + (attackerRealmIndex - defenderRealmIndex) * 0.05 - dodgePenalty + accuracyBonus, 0.1, 0.95)
}
export function attackPower({ qiCap: cap, rootAttackMultiplier, weaponMultiplier, weaponSoulBindingBonus }) {
  return cap * 0.15 * rootAttackMultiplier * weaponMultiplier * (1 + weaponSoulBindingBonus)
}
export function passiveDefense({ qiCap: cap, rootDefenseMultiplier, armorDefenseRating }) {
  return cap * 0.05 * rootDefenseMultiplier + armorDefenseRating
}
export function finalDamage({ attackPower: ap, skillMultiplier, passiveDefense: defense, isCrit }) {
  return Math.max(1, (ap * skillMultiplier - defense) * (isCrit ? 1.5 : 1))
}
export function evolutionChance({ currentBloodlinePurityPercent, evolutionPillQualityBonus, hasMatchingElementalCatalyst, currentTier, targetTier }) {
  return clamp(0.4 + currentBloodlinePurityPercent * 0.3 + evolutionPillQualityBonus + (hasMatchingElementalCatalyst ? 0.15 : 0) - (targetTier - currentTier) * 0.25, 0.05, 0.9)
}
export function satietyDropPerHour({ fastingMultiplier }) {
  if (fastingMultiplier <= 0) throw new RangeError('Fasting multiplier must be positive')
  return 0.1 / fastingMultiplier
}
export function criticalChance({ attackerDexterity, windMetalRoot }) {
  return 0.05 + attackerDexterity * 0.005 + (windMetalRoot ? 0.05 : 0)
}
export function beastDropChance({ baseRarityRate, tierModifier, carcassDamagePercent }) {
  return baseRarityRate * tierModifier - carcassDamagePercent * 0.1
}
export function initiativeScore({ realmIndex, stageBonus, rootSpeedBonus, equipmentSpeedBonus, randomRoll }) {
  if (!Number.isInteger(randomRoll) || randomRoll < 1 || randomRoll > 20) throw new RangeError('Initiative random roll must be 1..20')
  return realmIndex * 100 + stageBonus + rootSpeedBonus + equipmentSpeedBonus + randomRoll
}
