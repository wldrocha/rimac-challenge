import React, { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchUser } from '@/shared/services/api'
import type { User } from '@/shared/services/types'

interface QuoteContextProps {
  user: User | null
  handleNewUser: (user: User) => void
  handleUpdateUser: (user: Partial<User>) => void
  loading: boolean
  error: string | null
}

const QuoteContext = createContext<QuoteContextProps | undefined>(undefined)

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleNewUser = (newUser: User) => setUser(newUser)

  const handleUpdateUser = (updatedUser: Partial<User>) =>
    setUser((prevUser) => (prevUser ? { ...prevUser, ...updatedUser } : null))

  useEffect(() => {
    fetchUser()
      .then(handleNewUser)
      .catch(() => setError('No se pudo cargar el usuario'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <QuoteContext.Provider value={{ user, handleNewUser, handleUpdateUser, loading, error }}>
      {children}
    </QuoteContext.Provider>
  )
}

export { QuoteContext }
