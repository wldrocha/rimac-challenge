import React from 'react'
import './checkbox-input.scss'

type CheckboxProps = {
  label: string
  id?: string
  classNameContainer?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const CheckboxInput: React.FC<CheckboxProps> = ({ label, id, classNameContainer = '', error, ...props }) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
  return (
    <div className={`rm-checkbox-container ${classNameContainer}`}>
      <input
        type='checkbox'
        id={checkboxId}
        className={`rm-checkbox__input${error ? ' rm-checkbox__input--error' : ''}`}
        aria-invalid={!!error}
        {...props}
      />
      <label htmlFor={checkboxId} className='rm-checkbox__label'>
        {label}
      </label>
      {error && (
        <span className='rm-input__error' role='alert'>
          {error}
        </span>
      )}
    </div>
  )
}
