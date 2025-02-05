import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { GeneratorMobile, MarcoDivisorBottomMobile, MarcoDivisorMobile, MiniApp, TelegramVector, TreeMobile } from '../../assets'

const FeaturesMobile = () => {
  const { language } = useAppContext()
  return (
    <section className="relative flex w-screen flex-col items-center px-4 gap-8 bg-[#310B0A]">
      <img src={MarcoDivisorMobile} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />
      <div className="flex flex-col items-center gap-8 self-stretch py-[130px]">
        <div className="flex flex-col justify-center items-center gap-8 self-stretch">
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-center text-xl font-bold leading-[18px] tracking-[0.24px] uppercase">
              {languageHandler('features-a', language)}
            </span>
            <h4 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[85px] uppercase">
              {languageHandler('features-b', language)}
            </h4>
          </div>
          <p className="self-stretch font-neueMontreal text-[#FFEFD4] text-center font-normal leading-[18px]">{languageHandler('features-c', language)}</p>
        </div>

        <div className="flex w-[358px] h-[464px] flex-col items-center shrink-0 p-6 bg-no-repeat bg-contain bg-[url('./assets/images/box-mobile.svg')]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <span className="font-newTitle text-5xl text-[#3E0E0C] font-bold leading-[50px]  uppercase">{languageHandler('features-d', language)}</span>
                <p className="self-stretch flex-col justify-center text-[#3E0E0C] font-neueMontreal leading-[18px]">
                  {languageHandler('features-e', language)}
                </p>
              </div>
              <div className="flex w-full justify-center">
                <img src={TreeMobile} alt="img-1" className="flex w-[258px] h-[180px] justify-center items-center pl-[18.517px] pr-[18.156px] py-0" />
              </div>
              <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-4 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                <span className="font-neueMontreal text-[#3E0E0C] text-[15px] font-bold leading-[15px] uppercase">
                  {languageHandler('features-f', language)}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[358px] h-[464px] flex-col items-center shrink-0 p-6 bg-no-repeat bg-contain bg-[url('./assets/images/box-mobile.svg')]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <span className="font-newTitle text-5xl text-[#3E0E0C] font-bold leading-[50px] tracking-tight  uppercase">
                  {languageHandler('features-g', language)}
                </span>

                <p className="self-stretch flex-col justify-center text-[#3E0E0C] font-neueMontreal leading-[18px]">
                  {languageHandler('features-h', language)}
                </p>
              </div>
              <div className="flex w-full justify-center">
                <img src={MiniApp} alt="img-2" className="flex w-[258px] h-[180px] justify-center items-center pl-[18.517px] pr-[18.156px] py-0" />
              </div>
              <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-4 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                <img src={TelegramVector} alt="telegram-vector" />
                <span className="font-neueMontreal text-[#3E0E0C] text-[15px] font-bold leading-[15px] uppercase">
                  {languageHandler('features-i', language)}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex w-[358px] h-[464px] flex-col items-center shrink-0 p-6 bg-no-repeat bg-contain bg-[url('./assets/images/box-mobile.svg')]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex flex-col justify-end items-start flex-[1_0_0]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border border-[#521210] rounded-[100px] bg-[#FFFAEA]">
                  <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
                    {languageHandler('features-l', language)}
                  </span>
                </div>
                <span className="font-newTitle text-5xl text-[#3E0E0C] font-bold leading-[50px] tracking-tight  uppercase">
                  {languageHandler('features-j', language)}
                </span>

                <p className="self-stretch flex-col justify-center text-[#3E0E0C] font-neueMontreal leading-[18px]">
                  {languageHandler('features-k', language)}
                </p>
              </div>
            </div>
            {/* <button className="flex h-10 justify-center items-center gap-3 shrink-0 self-stretch px-4 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                <img src={TelegramVector} alt="telegram-vector" />
                <span className="font-neueMontreal text-[#3E0E0C] text-[15px] font-bold leading-[15px] uppercase">
                  {languageHandler('features-l', language)}
                </span>
              </button> */}
          </div>
          <div className="flex w-full flex-col justify-center items-center gap-2.5 shrink-0">
            <img src={GeneratorMobile} alt="img-2" className="absolute bottom-0 translate-y-px" />
          </div>
        </div>
      </div>
      <img src={MarcoDivisorBottomMobile} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
    </section>
  )
}

export default FeaturesMobile
