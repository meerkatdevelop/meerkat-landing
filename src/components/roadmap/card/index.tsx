import { CheckIcon } from '../../../assets'

const Card = () => {
  return (
    <div className="flex w-96 flex-col items-start gap-2.5 pt-16 ">
      <div className="flex flex-col justify-center items-start gap-10 self-stretch p-4 border border-[#521210] rounded-3xl bg-[#310B0A]">
        <div className="flex flex-col items-start gap-4 self-stretch">
          {/* TAG */}
          <div className="flex justify-between items-start self-stretch p-2 rounded-2xl bg-white">
            <div className="flex w-[120px] justify-center items-center gap-1.5 px-3 py-1.5 border rounded-[100px] border-[#31DF46] bg-[#073209]">
              <CheckIcon color="#31DF46" />
              <span className="font-neueMontreal text-[#31DF46] text-xs leading-[normal] tracking-[0.12px] uppercase">Completed</span>
            </div>
            <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5 border rounded-[100px] border-[#FF6B00] bg-[#5B2600]">
              <span className="font-neueMontreal text-[#FF6B00] text-xs leading-[normal] tracking-[0.12px] uppercase">30 DE ABRIL DE 2024</span>
            </div>
          </div>
          {/* PlaceHolder */}
          <div className="h-[7rem]" />
          {/* Content */}
          <div className="flex flex-col items-start gap-2 self-stretch">
            <h5 className="flex h-[29px] flex-col justify-end self-stretch text-[#FFEFD4] text-2xl font-bold leading-6 tracking-[0.24px] uppercase">
              Meerkat ha nacido
            </h5>
            <span className="flex h-10 flex-col justify-center self-stretch text-[#FFEFD4] text-sm leading-5">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
            </span>
          </div>
        </div>
        <button className="flex h-10 justify-center items-center px-6 py-3 rounded-xl bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
          <span className="font-neueMontreal text-[#3E0E0C] text-sm not-italic font-bold leading-[14px]">LOREMP</span>
        </button>
      </div>
    </div>
  )
}

export default Card
