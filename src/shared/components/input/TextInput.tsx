import './text-input.scss'

type TextInputProps = {
  label?: string
  error?: string
  classNameContainer?: string
  variant?: 'border-left' | 'border-right' | 'default'
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({
  label,
  error,
  classNameContainer = '',
  id,
  variant = 'default',
  ...props
}: TextInputProps) => {
  const variantClass = `rm-input-container--${variant}`
  return (
    <div className={`rm-input-container  ${variantClass} ${classNameContainer}`}>
      {label && (
        <label className='rm-input__label' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`rm-input__control ${error ? ' rm-input__control--error' : ''}`}
        aria-label={label}
        aria-invalid={!!error}
        {...props}
      />
    </div>
  )
}
