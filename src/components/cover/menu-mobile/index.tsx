import { useState } from 'react'
import { useAppContext } from '../../../context'
import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'
import { formatNetworkById, languageHandler } from '../../../helpers'
import { CaretDownIcon } from '../../../assets'
import NetworksSelectorMobile from './networksSelectorMobile'
import UserMenuMobile from './userMenuMobile'
import { useChangeEvmNetwork, useWallet } from '../../../hooks/useEvmHooks'
import { ConnectEvmWalletButtonMobile, ConnectSolanaWalletButtonMobile } from './ConnectWalletBtnMobile'
import SocialNetworks from '../../navbar/SocialNetworks'

const MenuMobile = ({ moveTo }: { moveTo: (to: number) => void }) => {
  const { isMenuOpen, setIsMenuOpen, language } = useAppContext()
  const { wallet } = useWallet()
  const [isChainMenuOpen, setIsChainMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSolana, setIsSolana] = useState(false)
  const { connectedChain } = useChangeEvmNetwork()
  const chainInfo = formatNetworkById(connectedChain?.id, isSolana)
  const handleNavigation = (id: string) => {
    moveTo(document.getElementById(id)?.offsetTop as number)
    setIsMenuOpen(false)
  }

  const springIn = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: isChainMenuOpen ? 840 : isUserMenuOpen ? 800 : 730,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
  }

  return (
    <AnimatePresence>
      {/* Menu */}

      {isMenuOpen && (
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`absolute -top-20 left-0 flex w-full flex-col items-start shrink-0 px-4 py-10 gap-6 rounded-[0px_0px_32px_32px] bg-[#250807] -z-10 cursor-meerkat`}
        >
          <div className="flex flex-col items-start justify-between  self-stretch pt-32 gap-6">
            <button
              className="font-newTitle text-[#FFCC29] text-[44px] font-bold leading-[44px] tracking-[1.32px] uppercase hover:text-[#FFEFBD] cursor-meerkat"
              onClick={() => handleNavigation('about')}
            >
              {languageHandler('menu-a', language)}
            </button>
            <button
              className="font-newTitle text-[#FFCC29] text-[44px] font-bold leading-[44px] tracking-[1.32px] uppercase hover:text-[#FFEFBD] cursor-meerkat"
              onClick={() => handleNavigation('roadmap')}
            >
              {languageHandler('menu-b', language)}
            </button>
            <button
              className="font-newTitle text-[#FFCC29] text-[44px] font-bold leading-[44px] tracking-[1.32px] uppercase hover:text-[#FFEFBD] cursor-meerkat"
              onClick={() => handleNavigation('tokenomics')}
            >
              {languageHandler('menu-c', language)}
            </button>
            <button
              className="font-newTitle text-[#FFCC29] text-[44px] font-bold leading-[44px] tracking-[1.32px] uppercase hover:text-[#FFEFBD] cursor-meerkat"
              onClick={() => handleNavigation('faq')}
            >
              {languageHandler('menu-d', language)}
            </button>
          </div>
          <div className="flex w-full flex-col items-center gap-4 self-stretch px-0 py-8">
            <div className="flex w-full flex-col items-center">
              {chainInfo ? (
                <button
                  className={`flex w-full h-10 justify-between items-center gap-2 py-3 pr-2 rounded-[100px_50px_50px_100px] bg-[#EEE7E7]  transition-all ease-in duration-200  cursor-meerkat`}
                  onClick={() => {
                    setIsChainMenuOpen(!isChainMenuOpen)
                    setIsUserMenuOpen(false)
                  }}
                >
                  <img src={chainInfo?.chain} alt={chainInfo?.label} className="w-8 h-8 ml-1" />

                  <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">{chainInfo?.name}</span>
                  <CaretDownIcon color="#521210" />
                </button>
              ) : (
                <button
                  className={`flex w-full h-10 justify-between items-center gap-2 px-3.5 py-3 rounded-xl  transition-all ease-in-out cursor-meerkat ${wallet ? 'bg-[#EEE7E7] ' : 'bg-[#EEE7E7]'}`}
                  onClick={() => wallet && setIsChainMenuOpen(!isChainMenuOpen)}
                  disabled={!wallet}
                >
                  <div />
                  <span className={`font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase ${wallet ? 'text-[#521210]' : 'text-[#E5DBDB]'}`}>
                    {languageHandler('chain-menu-a', language)}
                  </span>
                  <CaretDownIcon color={wallet ? '#521210' : '#E5DBDB'} />
                </button>
              )}
              <NetworksSelectorMobile setIsSolana={setIsSolana} isChainMenuOpen={isChainMenuOpen} setIsChainMenuOpen={setIsChainMenuOpen} />
            </div>
            <div className="flex w-full flex-col items-center">
              {!isSolana ? (
                <ConnectEvmWalletButtonMobile setIsUserMenuOpen={setIsUserMenuOpen} setIsChainMenuOpen={setIsChainMenuOpen} />
              ) : (
                <ConnectSolanaWalletButtonMobile setIsUserMenuOpen={setIsUserMenuOpen} setIsChainMenuOpen={setIsChainMenuOpen} />
              )}
              <UserMenuMobile isUserMenuOpen={isUserMenuOpen} setIsUserMenuOpen={setIsUserMenuOpen} isSolana={isSolana} />
            </div>
          </div>
          {isChainMenuOpen || isUserMenuOpen ? (
            ''
          ) : (
            <>
              <SocialNetworks />
              <div className="flex items-end gap-20 self-stretch">
                <div className="flex items-center gap-6">
                  <button
                    data-tag={languageHandler('menu-e', language)}
                    className="relative font-neueMontreal text-[#FFEFD4] font-bold leading-3 cursor-meerkat custom-button h-3 py-2"
                  />
                  <button
                    data-tag={languageHandler('menu-f', language)}
                    className="relative font-neueMontreal text-[#FFEFD4] font-bold leading-3 cursor-meerkat custom-button h-3 py-2"
                  />
                  <button
                    data-tag={languageHandler('menu-g', language)}
                    className="relative font-neueMontreal text-[#FFEFD4] font-bold leading-3 cursor-meerkat custom-button h-3 py-2"
                  />
                  <button
                    data-tag={languageHandler('menu-h', language)}
                    className="relative font-neueMontreal text-[#FFEFD4] font-bold leading-3 cursor-meerkat custom-button h-3 py-2"
                  />
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuMobile
