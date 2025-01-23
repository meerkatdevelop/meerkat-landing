import { Coin1, Coin2 } from '../../assets'
import MarqueeImgs from './marquee-imgs'

const About = () => {
  return (
    <section className="relative cursor-meerkat flex flex-col w-[1440px] justify-center items-center gap-12 pt-[100px] pb-[120px] px-[242px] bg-[#250807] ">
      <div className="flex w-[956px] flex-col items-center gap-6">
        <h4 className="self-stretch font-neueMontreal text-[#BFB39F] text-center font-medium leading-[normal] tracking-[0.16px] uppercase">
          Meerkat featured on
        </h4>
        <div className="flex w-[1440px] opacity-[0.52] custom-mask overflow-x-hidden">
          <div className="flex w-fit items-center gap-28 py-6 nowrap animate-marquee ">
            <MarqueeImgs />
            <MarqueeImgs />
          </div>
        </div>
      </div>
      <div className=" flex w-[956px] pt-[119px] flex-col items-center gap-8 shrink-0">
        <h3 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[102px] font-bold leading-8 tracking-[1.02px] uppercase">
          WELCOME TO THE AGE OF MEERKATS
        </h3>
        <p className="self-stretch font-neueMontreal text-[#FFEFD4] text-center text-2xl leading-10 tracking-[0.24px] pt-4">
          Small, underestimated, but never alone. Meerkats have always lived in a tight-knit community, working together and staying vigilant to every little
          movement. For a long time, they were overlooked, but now they’re ready to change the game. That’s how $MERK was born: the token that unites the pack
          to transform the meerkat into the most powerful animal. Together, we’ll move fast, stay agile, and build something big. No empty promises—just a
          community ready to have fun and make some noise.
        </p>
        <img src={Coin1} alt="coin1" className="absolute top-0 left-0 translate-y-[250px]" />
        <img src={Coin2} alt="coin2" className="absolute top-0 right-0 translate-y-[330px]" />
      </div>
    </section>
  )
}

export default About
