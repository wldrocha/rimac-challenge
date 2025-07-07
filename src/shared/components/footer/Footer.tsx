import LogoMovil from '@/assets/imgs/logo-rimac-white-movil.png'
import LogoDesktop from '@/assets/imgs/logo-rimac-white-desktop.png'
import './footer.scss'

const getCurrentYear = (): number => new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className='rm_footer-container'>
      <picture>
        <source srcSet={LogoDesktop} media='(min-width: 768px)' />
        <img src={LogoMovil} alt='Logo RIMAC' className='rm_footer-container__logo' />
      </picture>
      <div className='rm_footer-container__separator' />
      <span className='rm_footer-container__description'>© {getCurrentYear()} RIMAC Seguros y Reaseguros.</span>
    </footer>
  )
}
