import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWrapper } from './context/index.tsx'
import App from './App.tsx'
import OnBoardGloablProvider from './contracts/Evm/OnboardGlobalProvider.tsx'
import { SolanaWalletProvider } from './contracts/solana/SolanaWalletProvider.tsx'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <OnBoardGloablProvider>
        <SolanaWalletProvider>
          <App />
        </SolanaWalletProvider>
      </OnBoardGloablProvider>
    </AppWrapper>
  </StrictMode>
)
