import { motion } from 'motion/react'
import { ExitIcon, MeerkatCoin } from '../../assets'
import { languageHandler } from '../../helpers'
import { springInUserMenu } from '../../constants'
import { Dispatch } from 'react'
import { Languages } from '../../context'
import { useWallet } from '../../hooks/useEvmHooks'
import { CustomSolanaDisconnectWalletBtn } from '../../contracts/solana/CustomSolanaWalletBtn'

interface UserMenuProps {
  language: Languages
  setIsUserMenuOpen: Dispatch<React.SetStateAction<boolean>>
  isSolana: boolean
}
const UserMenu = ({ language, setIsUserMenuOpen, isSolana }: UserMenuProps) => {
  const { wallet, disconnect } = useWallet()

  const disconnectHandler = () => {
    disconnect({ label: wallet?.label as string })
    setIsUserMenuOpen((prev) => !prev)
  }
  return (
    <motion.div
      variants={springInUserMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-14 right-4 flex w-[220px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
    >
      <div className="flex flex-col justify-center items-start gap-4 self-stretch p-3 border-b-[#521210] rounded-[24px_24px_0px_0px] border-b bg-[#250807]">
        <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">{languageHandler('user-menu-a', language)}</span>
        {/* <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">{languageHandler('user-menu-b', language)}</span> */}
      </div>
      <div className="flex flex-col justify-center items-start gap-4 self-stretch py-2 border-b-[#521210] border-b bg-[#250807]">
        <div className="flex items-center gap-2.5 self-stretch">
          <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
          <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">$MERK: 0.00</span>
        </div>
        <div className="flex items-center gap-2.5 self-stretch ">
          <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
          <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">STAKED: 0.00</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-4 self-stretch rounded-[24px_24px_0px_0px] bg-[#250807]">
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
    </motion.div>
  )
}

export default UserMenu
