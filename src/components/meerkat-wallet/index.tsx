import { AppStoreLogo, ChainsWallet, CoinsWallet, MeerkatFace, MWallet, PlayStoreLogo } from '../../assets'
import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'

const MeerkatWallet = () => {
  const { language } = useAppContext()
  return (
    <section className="cursor-meerkat flex flex-col w-screen items-center px-20 py-28 bg-[#250807] ">
      <div className="flex flex-col w-full od:w-[1440px] items-center justify-center od:px-20">
        <div className="flex justify-center flex-wrap items-start gap-16 self-stretch">
          <div className="flex min-w-[680px] flex-col items-start gap-2.5 flex-[1_0_0]">
            <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border border-[#521210] rounded-[100px] bg-[#FFFAEA]">
              <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
                {languageHandler('features-l', language)}
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-[100px] font-bold leading-[100px] tracking-[1px] uppercase">
                {languageHandler('meerkat-wallet-a', language)}
              </h2>
              <img
                src={MeerkatFace}
                alt="merkat-wallet"
                className="flex w-[76px] h-[76px] justify-center items-center gap-[7.917px] p-[7.917px] rounded-[19px] bg-presalecover"
              />
            </div>

            <div className="flex flex-col items-start gap-6 self-stretch">
              <p className="self-stretch w-[700px] font-neueMontreal font-normal text-[#FFFDFB] text-2xl leading-[32px] tracking-[0.24px]">
                {languageHandler('meerkat-wallet-b', language)}
              </p>
              <div className="flex flex-col justify-end items-start gap-8 self-stretch">
                <div className="flex items-start gap-2.5 self-stretch">
                  <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
                    <span className="font-newTitle text-[#FFEFD4] text-6xl font-bold leading-[60px] tracking-[0.6px]">+ 20 CHAINS SUPPORTED</span>

                    <img src={ChainsWallet} alt="chains-wallet" className="w-[140px] ml-5" />
                    {/* <span className="self-stretch font-neueMontreal text-[#C9B6B5] leading-[normal] tracking-[0.16px]">
                      {languageHandler('meerkat-wallet-c', language)}
                    </span> */}
                  </div>
                  <div className="flex flex-col items-start flex-[1_0_0]">
                    <span className="flex h-[53px] flex-col justify-center self-stretch font-newTitle text-[#FFFDFB] text-6xl font-bold leading-[normal] tracking-[0.6px]">
                      1M + TOKENS
                    </span>
                    {/* <span className="self-stretch font-neueMontreal text-[#C9B6B5] leading-[normal] tracking-[0.16px]">
                      {languageHandler('meerkat-wallet-d', language)}
                    </span> */}
                    <img src={CoinsWallet} alt="chains-wallet" className="w-[340px] mt-2" />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img src={PlayStoreLogo} alt="playstore-logo" />
                  <img src={AppStoreLogo} alt="appstore-logo" />
                </div>
              </div>
            </div>
          </div>
          <img src={MWallet} alt="meerkat-wallet" className="w-[515px] h-[546px]" />
        </div>
      </div>
    </section>
  )
}

export default MeerkatWallet
