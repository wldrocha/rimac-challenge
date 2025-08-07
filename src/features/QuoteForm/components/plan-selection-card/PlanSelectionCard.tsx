import { useState, type ReactNode } from 'react'
import { Card } from '@/shared/components'
import './plan-selection-card.scss'

interface PlanSelectionCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export const PlanSelectionCard = ({ title, description, icon }: PlanSelectionCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <article onClick={handleClick}>
      <Card className='rm_plan_selection_card' isSelected={isSelected}>
        <header className='rm_plan_selection_card_container'>
          {icon && <div className='rm_plan_selection_card_icon'>{icon}</div>}
          <h3 className='rm_plan_selection_card_title'>{title}</h3>
        </header>
        <section className='rm_plan_selection_card_description'>{description}</section>
      </Card>
    </article>
  )
}
