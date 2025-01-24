// import { PlayIcon } from '../../assets'
import Placeholder from '../../../assets/images/Frame 135.svg'

const Banner = () => {
  return (
    <div className="pt-[52px]">
      <div className="flex w-[383px] flex-col justify-center items-start gap-2.5">
        <h2 className="w-96 h-[232px] font-newTitle text-[#3E0E0C] text-[88px] font-bold leading-[77px] uppercase">
          First AI-Powered Memecoin Fueled by Mini-Games
        </h2>
        <div className="flex h-[229px] flex-col justify-center items-start gap-2 self-stretch p-2 border-[#521210] rounded-2xl border-[5px] bg-[#250807] hover:bg-[#391d1a] transition-all ease-in-out cursor-meerkat">
          <div className="flex justify-center items-center gap-2.5 self-stretch px-0 py-1">
            <span className="font-neueMontreal text-[#FFFDFB] text-center font-bold leading-5 uppercase">play Meerkat</span>
          </div>

          {/* <PlayIcon color="white" className="absolute top-25 left-40" /> */}
          <img src={Placeholder} alt="placeholder" />
        </div>
      </div>
    </div>
  )
}

export default Banner
