import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { WalletConnectButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'

import '@solana/wallet-adapter-react-ui/styles.css'

export const CustomSolanaConnectWalletBtn = () => {
  return <WalletConnectButton />
}

export const CustomSolanaDisconnectWalletBtn = () => {
  return <WalletDisconnectButton />
}

export const ButtonsSolanaWallet = () => {
  const solanaWallet = useAnchorWallet()

  console.log(solanaWallet)
  return solanaWallet ? <CustomSolanaDisconnectWalletBtn /> : <CustomSolanaConnectWalletBtn />
}
