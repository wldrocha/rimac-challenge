import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlanSelectionCard } from '../components/plan-selection-card/PlanSelectionCard'
import { PersonalIcon } from '@/shared/components/icons/PersonalIcon'
import { OtherPersonIcon } from '@/shared/components/icons/OtherPersonIcon'
import { filterPlansByAge } from '@/shared/utils/plan'
import { PlanDetailsCard } from '../components/plan-details-card/PlanDetailsCard'
import { InternalLayout } from '../layout/InternalLayout'
import { useQuoteContext } from '../context/useQuoteContext'
import '../styles/plan-selection.scss'
import type { Plan } from '@/shared/services/types'

type PlanType = 'self' | 'other'

const planTypes = [
  {
    id: 1,
    type: 'self' as PlanType,
    title: 'Para mi',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    icon: <PersonalIcon />,
    hasDiscount: false
  },
  {
    id: 2,
    type: 'other' as PlanType,
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    icon: <OtherPersonIcon />,
    hasDiscount: true
  }
]

export const PlanSelection = () => {
  const { user, plans, handleUpdateUser } = useQuoteContext()
  const [selectedOption, setSelectedOption] = useState<PlanType | null>(null)
  const navigate = useNavigate()
  const hasDiscount = selectedOption === 'other'

  const filteredPlans = filterPlansByAge(plans, user?.age)

  const getDiscountedPrice = (price: number, hasDiscount: boolean) => {
    return hasDiscount ? Math.round(price * 0.95 * 100) / 100 : price
  }

  const handleNavigateSummary = () => navigate('/summary')

  const handlePlanSelect = (plan: Plan) => {
    handleUpdateUser({ plan })
    handleNavigateSummary()
  }

  return (
    <InternalLayout>
      <div className='rm_plan_selection'>
        <h2 className='rm_plan_selection_title'>Rocío ¿Para quién deseas cotizar?</h2>
        <p className='rm_plan_selection_description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
        <div className='rm_plan_selection_cards'>
          {planTypes.map((plan) => (
            <PlanSelectionCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              icon={plan.icon}
              isSelected={selectedOption === plan.type}
              onClick={() => setSelectedOption(selectedOption === plan.type ? null : plan.type)}
            />
          ))}
        </div>
        {selectedOption && (
          <div className='rm_plan_selection_list'>
            {filteredPlans.map((plan, index) => {
              const price = getDiscountedPrice(plan.price, hasDiscount)
              return (
                <PlanDetailsCard
                  key={`plan-${index}-${plan.name}`}
                  name={plan.name}
                  description={plan.description}
                  originalPrice={hasDiscount ? plan.price : undefined}
                  price={price}
                  onClick={() =>
                    handlePlanSelect({ ...plan, price, originalPrice: hasDiscount ? plan.price : undefined })
                  }
                />
              )
            })}
          </div>
        )}
      </div>
    </InternalLayout>
  )
}
