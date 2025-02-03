// import { PlayIcon } from '../../assets'
// import Placeholder from '../../../assets/images/Frame 135.svg'
import { CoverPre1, CoverPre2, CoverPre3 } from '../../../assets'
import { useAppContext } from '../../../context'
import { languageHandler } from '../../../helpers'

const Banner = () => {
  const { language } = useAppContext()

  return (
    <div className="pt-[32px]">
      <div className="flex flex-col justify-center items-start gap-4 flex-[1_0_0] pt-6">
        <h1 className="w-96 font-newTitle text-[#3E0E0C] text-7xl font-bold leading-[68px] uppercase">{languageHandler('banner-a', language)}</h1>
        {/* <div className="flex h-[229px] flex-col justify-center items-start gap-2 self-stretch p-2 border-[#521210] rounded-2xl border-[5px] bg-[#250807] hover:bg-[#391d1a] transition-all ease-in-out cursor-meerkat">
          <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-1">
            <span className="font-neueMontreal text-[#FFFDFB] text-center font-bold leading-5 uppercase">{languageHandler('banner-b', language)}</span>
          </div>

          <PlayIcon color="white" className="absolute top-25 left-40" />
          <img src={Placeholder} alt="placeholder" />
        </div> */}
        <button className="flex h-10 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
          <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">READ WHITEPAPER</span>
        </button>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex items-start gap-2.5">
            <img src={CoverPre1} alt="cover-pre-1" className="rounded-xl" />
            <img src={CoverPre2} alt="cover-pre-2" className="rounded-xl" />
          </div>
          <img src={CoverPre3} alt="cover-pre-3" className="rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default Banner
