import { Dispatch } from 'react'
import { useWallet } from '../../../hooks/useEvmHooks'

import { ExitIcon, MeerkatCoin } from '../../../assets'
import { CustomSolanaDisconnectWalletBtn } from '../../../contracts/solana/CustomSolanaWalletBtn'
import { languageHandler } from '../../../helpers'
import { useAppContext } from '../../../context'

interface UserMenuProps {
  isUserMenuOpen: boolean
  setIsUserMenuOpen: Dispatch<React.SetStateAction<boolean>>
  isSolana: boolean
}
const UserMenuMobile = ({ isUserMenuOpen, setIsUserMenuOpen, isSolana }: UserMenuProps) => {
  const { wallet, disconnect } = useWallet()
  const { language } = useAppContext()

  const disconnectHandler = () => {
    disconnect({ label: wallet?.label as string })
    setIsUserMenuOpen((prev) => !prev)
  }
  return (
    <div className={`flex w-full bg-[#1D0606] overflow-hidden transition-all ease-in-out duration-500 ${isUserMenuOpen ? 'h-[220px]' : 'h-0'}`}>
      <div className="flex w-full flex-col gap-3 p-6">
        <div className="flex flex-col justify-center items-start gap-4 self-stretch p-3 border-b-[#521210] rounded-[24px_24px_0px_0px] border-b ">
          <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">{languageHandler('user-menu-a', language)}</span>
          {/* <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">{languageHandler('user-menu-b', language)}</span> */}
        </div>
        <div className="flex flex-col justify-center items-start gap-4 self-stretch py-2 border-b-[#521210] border-b ">
          <div className="flex items-center gap-2.5 self-stretch">
            <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
            <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">$MERK: 0.00</span>
          </div>
          <div className="flex items-center gap-2.5 self-stretch ">
            <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
            <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">STAKED: 0.00</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 self-stretch rounded-[24px_24px_0px_0px] ">
          {!isSolana ? (
            <button
              className="flex h-10 justify-center items-center gap-2 self-stretch px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
              onClick={disconnectHandler}
            >
              <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">{languageHandler('user-menu-c', language)}</span>
              <ExitIcon color="#521210" />
            </button>
          ) : (
            <CustomSolanaDisconnectWalletBtn setIsUserMenuOpen={setIsUserMenuOpen} />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserMenuMobile
