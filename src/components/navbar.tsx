import { useState } from 'react'
import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import CaretCloseIcon from '../assets/icons/caret-close'
import { Languages, useAppContext } from '../context'
import Menu from './cover/menu'
import { flagSelector, languageHandler } from '../helpers'
import { CountryCH, CountryEN, CountryIN, CountryIT, CountryPT, CountrySP, InstagramIcon, ListIcon, Logo, LogoLight, TelegramIcon, XIcon } from '../assets'

export const springIn = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 320,
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

const Navbar = ({ move, moveTo }: { move: MotionValue<number>; moveTo: (to: number) => void }) => {
  const { isMenuOpen, setIsMenuOpen, language, setLanguage } = useAppContext()
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [activeBg, setActiveBg] = useState(false)
  const images = [Logo, LogoLight]
  const imageIndex = useTransform(move, [0, 1], [0, images.length - 1])
  useMotionValueEvent(imageIndex, 'change', (latest) => {
    setTimeout(() => {
      setCurrentImage(images[Math.round(latest)])
      setActiveBg(latest === 1 ? true : false)
    }, 0)
  })

  // const isConnected = false

  const handleLanguage = (id: Languages) => {
    setLanguage(id)
    setIsLanguageMenuOpen(false)
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
          {/* <button className="flex h-10 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">
              {isConnected ? languageHandler('navbar-b', language) : languageHandler('navbar-a', language)}
            </span>
          </button> */}
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
                variants={springIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-14 right-0 flex flex-col w-[184px] h-fit gap-2.5 p-4 bg-[#521210] translate-x-12 rounded-lg"
              >
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.IT)}>
                  <img src={CountryIT} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-a', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.CH)}>
                  <img src={CountryCH} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-b', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.US)}>
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-c', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.IN)}>
                  <img src={CountryIN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-d', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.ES)}>
                  <img src={CountrySP} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-e', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.PO)}>
                  <img src={CountryPT} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-f', language)}</span>
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
