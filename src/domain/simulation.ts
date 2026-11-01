import type { GameSnapshot } from './types'
import { actualGrowthDays, harvestYield, meditationQiPerMinute } from './canonFormulas.mjs'
import { validateSimulationRules } from './simulationRules'

const MINUTES_PER_DAY = 1440
const totalMinutes = (s: GameSnapshot) => (s.world.day - 1) * MINUTES_PER_DAY + s.world.hour * 60 + s.world.minute

function assertCanonicalRules() {
  const report = validateSimulationRules()
  if (!report.valid) throw new Error('Simulation rules are not valid: ' + report.errors.join('; '))
}

export function advanceTime(snapshot: GameSnapshot, minutes: number, reason: string): GameSnapshot {
  assertCanonicalRules()
  if (!Number.isFinite(minutes) || minutes < 0) throw new RangeError('Time advance must be a non-negative number of minutes')
  const next = structuredClone(snapshot)
  const total = totalMinutes(next) + minutes
  next.world.day = Math.floor(total / MINUTES_PER_DAY) + 1
  const dayMinute = total % MINUTES_PER_DAY
  next.world.hour = Math.floor(dayMinute / 60)
  next.world.minute = dayMinute % 60
  if (next.herb.plantedAtMinute !== null) next.herb.growthMinutes += minutes
  next.world.eventLog.unshift(`Hari ${next.world.day}, ${String(next.world.hour).padStart(2, '0')}:${String(next.world.minute).padStart(2, '0')} — ${reason}`)
  next.world.eventLog = next.world.eventLog.slice(0, 12)
  return next
}

export function cultivate(snapshot: GameSnapshot): GameSnapshot {
  const next = advanceTime(snapshot, 60, 'Meditasi kultivasi selama satu jam.')
  const gain = Math.min(
    next.player.qiCap - next.player.qi,
    meditationQiPerMinute({
      qiCap: next.player.qiCap,
      comprehensionLevel: next.player.comprehensionLevel,
      spiritStoneGatheringBonus: next.player.spiritStoneGatheringBonus,
    }) * 60,
  )
  next.player.qi += Math.max(0, gain)
  next.player.cultivationMinutes += 60
  next.world.eventLog.unshift(`Meditasi menambah ${Math.max(0, gain)} Qi berdasarkan formula resmi.`)
  return next
}

export function plantHerb(snapshot: GameSnapshot): GameSnapshot {
  assertCanonicalRules()
  if (snapshot.herb.plantedAtMinute !== null) return snapshot
  const next = structuredClone(snapshot)
  const growthDays = actualGrowthDays({
    baseGrowthDays: next.herb.baseGrowthDays,
    soilGrade: next.herb.soilGrade,
    fertilized: next.herb.fertilized,
    woodRoot: next.herb.woodRoot,
  })
  next.herb.requiredMinutes = growthDays * MINUTES_PER_DAY
  next.herb.plantedAtMinute = totalMinutes(next)
  next.herb.growthMinutes = 0
  next.world.eventLog.unshift(`Benih ${next.herb.name} ditanam. Estimasi pertumbuhan mengikuti formula tanah, pupuk, dan akar spiritual resmi: ${growthDays} hari.`)
  return next
}

export function harvestHerb(snapshot: GameSnapshot): GameSnapshot {
  assertCanonicalRules()
  if (snapshot.herb.plantedAtMinute === null || snapshot.herb.growthMinutes < snapshot.herb.requiredMinutes) return snapshot
  const next = structuredClone(snapshot)
  const amount = harvestYield({
    baseYield: next.herb.baseYield,
    soilGrade: next.herb.soilGrade,
    herbalistSkillLevel: next.herb.herbalistSkillLevel,
  })
  next.herb.yield = amount
  next.herbInventory[next.herb.herbId] = (next.herbInventory[next.herb.herbId] ?? 0) + amount
  next.herb.plantedAtMinute = null
  next.herb.growthMinutes = 0
  next.world.eventLog.unshift(`Panen resmi: ${amount} ikat ${next.herb.name} masuk inventaris. Tidak ada penjualan otomatis atau penciptaan mata uang.`)
  return next
}

export function rest(snapshot: GameSnapshot): GameSnapshot {
  return advanceTime(snapshot, 8 * 60, 'Beristirahat selama delapan jam.')
}
