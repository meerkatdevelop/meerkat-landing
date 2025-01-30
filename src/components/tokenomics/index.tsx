import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { languageHandler } from '../../helpers'
import { useAppContext } from '../../context'

const Tokenomics = () => {
  const { language } = useAppContext()
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isBlendAreaActive, setIsBlendAreaActive] = useState(false)
  const [coordinates, setCoordinates] = useState<{ x: number; y: number } | null>(null)

  // const isInView = useInView(sectionRef)

  // console.log(isInView)

  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const sectionElement = sectionRef.current
  //     if (sectionElement) {
  //       const { left, top, right, bottom } = sectionElement.getBoundingClientRect()
  //       const isInside = event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom
  //       setIsBlendAreaActive(isInside)
  //       if (isInside) {
  //         setCoordinates({ x: event.clientX, y: event.clientY })
  //       } else {
  //         setCoordinates(null)
  //       }
  //     }
  //   }
  //   window.addEventListener('mousemove', handleMouseMove)
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const sectionElement = sectionRef.current
    if (sectionElement) {
      const { left, top, right, bottom } = sectionElement.getBoundingClientRect()
      const isInside = event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom
      setIsBlendAreaActive(isInside)
      if (isInside) {
        setCoordinates({ x: event.clientX, y: event.clientY })
      } else {
        setCoordinates(null)
      }
    }
  }

  return (
    <section id="tokenomics" className="cursor-meerkat flex w-screen flex-col items-center  px-20 py-28 bg-[#250807]">
      <div className="flex flex-col w-full od:w-[1440px] gap-[88px] od:px-20">
        <div className="flex flex-col items-center gap-16 self-stretch">
          <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[98px] tracking-[1.04px] uppercase">
            {languageHandler('tokenomics-a', language)}
          </h2>
          <div className="flex  flex-col items-start gap-10 self-stretch p-6 border border-[#4A100E] rounded-3xl">
            <div className="flex h-[60px] justify-between items-center self-stretch">
              <div className="flex flex-col justify-center items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-b', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl leading-[25px]">6,000,000,000</span>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex w-[126px] flex-col items-start gap-2">
                  <span className="w-[119px] font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-c', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl leading-[25px]">12.56%</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-d', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl leading-[25px] uppercase">
                    0% {languageHandler('tokenomics-e', language)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="w-[119px] font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-f', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl leading-[25px] uppercase">
                    100% {languageHandler('tokenomics-g', language)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 self-stretch">
              <div className="flex h-10 flex-col justify-center items-start gap-2.5 flex-[1_0_0] p-4 rounded-xl bg-[#310B0A]">
                <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-sm font-bold leading-6 uppercase">
                  {languageHandler('tokenomics-h', language)}: <span className="font-normal">Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump</span>
                </span>
              </div>
              <button
                className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
                onClick={() => navigator.clipboard.writeText('Df6yfrKC8kZE3KNkrHERKzAetSxbrWeniQfyJY4Jpump')}
              >
                <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                  {languageHandler('tokenomics-i', language)}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={sectionRef}
          className="relative flex h-[469px] shrink-0 justify-center items-center pb-[5px]"
          onMouseEnter={() => setIsBlendAreaActive(true)}
          onMouseMove={(event) => handleMouseMove(event)}
          onMouseLeave={() => setIsBlendAreaActive(false)}
        >
          <h4 className="flex w-[910px] h-[281px] flex-col justify-center shrink-0 font-newTitle text-[#FFEFBD] text-center text-[160px] font-bold leading-[139px] tracking-tight uppercase">
            {languageHandler('tokenomics-j', language)}
          </h4>
          {/* TokenomicsCard */}
          <div className="absolute left-[144px] bottom-[0px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-k', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">450M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              7.5%
            </span>
          </div>
          <div className="absolute right-[144px] bottom-[0px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-l', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">300M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              5%
            </span>
          </div>
          <div className="absolute left-[544px] bottom-[0px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-m', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">300M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              5%
            </span>
          </div>
          <div className="absolute left-[364px] top-[0px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-n', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">450M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              7.5%
            </span>
          </div>
          <div className="absolute left-[90px] top-[146px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-o', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">600M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              10%
            </span>
          </div>
          <div className="absolute right-[360px] top-[0px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-p', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">2.4B Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              40%
            </span>
          </div>
          <div className="absolute right-[60px] bottom-[140px] flex w-[195.617px] h-16 items-start gap-1 px-4 py-3.5 border border-[#521210] rounded-2xl bg-[#250807]">
            <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px] text-nowrap">
                {languageHandler('tokenomics-q', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">2.4B Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              30%
            </span>
          </div>
          <AnimatePresence>
            {coordinates && (
              <motion.div
                className={`fixed top-0 left-0 w-[300px] h-[300px]  bg-[#FFCC29] rounded-full mix-blend-difference transition-opacity ease-in-out ${isBlendAreaActive ? 'opacity-100 custom-cursor z-0' : 'opacity-0 -z-10  cursor-meerkat'}`}
                style={{ x: coordinates.x - 150, y: coordinates.y - 150, scale: isBlendAreaActive ? 1 : 0.5 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.2,
                }}
                exit={{ scale: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
