import { useAppContext } from '../../../context'
import { useWallet } from '@solana/wallet-adapter-react'
import { useChangeEvmNetwork } from '../../../hooks/useEvmHooks'
import { chains } from '../../../constants'
import { languageHandler } from '../../../helpers'

interface NetworksSelectorProps {
  setIsSolana: (isSolana: boolean) => void
  isChainMenuOpen: boolean
  setIsChainMenuOpen: (isChainMenuOpen: boolean) => void
}

const NetworksSelectorMobile = ({ setIsSolana, isChainMenuOpen, setIsChainMenuOpen }: NetworksSelectorProps) => {
  const { wallet } = useWallet()
  const { language } = useAppContext()
  const { changeEvmNetwork } = useChangeEvmNetwork()
  const handleChangeNetwork = (networkName: 'Solana' | 'Ethereum' | 'Base' | 'Binance') => {
    if (networkName === 'Solana') {
      setIsSolana(true)
      setIsChainMenuOpen(false)
      return
    }
    setIsSolana(false)
    if (!wallet) {
      setIsChainMenuOpen(false)
      return
    }
    changeEvmNetwork(networkName.toLowerCase() as 'ethereum' | 'base' | 'binance')
    setIsChainMenuOpen(false)
  }

  return (
    <div className={`flex w-full bg-[#1D0606] overflow-hidden transition-all ease-in-out duration-500 rounded-xl ${isChainMenuOpen ? 'h-[230px]' : 'h-0'}`}>
      <div className="flex flex-col px-6 py-4 gap-4">
        <div className="flex justify-center items-center gap-2.5 self-stretch px-3 py-0">
          <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
            {languageHandler('chain-menu-a', language)}
          </span>
        </div>
        <div className="flex w-[284px] flex-col items-start gap-2 self-stretch">
          {chains.map((chain, i) => (
            <div
              key={i}
              className="flex w-[408px] items-center gap-2.5 px-3 py-2 rounded-xl "
              onClick={() => handleChangeNetwork(chain.name as 'Solana' | 'Ethereum' | 'Base' | 'Binance')}
            >
              <img src={chain.chain} alt="flag" className="w-6 h-6" />
              <span className="text-[#FFFDFB] text-[15px] font-normal leading-[18px] font-neueMontreal">{chain.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NetworksSelectorMobile
