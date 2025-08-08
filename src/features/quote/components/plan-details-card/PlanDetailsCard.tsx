import { Button, Card } from '@/shared/components'
import './plan-detail-card.scss'

interface PlanDetailsCardProps {
  name: string
  description: string[]
  icon?: React.ReactNode
  price?: number
  onClick?: () => void
}

export const PlanDetailsCard = ({ name, description, price, icon, onClick }: PlanDetailsCardProps) => {
  return (
    <article onClick={onClick}>
      <Card className='rm_plan_detail_card'>
        <header className='rm_plan_detail_card_container'>
          <h2 className='rm_plan_detail_card_name'>{name}</h2>
          {icon && <div className='rm_plan_detail_card_icon'>{icon}</div>}
        </header>
        {price && (
          <div className='rm_plan_detail_card_price'>
            <span className='rm_plan_detail_card_price_label'>costo del plan</span>
            <span className='rm_plan_detail_card_price_value' aria-label={`Precio del plan: ${price}`}>
              ${price} al mes
            </span>
          </div>
        )}
        <ul className='rm_plan_detail_card_description'>
          {description.map((line) => (
            <li className='rm_plan_detail_card_description_line' key={`line-${line}`}>
              {line}
            </li>
          ))}
        </ul>
        <Button variant='primary' className='rm_plan_detail_card_button'>
          Seleccionar plan
        </Button>
      </Card>
    </article>
  )
}
