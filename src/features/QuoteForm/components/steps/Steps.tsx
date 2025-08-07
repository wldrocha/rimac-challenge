import type { StepItem } from '@/shared/types'
import './steps.scss'

const Step = ({ number, label, isActive }: StepItem) => (
  <div className={`rm_steps_item ${isActive ? 'active' : ''}`}>
    <span className='rm_steps_item_number'>{number}</span>
    <span className='rm_steps_item_label'>{label}</span>
  </div>
)

interface StepsProps {
  stepList: StepItem[]
}

export const Steps = ({ stepList }: StepsProps) => {
  const activeStep = stepList.find(step => step.isActive) || stepList[0]
  const totalSteps = stepList.length
  const progressPercentage = (activeStep.number / totalSteps) * 100

  return (
    <div className='rm_steps'>
      {/* Vista desktop - controlada por CSS */}
      <div className='rm_steps_desktop'>
        {stepList.map((step) => (
          <Step key={step.number} {...step} />
        ))}
      </div>
      
      {/* Vista mobile - controlada por CSS */}
      <div className='rm_steps_mobile'>
        <div className='rm_steps_text'>
          PASO {activeStep.number} DE {totalSteps}
        </div>
        <div className='rm_steps_progress_bar'>
          <div 
            className='rm_steps_progress_fill' 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
