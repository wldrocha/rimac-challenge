import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchUser, fetchPlans } from '../api'
import type { User, Plan } from '../types'

// Mock fetch globally
const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

describe('API Services', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('fetchUser', () => {
    const mockUser: User = {
      name: 'Juan',
      lastName: 'Pérez',
      birthDay: '15-06-1990'
    }

    it('should fetch user successfully', async () => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(mockUser)
      }
      mockFetch.mockResolvedValue(mockResponse)

      const result = await fetchUser()

      expect(mockFetch).toHaveBeenCalledWith('https://rimac-front-end-challenge.netlify.app/api/user.json')
      expect(mockResponse.json).toHaveBeenCalled()
      expect(result).toEqual(mockUser)
    })

    it('should throw error when response is not ok', async () => {
      const mockResponse = {
        ok: false,
        status: 404
      }
      mockFetch.mockResolvedValue(mockResponse)

      await expect(fetchUser()).rejects.toThrow('Error al obtener el usuario')
      expect(mockFetch).toHaveBeenCalledWith('https://rimac-front-end-challenge.netlify.app/api/user.json')
    })

    it('should throw error when network request fails', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'))

      await expect(fetchUser()).rejects.toThrow('Network error')
    })
  })

  describe('fetchPlans', () => {
    const mockPlansResponse = {
      list: [
        { name: 'Plan Básico', price: 100, description: ['Cobertura básica'], age: 18 },
        { name: 'Plan Premium', price: 200, description: ['Cobertura premium'], age: 25 }
      ]
    }

    const expectedPlans: Plan[] = [
      { name: 'Plan Básico', price: 100, description: ['Cobertura básica'], age: 18 },
      { name: 'Plan Premium', price: 200, description: ['Cobertura premium'], age: 25 }
    ]

    it('should fetch plans successfully', async () => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue(mockPlansResponse)
      }
      mockFetch.mockResolvedValue(mockResponse)

      const result = await fetchPlans()

      expect(mockFetch).toHaveBeenCalledWith('https://rimac-front-end-challenge.netlify.app/api/plans.json')
      expect(mockResponse.json).toHaveBeenCalled()
      expect(result).toEqual(expectedPlans)
    })

    it('should return empty array when plans.list is undefined', async () => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue({})
      }
      mockFetch.mockResolvedValue(mockResponse)

      const result = await fetchPlans()

      expect(result).toEqual([])
    })

    it('should return empty array when plans.list is null', async () => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockResolvedValue({ list: null })
      }
      mockFetch.mockResolvedValue(mockResponse)

      const result = await fetchPlans()

      expect(result).toEqual([])
    })

    it('should throw error when response is not ok', async () => {
      const mockResponse = {
        ok: false,
        status: 500
      }
      mockFetch.mockResolvedValue(mockResponse)

      await expect(fetchPlans()).rejects.toThrow('Error al obtener los planes')
      expect(mockFetch).toHaveBeenCalledWith('https://rimac-front-end-challenge.netlify.app/api/plans.json')
    })

    it('should throw error when network request fails', async () => {
      mockFetch.mockRejectedValue(new Error('Connection timeout'))

      await expect(fetchPlans()).rejects.toThrow('Connection timeout')
    })

    it('should handle malformed response gracefully', async () => {
      const mockResponse = {
        ok: true,
        json: vi.fn().mockRejectedValue(new Error('Invalid JSON'))
      }
      mockFetch.mockResolvedValue(mockResponse)

      await expect(fetchPlans()).rejects.toThrow('Invalid JSON')
    })
  })
})
