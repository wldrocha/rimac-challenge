import type { User, Plan } from './types'

const API_BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api'

export const fetchUser = async (): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/user.json`)
  if (!response.ok) {
    throw new Error('Error al obtener el usuario')
  }
  return response.json()
}

export const fetchPlans = async (): Promise<Plan[]> => {
  const response = await fetch(`${API_BASE_URL}/plans.json`)
  if (!response.ok) {
    throw new Error('Error al obtener los planes')
  }

  const plans = await response.json()

  return plans.list ?? []
}
