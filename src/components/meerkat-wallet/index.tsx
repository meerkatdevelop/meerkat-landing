import { MWallet } from '../../assets'
import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'

const MeerkatWallet = () => {
  const { language } = useAppContext()
  return (
    <section className="cursor-meerkat flex flex-col w-screen items-center px-20 py-28 bg-[#250807] ">
      <div className="flex flex-col w-full od:w-[1440px] items-center justify-center od:px-20">
        <div className="flex justify-center items-start gap-16 self-stretch">
          <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
            <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-[104px] font-bold leading-[104px] tracking-[1.04px] uppercase">
              {languageHandler('meerkat-wallet-a', language)}
            </h2>
            <div className="flex flex-col items-start gap-6 self-stretch">
              <p className="self-stretch font-neueMontreal  text-[#FFFDFB] text-2xl leading-10 tracking-[0.24px]">
                {languageHandler('meerkat-wallet-b', language)}
              </p>
              <div className="flex items-start gap-2.5 self-stretch">
                <div className="flex flex-col items-start flex-[1_0_0]">
                  <span className="flex h-[53px] flex-col justify-center self-stretch font-newTitle text-[#FFFDFB] text-6xl font-bold leading-[normal] tracking-[0.6px]">
                    + 90K
                  </span>
                  <span className="self-stretch font-neueMontreal text-[#C9B6B5] leading-[normal] tracking-[0.16px]">
                    {languageHandler('meerkat-wallet-c', language)}
                  </span>
                </div>
                <div className="flex flex-col items-start flex-[1_0_0]">
                  <span className="flex h-[53px] flex-col justify-center self-stretch font-newTitle text-[#FFFDFB] text-6xl font-bold leading-[normal] tracking-[0.6px]">
                    + 100
                  </span>
                  <span className="self-stretch font-neueMontreal text-[#C9B6B5] leading-[normal] tracking-[0.16px]">
                    {languageHandler('meerkat-wallet-d', language)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img src={MWallet} alt="meerkat-wallet" />
        </div>
      </div>
    </section>
  )
}

export default MeerkatWallet
