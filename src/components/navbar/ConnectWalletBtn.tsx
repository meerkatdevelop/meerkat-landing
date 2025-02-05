import { Dispatch } from 'react'
import CaretDownIcon from '../../assets/icons/caret-down'
import CreditCardIcon from '../../assets/icons/credit-card'
import { Languages } from '../../context'
import { languageHandler } from '../../helpers'
import { useWallet } from '../../hooks/useEvmHooks'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { CustomConnectWalletButton } from '../../contracts/solana/CustomSolanaWalletBtn'

interface ConnectWalletBtnProps {
  language: Languages
  setIsUserMenuOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ConnectEvmWalletButton = ({ language, setIsUserMenuOpen }: ConnectWalletBtnProps) => {
  const { wallet, connect } = useWallet()
  const evmUserAddress = wallet?.accounts?.[0]?.address as string
  const walletButtonHandler = () => {
    if (wallet) {
      setIsUserMenuOpen((prev) => !prev)
    } else {
      connect()
    }
  }
  return <ConnectWalletBtn isConnected={!!wallet} address={evmUserAddress} language={language} walletButtonHandler={walletButtonHandler} />
}

export const ConnectSolanaWalletButton = ({ language, setIsUserMenuOpen }: ConnectWalletBtnProps) => {
  const solanaWallet = useAnchorWallet()
  const solanaUserAddress = solanaWallet?.publicKey?.toBase58() as string
  const shortedAddress = solanaUserAddress?.slice(0, 4) + '..' + solanaUserAddress?.slice(-4)
  const isConnected = !!solanaWallet
  const walletButtonHandler = () => {
    if (solanaWallet) {
      setIsUserMenuOpen((prev) => !prev)
    }
  }
  if (!isConnected) return <CustomConnectWalletButton />
  return <ConnectWalletBtn isConnected={isConnected} address={shortedAddress} language={language} walletButtonHandler={walletButtonHandler} />
}

interface GenericConnectWalletBtnProps {
  language: Languages
  isConnected: boolean
  address: string
  walletButtonHandler: () => void
}

export const ConnectWalletBtn = ({ isConnected, address, language, walletButtonHandler }: GenericConnectWalletBtnProps) => {
  return (
    <button
      className={`flex h-10 justify-center items-center gap-2 px-6 py-3 rounded-xl  transition-all ease-in-out cursor-meerkat ${isConnected ? 'bg-[#EEE7E7] hover:bg-[#C9B6B5]' : 'bg-[#FFCC29] hover:bg-[#FFEFBD]'}`}
      onClick={walletButtonHandler}
    >
      {isConnected && (
        <CreditCardIcon color="#521210" className="flex w-[25px] h-[25px] justify-center items-center pl-[3px] pr-1 pt-[3px] pb-1 rounded-[100px] bg-white" />
      )}
      <span className={`font-neueMontreal text-[#521210] text-sm font-bold leading-6  ${!isConnected && 'uppercase'}`}>
        {isConnected ? `${address}` : languageHandler('navbar-a', language)}
      </span>

      {isConnected && <CaretDownIcon color="#521210" />}
    </button>
  )
}
