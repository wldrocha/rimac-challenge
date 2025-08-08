import { Card } from '@/shared/components'
import { PersonsIcon } from '@/shared/components/icons/PersonsIcons'
import { InternalLayout } from '../layout/InternalLayout'
import { useQuoteContext } from '../context/useQuoteContext'
import '../styles/quote-summary.scss'

export const QuoteSummary = () => {
  const { user } = useQuoteContext()

  return (
    <InternalLayout>
      <div className='rm_quote-summary'>
        <h1 className='rm_quote-summary__title'>Resumen del seguro</h1>
        <Card className='rm_quote-summary__card'>
          <header>
            <h2 className='rm_quote-summary-card__title'>Precios calculados para:</h2>
            <h3 className='rm_quote-summary-card__subtitle'>
              <PersonsIcon /> {`${user?.name} ${user?.lastName}`}
            </h3>
          </header>
          <hr className='rm_quote-summary-card__separator' />
          <section className='rm_quote-summary-card__section'>
            <h4 className='rm_quote-summary-card__section-title'>Responsable de pago</h4>
            <p className='rm_quote-summary-card__info-item'>DNI: {user?.dni}</p>
            <p className='rm_quote-summary-card__info-item'>Celular: {user?.phone}</p>
          </section>
          <section className='rm_quote-summary-card__section'>
            <h4 className='rm_quote-summary-card__section-title'>Plan elegido</h4>
            <p className='rm_quote-summary-card__plan-name'>{user?.plan?.name}</p>
            <p className='rm_quote-summary-card__plan-cost'>Costo del Plan: ${user?.plan?.price} al mes</p>
          </section>
        </Card>
      </div>
    </InternalLayout>
  )
}
