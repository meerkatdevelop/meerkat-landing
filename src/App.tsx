import Navbar from './components/navbar'
import Features from './components/features'
import Presale from './components/pre-sale'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomics'
import FAQ from './components/faq'
import Footer from './components/footer'
import About from './components/about'
import MeerkatWallet from './components/meerkat-wallet'
import MediaMarketing from './components/media-marketing'
import ReactLenis from 'lenis/react'
import { useScroll } from 'motion/react'
import { useRef } from 'react'

import Hero from './assets/hero'
import Cover from './components/cover'

function App() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  //MAX WIDTH --- Centrar Contenidop

  return (
    <ReactLenis root>
      <main className="cursor-meerkat w-screen justify-center">
        <div ref={targetRef} className="relative w-full">
          <Navbar />
          <Hero move={scrollYProgress} />
          <Cover />
          <div className="w-screen -mt-[98px]">
            <About />
            <Features />
            <Roadmap />
            <Tokenomics />
            <MeerkatWallet />
            <MediaMarketing />
            <FAQ />
            <Presale />
            <Footer />
          </div>
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
