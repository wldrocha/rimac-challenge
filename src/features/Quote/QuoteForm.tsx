import { ExternalLayout } from './layout/ExternalLayout'
import FamilyImage from '@/assets/imgs/family.png'

import './quote-form.scss'
import { Button, CheckboxInput, SelectInput, TextInput } from '@/shared/components'

export const QuoteForm = () => {
  return (
    <ExternalLayout>
      <div className='rm_quote-form'>
        <div className='rm_quote-form__image'>
          <img src={FamilyImage} alt='Familia' />
        </div>
        <div className='rm_quote-form__content'>
          <span className='rm_quote-form__badge'>Seguro Salud Flexible</span>
          <h2 className='rm_quote-form__title'>Creado para ti y tu familia</h2>
        </div>
        {/* <div className='rm_quote-form__separator' /> */}
        <p className='rm_quote-form__subtitle'>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <form className='rm_quote-form__form'>
          <SelectInput label='DNI' options={[{ value: 'DNI', label: 'DNI' }]} />

          {/* <div className='rm_quote-form__checkbox-group'></div> */}
          {/* <div className='rm_quote-form__terms'>
            <a href='#'>Aplican Términos y Condiciones.</a>
            </div> */}
          {/* <Button className='rm_quote-form__button'>Cotiza aquí</Button> */}
        </form>
      </div>
    </ExternalLayout>
  )
}
