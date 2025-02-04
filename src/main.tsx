import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWrapper } from './context/index.tsx'
import App from './App.tsx'
import OnBoardGloablProvider from './contracts/Evm/OnboardGlobalProvider.tsx'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <OnBoardGloablProvider>
        <App />
      </OnBoardGloablProvider>
    </AppWrapper>
  </StrictMode>
)
