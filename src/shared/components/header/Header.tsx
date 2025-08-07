import LogoRimac from '@/assets/imgs/logo-rimac.png'
import './Header.scss'
interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  /**
   * Header component that displays the company logo and contact information.
   * It includes a link to the homepage and a phone number for customer service.
   */
  // Todo : add phone icon before the phone number
  return (
    <header className={`rm_header ${className}`}>
      <a href='/'>
        <img src={LogoRimac} alt='Logo de la empresa' />
      </a>
      <div className='rm_header__contact-container'>
        <p className='rm_header__contact-call-to-action'>¡Compra por este medio!</p>
        <a className='rm_header__contact-call-number' href='tel:+014116001'>
          (01) 411 6001
        </a>
      </div>
    </header>
  )
}
