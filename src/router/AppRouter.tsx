
import { QuoteForm } from '@/features/quote/QuoteForm'
import { PlanSelection } from '@/features/quote/pages/PlanSelection'
import { QuoteSummary } from '@/features/quote/pages/QuoteSummary'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuoteProvider } from '@/features/quote/context/QuoteContext'


export const AppRouter = () => (
  <QuoteProvider>
    <Routes>
      <Route index element={<QuoteForm />} />
      <Route path='login' element={<QuoteForm />} />
      <Route path='select-plan' element={<PlanSelection />} />
      <Route path='summary' element={<QuoteSummary />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </QuoteProvider>
)
