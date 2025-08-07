import { useState, type ReactNode } from 'react'
import { Card } from '@/shared/components'
import './plan-selection-card.scss'

interface PlanSelectionCardProps {
  title: string
  description: string
  isDisabled?: boolean
  icon?: ReactNode
}

export const PlanSelectionCard = ({ title, description, icon, isDisabled = false }: PlanSelectionCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    if (isDisabled) {
      return
    }

    setIsSelected(!isSelected)
  }

  return (
    <div onClick={handleClick} style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}>
      <Card className='rm_plan_selection_card' isSelected={isSelected}>
        <div className='rm_plan_selection_card_container'>
          {icon && <div className='rm_plan_selection_card_icon'>{icon}</div>}
          <h3 className='rm_plan_selection_card_title'>{title}</h3>
        </div>
        <p className='rm_plan_selection_card_description'>{description}</p>
      </Card>
    </div>
  )
}
