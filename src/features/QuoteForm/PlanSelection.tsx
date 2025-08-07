import { Button, Header } from '@/shared/components'
import { PlanSelectionCard } from './components/plan-selection-card/PlanSelectionCard'
import './plan-selection.scss'
import { PersonalIcon } from '@/shared/components/icons/PersonalIcon'
import { OtherPersonIcon } from '@/shared/components/icons/OtherPersonIcon'
import { PlanDetailsCard } from './components/plan-details-card/PlanDetailsCard'

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
      <div className='rm_plan_selection_list'>
        <PlanDetailsCard
          name='Plan en Casa'
          description={[
            'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
            'Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.',
            'Indemnización de S/300 en caso de hospitalización por más de un día.'
          ]}
          price={89}
          icon={<PersonalIcon />}
          onClick={() => console.log('Plan en Casa selected')}
        />
        <PlanDetailsCard
          name='Plan en Casa'
          description={[
            'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
            'Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.',
            'Indemnización de S/300 en caso de hospitalización por más de un día.'
          ]}
          price={89}
          icon={<PersonalIcon />}
          onClick={() => console.log('Plan en Casa selected')}
        />
      </div>
    </div>
  </>
)
