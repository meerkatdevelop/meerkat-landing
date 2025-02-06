import { Dispatch } from 'react'
import { Languages } from '../../context'
import { languageHandler } from '../../helpers'
import { useWallet } from '../../hooks/useEvmHooks'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { CustomConnectWalletButton } from '../../contracts/solana/CustomSolanaWalletBtn'
import { CaretDownIcon, WalletIcon } from '../../assets'

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
      className={`relative flex h-10 justify-center items-center gap-2 px-3.5 py-3  rounded-xl ml-1  transition-all ease-in-out cursor-meerkat ${isConnected ? 'bg-[#EEE7E7] hover:bg-[#C9B6B5]' : 'bg-[#FFCC29] hover:bg-[#FFEFBD]'}`}
      onClick={walletButtonHandler}
    >
      {isConnected && (
        <>
          <div className="w-6 h-6" />
          <WalletIcon
            color="#521210"
            className="absolute flex top-0 left-0 w-11 h-11 justify-center items-center pl-[3px] pr-1 pt-[3px] pb-1 rounded-[100px] bg-[#EEE7E7]
             -translate-x-2 -translate-y-px"
          />
        </>
      )}

      <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">
        {isConnected ? `${address}` : languageHandler('navbar-a', language)}
      </span>

      {isConnected && <CaretDownIcon color="#521210" />}
    </button>
  )
}
