import { ExternalLayout } from './layout/ExternalLayout'
import FamilyImage from '@/assets/imgs/family.png'
import { useForm } from 'react-hook-form'
import { Button, CheckboxInput, SelectInput, TextInput } from '@/shared/components'
import { useQuoteContext } from './context/useQuoteContext'

import './quote-form.scss'
import { useNavigate } from 'react-router-dom'

type FormData = {
  dniType: string
  dni: string
  phone: string
  privacyPolicy: boolean
  commercialCommunications: boolean
}

export const QuoteForm = () => {
  const { handleUpdateUser } = useQuoteContext()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      dniType: 'DNI',
      privacyPolicy: true,
      commercialCommunications: true
    }
  })

  const handleSelectPlans = () => navigate('/select-plan')

  const onSubmit = ({ dni, phone }: FormData) => {
    handleUpdateUser({ dni, phone })
    handleSelectPlans()
  }
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
        <form className='rm_quote-form__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='rm_quote-form__form-group'>
            <SelectInput
              id='dniType'
              className='rm_quote-form__form-group__select'
              label='DNI'
              options={[{ value: 'DNI', label: 'DNI' }]}
              {...register('dniType', {
                required: 'El tipo de documento es requerido'
              })}
              error={errors.dniType?.message}
            />
            <TextInput
              id='dni'
              className='rm_quote-form__form-group__input'
              label='Nro. de documento'
              variant='border-right'
              placeholder='30216147'
              {...register('dni', {
                required: 'El número de documento es requerido',
                pattern: {
                  value: /^[0-9]{8}$/,
                  message: 'El documento debe tener 8 dígitos'
                }
              })}
              error={errors.dni?.message}
            />
          </div>
          <TextInput
            id='phone'
            className='rm_quote-form__form-group__input'
            label='Celular'
            placeholder='5130216147'
            {...register('phone', {
              required: 'El número de celular es requerido',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'El celular debe tener 10 dígitos'
              }
            })}
            error={errors.phone?.message}
          />

          <div className='rm_quote-form__checkbox-group'>
            <CheckboxInput
              label='Acepto la Política de Privacidad'
              {...register('privacyPolicy', {
                required: 'Debes aceptar la Política de Privacidad'
              })}
              error={errors.privacyPolicy?.message}
            />
            <CheckboxInput
              label='Acepto la Política Comunicaciones Comerciales'
              {...register('commercialCommunications', {
                required: 'Debes aceptar las Comunicaciones Comerciales'
              })}
              error={errors.commercialCommunications?.message}
            />
          </div>

          <a className='rm_quote-form__terms-link' href='#'>
            Aplican Términos y Condiciones.
          </a>

          <Button type='submit' variant='secondary'>
            Cotiza aquí
          </Button>
        </form>
      </div>
    </ExternalLayout>
  )
}
