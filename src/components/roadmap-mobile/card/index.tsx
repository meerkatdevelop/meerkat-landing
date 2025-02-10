import { useAppContext } from '../../../context'
import { languageHandler } from '../../../helpers'

const CardMobile = ({ i, banner }: { i: number; banner: string }) => {
  const { language } = useAppContext()
  return (
    <div className="flex w-[358px] h-[200px] items-start gap-6 px-4 py-[18px] border border-[#521210] rounded-3xl bg-[#310b0a]">
      <div className="flex w-[326px] items-start gap-4 shrink-0 self-stretch">
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border border-[color:var(--Foundation-Brown-Normal,#521210)] rounded-[100px] bg-[#FFFAEA]">
            <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
              {languageHandler(`roadmap-${1}-a`, language)}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch py-4">
            <h5 className="font-neueMontreal text-[#FFEFD4] font-bold leading-5 tracking-[0.16px] uppercase">
              {languageHandler(`roadmap-${i + 1}-b`, language)}
            </h5>
            <span className="self-stretch font-neueMontreal text-[#FFEFD4] text-sm leading-5">{languageHandler(`roadmap-${i + 1}-c`, language)}</span>
          </div>
        </div>
        <img src={banner} alt="meerkat-king" className="rounded-lg" />
      </div>
    </div>
  )
}

export default CardMobile
