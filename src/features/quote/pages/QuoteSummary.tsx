import { Card } from '@/shared/components'
import { InternalLayout } from '../layout/InternalLayout'
import '../styles/quote-summary.scss'
import { PersonsIcon } from '@/shared/components/icons/PersonsIcons'


export const QuoteSummary = () => (
  <InternalLayout>
    <div className='rm_quote-summary'>
      <h1 className='rm_quote-summary__title'>Resumen del seguro</h1>
      <Card className='rm_quote-summary__card'>
        <header>
          <h2 className='rm_quote-summary-card__title'>Precios calculados para:</h2>
          <h3 className='rm_quote-summary-card__subtitle'>
            <PersonsIcon /> Rocio Miranda Díaz
          </h3>
        </header>
        <hr className='rm_quote-summary-card__separator' />
        <section className='rm_quote-summary-card__section'>
          <h4 className='rm_quote-summary-card__section-title'>Responsable de pago</h4>
          <p className='rm_quote-summary-card__info-item'>DNI: 44488888</p>
          <p className='rm_quote-summary-card__info-item'>Celular: 513021647</p>
        </section>
        <section className='rm_quote-summary-card__section'>
          <h4 className='rm_quote-summary-card__section-title'>Plan elegido</h4>
          <p className='rm_quote-summary-card__plan-name'>Plan en Casa y Clínica</p>
          <p className='rm_quote-summary-card__plan-cost'>Costo del Plan: $99 al mes</p>
        </section>
      </Card>
    </div>
  </InternalLayout>
)
