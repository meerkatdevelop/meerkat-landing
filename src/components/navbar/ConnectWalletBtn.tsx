import { Dispatch } from 'react'
import CaretDownIcon from '../../assets/icons/caret-down'
import CreditCardIcon from '../../assets/icons/credit-card'
import { Languages } from '../../context'
import { languageHandler } from '../../helpers'
import { useWallet } from '../../hooks/useEvmHooks'

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
      className={`flex h-10 justify-center items-center gap-2 px-6 py-3 rounded-xl  transition-all ease-in-out cursor-meerkat ${wallet ? 'bg-[#EEE7E7] hover:bg-[#C9B6B5]' : 'bg-[#FFCC29] hover:bg-[#FFEFBD]'}`}
      onClick={walletButtonHandler}
    >
      {wallet && (
        <CreditCardIcon color="#521210" className="flex w-[25px] h-[25px] justify-center items-center pl-[3px] pr-1 pt-[3px] pb-1 rounded-[100px] bg-white" />
      )}
      <span className={`font-neueMontreal text-[#521210] text-sm font-bold leading-6  ${!wallet && 'uppercase'}`}>
        {wallet ? `${evmUserAddress?.slice(0, 6)}...${evmUserAddress?.slice(36)}` : languageHandler('navbar-a', language)}
      </span>

      {wallet && <CaretDownIcon color="#521210" />}
    </button>
  )
}
export default ConnectWalletBtn
