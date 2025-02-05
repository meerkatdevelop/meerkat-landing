import { Dispatch } from 'react'
import { Languages } from '../../context'
import { languageHandler } from '../../helpers'
import { useWallet } from '../../hooks/useEvmHooks'
import { CaretDownIcon, WalletIcon } from '../../assets'

interface ConnectWalletBtnProps {
  language: Languages
  setIsUserMenuOpen: Dispatch<React.SetStateAction<boolean>>
}

const ConnectWalletBtn = ({ language, setIsUserMenuOpen }: ConnectWalletBtnProps) => {
  const { wallet, connect } = useWallet()
  const evmUserAddress = wallet?.accounts?.[0]?.address as string
  const walletButtonHandler = () => {
    if (wallet) {
      setIsUserMenuOpen((prev) => !prev)
    } else {
      connect()
    }
  }
  return (
    <button
      className={`relative flex h-10 justify-center items-center gap-2 px-3.5 py-3  rounded-xl ml-1  transition-all ease-in-out cursor-meerkat ${wallet ? 'bg-[#EEE7E7] hover:bg-[#C9B6B5]' : 'bg-[#FFCC29] hover:bg-[#FFEFBD]'}`}
      onClick={walletButtonHandler}
    >
      {wallet && (
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
        {wallet ? `${evmUserAddress?.slice(0, 2)}...${evmUserAddress?.slice(-4)}` : languageHandler('navbar-a', language)}
      </span>

      {wallet && <CaretDownIcon color="#521210" />}
    </button>
  )
}
export default ConnectWalletBtn
