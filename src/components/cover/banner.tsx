import { PlayIcon } from '../../assets'

const Banner = () => {
  return (
    <div className="pt-[52px]">
      <div className="flex w-[383px] flex-col justify-center items-start gap-2.5">
        <h2 className="w-96 h-[232px] font-newTitle text-[#3E0E0C] text-[88px] font-bold leading-[77px] uppercase">
          First AI-Powered Memecoin Fueled by Mini-Games
        </h2>
        <button className="flex items-center justify-center w-40 h-[90.182px] border-[#521210] rounded-2xl border-[5px] bg-[#250807] hover:bg-[#391d1a] transition-all ease-in-out">
          <PlayIcon color="#521210" />
        </button>
      </div>
    </div>
  )
}

export default Banner
