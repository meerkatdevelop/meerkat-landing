import { useState } from 'react'
import { BnbLogo, CreditCardIcon, ETH, MeerkatCoin, USDT } from '../../assets'

const ActionBox = () => {
  const [active, setActive] = useState('ETH')
  const [form, setForm] = useState('')
  const merkPrice = 0.0151424545
  return (
    <div className="pt-8">
      <div className="flex w-96 flex-col items-center gap-4 p-4 rounded-3xl bg-[#fffdfb]">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex flex-col items-center gap-1 ">
            <span className="font-neueMontreal  text-[#3E0E0C] text-center leading-5 uppercase">
              ¡compra <span className="font-bold">$merk</span> en preventa HASTA QUE AUMENTEN LOS PRECIOS!
            </span>
          </div>
          <div className="flex justify-center items-start gap-2 rounded-2xl">
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">120</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">Days</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">23</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">Hours</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">60</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">Minutes</span>
            </div>
            <div className="flex flex-col  px-2 py-0 rounded-[8px_0px_0px_8px]">
              <span className=" w-14 font-neueMontreal text-center text-2xl font-bold ">06</span>
              <span className="font-neueMontreal text-center text-[10px] font-bold ">Seconds</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex h-[120px] flex-col justify-center items-center gap-2 self-stretch p-2 rounded-xl bg-[#ffefd4]">
            <div className="flex h-16 flex-col items-start gap-2 shrink-0 self-stretch p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col justify-center items-start gap-1 self-stretch">
                <span className="self-stretch font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">USDT RECAUDADO</span>
                <div className="flex items-center gap-2.5">
                  <span className="font-neueMontreal text-[#3E0E0C] text-sm font-bold leading-[18px] tracking-[0.56px]">$7,434,158.62</span>
                  <span className="font-neueMontreal text-[#3E0E0C] text-sm leading-[18px] tracking-[0.56px]">/ $7,568,455</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <div className="flex h-2 items-center pr-[115px] rounded-lg bg-[#C9B6B5]">
                  <div className="flex w-[189px] justify-center items-center self-stretch px-4 py-0 rounded-lg bg-[#3e0e0c]" />
                </div>
              </div>
            </div>
            <div className="flex h-8 justify-center items-start gap-2.5 self-stretch px-0 py-2 rounded-lg bg-[#FFFAF2]">
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm font-bold leading-3">1 $MERK = $0.0151424545</span>
            </div>
          </div>
          <div className="flex items-start gap-2 self-stretch">
            <button
              className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'ETH' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
              disabled={active === 'ETH'}
              onClick={() => setActive('ETH')}
            >
              <img src={ETH} alt="logo" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">ETH</span>
            </button>
            <button
              className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'USDT' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
              disabled={active === 'USDT'}
              onClick={() => setActive('USDT')}
            >
              <img src={USDT} alt="logo" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">USDT</span>
            </button>
            <button
              className={`flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl border border-[#FFCC29] transition-all ease-in-out cursor-meerkat ${active === 'CARD' ? ' bg-[#ffcc29]' : 'bg-[#FFF7DF] hover:bg-[#FFEFBD]'}`}
              disabled={active === 'CARD'}
              onClick={() => setActive('CARD')}
            >
              <CreditCardIcon color={'#521210'} className="w-6 h-6" />
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">CARD</span>
            </button>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex items-start gap-2 self-stretch rounded-[14px]">
              <div className="flex flex-col justify-center items-start gap-2 flex-[1_0_0]">
                <div className="flex justify-center items-center self-stretch">
                  <span className="flex-[1_0_0] font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">PAY WITH USDT</span>
                  <span className="flex-[1_0_0] text-[#FFCC29] text-right font-neueMontreal text-[8px] font-bold leading-3 tracking-[0.08px]">MAX.</span>
                </div>
                <div className="flex h-[52px] items-center gap-4 self-stretch p-2 border border-[#998F7F] rounded-xl">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-[100px] h-full text-[#998F7F] font-neueMontreal text-xl font-bold leading-3 outline-none cursor-meerkat"
                    value={form}
                    onChange={(e) => setForm(e.target.value)}
                  />
                  {active !== 'CARD' && (
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
                      <img src={active === 'ETH' ? ETH : USDT} alt="logo" className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-[172px] flex-col items-end gap-2">
                <span className="text-right font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">YOU RECEIVE $MERK</span>

                <div className="flex h-[52px] items-center gap-4 self-stretch p-2 border border-[#998F7F] rounded-xl ">
                  <span className="w-[100px]  text-[#998F7F] font-neueMontreal py-2 text-xl font-bold leading-3 overflow-y-hidden no-bar-scroll outline-none">
                    {(Number(form) * merkPrice).toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </span>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
                    <img src={MeerkatCoin} alt="coin" className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 self-stretch">
            <button className="flex h-12 justify-center items-center self-stretch px-6 py-2.5 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
              <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">CONNECT WALLET</span>
            </button>
            <button className="flex h-12 justify-center items-center gap-2 self-stretch px-6 py-2.5 border border-[#FFCC29] rounded-xl bg-[#fff7df] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
              <img src={BnbLogo} alt="logo" className="w-6 h-6" />
              <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] ">SWITCH TO BNB CHAIN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionBox
