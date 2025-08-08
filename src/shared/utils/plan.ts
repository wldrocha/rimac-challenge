import type { Plan } from '@/shared/services/types'

export function filterPlansByAge(plans: Plan[], age?: number) {
  if (!age || !Array.isArray(plans)) return []
  return plans.filter((plan) => plan?.age >= age).sort((a, b) => a.price - b.price)
}
