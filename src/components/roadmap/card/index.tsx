import { useAppContext } from '../../../context'
import { motion } from 'motion/react'
import { languageHandler } from '../../../helpers'

const Card = ({ i, banner }: { i: number; banner: string }) => {
  const { language } = useAppContext()
  return (
    <motion.div
      whileInView={{ y: [6.0, -6, 6] }}
      transition={{
        y: { duration: 3, repeat: Infinity },
      }}
      className={`flex w-96 flex-col items-start gap-2.5 pt-16 ${i % 2 === 0 ? 'mt-[150px]' : 'mb-[150px]'}`}
    >
      <div className="flex flex-col justify-center items-start self-stretch p-4 border border-[#521210] rounded-3xl bg-[#310B0A]">
        <div className="flex flex-col items-start self-stretch">
          {/* TAG */}
          {/* PlaceHolder */}
          <div className="relative">
            <div className="absolute top-2 left-2 flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border border-[color:var(--Foundation-Brown-Normal,#521210)] rounded-[100px] bg-[#FFFAEA]">
              <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
                {languageHandler(`roadmap-${i + 1}-a`, language)}
              </span>
            </div>
            <img src={banner} alt="meerkat-king" className="rounded-lg" />
          </div>
          {/* Content */}
          <div className="flex flex-col items-start gap-2 self-stretch py-4">
            <h5 className="font-neueMontreal text-[#FFEFD4] text-2xl font-bold leading-6 tracking-[0.24px] uppercase">
              {languageHandler(`roadmap-${i + 1}-b`, language)}
            </h5>
            <span className="font-neueMontreal text-[#FFEFD4] text-sm leading-5">{languageHandler(`roadmap-${i + 1}-c`, language)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card

// Chip Completed
{
  /* <div className="flex w-[120px] justify-center items-center gap-1.5 px-3 py-1.5 border rounded-[100px] border-[#31DF46] bg-[#073209]">
              <CheckIcon color="#31DF46" />
              <span className="font-neueMontreal text-[#31DF46] text-xs leading-[normal] tracking-[0.12px] uppercase">
                {languageHandler('roadmap-b', language)}
              </span>
            </div> */
}

{
  /* <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
          <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">{languageHandler('roadmap-e', language)}</span>
        </button> */
}
