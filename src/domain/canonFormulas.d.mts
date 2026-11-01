export type RootId = 'wood'|'fire'|'wind-metal'|'earth'|'water-ice'
export type RealmStage = 'early'|'middle'|'peak'
export function qiCap(realmIndex:number,stage:RealmStage):number
export function passiveQiRegenPerHour(input:{qiCap:number;root:RootId;environmentQiModifier:number;pillToxinPercent:number}):number
export function meditationQiPerMinute(input:{qiCap:number;comprehensionLevel:number;spiritStoneGatheringBonus:number}):number
export function actualGrowthDays(input:{baseGrowthDays:number;soilGrade:1|2|3|4;fertilized:boolean;woodRoot:boolean}):number
export function harvestYield(input:{baseYield:number;soilGrade:1|2|3|4;herbalistSkillLevel:number}):number
export function tamingChance(input:{characterRealmIndex:number;beastRealmIndex:number;beastCurrentHpPercent:number;sealTier:number;hasPreferredBait:boolean;beastTier:number}):number
export function pillPurity(input:{flameBonus:number;cauldronTier:number;alchemistLevel:number;pillTier:number;alchemistTier:number}):number
export function airshipSpeed(input:{baseSpeedLiPerDay:number;pilotTier:number;realm3QiDrive:boolean}):number
export function buyPrice(input:{baseValue:number;discountModifier:number;regionScarcityMultiplier:number}):number
export function sellPrice(input:{baseValue:number;barterSkillLevel:number}):number
export function auctionCommission(input:{finalBidAmount:number;youxiaRankBonus:number}):number
export function maxHp(input:{realmBaseQiCap:number;stage:RealmStage;root:RootId;bodyFortificationBonus:number}):number
export function hpRegenPerHour(input:{maxHp:number;root:RootId;environmentQiMultiplier:number}):number
export function finalHitChance(input:{attackerRealmIndex:number;defenderRealmIndex:number;dodgePenalty:number;accuracyBonus:number}):number
export function attackPower(input:{qiCap:number;rootAttackMultiplier:number;weaponMultiplier:number;weaponSoulBindingBonus:number}):number
export function passiveDefense(input:{qiCap:number;rootDefenseMultiplier:number;armorDefenseRating:number}):number
export function finalDamage(input:{attackPower:number;skillMultiplier:number;passiveDefense:number;isCrit:boolean}):number
export function initiativeScore(input:{realmIndex:number;stageBonus:number;rootSpeedBonus:number;equipmentSpeedBonus:number;randomRoll:number}):number
