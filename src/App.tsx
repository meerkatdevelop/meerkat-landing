import { Capa_1 } from './assets'
import ActionBox from './components/cover/action-box'
import Banner from './components/cover/banner'
import Navbar from './components/navbar'

function App() {
  return (
    <main className="">
      {/* COVER */}
      <section className="relative flex flex-col justify-start items-center w-[1440px] h-[704px] bg-no-repeat bg-[url('./assets/images/HERO_V8.svg')]">
        {/* Navigation-HEAD */}
        <Navbar />
        <div className="flex w-[1280px] justify-between items-start px-20">
          {/* Banner */}
          <Banner />
          {/* Action-BOX */}
          <ActionBox />
        </div>
        <img src={Capa_1} alt="banner" className="absolute bottom-0 left-0" />
      </section>
      {/* ABOUT */}
      <section className="flex w-[1440px] justify-center items-center pt-[184px] pb-[463px] px-[242px] bg-[#250807]">
        <div className="flex w-[956px] flex-col items-center gap-8 shrink-0">
          <h3 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[102px] font-bold leading-8 tracking-[1.02px] uppercase">
            WELCOME TO THE AGE OF MEERKATS
          </h3>
          <p className="self-stretch font-neueMontreal text-[#FFEFD4] text-center text-2xl leading-10 tracking-[0.24px]">
            Small, underestimated, but never alone. Meerkats have always lived in a tight-knit community, working together and staying vigilant to every little
            movement. For a long time, they were overlooked, but now they’re ready to change the game. That’s how $MERK was born: the token that unites the pack
            to transform the meerkat into the most powerful animal. Together, we’ll move fast, stay agile, and build something big. No empty promises—just a
            community ready to have fun and make some noise.
          </p>
        </div>
      </section>
      {/* PRESALE */}
      <section className="relative flex flex-col justify-start items-center w-[1440px] h-[704px] bg-no-repeat bg-[url('./assets/images/HERO_V8_1.svg')]">
        <Navbar />
        <div className="flex w-[954px] flex-col items-center gap-4 pt-[120px]">
          <h3 className="font-newTitle text-[#521210] text-center text-[88px] font-bold leading-[88px] uppercase">
            We’re chilling... but the pre-sale is on its way!
          </h3>
          <div className="flex justify-center items-start gap-2 p-2 rounded-xl bg-[#ffefd4]">
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">120</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Days</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Hours</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Minutes</span>
              </div>
            </div>
            <div className="flex w-[88px] h-16 flex-col justify-center items-center gap-2 p-2 rounded-lg bg-[#fffaf2]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1 ">
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-[40px] font-bold leading-[30px] ">00</span>
                <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm  font-bold">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <img src={Capa_1} alt="banner" className="absolute bottom-0 left-0" />
      </section>
    </main>
  )
}

export default App
