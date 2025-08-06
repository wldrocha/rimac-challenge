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
        <div className='rm_quote-form__separator' />
        <p className='rm_quote-form__subtitle'>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <form className='rm_quote-form__form'>
          <div className='rm_quote-form__form-group'>
            <SelectInput
              id='dniType'
              className='rm_quote-form__form-group__select'
              label='DNI'
              options={[{ value: 'DNI', label: 'DNI' }]}
            />
            <TextInput
              id='documentId'
              className='rm_quote-form__form-group__input'
              label='Nro. de documento'
              variant='border-right'
              placeholder='30216147'
            />
          </div>
          <TextInput
            id='celular'
            className='rm_quote-form__form-group__input'
            label='Celular'
            placeholder='5130216147'
          />

          <div className='rm_quote-form__checkbox-group'>
            <CheckboxInput label='Acepto la Política de Privacidad' defaultChecked />
            <CheckboxInput label='Acepto la Política Comunicaciones Comerciales' defaultChecked />
          </div>

          <a className='rm_quote-form__terms-link' href='#'>
            Aplican Términos y Condiciones.
          </a>

          <Button variant='secondary'>Cotiza aquí</Button>
        </form>
      </div>
    </ExternalLayout>
  )
}
