import { useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useTransform } from 'motion/react'
import { Languages, useAppContext } from '../../context'
import MenuMobile from '../cover/menu-mobile'
import { MotionValue } from 'motion/react'
import { flagSelector } from '../../helpers'
import { CaretCloseIcon, ListIcon, Logo, LogoLight } from '../../assets'
import LanguageSelectorMobile from './languageSelectorMobile'

const NavbarMobile = ({ move, moveTo }: { move: MotionValue<number>; moveTo: (to: number) => void }) => {
  const { language, setLanguage, isMenuOpen, setIsMenuOpen } = useAppContext()
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

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
      className={`sticky top-0 flex-col w-screen pb-2 pt-12 ${isMenuOpen ? 'z-30' : 'z-20'} ${activeBg ? 'bg-[#250807]' : 'bg-transparent'} transition-all ease-in-out`}
    >
      <div className="relative w-screen">
        <MenuMobile moveTo={moveTo} />
      </div>
      <div className={`flex w-full justify-between px-4  ${activeBg ? 'pb-2' : ''} transition-all ease-in-out`}>
        <button
          className="flex flex-col items-start justify-end gap-2.5 shrink-0 cursor-meerkat"
          onClick={() => {
            moveTo(0)
            setIsMenuOpen(false)
          }}
        >
          <img src={isMenuOpen ? LogoLight : currentImage ? currentImage : Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
        </button>
        <div className="flex gap-4">
          {!isMenuOpen && (
            <button
              className="flex w-[50px] h-[50px] rounded-full justify-center items-center gap-2 p-2 cursor-meerkat transition-all ease-in-out bg-[#EEE7E7] "
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <img src={flagSelector(language)} alt="flag" className="w-8 h-8" />
            </button>
          )}
          <button
            className="flex w-[50px] h-[50px] justify-center items-center shrink-0 p-2 rounded-lg bg-[#FFCC29] transition-all ease-in-out cursor-meerkat"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CaretCloseIcon color="#521210" /> : <ListIcon color="#521210" className="scale-125" />}
          </button>
        </div>
        <AnimatePresence>
          {isLanguageMenuOpen && <LanguageSelectorMobile language={language} handleLanguage={handleLanguage} search={search} setSearch={setSearch} />}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavbarMobile
