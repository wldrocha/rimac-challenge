import { Button, Header } from '@/shared/components'
import { PlanSelectionCard } from './components/plan-selection-card/PlanSelectionCard'
import './plan-selection.scss'
import { PersonalIcon } from '@/shared/components/icons/PersonalIcon'
import { OtherPersonIcon } from '@/shared/components/icons/OtherPersonIcon'

export const PlanSelection = () => (
  <>
    <Header />
    <Button variant='default' className='rm_plan_selection_back_button'>
      Volver
    </Button>
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
      <div className='rm_plan_selection_list'></div>
    </div>
  </>
)
