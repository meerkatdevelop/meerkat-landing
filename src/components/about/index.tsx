import { Coin1, Coin2 } from '../../assets'
import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import { ImageMarquee } from './marquee-imgs'

const About = () => {
  const { language } = useAppContext()

  return (
    <section id="about" className="relative cursor-meerkat flex flex-col w-screen justify-center items-center  pt-[100px] pb-[120px] px-[242px] bg-[#250807]">
      <div className="w-full od:w-[1440px] justify-center items-center gap-12">
        <div className="flex w-full flex-col items-center gap-6">
          <h4 className="self-stretch font-neueMontreal text-[#BFB39F] text-center font-medium leading-[normal] tracking-[0.16px] uppercase">
            {languageHandler('about-a', language)}
          </h4>
          <div className="flex w-full opacity-[0.52] justify-center custom-mask overflow-x-hidden">
            <div className="flex w-fit items-center gap-28 py-6">
              {/* <div className="flex w-fit items-center gap-28 py-6 nowrap animate-marquee "> */}
              <ImageMarquee />
              {/* <MarqueeImgs />
            <MarqueeImgs /> */}
            </div>
          </div>
        </div>
        <div className=" flex w-full pt-[119px] flex-col items-center gap-8 shrink-0">
          <h3 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[102px] font-bold leading-[90px] tracking-[1.02px] uppercase">
            {languageHandler('about-b', language)}
          </h3>
          <p className="w-full odd:w-[956px] font-neueMontreal text-[#FFEFD4] text-center text-2xl leading-10 tracking-[0.24px] pt-4">
            {languageHandler('about-c', language)[0]} <span className="font-bold">{languageHandler('about-c', language)[1]}</span>
            {languageHandler('about-c', language)[2]}
          </p>
          <img src={Coin1} alt="coin1" className="absolute top-0 left-0 translate-y-[250px]" />
          <img src={Coin2} alt="coin2" className="absolute top-0 right-0 translate-y-[330px]" />
        </div>
      </div>
    </section>
  )
}

export default About
