import './external-layout.scss'
import type { ReactNode } from 'react'
import { Footer, Header } from '@/shared/components'

interface ExternalLayoutProps {
  children: ReactNode
}

export const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return (
    <div className="external-layout">
      <Header />
      <main className="external-layout__content">{children}</main>
      <Footer />
    </div>
  )
}
