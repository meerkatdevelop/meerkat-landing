import { useState } from 'react'
import { CapaFeatureBottom, CapaFeatureTop, CaretDownIcon } from '../../assets'
import { languageHandler } from '../../helpers'
import { useAppContext } from '../../context'

const FAQ = () => {
  const { language } = useAppContext()
  const [isBoxActive, setIsBoxActive] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  })

  return (
    <section id="faq" className="cursor-meerkat relative flex flex-col w-screen  h-fit items-center py-[100px] bg-[#310B0A]">
      <div className="flex flex-col w-full od:w-[1440px]">
        {/* TOP ILUSTRATION */}
        <img src={CapaFeatureTop} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />

        <div className="flex w-full flex-col items-start gap-10 px-20 py-28">
          <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[98px] tracking-[1.04px] uppercase">
            {languageHandler('faq-a', language)}
          </h2>
          <div className="flex w-full od:w-[1278px] flex-col items-start gap-4">
            {/* FAQ_Card */}
            <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
              <div className="flex h-14 justify-between items-center self-stretch" onClick={() => setIsBoxActive({ ...isBoxActive, box1: !isBoxActive.box1 })}>
                <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                  {languageHandler('faq-b', language)}
                </span>
                <button
                  className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box1 && 'rotate-180'}`}
                  onClick={() => setIsBoxActive({ ...isBoxActive, box1: !isBoxActive.box1 })}
                >
                  <CaretDownIcon width="32" height="32" color="#521210" />
                </button>
              </div>
              <div
                className={`flex flex-col items-start gap-6 px-12 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box1 ? 'h-[270px]' : 'h-0'}`}
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
            <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
              <div className="flex h-14 justify-between items-center self-stretch" onClick={() => setIsBoxActive({ ...isBoxActive, box2: !isBoxActive.box2 })}>
                <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                  {languageHandler('faq-l', language)}
                </span>
                <button
                  className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box2 && 'rotate-180'}`}
                  onClick={() => setIsBoxActive({ ...isBoxActive, box2: !isBoxActive.box2 })}
                >
                  <CaretDownIcon width="32" height="32" color="#521210" />
                </button>
              </div>
              <div
                className={`flex flex-col items-start gap-6 px-12 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box2 ? 'h-[110px]' : 'h-0'}`}
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
            <div className="flex flex-col justify-center items-start  self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
              <div className="flex h-14 justify-between items-center self-stretch" onClick={() => setIsBoxActive({ ...isBoxActive, box3: !isBoxActive.box3 })}>
                <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                  {languageHandler('faq-r', language)}
                </span>
                <button
                  className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat ${isBoxActive.box3 && 'rotate-180'}`}
                  onClick={() => setIsBoxActive({ ...isBoxActive, box3: !isBoxActive.box3 })}
                >
                  <CaretDownIcon width="32" height="32" color="#521210" />
                </button>
              </div>
              <div
                className={`flex flex-col items-start gap-6 px-12 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box3 ? 'h-[190px]' : 'h-0'}`}
              >
                <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-s', language)}</p>
                <p className="font-neueMontreal text-[#521210] text-lg leading-6">
                  {languageHandler('faq-t', language)} <span className="font-bold">{languageHandler('faq-u', language)}</span>
                </p>
                <p className="font-neueMontreal text-[#521210] text-lg leading-6">{languageHandler('faq-v', language)}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch  px-8 py-3 rounded-3xl bg-[#FFEFD4]">
              <div className="flex h-14 justify-between items-center self-stretch" onClick={() => setIsBoxActive({ ...isBoxActive, box4: !isBoxActive.box4 })}>
                <span className="flex flex-col justify-center flex-[1_0_0] self-stretch font-neueMontreal text-[#521210] text-[22px] font-bold leading-8 tracking-[0.22px]">
                  {languageHandler('faq-w', language)}
                </span>
                <button
                  className={`flex items-center justify-center w-[56.018px] h-14 shrink-0 rounded-full bg-[#FFCC29] hover:bg-[#cfa423] transition-all ease-in-out duration-300 cursor-meerkat z-10 ${isBoxActive.box4 && 'rotate-180'}`}
                  onClick={() => setIsBoxActive({ ...isBoxActive, box4: !isBoxActive.box4 })}
                >
                  <CaretDownIcon width="32" height="32" color="#521210" />
                </button>
              </div>
              <div
                className={`flex flex-col items-start gap-6 px-12 self-stretch overflow-hidden transition-all ease-in-out duration-500 ${isBoxActive.box4 ? 'h-[150px]' : 'h-0'}`}
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
        {/* BOTTTOM ILUSTRATION */}
        <img src={CapaFeatureBottom} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
      </div>
    </section>
  )
}

export default FAQ
