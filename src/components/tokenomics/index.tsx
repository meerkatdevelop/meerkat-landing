import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { languageHandler } from '../../helpers'
import { useAppContext } from '../../context'
import { Etherscan, InfoIcon } from '../../assets'

const Tokenomics = () => {
  const { language } = useAppContext()

  const presaleBoxRef = useRef<HTMLDivElement | null>(null)
  const stakingRewardsPostBoxRef = useRef<HTMLDivElement | null>(null)
  const stakingRewardsDuringBoxRef = useRef<HTMLDivElement | null>(null)
  const marketingBoxRef = useRef<HTMLDivElement | null>(null)
  const developmentBoxRef = useRef<HTMLDivElement | null>(null)
  const dexBoxRef = useRef<HTMLDivElement | null>(null)
  const cexBoxRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState<{ id: string } | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('deploy pending')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  useEffect(() => {
    const handleMouseBox = (event: MouseEvent) => {
      const boxes = [
        presaleBoxRef.current,
        stakingRewardsPostBoxRef.current,
        stakingRewardsDuringBoxRef.current,
        marketingBoxRef.current,
        developmentBoxRef.current,
        dexBoxRef.current,
        cexBoxRef.current,
      ]
      for (const box of boxes) {
        if (box) {
          const { left, top, right, bottom } = box.getBoundingClientRect()
          const isInside = event.clientX >= left && event.clientX <= right && event.clientY >= top && event.clientY <= bottom

          if (isInside) {
            setActive({ id: box.id })
            break
          } else {
            setActive(null)
          }
        }
      }
    }
    window.addEventListener('mousemove', handleMouseBox)
    return () => {
      window.removeEventListener('mousemove', handleMouseBox)
    }
  }, [])

  return (
    <section id="tokenomics" className="cursor-meerkat flex w-screen flex-col items-center  px-20 py-28 bg-[#250807]">
      <div className="flex flex-col w-full od:w-[1440px] gap-[88px] od:px-20">
        <div className="flex flex-col items-center gap-16 self-stretch">
          <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[98px] tracking-[1.04px] uppercase">
            {languageHandler('tokenomics-a', language)}
          </h2>
          <div className="flex w-[848px] flex-col items-start gap-10 p-6 border border-[#4A100E] rounded-3xl">
            <div className="flex h-[60px] justify-between items-center self-stretch">
              <div className="flex flex-col justify-center items-start flex-[1_0_0] self-stretch">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-b', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-bold leading-[25px]">6,000,000,000</span>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-start gap-2">
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-d', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-bold leading-[25px] uppercase">
                    0% {languageHandler('tokenomics-e', language)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="w-[119px] font-neueMontreal text-[#FFEFD4] leading-5 uppercase">{languageHandler('tokenomics-f', language)}</span>
                  <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-bold leading-[25px] uppercase">
                    100% {languageHandler('tokenomics-g', language)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 self-stretch">
              <div className="flex h-10 flex-col justify-center items-start gap-2.5 flex-[1_0_0] p-4 rounded-xl bg-[#310B0A]">
                <span className="flex gap-2.5 self-stretch font-neueMontreal text-[#FFEFD4] text-sm font-bold leading-6 uppercase">
                  <img src={Etherscan} alt="logo" />
                  {languageHandler('tokenomics-h', language)}: <span className="font-normal">deploy pending</span>
                </span>
              </div>
              <button
                className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
                onClick={handleCopy}
              >
                <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                  {languageHandler(`tokenomics-i-${isCopied ? 'b' : 'a'}`, language)}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex h-[469px] shrink-0 justify-center items-center pb-[5px]">
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="inline-flex w-[755px] flex-col p-2.5 justify-center items-center gap-4"
            >
              <h5 className="font-newTitle text-[#FFCC29] text-center text-[32px] font-bold leading-6 uppercase">
                {languageHandler(active.id, language)}&nbsp;
                {languageHandler(active.id + '-a', language)}&nbsp; {languageHandler(active.id + '-b', language)}
              </h5>
              <span className="font-newTitle text-[#FFEFD4] text-center text-[64px] font-bold leading-[64px] uppercase">
                {languageHandler(active.id + '-c', language)}
              </span>
            </motion.div>
          )}

          {!active && (
            <motion.h4
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="flex w-[910px] h-[281px] flex-col justify-center shrink-0 font-newTitle text-[#FFEFBD] text-center text-[152px] font-bold leading-[129px] tracking-tight uppercase"
            >
              {languageHandler('tokenomics-j', language)}
            </motion.h4>
          )}

          {/* TokenomicsCard */}
          <div
            ref={presaleBoxRef}
            id="tokenomics-k"
            className="absolute max-[1248px]:left-[260px] max-[1248px]:-bottom-[86px] max-[1310px]:left-[100px] left-[144px] bottom-[0px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-k', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">3B Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              50%
            </span>
          </div>
          <div
            ref={stakingRewardsDuringBoxRef}
            id="tokenomics-l"
            className="absolute max-[1248px]:right-[320px] max-[1248px]:bottom-[0] max-[1310px]:right-[260px] right-[144px] bottom-[0px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-l', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">300M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              5%
            </span>
          </div>
          <div
            ref={stakingRewardsPostBoxRef}
            id="tokenomics-m"
            className="absolute max-[1248px]:left-[0px] max-[1248px]:-bottom-[86px]  max-[1310px]:left-[360px] left-[544px] bottom-[0px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-m', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">1.2B Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              20%
            </span>
          </div>
          <div
            ref={dexBoxRef}
            id="tokenomics-n"
            className="absolute max-[1248px]:left-[0px] max-[1248px]:-top-[82px] max-[1310px]:left-[160px] left-[324px] top-[0px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-n', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">450M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              7.5%
            </span>
          </div>
          <div
            ref={cexBoxRef}
            id="tokenomics-o"
            className="absolute max-[1248px]:left-[250px] max-[1248px]:-top-[82px] left-[20px] top-[146px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-o', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">450M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              7.5%
            </span>
          </div>
          <div
            ref={developmentBoxRef}
            id="tokenomics-p"
            className="absolute right-[360px] top-[0px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px]">
                {languageHandler('tokenomics-p', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">300M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              5%
            </span>
          </div>
          <div
            ref={marketingBoxRef}
            id="tokenomics-q"
            className="absolute max-[1248px]:right-[50px] max-[1248px]:bottom-[0] right-[60px] bottom-[140px] inline-flex items-start gap-2.5 p-3.5 border border-[#521210]  hover:border-[#FFCC29] hover:shadow-[0px_0px_14px_0px_rgba(255,204,41,0.20)] rounded-xl bg-[#250807] transition-all ease-in-out duration-300"
          >
            <InfoIcon color="#FFCC29" />
            <div className="flex w-[113px] flex-col justify-center items-center gap-2">
              <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-[10px]  leading-3 tracking-[0.1px] text-nowrap">
                {languageHandler('tokenomics-q', language)}:
              </span>
              <span className="self-stretch font-neueMontreal text-[#FFCC29] text-sm font-bold leading-[14px] tracking-[0.14px]">300M Tokens</span>
            </div>
            <span className="flex w-[47px] flex-col justify-center shrink-0 self-stretch font-newTitle text-[#FFCC29] text-5xl font-bold leading-[48px]">
              5%
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics

//CIRCLE_EFFECT
{
  /* <AnimatePresence>
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
          </AnimatePresence> */
}
