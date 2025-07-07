import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, CheckboxInput, Header, SelectInput, TextInput } from '@/shared/components/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Button variant='primary'>Cotiza aquí</Button>
        <SelectInput
          label='Tipo de documento'
          options={[
            { label: 'test 1', value: 'test 1' },
            { label: 'test 2', value: 'test 2' },
            { label: 'test 3', value: 'test 3' }
          ]}
        />
        <TextInput label='Prueba' />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <CheckboxInput label='Checkbox' />
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
