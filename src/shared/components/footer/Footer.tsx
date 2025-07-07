import LogoMovil from '@/assets/imgs/logo-rimac-white-movil.png'
import LogoDesktop from '@/assets/imgs/logo-rimac-white-desktop.png'
import './footer.scss'

const getCurrentYear = (): number => new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className='rm_footer-container'>
      <img src={LogoMovil} alt='img-logo-white-movil' className='rm_footer-container__logo-movil' />
      <img src={LogoDesktop} alt='img-logo-white-desktop' className='rm_footer-container__logo-desktop' />
      <div className='rm_footer-container__separator' />
      <span className='rm_footer-container__description'>© {getCurrentYear()} RIMAC Seguros y Reaseguros.</span>
    </footer>
  )
}
