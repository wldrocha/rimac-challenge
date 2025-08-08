import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchUser, fetchPlans } from '@/shared/services/api'
import type { User, Plan } from '@/shared/services/types'
import { getAge, parseDMYToDate } from '@/shared/utils/date'

interface QuoteContextProps {
  user: User | null
  plans: Plan[]
  handleNewUser: (user: User) => void
  handleUpdateUser: (user: Partial<User>) => void
  loading: boolean
  error: string | null
}

const QuoteContext = createContext<QuoteContextProps | undefined>(undefined)

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleNewUser = (newUser: User) => {
    const parsedBirthDay = parseDMYToDate(newUser.birthDay) ?? undefined
    const age = parsedBirthDay ? getAge(parsedBirthDay) ?? undefined : undefined
    const userToSave = { ...newUser, parsedBirthDay, age }
    setUser(userToSave)
  }

  const handleUpdateUser = (updatedUser: Partial<User>) =>
    setUser((prevUser) => (prevUser ? { ...prevUser, ...updatedUser } : null))

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([fetchUser(), fetchPlans()])
      .then((results) => {
        const [userResult, plansResult] = results
        const errors: string[] = []
        if (userResult.status === 'fulfilled') {
          handleNewUser(userResult.value)
        } else {
          errors.push('No se pudo cargar el usuario')
        }
        if (plansResult.status === 'fulfilled') {
          setPlans(plansResult.value)
        } else {
          errors.push('No se pudo cargar los planes')
        }
        if (errors.length) setError(errors.join(' y '))
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <QuoteContext.Provider value={{ user, plans, handleNewUser, handleUpdateUser, loading, error }}>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteContext }
