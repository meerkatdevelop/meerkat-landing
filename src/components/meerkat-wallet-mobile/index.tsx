import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { AppStoreLogo, ChainsWallet, CoinsWalletMobile, MeerkatFace, MWallet, PlayStoreLogo } from '../../assets'

const MeerkatWalletMobile = () => {
  const { language } = useAppContext()
  return (
    <div className="flex w-full flex-col items-center gap-8 self-stretch px-4 py-8 bg-[#250807]">
      <div className="flex flex-col justify-center items-center gap-8 self-stretch">
        <div className="flex flex-col justify-center items-center gap-[15px] self-stretch px-1">
          <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border border-[#521210] rounded-[100px] bg-[#FFFAEA]">
            <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
              {languageHandler('features-l', language)}
            </span>
          </div>
          <img
            src={MeerkatFace}
            alt="merkat-wallet"
            className="flex w-[76px] h-[76px] justify-center items-center gap-[7.917px] p-[7.917px] rounded-[19px] bg-presalecover"
          />
          <h2 className="self-stretch text-center font-newTitle text-[#FFEFD4] text-[104px] font-bold leading-[85px] tracking-[1.04px] uppercase">
            {languageHandler('meerkat-wallet-a', language)}
          </h2>
        </div>
        <p className="w-[358px] text-center font-neueMontreal font-normal text-[#FFFDFB] leading-[18px]">{languageHandler('meerkat-wallet-b', language)}</p>
      </div>
      <img src={MWallet} alt="meerkat-wallet" className="w-[200px] h-[200px]" />
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-2 self-stretch">
          <span className="font-newTitle text-[#FFEFD4] text-5xl font-bold leading-[60px] tracking-[0.48px]">+ 20 CHAINS SUPPORTED</span>
          <img src={ChainsWallet} alt="chains-wallet" className="w-[140px] " />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="font-newTitle text-[#FFEFD4] text-5xl font-bold leading-[60px] tracking-[0.48px]">1M + TOKENS</span>
          <img src={CoinsWalletMobile} alt="chains-wallet" className="" />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <img src={PlayStoreLogo} alt="playstore-logo" />
        <img src={AppStoreLogo} alt="appstore-logo" />
      </div>
    </div>
  )
}

export default MeerkatWalletMobile
