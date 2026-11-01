import test from 'node:test'
import assert from 'node:assert/strict'
import { qiCap, actualGrowthDays, harvestYield, tamingChance, pillPurity, airshipSpeed, finalHitChance, finalDamage, initiativeScore } from './canonFormulas.mjs'
test('QiCap follows official realm table',()=>{assert.equal(qiCap(1,'early'),100);assert.equal(qiCap(9,'peak'),78125000)})
test('farming formula uses soil grades',()=>{assert.equal(actualGrowthDays({baseGrowthDays:10,soilGrade:4,fertilized:false,woodRoot:false}),2.5);assert.equal(harvestYield({baseYield:2,soilGrade:4,herbalistSkillLevel:0}),4)})
test('taming formula reproduces official worked example',()=>{assert.equal(tamingChance({characterRealmIndex:3,beastRealmIndex:3,beastCurrentHpPercent:.3,sealTier:3,hasPreferredBait:true,beastTier:3}),.88)})
test('alchemy and airship formulas',()=>{assert.equal(pillPurity({flameBonus:.2,cauldronTier:2,alchemistLevel:3,pillTier:2,alchemistTier:2}),.84);assert.equal(airshipSpeed({baseSpeedLiPerDay:2500,pilotTier:2,realm3QiDrive:true}),5500)})
test('combat calculations are deterministic with supplied roll',()=>{assert.equal(finalHitChance({attackerRealmIndex:3,defenderRealmIndex:2,dodgePenalty:.1,accuracyBonus:0}),.65);assert.equal(finalDamage({attackPower:100,skillMultiplier:1.5,passiveDefense:20,isCrit:true}),120);assert.equal(initiativeScore({realmIndex:3,stageBonus:10,rootSpeedBonus:15,equipmentSpeedBonus:0,randomRoll:5}),330)})
