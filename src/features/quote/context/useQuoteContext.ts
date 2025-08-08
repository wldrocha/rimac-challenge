import { useContext } from 'react'
import { QuoteContext } from './QuoteContext'

export const useQuoteContext = () => {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuoteContext debe usarse dentro de un QuoteProvider')
  }
  return context
}
