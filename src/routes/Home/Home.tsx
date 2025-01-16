import { BnbLogo, Capa_1, CaretDownIcon, CountryEN1, CreditCardIcon, ETH, ListIcon, Logo, MeerkatCoin, PlayIcon, USDT } from '../../assets'

function Home() {
  return (
    <main className="relative flex flex-col justify-start items-center w-[1440px] h-[704px] bg-no-repeat bg-[url('./assets/images/HERO_V8.svg')] ">
      {/* Navigation-HEAD */}
      <nav className="flex w-[1280px] items-center gap-6 pt-10 px-10">
        <div className="flex items-center gap-10 flex-[1_0_0]">
          <button className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29]">
            <ListIcon color={'#521210'} />
          </button>
          <button className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
            <img src={Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-12 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29]">
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6">BUY $MERK</span>
          </button>
          <button className="flex justify-center items-center gap-2 p-2 rounded-lg">
            <img src={CountryEN1} alt="flag" className="w-6 h-6" />
            <CaretDownIcon color={'#521210'} className="w-6 h-6" />
          </button>
        </div>
      </nav>
      <div className="flex w-full justify-between items-start px-20">
        {/* Banner */}
        <div className="pt-[52px]">
          <section className="flex w-[383px] flex-col justify-center items-start gap-2.5">
            <h2 className="w-96 h-[232px] font-newTitle text-[#3E0E0C] text-[88px] font-bold leading-[77px] uppercase">
              First AI-Powered Memecoin Fueled by Mini-Games
            </h2>
            <button className="flex items-center justify-center w-40 h-[90.182px] border-[#521210] rounded-2xl border-[5px] bg-[#250807]">
              <PlayIcon color="#521210" />
            </button>
          </section>
        </div>
        {/* Action-BOX */}
        <div className="pt-8">
          <section className="flex w-96 flex-col items-center gap-4 p-4 rounded-3xl bg-[#fffdfb]">
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
                <div className="flex justify-center items-center gap-3 flex-[1_0_0] p-2 rounded-xl bg-[#ffcc29] ">
                  <img src={ETH} alt="logo" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">ETH</span>
                </div>
                <div className="flex justify-center items-center gap-3 flex-[1_0_0] p-2 border border-[#FFCC29] bg-[#FFF7DF] rounded-xl">
                  <img src={USDT} alt="logo" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">USDT</span>
                </div>
                <div className="flex justify-center items-center gap-3 flex-[1_0_0] p-2 border border-[#FFCC29] bg-[#FFF7DF] rounded-xl">
                  <CreditCardIcon color={'#521210'} className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-xs font-bold leading-3">CARD</span>
                </div>
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
                        className="w-[100px] h-full text-[#998F7F] font-neueMontreal text-xl font-bold leading-3 outline-none"
                      />
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
                        <img src={ETH} alt="logo" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[172px] flex-col items-end gap-2">
                    <span className="text-right font-neueMontreal text-[#C9B6B5] text-[8px] font-medium leading-3 tracking-[0.08px]">YOU RECEIVE $MERK</span>

                    <div className="flex h-[52px] items-center gap-4 self-stretch p-2 border border-[#998F7F] rounded-xl">
                      <span className="w-[100px] text-[#998F7F] font-neueMontreal text-xl font-bold leading-3 outline-none">0.00</span>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FFF7DF]">
                        <img src={MeerkatCoin} alt="coin" className="w-4 h-4 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch">
                <button className="flex h-12 justify-center items-center self-stretch px-6 py-2.5 rounded-xl bg-[#FFCC29]">
                  <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">CONNECT WALLET</span>
                </button>
                <button className="flex h-12 justify-center items-center gap-2 self-stretch px-6 py-2.5 border border-[#FFCC29] rounded-xl bg-[#fff7df]">
                  <img src={BnbLogo} alt="logo" className="w-6 h-6" />
                  <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">SWITCH TO BNB CHAIN</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <img src={Capa_1} alt="banner" className="absolute bottom-0 left-0" />
    </main>
  )
}
export default Home
