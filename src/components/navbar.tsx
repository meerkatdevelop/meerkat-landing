import { useState } from 'react'
import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import CaretCloseIcon from '../assets/icons/caret-close'
import { Languages, useAppContext } from '../context'
import Menu from './cover/menu'
import { flagSelector, languageHandler } from '../helpers'
import {
  CaretDownIcon,
  CountryCH,
  CountryEN,
  CountryIN,
  CountryIT,
  CountryPT,
  CountrySP,
  CreditCardIcon,
  ETH,
  ExitIcon,
  InstagramIcon,
  ListIcon,
  Logo,
  LogoLight,
  MagnifyingGlassIcon,
  MeerkatCoin,
  TelegramIcon,
  XIcon,
} from '../assets'
import { chains, springInChainSelector, springInLaguageSelector, springInUserMenu } from '../constants'

const LanguagesList = [Languages.IT, Languages.CH, Languages.US, Languages.IN, Languages.ES, Languages.PO]
const LanguagesIcons = [CountryIT, CountryCH, CountryEN, CountryIN, CountrySP, CountryPT]

const Navbar = ({ move, moveTo }: { move: MotionValue<number>; moveTo: (to: number) => void }) => {
  const { isMenuOpen, setIsMenuOpen, language, setLanguage } = useAppContext()
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isChainMenuOpen, setIsChainMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [chain, setChain] = useState<{ chain: string; label: string; name: string }>({
    chain: ETH,
    label: 'ETH',
    name: 'Ethereum',
  })
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

  const isConnected = true

  const handleLanguage = (id: Languages) => {
    setLanguage(id)
    setIsLanguageMenuOpen(false)
    setSearch('')
  }

  const handleSearch = () => {
    const languages: { lingo: string; icon: string; selector: Languages }[] = []
    for (let i = 0; i <= 5; i++) {
      languages.push({ lingo: languageHandler('language-menu-' + (i + 1), language) as string, icon: LanguagesIcons[i], selector: LanguagesList[i] })
    }

    const result = languages.filter((language) => language.lingo.slice(0, search.length).toLowerCase() === search.toLowerCase())

    return result
  }
  const handleChain = (id: 'ETH' | 'SOL' | 'BNB' | 'BASE') => {
    const selection = chains.find((network) => network.label === id)
    if (selection) {
      setChain(selection)
      setIsChainMenuOpen(false)
      return
    }
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
          <div className="flex justify-end items-center gap-4 flex-[1_0_0]">
            <a className="cursor-meerkat" href="https://x.com/Meerkatwtf" target="blank_" rel="noreferrer">
              <XIcon color="#EEE7E7" />
            </a>
            <a className="cursor-meerkat" href="https://t.me/meerkatwtf" target="blank_" rel="noreferrer">
              <TelegramIcon color="#EEE7E7" />
            </a>
            {/* <a className="cursor-meerkat">
              <DiscordIcon color="#EEE7E7" />
            </a> */}
            <a className="cursor-meerkat" href="https://www.instagram.com/meerkatwtf/#/" target="blank_" rel="noreferrer">
              <InstagramIcon color="#EEE7E7" />
            </a>
          </div>
          <button
            className="flex h-10 justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#EEE7E7] hover:bg-[#C9B6B5] transition-all ease-in-out cursor-meerkat"
            onClick={() => setIsChainMenuOpen(!isChainMenuOpen)}
          >
            <img src={chain.chain} alt={chain.label} className="w-6 h-6" />
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6">{chain.name} Chain</span>
            <CaretDownIcon color="#521210" />
          </button>
          <button
            className={`flex h-10 justify-center items-center gap-2 px-6 py-3 rounded-xl  transition-all ease-in-out cursor-meerkat ${isConnected ? 'bg-[#EEE7E7] hover:bg-[#C9B6B5]' : 'bg-[#FFCC29] hover:bg-[#FFEFBD]'}`}
            onClick={() => (isConnected ? setIsUserMenuOpen(!isUserMenuOpen) : () => {})}
          >
            {isConnected && (
              <CreditCardIcon
                color="#521210"
                className="flex w-[25px] h-[25px] justify-center items-center pl-[3px] pr-1 pt-[3px] pb-1 rounded-[100px] bg-white"
              />
            )}
            <span className={`font-neueMontreal text-[#521210] text-sm font-bold leading-6  ${!isConnected && 'uppercase'}`}>
              {isConnected ? '0x...3233' : languageHandler('navbar-a', language)}
            </span>

            {isConnected && <CaretDownIcon color="#521210" />}
          </button>
          <button
            className="flex w-10 h-10 rounded-full justify-center items-center gap-2 p-2 cursor-meerkat transition-all ease-in-out bg-[#EEE7E7] hover:bg-[#C9B6B5]"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            <img src={flagSelector(language)} alt="flag" className="w-6 h-6" />
            {/* <CaretDownIcon width="24" height="24" color={isMenuOpen || activeBg ? '#FFCC29' : '#521210'} className="w-6 h-6 object-contain" /> */}
          </button>

          <AnimatePresence>
            {isLanguageMenuOpen && (
              <motion.div
                variants={springInLaguageSelector}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-14 right-0 flex w-[332px] h-[460px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
              >
                <div className="flex justify-center items-center gap-2.5 self-stretch px-3 py-0">
                  <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
                    {languageHandler('language-menu-a', language)}
                  </span>
                </div>
                <div className="flex items-center min-h-[46px] gap-2.5 self-stretch px-3 py-0 border border-[#521210] rounded-lg bg-[#310B0A]">
                  <MagnifyingGlassIcon color="#EEE7E7" />
                  <input
                    type="text"
                    placeholder={`${languageHandler('language-menu-b', language)}`}
                    className="font-neueMontreal text-[#FFFDFB] text-[15px] font-normal leading-[18px] bg-transparent outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                {/* Languages List */}
                <div className="flex flex-col items-start gap-2 self-stretch overflow-x-auto custom-scrollbar">
                  {handleSearch().map((idiom, i) => (
                    <div
                      key={i}
                      className="flex w-full justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out"
                      onClick={() => handleLanguage(idiom.selector)}
                    >
                      <img src={idiom.icon} alt="flag" className="w-6 h-6" />
                      <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{idiom.lingo}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isChainMenuOpen && (
              <motion.div
                variants={springInChainSelector}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-14 right-36 flex w-[332px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
              >
                <div className="flex justify-center items-center gap-2.5 self-stretch px-3 py-0">
                  <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
                    {languageHandler('chain-menu-a', language)}
                  </span>
                </div>
                <div className="flex w-[284px] flex-col items-start gap-2 self-stretch">
                  {chains.map((chain, i) => (
                    <div
                      key={i}
                      className="flex w-[408px] items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#400D0B] transition-all ease-in-out"
                      onClick={() => handleChain(chain.label as 'ETH' | 'SOL' | 'BNB' | 'BASE')}
                    >
                      <img src={chain.chain} alt="flag" className="w-6 h-6" />
                      <span className="text-[#FFFDFB] text-[15px] font-normal leading-[18px] font-neueMontreal">{chain.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isUserMenuOpen && (
              <motion.div
                variants={springInUserMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-14 right-0 flex w-[332px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
              >
                <div className="flex flex-col justify-center items-start gap-4 self-stretch p-6 border-b-[#521210] rounded-[24px_24px_0px_0px] border-b bg-[#250807]">
                  <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
                    {languageHandler('user-menu-a', language)}
                  </span>
                  <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
                    {languageHandler('user-menu-b', language)}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 self-stretch p-6 border-b-[#521210] border-b bg-[#250807]">
                  <div className="flex items-center gap-2.5 self-stretch px-3 py-2">
                    <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
                    <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">$merk: 0.00</span>
                  </div>
                  <div className="flex items-center gap-2.5 self-stretch px-3 py-2">
                    <img src={MeerkatCoin} alt="meerkat-coin" className="flex w-[25px] h-[25px] justify-center items-center p-[3px] rounded-[100px] bg-white" />
                    <span className="font-neueMontreal text-[#FFFDFB] text-[15px] leading-[18px]">Staked: 0.00</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 self-stretch p-6  rounded-[24px_24px_0px_0px] bg-[#250807]">
                  <button
                    className="flex h-10 justify-center items-center gap-2 self-stretch px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
                    onClick={() => setIsChainMenuOpen(!isChainMenuOpen)}
                  >
                    <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">{languageHandler('user-menu-c', language)}</span>
                    <ExitIcon color="#521210" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
