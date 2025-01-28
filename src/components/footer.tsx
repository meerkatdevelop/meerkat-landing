import { useState } from 'react'
import { Coin3, DiscordIcon, InstagramIcon, LogoLight, TelegramIcon, XIcon } from '../assets'
import { useAppContext } from '../context'
import { getFooterTop, languageHandler } from '../helpers'
import useCurrentDimensions from '../hooks/useCurrentDimensions'

const Footer = () => {
  const { language } = useAppContext()
  const { dimensions } = useCurrentDimensions()
  const [isActive, setIsActive] = useState({
    itemA: false,
    itemB: false,
    itemC: false,
    itemD: false,
  })

  return (
    <footer className="cursor-meerkat relative w-screen justify-center  h-[768px] shrink-0 bg-no-repeat bg-cover bg-[url('./assets/images/FOOTER_IMG2.svg')]">
      <div className="flex w-full od:w-[1440px]">
        {/* TOP ILUSTRATION */}
        {/* <img src={FooterTopDecoration} alt="decoration" className="absolute top-0 left-0 w-full object-contain" /> */}
        <div className="absolute top-0 left-0 flex w-full justify-center items-center gap-16 self-stretch px-20 py-6 border-t-[#3E0E0C] border-b-[#3E0E0C] border-y-[6px] bg-[#250807]">
          {Array.from({ length: Math.floor(dimensions.width / getFooterTop(language)) }).map((_, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[32px] font-bold leading-8 tracking-[0.32px] uppercase">
                {languageHandler('footer-a', language)}
              </span>
              <img src={Coin3} alt="coin" />
            </div>
          ))}
        </div>
        <div className="inline-flex w-[463px] h-[330px] pl-20 pt-[275px] shrink-0 flex-col items-start gap-[104px]">
          <div className="flex w-[222px] flex-col items-end gap-4">
            <img src={LogoLight} alt="logo" className="w-[216px] h-[64px] object-cover" />
            <span className="self-stretch font-neueMontreal text-white text-2xl font-medium leading-8 tracking-[0.24px]">
              © {new Date().getFullYear()} Meerkat
            </span>
          </div>
          <div className="flex h-px flex-col justify-center items-start self-stretch">
            <p className="w-[463px] font-neueMontreal text-white font-medium leading-[27px] tracking-[0.16px]">
              {languageHandler('footer-b', language)}: <br /> {languageHandler('footer-c', language)}
            </p>
          </div>
          <div className="flex h-px justify-end items-end gap-6">
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
      </div>
    </footer>
  )
}

export default Footer
