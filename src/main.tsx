import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AntDesign from './AntDesign.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntDesign>
      <App />
    </AntDesign>
  </StrictMode>
)
