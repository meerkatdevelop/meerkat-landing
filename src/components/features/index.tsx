import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { CapaFeatureBottom, CapaFeatureTop, MemeCreator, MiniApp, TelegramVector, TreeMoney } from '../../assets'

const Features = () => {
  const { language } = useAppContext()
  return (
    <section className="cursor-meerkat relative flex flex-col w-screen justify-center items-center h-fit pb-24 bg-[#310B0A]">
      {/* TOP ILUSTRATION */}
      <img src={CapaFeatureTop} alt="decoration" className="absolute top-0 left-0 w-full object-contain" />
      <div className="inline-flex flex-col w-full od:w-[1440px] justify-center items-center gap-16 px-20 py-40">
        <div className="flex flex-col items-center gap-3 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-center text-2xl font-bold leading-6 tracking-[0.24px] uppercase">
              {languageHandler('features-a', language)}
            </span>
            <h4 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[104px] tracking-[1.04px] uppercase">
              {languageHandler('features-b', language)}
            </h4>
          </div>
          <p className="w-[956px] font-neueMontreal text-[#FFEFD4] text-center text-2xl font-normal leading-8 tracking-[0.24px]">
            {languageHandler('features-c', language)}
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex items-center gap-6 self-stretch">
              <div className="flex w-[628px] h-[464px] items-start gap-6 shrink-0 p-6 rounded-3xl bg-no-repeat bg-contain bg-[url('./assets/images/box_1.svg')]">
                <div className="flex w-[221px] flex-col items-start gap-2.5 shrink-0 self-stretch">
                  <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                    <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch">
                      <span className="font-newTitle text-[82px] text-[#3E0E0C] font-bold leading-[70px] tracking-[0.88px] uppercase">
                        {languageHandler('features-d', language)}
                      </span>
                      <p className="flex w-[260px] flex-col justify-center self-stretch text-[#3E0E0C] font-neueMontreal font-medium leading-[21px]">
                        {languageHandler('features-e', language)}
                      </p>
                    </div>
                    <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                      <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                        {languageHandler('features-f', language)}
                      </span>
                    </button>
                  </div>
                </div>
                <img src={TreeMoney} alt="img-1" className="w-[336px] shrink-0 self-stretch" />
              </div>
              <div className="flex w-[628px] h-[464px] items-start gap-6 shrink-0 p-6 rounded-3xl bg-no-repeat bg-contain bg-[url('./assets/images/box_1.svg')]">
                <div className="flex w-[221px] flex-col items-start gap-2.5 shrink-0 self-stretch">
                  <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                    <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch">
                      <span className="font-newTitle text-[82px] text-[#3E0E0C] font-bold leading-[70px] tracking-[0.64px] uppercase">
                        {languageHandler('features-g', language)}
                      </span>
                      <p className="w-[269px] text-[#3E0E0C] font-neueMontreal font-medium leading-[21px]">{languageHandler('features-h', language)}</p>
                    </div>
                    <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
                      <span className="flex items-center gap-2 font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px] uppercase">
                        {languageHandler('features-i', language)}
                        <img src={TelegramVector} alt="telegram-vector" />
                      </span>
                    </button>
                  </div>
                </div>
                <img src={MiniApp} alt="img-2" className="w-[336px] shrink-0 self-stretch" />
              </div>
            </div>
            <div className="flex items-center gap-6 self-stretch">
              <div className="flex w-[1280px] h-[464px] items-center gap-6 shrink-0 p-6 rounded-3xl bg-no-repeat bg-contain bg-[url('./assets/images/box_2.svg')]">
                <div className="flex w-[221px] flex-col items-start gap-2.5 shrink-0 self-stretch">
                  <div className="flex flex-col justify-end items-start gap-6 flex-[1_0_0]">
                    <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch">
                      <span className="font-newTitle text-[82px] text-[#3E0E0C] font-bold leading-[70px] tracking-[0.88px] uppercase">
                        {languageHandler('features-j', language)}
                      </span>
                      <p className="w-[269px] text-[#3E0E0C] font-neueMontreal font-medium leading-[18px]">{languageHandler('features-k', language)}</p>
                    </div>
                    <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat uppercase">
                      <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">
                        {languageHandler('features-l', language)}
                      </span>
                    </button>
                  </div>
                </div>
                <img src={MemeCreator} alt="img-3" className="flex h-[464px] items-center flex-[1_0_0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTTOM ILUSTRATION */}
      <img src={CapaFeatureBottom} alt="decoration" className="absolute bottom-0 left-0 w-full object-contain" />
    </section>
  )
}

export default Features
