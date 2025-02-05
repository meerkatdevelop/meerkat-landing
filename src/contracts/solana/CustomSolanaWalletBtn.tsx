import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Dispatch, SetStateAction } from 'react'
import '@solana/wallet-adapter-react-ui/styles.css'

export const CustomConnectWalletButton = () => {
  return <WalletMultiButton />
}

export const CustomSolanaDisconnectWalletBtn = ({ setIsUserMenuOpen }: { setIsUserMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    setIsUserMenuOpen((prev) => !prev)
  }
  return <WalletDisconnectButton onClick={handleClick} />
}
