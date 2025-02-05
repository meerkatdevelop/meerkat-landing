import { useState } from 'react'
import { AnimatePresence, MotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import CaretCloseIcon from '../../assets/icons/caret-close'
import { Languages, useAppContext } from '../../context'
import Menu from '../cover/menu'
import { flagSelector, formatNetworkById } from '../../helpers'
import { CaretDownIcon, ListIcon, Logo, LogoLight } from '../../assets'
import NetworksSelector from './networksSelector'
import { useChangeEvmNetwork } from '../../hooks/useEvmHooks'
import SocialNetworks from './SocialNetworks'
import ConnectWalletBtn from './ConnectWalletBtn'
import UserMenu from './userMenu'
import LanguageSelector from './languageSelector'

const Navbar = ({ move, moveTo }: { move: MotionValue<number>; moveTo: (to: number) => void }) => {
  const { isMenuOpen, setIsMenuOpen, language, setLanguage } = useAppContext()
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isChainMenuOpen, setIsChainMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSolana, setIsSolana] = useState(false)
  console.log(isSolana)
  const { connectedChain } = useChangeEvmNetwork()
  const chainInfo = formatNetworkById(connectedChain?.id)

  const [activeBg, setActiveBg] = useState(false)
  const [search, setSearch] = useState('')
  const images = [Logo, LogoLight]
  const imageIndex = useTransform(move, [0, 1], [0, images.length - 1])
  useMotionValueEvent(imageIndex, 'change', (latest) => {
    setTimeout(() => {
      setCurrentImage(images[Math.round(latest)])
      setActiveBg(latest === 1 ? true : false)
    }, 0)
  })

  const handleLanguage = (id: Languages) => {
    setLanguage(id)
    setIsLanguageMenuOpen(false)
    setSearch('')
  }

  return (
    <nav
      className={`sticky top-0 flex-col w-screen pb-2 ${isMenuOpen ? 'z-20' : 'z-10'} ${activeBg ? 'bg-[#250807]' : 'bg-transparent'} transition-all ease-in-out`}
    >
      <div className="relative w-screen">
        <Menu moveTo={moveTo} />
      </div>
      <div className={`flex items-center gap-6 px-20 ${activeBg ? 'pt-2' : 'pt-10'} transition-all ease-in-out`}>
        <div className="flex items-center gap-10 flex-[1_0_0]">
          {isMenuOpen ? (
            <button className="w-8 h-8 transition-all ease-in-out cursor-meerkat" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CaretCloseIcon color="#FFCC29" />
            </button>
          ) : (
            <button
              className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ListIcon color={'#521210'} />
            </button>
          )}
          <button
            className="flex flex-col items-start gap-2.5 shrink-0 cursor-meerkat"
            onClick={() => {
              moveTo(0)
              setIsMenuOpen(false)
            }}
          >
            <img src={isMenuOpen ? LogoLight : currentImage ? currentImage : Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
          </button>
        </div>
        <div className="relative flex items-center gap-4">
          <SocialNetworks />
          <button
            className="flex h-10 justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#EEE7E7] hover:bg-[#C9B6B5] transition-all ease-in-out cursor-meerkat"
            onClick={() => setIsChainMenuOpen(!isChainMenuOpen)}
          >
            <img src={chainInfo?.chain} alt={chainInfo?.label} className="w-6 h-6" />
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6">{chainInfo?.name} Chain</span>
            <CaretDownIcon color="#521210" />
          </button>
          <ConnectWalletBtn language={language} setIsUserMenuOpen={setIsUserMenuOpen} />
          <button
            className="flex w-10 h-10 rounded-full justify-center items-center gap-2 p-2 cursor-meerkat transition-all ease-in-out bg-[#EEE7E7] hover:bg-[#C9B6B5]"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            <img src={flagSelector(language)} alt="flag" className="w-6 h-6" />
            {/* <CaretDownIcon width="24" height="24" color={isMenuOpen || activeBg ? '#FFCC29' : '#521210'} className="w-6 h-6 object-contain" /> */}
          </button>

          <AnimatePresence>
            {isLanguageMenuOpen && <LanguageSelector language={language} handleLanguage={handleLanguage} search={search} setSearch={setSearch} />}
          </AnimatePresence>
          <AnimatePresence>
            {isChainMenuOpen && <NetworksSelector language={language} setIsSolana={setIsSolana} setIsChainMenuOpen={setIsChainMenuOpen} />}
          </AnimatePresence>
          <AnimatePresence>{isUserMenuOpen && <UserMenu language={language} setIsUserMenuOpen={setIsUserMenuOpen} />}</AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
