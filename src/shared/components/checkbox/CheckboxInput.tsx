import React from 'react'
import './checkbox-input.scss'

type CheckboxProps = {
  label: string
  id?: string
  classNameContainer?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CheckboxInput: React.FC<CheckboxProps> = ({ label, id, classNameContainer = '', ...props }) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
  return (
    <div className={`rm-checkbox-container ${classNameContainer}`}>
      <input type='checkbox' id={checkboxId} className='rm-checkbox__input' {...props} />
      <label htmlFor={checkboxId} className='rm-checkbox__label'>
        {label}
      </label>
    </div>
  )
}
