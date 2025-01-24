import { Beincrypto, BitcoinATM, BussinessInsider, CoinTelegraph, Decrypt, YahooFinance } from '../../../assets'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import useCurrentDimensions from '../../../hooks/useCurrentDimensions'

export const ImageMarquee = () => {
  return (
    <>
      <Marquee speed={16}>
        <div className="flex w-fit gap-x-28 ml-28">
          <img src={CoinTelegraph} alt="coin-telegraph" />
          <img src={BitcoinATM} alt="bitcoin-atm" />
          <img src={Beincrypto} alt="beincrypto" />
          <img src={Decrypt} alt="decrypt" />
          <img src={BussinessInsider} alt="business-insider" />
          <img src={YahooFinance} alt="yahoo-finance" />
        </div>
      </Marquee>
    </>
  )
}

const Marquee = ({ children, speed = 20 }: { children: React.ReactNode | React.ReactNode[]; gapBetween?: number; speed?: number }) => {
  const marquee = useRef<null | HTMLDivElement>(null)
  const { dimensions } = useCurrentDimensions()
  const [marqueeWidth, setMarqueeWidth] = useState(0)

  useEffect(() => {
    if (window !== undefined) {
      setMarqueeWidth(marquee.current!.scrollWidth)
    }
  }, [dimensions.width])

  const duplicateChildren = new Array(3).fill(children)

  return (
    <motion.div className="overflow-hidden">
      <motion.div
        animate={{
          x: [-marqueeWidth / 3, 0],
          scale: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: speed,
        }}
        ref={marquee}
        className={`flex z-20`}
      >
        {duplicateChildren.map((child, index) => {
          return (
            <div key={index} className={`flex-shrink-0 }`}>
              {child}
            </div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Marquee
