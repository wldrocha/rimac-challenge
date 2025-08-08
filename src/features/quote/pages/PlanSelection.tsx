import { PlanSelectionCard } from '../components/plan-selection-card/PlanSelectionCard'
import { PersonalIcon } from '@/shared/components/icons/PersonalIcon'
import { OtherPersonIcon } from '@/shared/components/icons/OtherPersonIcon'
import { filterPlansByAge } from '@/shared/utils/plan'
import { PlanDetailsCard } from '../components/plan-details-card/PlanDetailsCard'
import { InternalLayout } from '../layout/InternalLayout'
import { useQuoteContext } from '../context/useQuoteContext'
import '../styles/plan-selection.scss'

export const PlanSelection = () => {
  const { user, plans } = useQuoteContext()
  const filteredPlans = filterPlansByAge(plans, user?.age)

  return (
    <InternalLayout>
      <div className='rm_plan_selection'>
        <h2 className='rm_plan_selection_title'>Rocío ¿Para quién deseas cotizar?</h2>
        <p className='rm_plan_selection_description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
        <div className='rm_plan_selection_cards'>
          <PlanSelectionCard
            title='Para mi'
            description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            icon={<PersonalIcon />}
          />
          <PlanSelectionCard
            title='Para alguien más'
            description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            icon={<OtherPersonIcon />}
          />
        </div>
        <div className='rm_plan_selection_list'>
          {filteredPlans.map((plan, index) => (
            <PlanDetailsCard
              key={`plan-${index}-${plan.name}`}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              onClick={() => console.log(`${plan.name} selected`)}
            />
          ))}
        </div>
      </div>
    </InternalLayout>
  )
}
