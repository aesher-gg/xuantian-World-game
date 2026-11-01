import type { GameSnapshot } from './types'
const MINUTES_PER_DAY = 1440
const totalMinutes = (s: GameSnapshot) => (s.world.day - 1) * MINUTES_PER_DAY + s.world.hour * 60 + s.world.minute

export function advanceTime(snapshot: GameSnapshot, minutes: number, reason: string): GameSnapshot {
  const next = structuredClone(snapshot)
  const total = totalMinutes(next) + minutes
  next.world.day = Math.floor(total / MINUTES_PER_DAY) + 1
  const dayMinute = total % MINUTES_PER_DAY
  next.world.hour = Math.floor(dayMinute / 60)
  next.world.minute = dayMinute % 60
  if (next.herb.plantedAtMinute !== null) next.herb.growthMinutes += minutes
  next.player.hunger = Math.min(100, next.player.hunger + Math.ceil(minutes / 240))
  next.player.stamina = Math.max(0, next.player.stamina - Math.ceil(minutes / 360))
  next.world.eventLog.unshift(`Hari ${next.world.day}, ${String(next.world.hour).padStart(2, '0')}:${String(next.world.minute).padStart(2, '0')} — ${reason}`)
  next.world.eventLog = next.world.eventLog.slice(0, 12)
  return next
}
export function cultivate(snapshot: GameSnapshot): GameSnapshot {
  const next = advanceTime(snapshot, 60, 'Meditasi kultivasi selama satu jam.')
  const gain = Math.max(1, Math.min(24, Math.floor((next.player.qiCap - next.player.qi) * 0.08 * next.world.woodQi)))
  next.player.qi = Math.min(next.player.qiCap, next.player.qi + gain)
  next.player.cultivationMinutes += 60
  next.world.eventLog.unshift(`Aliran Wood Qi menambah ${gain} Qi.`)
  return next
}
export function plantHerb(snapshot: GameSnapshot): GameSnapshot {
  if (snapshot.herb.plantedAtMinute !== null) return snapshot
  const next = structuredClone(snapshot)
  next.herb.plantedAtMinute = totalMinutes(next)
  next.herb.growthMinutes = 0
  next.world.eventLog.unshift('Benih Rumput Penjernih Qi ditanam di petak kebun.')
  return next
}
export function harvestHerb(snapshot: GameSnapshot): GameSnapshot {
  if (snapshot.herb.plantedAtMinute === null || snapshot.herb.growthMinutes < snapshot.herb.requiredMinutes) return snapshot
  const next = structuredClone(snapshot)
  next.herb.plantedAtMinute = null
  next.herb.growthMinutes = 0
  next.player.spiritStones += 1
  next.world.eventLog.unshift(`Panen berhasil: ${next.herb.yield} ikat Rumput Penjernih Qi. Hasil penjualan simulasi +1 Batu Spirit.`)
  return next
}
export function rest(snapshot: GameSnapshot): GameSnapshot {
  const next = advanceTime(snapshot, 8 * 60, 'Beristirahat selama delapan jam.')
  next.player.hp = Math.min(next.player.maxHp, next.player.hp + 35)
  next.player.stamina = Math.min(100, next.player.stamina + 45)
  return next
}
