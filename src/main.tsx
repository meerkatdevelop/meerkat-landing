import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWrapper } from './context/index.tsx'
import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
)
