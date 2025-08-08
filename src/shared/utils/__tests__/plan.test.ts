import { describe, it, expect } from 'vitest'
import { filterPlansByAge } from '../plan'
import type { Plan } from '@/shared/services/types'

const mockPlans: Plan[] = [
  { name: 'Plan Básico', price: 100, description: ['Cobertura básica'], age: 18 },
  { name: 'Plan Premium', price: 200, description: ['Cobertura premium'], age: 25 },
  { name: 'Plan Senior', price: 300, description: ['Cobertura senior'], age: 60 },
  { name: 'Plan Joven', price: 80, description: ['Cobertura joven'], age: 16 }
]

describe('filterPlansByAge', () => {
  it('should filter plans by age and sort by price', () => {
    const result = filterPlansByAge(mockPlans, 20)

    expect(result).toHaveLength(2)
    expect(result[0].name).toBe('Plan Premium')
    expect(result[1].name).toBe('Plan Senior')
  })

  it('should return empty array for undefined age', () => {
    expect(filterPlansByAge(mockPlans, undefined)).toEqual([])
  })

  it('should return empty array for zero age', () => {
    expect(filterPlansByAge(mockPlans, 0)).toEqual([])
  })

  it('should return empty array for empty plans array', () => {
    expect(filterPlansByAge([], 25)).toEqual([])
  })
})
