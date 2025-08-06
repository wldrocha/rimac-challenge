import type { ReactNode } from 'react'
import { Footer, Header } from '@/shared/components'

interface ExternalLayoutProps {
  children: ReactNode
}

export const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
