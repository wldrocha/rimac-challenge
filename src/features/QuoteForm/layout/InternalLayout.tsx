import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Header } from '@/shared/components'
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

  const updatedStepList = stepList.map(step => ({
    ...step,
    isActive: location.pathname === step.urlSegment
  }))

  return (
    <>
      <Header />
      <Steps stepList={updatedStepList} />
      {/* <Button variant='transparent' className='rm_internal_layout_back_button'>
        Volver
      </Button> */}
      {children}
    </>
  )
}
