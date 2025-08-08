import { describe, it, expect } from 'vitest'

/**
 * Testing the critical discount calculation logic from PlanSelection component
 * This function calculates a 5% discount for "other" person plans
 */

// Extracted function from PlanSelection for unit testing
function getDiscountedPrice(price: number, hasDiscount: boolean): number {
  return hasDiscount ? Math.round(price * 0.95 * 100) / 100 : price
}

describe('getDiscountedPrice (PlanSelection critical logic)', () => {
  it('should apply 5% discount correctly', () => {
    expect(getDiscountedPrice(100, true)).toBe(95)
    expect(getDiscountedPrice(200, true)).toBe(190)
    expect(getDiscountedPrice(150, true)).toBe(142.5)
  })

  it('should not apply discount when hasDiscount is false', () => {
    expect(getDiscountedPrice(100, false)).toBe(100)
    expect(getDiscountedPrice(133.33, false)).toBe(133.33)
    expect(getDiscountedPrice(299.99, false)).toBe(299.99)
  })
})
