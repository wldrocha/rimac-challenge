import { QuoteForm } from '@/features/Quote/QuoteForm'
import { PlanSelection } from '@/features/QuoteForm/PlanSelection'
import { QuoteSummary } from '@/features/QuoteForm/QuoteSummary'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

export const AppRouter = () => (
  <Routes>
    <Route index element={<QuoteForm />} />
    <Route path='login' element={<QuoteForm />} />
    <Route path='plan' element={<PlanSelection />} />
    <Route path='summary' element={<QuoteSummary />} />
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
)
