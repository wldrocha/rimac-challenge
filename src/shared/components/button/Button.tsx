import type { ButtonHTMLAttributes } from 'react'
import './button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'default'
}

export const Button = ({ variant = 'default', ...props }: ButtonProps) => {
  const variantClass = `rm_button--${variant}`
  return <button className={`rm_button ${variantClass}`} {...props} />
}
