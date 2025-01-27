import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import { CaretDownIcon, CountryEN, ListIcon, Logo, LogoLight } from '../assets'
import CaretCloseIcon from '../assets/icons/caret-close'
import { Languages, useAppContext } from '../context'
import Menu from './cover/menu'
import { useState } from 'react'
import { languageHandler } from '../helpers'

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

const Navbar = ({ move }: { move: MotionValue<number> }) => {
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const images = [Logo, LogoLight]
  const imageIndex = useTransform(move, [0, 1], [0, images.length - 1])
  useMotionValueEvent(imageIndex, 'change', (latest) => {
    setCurrentImage(images[Math.round(latest)])
  })

  const { isMenuOpen, setIsMenuOpen, language, setLanguage } = useAppContext()
  const isConnected = false

  const handleLanguage = (id: Languages) => {
    setLanguage(id)
    setIsLanguageMenuOpen(false)
  }
  return (
    <nav className={`sticky top-0 flex-col w-screen  ${isMenuOpen ? 'z-20' : 'z-10'}`}>
      <div className="relative w-screen">
        <Menu />
      </div>
      <div className="flex items-center gap-6 pt-10 px-20">
        <div className="flex items-center gap-10 flex-[1_0_0]">
          {isMenuOpen ? (
            <button className="w-8 h-8 transition-all ease-in-out cursor-meerkat" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CaretCloseIcon color={'#FFCC29'} />
            </button>
          ) : (
            <button
              className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ListIcon color={'#521210'} />
            </button>
          )}
          <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
            <img src={isMenuOpen ? LogoLight : currentImage ? currentImage : Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
          </div>
        </div>
        <div className="relative flex items-center gap-4">
          <button className="flex h-12 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">
              {isConnected ? languageHandler('navbar-b', language) : languageHandler('navbar-a', language)}
            </span>
          </button>
          <button
            className="flex justify-center items-center gap-2 p-2 rounded-lg cursor-meerkat transition-all ease-in-out hover:bg-[#b2b2b280]"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          >
            <img src={CountryEN} alt="flag" className="w-6 h-6" />
            <CaretDownIcon width="24" height="24" color={isMenuOpen ? '#FFCC29' : '#521210'} className="w-6 h-6 object-contain" />
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
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out">
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-a', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out">
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-b', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.US)}>
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-c', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out">
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-d', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out" onClick={() => handleLanguage(Languages.ES)}>
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{languageHandler('language-menu-e', language)}</span>
                </div>
                <div className="flex justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out">
                  <img src={CountryEN} alt="flag" className="w-6 h-6" />
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
