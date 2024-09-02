import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FuncionContador from './components/funcionContador.jsx'
import './index.css'
import ClaseContador from './components/ClaseContador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClaseContador/>
    <FuncionContador/>
  </StrictMode>,
)
