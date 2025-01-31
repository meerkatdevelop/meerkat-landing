import { useRef } from 'react'
import { useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import ReactLenis from 'lenis/react'
import Navbar from './components/navbar'
import Features from './components/features'
import Tokenomics from './components/tokenomics'
import FAQ from './components/faq'
import Footer from './components/footer'
import About from './components/about'
import MeerkatWallet from './components/meerkat-wallet'
import Hero from './assets/hero'
import Cover from './components/cover'

function App() {
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const transitionRef = useRef<HTMLDivElement | null>(null)
  const triggerNavigation = useSpring(0, { damping: 30, stiffness: 100, mass: 2 })

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end end'],
  })
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ['start start', 'start start'],
  })

  const moveTo = (to: number) => {
    triggerNavigation.set(to)
  }

  useMotionValueEvent(triggerNavigation, 'change', (latest) => {
    window.scrollTo(0, latest)
  })
  return (
    <ReactLenis root>
      <main className="cursor-meerkat w-screen justify-center">
        <div ref={parallaxRef} className="relative w-full">
          <Navbar move={transitionProgress} moveTo={moveTo} />
          <Hero move={scrollYProgress} />
          <Cover />
          <div ref={transitionRef} className="-mt-[98px]">
            <About />
            <Features />
            {/* <Roadmap /> */}
            <Tokenomics />
            <MeerkatWallet />
            {/* <MediaMarketing /> */}
            <FAQ />
            {/* <Presale /> */}
            <Footer />
          </div>
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
