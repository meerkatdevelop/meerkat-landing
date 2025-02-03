import { useEffect, useState } from 'react'
import { BASE, BNB, CaretDownIcon, CaretLeftIcon, CaretRightIcon, CreditCardIcon, ErrorIcon, ETH, GreenCheckIcon, Loader, SOLANA, USDT } from '../../../assets'
import { languageHandler } from '../../../helpers'
import { useAppContext } from '../../../context'
import { pairs } from '../../../constants'

const ActionBox = () => {
  // const [active, setActive] = useState('ETH')
  const [isCoinMenuOpen, setIsCoinMenuOpen] = useState(false)
  const { language } = useAppContext()
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  const [form, setForm] = useState('')
  const [chain, setChain] = useState<null | 'ETH' | 'SOL' | 'BNB' | 'BASE'>(null)
  const [pair, setPair] = useState<{ coin: string; chain: string; label: string; name: string }>({
    coin: ETH,
    chain: ETH,
    label: 'ETH',
    name: 'Ethereum',
  })
  const [step, setStep] = useState(1)
  const merkPrice = 0.0151424545
  const isConnected = true
  const isPurchased = false
  const isPurchaseLoading = true
  const isPurchaseSuccess = false
  const isPurchaseError = false

  const handleChain = (chain: 'ETH' | 'SOL' | 'BNB' | 'BASE') => {
    setChain(chain)
    setStep(step + 1)
  }
  const handleCoin = (pair: { coin: string; chain: string; label: string; name: string }) => {
    setPair(pair)
    setStep(step - 1)
    setIsCoinMenuOpen(false)
  }

  const getNetworkPairs = (network: 'ETH' | 'SOL' | 'BNB' | 'BASE') => {
    return pairs[network]
  }

  useEffect(() => {
    const getTimeLeftUntil = (targetDate: Date): { days: string; hours: string; minutes: string; seconds: string } => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      if (diff <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' }
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      return {
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      }
    }
    const interval = setInterval(() => {
      setCountdown(getTimeLeftUntil(new Date(Date.UTC(2025, 1, 25, 16, 0, 0))))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-14">
      <div className="relative flex w-[378px] flex-col items-center gap-4 p-6 rounded-3xl bg-white overflow-y-hidden">
        <div className="flex flex-col items-start self-stretch border border-[#521210] rounded-xl">
          <div className="flex flex-col justify-center items-center gap-1 self-stretch px-0 py-2 rounded-[12px_12px_0px_0px] bg-[#521210]">
            <span className="font-neueMontreal text-[#EEE7E7] text-center font-medium leading-5 uppercase">{languageHandler('action-box-a', language)}</span>
          </div>
          <div className="flex h-16 justify-center items-center gap-2 self-stretch px-0 py-4 rounded-[0px_0px_12px_12px]">
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">{countdown.days}</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">{languageHandler('action-box-b', language)}</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">{countdown.hours}</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">{languageHandler('action-box-c', language)}</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">{countdown.minutes}</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">{languageHandler('action-box-d', language)}</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">{countdown.seconds}</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">{languageHandler('action-box-e', language)}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch px-0 py-2 rounded-xl bg-[#fffdfb]">
            <div className="flex flex-col items-start gap-2 self-stretch rounded-lg">
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <span className="self-stretch font-neueMontreal text-[#C9B6B5] text-[11px] font-medium leading-3 tracking-[0.1px] uppercase">
                  {languageHandler('action-box-f', language)}
                </span>
                <div className="flex items-center gap-2.5 self-stretch">
                  <span className="font-neueMontreal text-[#3E0E0C] font-bold leading-[18px] tracking-[0.64px]">$7,434,158.62</span>
                  <span className="font-neueMontreal text-[#3E0E0C] leading-[18px] tracking-[0.64px]">/ $7,568,455</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <div className="flex h-2 items-center pr-[115px] rounded-lg bg-[#E5DBDB]">
                  <div className="flex w-[189px] justify-center items-center self-stretch px-4 py-0 rounded-lg bg-[#521210]" />
                </div>
              </div>
            </div>
            <span className="self-stretch font-neueMontreal text-[#521210] text-sm font-medium leading-[normal]">1 $MERK = $0.0151424545</span>
          </div>
          {/* INPUT */}
          <div
            className={`flex items-start gap-2 self-stretch rounded-[14px] ${isConnected ? 'h-[74px]' : 'h-0'} overflow-hidden transition-all ease-in-out duration-1000`}
          >
            <div className="flex flex-col justify-center items-start gap-2 flex-[1_0_0]">
              <div className="flex justify-center items-center self-stretch px-1 py-0">
                <span className="flex-[1_0_0] font-neueMontreal text-[#C9B6B5] text-[11px] font-medium leading-3 tracking-[0.1px] uppercase">
                  {languageHandler('action-box-g', language)} {pair.label}
                </span>
                <span className="flex-[1_0_0] text-[#FFCC29] text-right font-neueMontreal text-[11px] font-bold leading-3 tracking-[0.1px] uppercase">
                  {languageHandler('action-box-h', language)}.
                </span>
              </div>
              <div className="flex items-start gap-2 self-stretch">
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex w-[178px] h-12 items-center gap-2 flex-[1_0_0] px-3 py-3.5 border border-[#998F7F] rounded-lg text-[#998F7F] font-neueMontreal font-bold leading-[normal] outline-none cursor-meerkat overflow-hidden"
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                />
                <button
                  className="flex w-[140px] h-12 items-center gap-2 px-3 py-3.5 border border-[#998F7F] rounded-lg hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
                  onClick={() => setIsCoinMenuOpen(true)}
                >
                  <div className="relative flex">
                    <img src={pair.coin} alt="coin" className="w-6 h-6" />
                    <img src={pair.chain} alt="chain" className="absolute bottom-0 right-0 w-3 h-3 border rounded-[162px] border-white" />
                  </div>
                  <span className="flex-[1_0_0]  text-[#998F7F] font-neueMontreal font-bold leading-[normal]">{pair.label}</span>
                  <CaretDownIcon width="24" height="24" color="#998F7F" />
                </button>
              </div>
            </div>
          </div>
          {/* BTNS */}
          <div
            className={`flex flex-col items-center gap-2 self-stretch ${isConnected ? 'translate-y-0' : '-translate-y-4'} transition-all ease-in-out duration-1000 `}
          >
            <button className="flex h-10 justify-center items-center gap-3 self-stretch px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat overflow-hidden">
              <div className={`flex relative h-6 ${isConnected ? 'w-0' : 'w-16'} transition-all ease-in-out duration-500`}>
                <img src={USDT} alt="coin" className="w-6 h-6 absolute left-0" />
                <img src={SOLANA} alt="coin" className="w-6 h-6 absolute left-3" />
                <img src={BNB} alt="coin" className="w-6 h-6 absolute left-6" />
                <img src={ETH} alt="coin" className="w-6 h-6 absolute left-9" />
                <img src={BASE} alt="coin" className="w-6 h-6 absolute left-12" />
              </div>

              <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                {isConnected
                  ? `${languageHandler('action-box-j', language)} ${form ? (Number(form) * merkPrice).toLocaleString('en-US', { maximumFractionDigits: 2 }) : ''} MEERK`
                  : languageHandler('action-box-i', language)}
              </span>
            </button>
            <button className="flex h-10 justify-center items-center gap-3 self-stretch px-6 py-3 border border-[#EEE7E7] rounded-xl  hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
              <CreditCardIcon color={'#521210'} className="w-6 h-6" />
              <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                {languageHandler('action-box-k', language)}
              </span>
            </button>
          </div>
        </div>
        {/* COIN_MENU */}
        <div
          className={`absolute top-0 flex w-[378px] h-[440px] flex-col items-center gap-4 p-6 rounded-3xl bg-[#FFF] ${isCoinMenuOpen ? 'translate-y-0' : 'translate-y-[440px]'} transition-all ease-in-out duration-1000`}
        >
          <div className="flex justify-center items-center gap-4 self-stretch ">
            <button
              className="rounded-full hover:bg-[#E5DBDB] transition-all ease-in-out cursor-meerkat"
              onClick={() => {
                setIsCoinMenuOpen(false)
                setStep(1)
              }}
            >
              <CaretLeftIcon color="#998F7F" />
            </button>
            <span className="flex-[1_0_0] font-neueMontreal text-[#59544A] text-center font-medium leading-[normal] tracking-[0.16px]">
              {step === 1 ? languageHandler('action-box-l', language) : languageHandler('action-box-m', language)}
            </span>
            <div className="w-4" />
          </div>
          {/* LATERAL_BTNS */}
          {/* <div className="flex items-start gap-1.5 self-stretch overflow-x-auto no-bar-scroll">
            <button
              className={`flex w-[54px] h-10 justify-center items-center gap-3 px-6 py-3 rounded-xl transition-all ease-in-out cursor-meerkat ${coinSort === 'ALL' ? 'bg-[#E5DBDB]' : 'hover:bg-[#FFEFBD]'}`}
              onClick={() => setCoinSort('ALL')}
            >
              <span className="font-neueMontreal text-[#420E0D] text-[15px] font-bold leading-[15px]">ALL</span>
            </button>
            <button
              className={`flex h-10 justify-center items-center gap-3 px-6 py-3 border  rounded-xl transition-all ease-in-out cursor-meerkat ${coinSort === 'BNB' ? 'bg-[#E5DBDB]' : 'border-[#EEE7E7] hover:bg-[#FFEFBD]'}`}
              onClick={() => setCoinSort('BNB')}
            >
              <img src={BNB} alt="coin" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px]">BNB</span>
            </button>
            <button
              className={`flex h-10 justify-center items-center gap-3 px-6 py-3 border  rounded-xl transition-all ease-in-out cursor-meerkat ${coinSort === 'BASE' ? 'bg-[#E5DBDB]' : 'border-[#EEE7E7] hover:bg-[#FFEFBD]'}`}
              onClick={() => setCoinSort('BASE')}
            >
              <img src={BASE} alt="coin" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px]">BASE</span>
            </button>
            <button
              className={`flex h-10 justify-center items-center gap-3 px-6 py-3 border  rounded-xl transition-all ease-in-out cursor-meerkat ${coinSort === 'SOL' ? 'bg-[#E5DBDB]' : 'border-[#EEE7E7] hover:bg-[#FFEFBD]'}`}
              onClick={() => setCoinSort('SOL')}
            >
              <img src={SOLANA} alt="coin" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px]">SOL</span>
            </button>
            <button
              className={`flex h-10 justify-center items-center gap-3 px-6 py-3 border  rounded-xl transition-all ease-in-out cursor-meerkat ${coinSort === 'ETH' ? 'bg-[#E5DBDB]' : 'border-[#EEE7E7] hover:bg-[#FFEFBD]'}`}
              onClick={() => setCoinSort('ETH')}
            >
              <img src={ETH} alt="coin" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px]">ETH</span>
            </button>
          </div> */}
          {/* COIN_SELECTOR */}
          <div className="flex flex-col items-start gap-3 flex-[1_0_0] self-stretch">
            {step === 1 && (
              <>
                <button
                  className="flex items-center gap-4 self-stretch p-4 border border-[#EEE7E7] rounded-xl hover:bg-[#EEE7E7] transition-all ease-in-out duration-500 cursor-meerkat"
                  onClick={() => handleChain('ETH')}
                >
                  <img src={ETH} alt="chain" className="w-6 h-6" />
                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-lg font-bold leading-[18px] tracking-[0.72px]">Ethereum</span>
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-sm not-italic font-medium leading-[18px] tracking-[0.56px]">
                      ETH
                    </span>
                  </div>
                  <CaretRightIcon color="#998F7F" />
                </button>
                <button
                  className="flex items-center gap-4 self-stretch p-4 border border-[#EEE7E7] rounded-xl hover:bg-[#EEE7E7] transition-all ease-in-out duration-500 cursor-meerkat"
                  onClick={() => handleChain('SOL')}
                >
                  <img src={SOLANA} alt="chain" className="w-6 h-6" />
                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-lg font-bold leading-[18px] tracking-[0.72px]">Solana</span>
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-sm not-italic font-medium leading-[18px] tracking-[0.56px]">
                      SOL
                    </span>
                  </div>
                  <CaretRightIcon color="#998F7F" />
                </button>
                <button
                  className="flex items-center gap-4 self-stretch p-4 border border-[#EEE7E7] rounded-xl hover:bg-[#EEE7E7] transition-all ease-in-out duration-500 cursor-meerkat"
                  onClick={() => handleChain('BNB')}
                >
                  <img src={BNB} alt="chain" className="w-6 h-6" />
                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-lg font-bold leading-[18px] tracking-[0.72px]">
                      Binance chain
                    </span>
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-sm not-italic font-medium leading-[18px] tracking-[0.56px]">
                      BSC
                    </span>
                  </div>
                  <CaretRightIcon color="#998F7F" />
                </button>
                <button
                  className="flex items-center gap-4 self-stretch p-4 border border-[#EEE7E7] rounded-xl hover:bg-[#EEE7E7] transition-all ease-in-out duration-500 cursor-meerkat"
                  onClick={() => handleChain('BASE')}
                >
                  <img src={BASE} alt="chain" className="w-6 h-6" />
                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-lg font-bold leading-[18px] tracking-[0.72px]">Base</span>
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-sm not-italic font-medium leading-[18px] tracking-[0.56px]">
                      BASE
                    </span>
                  </div>
                  <CaretRightIcon color="#998F7F" />
                </button>
              </>
            )}
            {step === 2 &&
              chain &&
              getNetworkPairs(chain).map((pair, i) => (
                <button
                  key={i}
                  className="flex items-center gap-4 self-stretch p-4 border border-[#EEE7E7] rounded-xl hover:bg-[#EEE7E7] transition-all ease-in-out duration-500 cursor-meerkat"
                  onClick={() => handleCoin(pair)}
                >
                  <div className="relative flex">
                    <img src={pair.coin} alt="coin" className="w-10 h-10" />
                    <img src={pair.chain} alt="chain" className="absolute bottom-0 right-0 w-4 h-4 border rounded-[162px] border-white" />
                  </div>

                  <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-lg font-bold leading-[18px] tracking-[0.72px]">
                      {pair.name}
                    </span>
                    <span className="text-left self-stretch font-neueMontreal text-[#521210] text-sm not-italic font-medium leading-[18px] tracking-[0.56px]">
                      {pair.label}
                    </span>
                  </div>
                  <CaretRightIcon color="#998F7F" />
                </button>
              ))}
          </div>
        </div>
        {isPurchased && (
          <div
            className={`absolute top-0 flex w-[378px] h-[440px] flex-col items-center gap-4 p-6 rounded-3xl bg-[#FFF] ${isPurchased ? 'translate-y-0' : 'translate-y-[440px]'} transition-all ease-in-out duration-1000`}
          >
            {isPurchaseLoading && (
              <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
                <span className="self-stretch font-neueMontreal text-[#521210] text-center text-xl font-bold leading-5 uppercase">buying meerkat...</span>
                <div className="flex flex-col items-center gap-6 flex-[1_0_0] self-stretch px-0 py-9">
                  <img src={Loader} alt="loader" className="h-[150px] self-stretch object-contain" />
                  <span className="w-[330px] font-neueMontreal text-[#521210] text-center font-medium leading-[normal]">
                    Your meerkat will be deposited in your wallet once the transaction is completed
                  </span>
                </div>
                <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-6 py-3 border border-[#EEE7E7] rounded-xl hover:bg-[#FFEFBD] cursor-meerkat">
                  <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px] uppercase">cancel</span>
                </button>
              </div>
            )}
            {isPurchaseSuccess && (
              <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
                <span className="self-stretch font-neueMontreal text-[#521210] text-center text-xl font-bold leading-5 uppercase">SUCCESSFUL PURCHASE </span>
                <div className="flex flex-col items-center gap-6 flex-[1_0_0] self-stretch px-0 py-9">
                  <img src={GreenCheckIcon} alt="icon" className="w-[126px] h-[126px] object-contain" />
                  <span className="w-[330px] font-neueMontreal text-[#521210] text-center font-medium leading-[normal]">
                    You can now see your meerkat in your wallet
                  </span>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-6 py-3 border border-[#EEE7E7] rounded-xl hover:bg-[#FFEFBD] cursor-meerkat">
                    <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px] uppercase">close</span>
                  </button>
                  <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] cursor-meerkat">
                    <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px] uppercase">buy more</span>
                  </button>
                </div>
              </div>
            )}
            {isPurchaseError && (
              <div className="flex flex-col items-start gap-4 flex-[1_0_0] self-stretch">
                <span className="self-stretch font-neueMontreal text-[#521210] text-center text-xl font-bold leading-5 uppercase">PURCHASE ERROR </span>
                <div className="flex flex-col items-center gap-6 flex-[1_0_0] self-stretch px-0 py-9">
                  <img src={ErrorIcon} alt="icon" className="w-[126px] h-[126px] object-contain" />
                  <span className="w-[330px] font-neueMontreal text-[#521210] text-center font-medium leading-[normal]">
                    oops.. it seems there has been a problem
                  </span>
                </div>

                <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] cursor-meerkat">
                  <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px] uppercase">try again</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ActionBox

//  <div className="flex flex-col items-center gap-2 self-stretch rounded-[14px]">
//             <div className="flex items-start gap-2 self-stretch">
//               <button
//                 className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'ETH' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
//                 disabled={active === 'ETH'}
//                 onClick={() => setActive('ETH')}
//               >
//                 <img src={ETH} alt="logo" className="w-6 h-6" />
//                 <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">ETH</span>
//               </button>
//               <button
//                 className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'USDT' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
//                 disabled={active === 'USDT'}
//                 onClick={() => setActive('USDT')}
//               >
//                 <img src={USDT} alt="logo" className="w-6 h-6" />
//                 <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">USDT</span>
//               </button>
//               <button
//                 className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'CARD' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
//                 disabled={active === 'CARD'}
//                 onClick={() => setActive('CARD')}
//               >
//                 <CreditCardIcon color={'#521210'} className="w-6 h-6" />
//                 <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">CARD</span>
//               </button>
//             </div>
//             <div className="flex flex-col items-start gap-2 self-stretch">
//               <div className="flex items-start gap-2 self-stretch rounded-[14px]">
//                 <div className="flex flex-col justify-center items-start gap-2 flex-[1_0_0]">
//                   <div className="flex justify-center items-center self-stretch">
//                     <span className="flex-[1_0_0] font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">PAY WITH USDT</span>
//                     <span className="flex-[1_0_0] text-[#FFCC29] text-right font-neueMontreal text-[8px] font-bold leading-3 tracking-[0.08px]">MAX.</span>
//                   </div>
//                   <div className="flex h-[52px] items-center gap-4 self-stretch p-2 border border-[#998F7F] rounded-xl">
//                     <input
//                       type="text"
//                       placeholder="0.00"
//                       className="w-[100px] h-full text-[#998F7F] font-neueMontreal text-xl font-bold leading-3 outline-none cursor-meerkat"
//                       value={form}
//                       onChange={(e) => setForm(e.target.value)}
//                     />
//                     {active !== 'CARD' && (
//                       <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
//                         <img src={active === 'ETH' ? ETH : USDT} alt="logo" className="w-4 h-4" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex w-[172px] flex-col items-end gap-2">
//                   <span className="text-right font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">YOU RECEIVE $MERK</span>

//                   <div className="flex h-[52px] items-center gap-4 self-stretch p-2 border border-[#998F7F] rounded-xl ">
//                     <span className="w-[100px]  text-[#998F7F] font-neueMontreal py-2 text-xl font-bold leading-3 overflow-y-hidden no-bar-scroll outline-none">
//                       {(Number(form) * merkPrice).toLocaleString('en-US', { maximumFractionDigits: 2 })}
//                     </span>
//                     <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
//                       <img src={MeerkatCoin} alt="coin" className="w-4 h-4 shrink-0" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center gap-2 self-stretch">
//               <button className="flex h-12 justify-center items-center self-stretch px-6 py-2.5 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
//                 <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">CONNECT WALLET</span>
//               </button>
//               <button className="flex h-12 justify-center items-center gap-2 self-stretch px-6 py-2.5 border border-[#FFCC29] rounded-xl bg-[#fff7df] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
//                 <img src={BnbLogo} alt="logo" className="w-6 h-6" />
//                 <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] ">SWITCH TO BNB CHAIN</span>
//               </button>
//             </div>
//           </div>
