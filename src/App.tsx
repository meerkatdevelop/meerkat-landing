import { Capa_1 } from './assets'
import ActionBox from './components/cover/action-box'
import Banner from './components/cover/banner'
import Navbar from './components/navbar'
import Menu from './components/menu'
import Features from './components/features'
import Presale from './components/pre-sale'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomics'

function App() {
  return (
    <main className="">
      {/* COVER */}
      <section className="cursor-meerkat relative flex flex-col justify-start items-center w-[1440px] h-[704px] bg-no-repeat bg-[url('./assets/images/HERO_V8.svg')]">
        {/* Navigation-HEAD */}
        <Navbar />
        {/* Menu-HEAD */}
        <Menu />
        <div className="flex w-[1280px] justify-between items-start px-20">
          {/* Banner */}
          <Banner />
          {/* Action-BOX */}
          <ActionBox />
        </div>
        <img src={Capa_1} alt="banner" className="absolute bottom-0 left-0" />
      </section>
      {/* ABOUT */}
      <section className="cursor-meerkat flex w-[1440px] justify-center items-center pt-[184px] pb-[463px] px-[242px] bg-[#250807] ">
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
      {/* FEATURES */}
      <Features />
      {/* ROADMAP */}
      <Roadmap />
      {/* TOKENOMICS */}
      <Tokenomics />
      {/* PRESALE */}
      <Presale />
    </main>
  )
}

export default App
