import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { ApyShortMobile, ExitLinkIcon, GamesShortMobile, GeneratorShortMobile } from '../../assets'
import PreSaleCover from '../cover/pre-sale'

const AboutMobile = () => {
  const { language } = useAppContext()

  return (
    <section className="flex w-screen flex-col items-center gap-2.5 bg-[#250807]">
      <div className="flex w-full flex-col items-start ">
        <div className="flex flex-col items-start gap-8 self-stretch px-0 py-8">
          <div className="flex flex-col items-center gap-8 self-stretch">
            <div className="flex flex-col justify-center items-center gap-4 self-stretch">
              <h1 className="flex flex-col text-center gap-4 font-newTitle text-[#FFEFD4] text-[104px] font-bold leading-[85px]  uppercase">
                {languageHandler('banner-a', language)}
                <span className="text-center font-neueMontreal text-[#FFEFD4]  text-xl  font-bold leading-5 tracking-tight uppercase">
                  {languageHandler('banner-b', language)}
                </span>
              </h1>
            </div>
            <button className="flex h-10 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
              <a className="cursor-meerkat items-center flex gap-3" href="https://docs.meerkat.wtf" target="blank_" rel="noreferrer">
                <ExitLinkIcon color="#521210" />
                <span className="font-neueMontreal text-[#521210] text-[15px] font-bold leading-[15px] uppercase">{languageHandler('banner-d', language)}</span>
              </a>
            </button>
          </div>
          <PreSaleCover />
          <div className="flex flex-col items-center gap-4 self-stretch">
            <img src={ApyShortMobile} alt="meerkat-apy-short" />
            <img src={GamesShortMobile} alt="meerkat-games-short" />
            <img src={GeneratorShortMobile} alt="meerkat-genereator-short" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMobile
