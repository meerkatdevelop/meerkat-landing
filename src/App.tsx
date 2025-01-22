import { Capa_1 } from './assets'
import ActionBox from './components/cover/action-box'
import Banner from './components/cover/banner'
import Navbar from './components/navbar'
import Menu from './components/menu'
import Features from './components/features'
import Presale from './components/pre-sale'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomics'
import FAQ from './components/faq'
import Footer from './components/footer'
import About from './components/about'
import MeerkatWallet from './components/meerkat-wallet'
import MediaMarketing from './components/media-marketing'

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
      <About />
      {/* FEATURES */}
      <Features />
      {/* ROADMAP */}
      <Roadmap />
      {/* TOKENOMICS */}
      <Tokenomics />
      {/* MEERKAT_WALLET */}
      <MeerkatWallet />
      {/*MEDIA_MARKETING*/}
      <MediaMarketing />
      {/* FAQ */}
      <FAQ />
      {/* PRESALE */}
      <Presale />
      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default App
