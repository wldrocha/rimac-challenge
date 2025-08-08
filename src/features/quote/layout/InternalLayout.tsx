import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackIcon, Button, Header } from '@/shared/components'
import { Steps } from '../components/steps/Steps'
import type { StepItem } from '@/shared/types'
import './internal-layout.scss'

interface InternalLayoutProps {
  children: React.ReactNode
}

const stepList: StepItem[] = [
  { number: 1, label: 'Selecciona tu plan', urlSegment: '/plan', isActive: true },
  { number: 2, label: 'Datos personales', urlSegment: '/summary', isActive: false }
]

export const InternalLayout = ({ children }: InternalLayoutProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const updatedStepList = stepList.map((step) => ({
    ...step,
    isActive: location.pathname === step.urlSegment
  }))

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='wrap-summary'>
      <div className='rm_internal_layout'>
        <Header className='rm_internal_layout_header' />
        <div className='rm_internal_layout_content'>
          <Steps stepList={updatedStepList} className='rm_internal_layout_steps' />

          <Button variant='transparent' className='rm_internal_layout_back_button' onClick={handleBack}>
            <BackIcon />
            <span className='rm_internal_layout_back_button_label'>Volver</span>
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
