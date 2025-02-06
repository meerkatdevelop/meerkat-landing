import { useState } from 'react'
import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { CaretDownIcon, MarcoDivisorBottomMobile, MarcoDivisorMobile } from '../../assets'

const FAQMobile = () => {
  const { language } = useAppContext()
  const [isBoxActive, setIsBoxActive] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  })
  return (
    <section id="faq" className="relative flex w-screen flex-col items-center px-4 gap-8 bg-[#310B0A]">
      <img src={MarcoDivisorMobile} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />
      <div className="flex flex-col items-center gap-8 self-stretch py-[130px] z-10">
        <h4 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[85px] tracking-[1.04px] uppercase">
          {languageHandler('faq-a', language)}
        </h4>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch rounded-xl bg-[#FFEFD4]">
            <div className="flex justify-between items-center self-stretch px-6 py-2 ">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal font-bold text-[#521210] leading-[22px] tracking-[0.16px]">
                {languageHandler('faq-b', language)}
              </span>
              <button
                className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box1 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box1: !isBoxActive.box1 })}
              >
                <CaretDownIcon width="24" height="24" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 px-6 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box1 ? 'h-[590px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                {languageHandler('faq-c', language)[0]}
                {languageHandler('faq-c', language)[1]}
                {languageHandler('faq-c', language)[2]}
                {languageHandler('faq-c', language)[3]}
                {languageHandler('faq-c', language)[4]}
              </p>
              <div className="flex flex-col gap-2 px-6">
                <li className="font-neueMontreal text-[#521210] text-lg leading-6">
                  <span className="font-bold">{languageHandler('faq-d', language)}</span>
                  {languageHandler('faq-e', language)}
                </li>

                <li className="font-neueMontreal text-[#521210] text-lg leading-6">
                  <span className="font-bold">{languageHandler('faq-f', language)}</span>
                  {languageHandler('faq-g', language)}
                </li>

                <li className="font-neueMontreal text-[#521210] text-lg leading-6">
                  <span className="font-bold">{languageHandler('faq-h', language)}</span>
                  {languageHandler('faq-i', language)}
                </li>

                <li className="font-neueMontreal text-[#521210] text-lg leading-6">
                  <span className="font-bold">{languageHandler('faq-j', language)}</span>
                  {languageHandler('faq-k', language)}
                </li>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-xl bg-[#FFEFD4]">
            <div className="flex justify-between items-center self-stretch px-6 py-2 ">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal font-bold text-[#521210] leading-[22px] tracking-[0.16px]">
                {languageHandler('faq-l', language)}
              </span>
              <button
                className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box2 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box2: !isBoxActive.box2 })}
              >
                <CaretDownIcon width="24" height="24" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 px-6 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box2 ? 'h-[240px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                {languageHandler('faq-m', language)}
                <span className="font-bold">{languageHandler('faq-n', language)}</span>
              </p>
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                {languageHandler('faq-o', language)}
                <span className="font-bold">{languageHandler('faq-p', language)}</span>
                {languageHandler('faq-q', language)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-xl bg-[#FFEFD4]">
            <div className="flex justify-between items-center self-stretch px-6 py-2 ">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal font-bold text-[#521210] leading-[22px] tracking-[0.16px]">
                {languageHandler('faq-r', language)}
              </span>
              <button
                className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box3 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box3: !isBoxActive.box3 })}
              >
                <CaretDownIcon width="24" height="24" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 px-6 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box3 ? 'h-[240px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-s', language)}</p>
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                {languageHandler('faq-t', language)} <span className="font-bold">{languageHandler('faq-u', language)}</span>
              </p>
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-v', language)}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch rounded-xl bg-[#FFEFD4]">
            <div className="flex justify-between items-center self-stretch px-6 py-2 ">
              <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal font-bold text-[#521210] leading-[22px] tracking-[0.16px]">
                {languageHandler('faq-w', language)}
              </span>
              <button
                className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box4 && 'rotate-180'}`}
                onClick={() => setIsBoxActive({ ...isBoxActive, box4: !isBoxActive.box4 })}
              >
                <CaretDownIcon width="24" height="24" color="#521210" />
              </button>
            </div>
            <div
              className={`flex flex-col items-start gap-6 px-6 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box4 ? 'h-[260px]' : 'h-0'}`}
            >
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                {languageHandler('faq-x', language)}
                <span className="font-bold">{languageHandler('faq-y', language)}</span>
                {languageHandler('faq-z', language)}
              </p>
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-aa', language)}</p>
              <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-ab', language)}</p>
            </div>
          </div>
        </div>
      </div>
      <img src={MarcoDivisorBottomMobile} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
    </section>
  )
}

export default FAQMobile
