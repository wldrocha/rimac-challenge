import type { ReactNode } from 'react'
import './card.scss'

interface CardProps {
  children: ReactNode
  className?: string
  isSelected?: boolean
}

export const Card = ({ children, className, isSelected, ...props }: CardProps) => {
  return <article className={`rm_card ${className || ''} ${isSelected ? 'selected' : ''}`} {...props}>{children}</article>
}
