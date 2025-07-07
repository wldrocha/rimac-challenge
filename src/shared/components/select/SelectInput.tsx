import { ArrowIcon } from '../icons/ArrowIcon'

import './select-input.scss'

type Option = {
  value: string
  label: string
}

type SelectProps = {
  label: string
  options: Option[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const SelectInput = ({ label, options, id, className = '', ...props }: SelectProps) => {
  return (
    <div className={`rm_select ${className}`}>
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
      <div className='rm_select__arrow'>
        <ArrowIcon />
      </div>
    </div>
  )
}
