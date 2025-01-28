import { useState } from 'react'
import { motion } from 'motion/react'
import { DiscordIcon, InstagramIcon, TelegramIcon, XIcon } from '../../../assets'
import { useAppContext } from '../../../context'
import { AnimatePresence } from 'motion/react'
import { languageHandler } from '../../../helpers'

export const springIn = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 605,
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

const Menu = () => {
  const { isMenuOpen, language } = useAppContext()
  const [isActive, setIsActive] = useState({
    itemA: false,
    itemB: false,
    itemC: false,
    itemD: false,
  })

  return (
    <AnimatePresence>
      {/* Menu */}

      {isMenuOpen && (
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`absolute top-0 left-0 flex w-full flex-col justify-between items-start shrink-0 px-20 py-10 rounded-[0px_0px_32px_32px] bg-[#250807] -z-10 cursor-meerkat`}
        >
          {/* <Navbar /> */}
          <div className="h-12" />
          <div className="flex justify-between items-center self-stretch">
            <button className="font-newTitle text-[#FFCC29] text-8xl font-bold leading-[96px] tracking-[2.88px] uppercase hover:text-[#FFEFBD] cursor-meerkat">
              {languageHandler('menu-a', language)}
            </button>
            <button className="font-newTitle text-[#FFCC29] text-8xl font-bold leading-[96px] tracking-[2.88px] uppercase hover:text-[#FFEFBD] cursor-meerkat">
              {languageHandler('menu-b', language)}
            </button>
            <button className="font-newTitle text-[#FFCC29] text-8xl font-bold leading-[96px] tracking-[2.88px] uppercase hover:text-[#FFEFBD] cursor-meerkat">
              {languageHandler('menu-c', language)}
            </button>
            <button className="font-newTitle text-[#FFCC29] text-8xl font-bold leading-[96px] tracking-[2.88px] uppercase hover:text-[#FFEFBD] cursor-meerkat">
              {languageHandler('menu-d', language)}
            </button>
          </div>
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
            <div className="flex justify-end items-center gap-4 flex-[1_0_0]">
              <button
                className="cursor-meerkat"
                onMouseEnter={() => setIsActive({ ...isActive, itemA: true })}
                onMouseLeave={() => setIsActive({ ...isActive, itemA: false })}
              >
                <XIcon color={isActive.itemA ? '#FFEFBD' : '#FFCC29'} />
              </button>
              <button
                className="cursor-meerkat"
                onMouseEnter={() => setIsActive({ ...isActive, itemB: true })}
                onMouseLeave={() => setIsActive({ ...isActive, itemB: false })}
              >
                <TelegramIcon color={isActive.itemB ? '#FFEFBD' : '#FFCC29'} />
              </button>
              <button
                className="cursor-meerkat"
                onMouseEnter={() => setIsActive({ ...isActive, itemC: true })}
                onMouseLeave={() => setIsActive({ ...isActive, itemC: false })}
              >
                <DiscordIcon color={isActive.itemC ? '#FFEFBD' : '#FFCC29'} />
              </button>
              <button
                className="cursor-meerkat"
                onMouseEnter={() => setIsActive({ ...isActive, itemD: true })}
                onMouseLeave={() => setIsActive({ ...isActive, itemD: false })}
              >
                <InstagramIcon color={isActive.itemD ? '#FFEFBD' : '#FFCC29'} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
