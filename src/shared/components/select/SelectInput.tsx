

import './select-input.scss'

type Option = {
  value: string
  label: string
}

type SelectProps = {
  label: string
  options: Option[]
  error?: string
  helperText?: string
  classNameContainer?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const SelectInput = ({
  label,
  options,
  id,
  error,
  helperText,
  classNameContainer = '',
  ...props
}: SelectProps) => {
  return (
    <div className={`rm_select ${classNameContainer}`}>
      <label className='rm_select__label' htmlFor={id}>
        {label}
      </label>
      <select className='rm_select__control' id={id} {...props}>
        {options.map((opt) => (
          <option className='rm_select__option' key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* <div className='rm_select__arrow'>
        <ArrowIcon />
      </div> */}
      {helperText && !error && <span className='rm-input__helper'>{helperText}</span>}
      {error && (
        <span className='rm-input__error' role='alert'>
          {error}
        </span>
      )}
    </div>
  )
}
