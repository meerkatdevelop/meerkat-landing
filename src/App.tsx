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
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const transitionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end end'],
  })
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ['start start', 'start start'],
  })

  return (
    <ReactLenis root>
      <main className="cursor-meerkat w-screen justify-center">
        <div ref={parallaxRef} className="relative w-full">
          <Navbar move={transitionProgress} />
          <Hero move={scrollYProgress} />
          <Cover />
          <div ref={transitionRef} className="-mt-[98px]">
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
