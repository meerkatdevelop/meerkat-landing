import { Dispatch } from 'react'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useWallet } from '../../../hooks/useEvmHooks'
import { useAppContext } from '../../../context'
import { CaretDownIcon, WalletIcon } from '../../../assets'
import { languageHandler } from '../../../helpers'
import { CustomConnectWalletButton } from '../../../contracts/solana/CustomSolanaWalletBtn'

interface ConnectEvmWalletButtonMobileProps {
  setIsUserMenuOpen: Dispatch<React.SetStateAction<boolean>>
  setIsChainMenuOpen: Dispatch<React.SetStateAction<boolean>>
}

export const ConnectEvmWalletButtonMobile = ({ setIsChainMenuOpen, setIsUserMenuOpen }: ConnectEvmWalletButtonMobileProps) => {
  const { setIsMenuOpen } = useAppContext()
  const { wallet, connect } = useWallet()
  const evmUserAddress = wallet?.accounts?.[0]?.address as string
  const walletButtonHandler = () => {
    if (!wallet) {
      setIsMenuOpen((prev) => !prev)
      connect()
    } else {
      setIsUserMenuOpen((prev) => !prev)
      setIsChainMenuOpen(false)
    }
  }
  return <ConnectWalletBtnMobile isConnected={!!wallet} address={evmUserAddress} walletButtonHandler={walletButtonHandler} />
}

export const ConnectSolanaWalletButtonMobile = ({ setIsChainMenuOpen, setIsUserMenuOpen }: ConnectEvmWalletButtonMobileProps) => {
  const solanaWallet = useAnchorWallet()

  const solanaUserAddress = solanaWallet?.publicKey?.toBase58() as string
  const shortedAddress = solanaUserAddress?.slice(0, 4) + '..' + solanaUserAddress?.slice(-4)
  const isConnected = !!solanaWallet
  const walletButtonHandler = () => {
    setIsUserMenuOpen((prev) => !prev)
    setIsChainMenuOpen(false)
  }

  if (!isConnected) return <CustomConnectWalletButton />
  return <ConnectWalletBtnMobile isConnected={isConnected} address={shortedAddress} walletButtonHandler={walletButtonHandler} />
}

interface GenericConnectWalletBtnProps {
  isConnected: boolean
  address: string
  walletButtonHandler: () => void
}

export const ConnectWalletBtnMobile = ({ isConnected, address, walletButtonHandler }: GenericConnectWalletBtnProps) => {
  const { language } = useAppContext()

  return (
    <button
      className={`flex w-full h-10  items-center gap-2 py-3 pr-2   transition-all ease-in duration-200  cursor-meerkat ${isConnected ? 'justify-between bg-[#EEE7E7] rounded-[100px_50px_50px_100px]' : 'justify-center bg-[#FFCC29] rounded-xl'}`}
      onClick={walletButtonHandler}
    >
      {isConnected && (
        <>
          <WalletIcon color="#521210" className="w-8 h-8 ml-1" />
        </>
      )}

      <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">
        {isConnected ? `${address?.slice(0, 2)}...${address?.slice(-4)}` : languageHandler('navbar-a', language)}
      </span>

      {isConnected && <CaretDownIcon color="#521210" />}
    </button>
  )
}
