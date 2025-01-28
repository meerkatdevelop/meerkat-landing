import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'

const Presale = () => {
  const { language } = useAppContext()
  return (
    <section className="cursor-meerkat flex flex-col justify-start items-center w-screen h-[704px] bg-no-repeat bg-cover bg-[url('./assets/images/HERO_V8_1.svg')]">
      <div className="flex flex-col w-full od:w-[1440px] justify-center items-center">
        <div className="flex w-[954px] flex-col items-center gap-4 pt-[120px]">
          <h3 className="font-newTitle text-[#521210] text-center text-[88px] font-bold leading-[88px] uppercase">{languageHandler('pre-sale-a', language)}</h3>
          <div className="flex justify-center items-start gap-2 p-2 rounded-xl bg-[#ffefd4]">
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">120</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">{languageHandler('action-box-b', language)}</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">{languageHandler('action-box-c', language)}</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">{languageHandler('action-box-d', language)}</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">{languageHandler('action-box-e', language)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presale
