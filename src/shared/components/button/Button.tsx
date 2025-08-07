import type { ButtonHTMLAttributes } from 'react'
import './button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'default' | 'transparent'
  className?: string
}

export const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const variantClass = `rm_button--${variant}`
  return <button className={`rm_button ${variantClass} ${className}`} {...props} />
}
