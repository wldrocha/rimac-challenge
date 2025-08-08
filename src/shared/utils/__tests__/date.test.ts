import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { parseDMYToDate, getAge } from '../date'

describe('parseDMYToDate', () => {
  it('should parse valid date string correctly', () => {
    const result = parseDMYToDate('15-06-1990')
    expect(result).toEqual(new Date(1990, 5, 15))
  })

  it('should return null for invalid date string', () => {
    expect(parseDMYToDate('invalid-date')).toBeNull()
    expect(parseDMYToDate('')).toBeNull()
  })

  it('should return null for completely invalid formats', () => {
    expect(parseDMYToDate('abc-def-ghi')).toBeNull()
    expect(parseDMYToDate('1/1/2023')).toBeNull()
  })
})

describe('getAge', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2025-08-08'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should calculate age correctly from string', () => {
    expect(getAge('08-08-1990')).toBe(34)
    expect(getAge('07-08-1990')).toBe(35)
    expect(getAge('09-08-1991')).toBe(33)
  })

  it('should return null for invalid inputs', () => {
    expect(getAge('invalid-date')).toBeNull()
    expect(getAge('')).toBeNull()
  })

  it('should handle edge cases', () => {
    expect(getAge('08-08-2025')).toBe(-1)
    expect(getAge('07-08-2025')).toBe(0)
  })
})
