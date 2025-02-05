import { motion } from 'motion/react'
import { languageHandler } from '../../helpers'
import { Languages } from '../../context'
import { chains, springInChainSelector } from '../../constants'
import { useChangeEvmNetwork, useWallet } from '../../hooks/useEvmHooks'

interface NetworksSelectorProps {
  language: Languages
  setIsSolana: (isSolana: boolean) => void
  setIsChainMenuOpen: (isChainMenuOpen: boolean) => void
}

const NetworksSelector = ({ language, setIsSolana, setIsChainMenuOpen }: NetworksSelectorProps) => {
  const { wallet } = useWallet()
  const { changeEvmNetwork } = useChangeEvmNetwork()
  const handleChangeNetwork = (networkName: 'Solana' | 'Ethereum' | 'Base' | 'Binance') => {
    if (networkName === 'Solana') {
      setIsSolana(true)
      setIsChainMenuOpen(false)
      return
    }
    if (!wallet) {
      setIsChainMenuOpen(false)
      return
    }
    changeEvmNetwork(networkName.toLowerCase() as 'ethereum' | 'base' | 'binance')
    setIsChainMenuOpen(false)
  }

  return (
    <motion.div
      variants={springInChainSelector}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-14 right-36 flex w-[332px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
    >
      <div className="flex justify-center items-center gap-2.5 self-stretch px-3 py-0">
        <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">{languageHandler('chain-menu-a', language)}</span>
      </div>
      <div className="flex w-[284px] flex-col items-start gap-2 self-stretch">
        {chains.map((chain, i) => (
          <div
            key={i}
            className="flex w-[408px] items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#400D0B] transition-all ease-in-out"
            onClick={() => handleChangeNetwork(chain.name as 'Solana' | 'Ethereum' | 'Base' | 'Binance')}
          >
            <img src={chain.chain} alt="flag" className="w-6 h-6" />
            <span className="text-[#FFFDFB] text-[15px] font-normal leading-[18px] font-neueMontreal">{chain.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default NetworksSelector
