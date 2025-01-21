const Presale = () => {
  return (
    <section className="cursor-meerkat flex flex-col justify-start items-center w-[1440px] h-[704px] bg-no-repeat bg-[url('./assets/images/HERO_V8_1.svg')] mix-blend-exclusion">
      <div className="flex w-[954px] flex-col items-center gap-4 pt-[120px]">
        <h3 className="font-newTitle text-[#521210] text-center text-[88px] font-bold leading-[88px] uppercase">
          We're chilling... but the pre-sale is on its way!
        </h3>
        <div className="flex justify-center items-start gap-2 p-2 rounded-xl bg-[#ffefd4]">
          <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
            <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">120</span>
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Days</span>
            </div>
          </div>
          <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
            <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Hours</span>
            </div>
          </div>
          <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
            <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Minutes</span>
            </div>
          </div>
          <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
            <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
              <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presale
