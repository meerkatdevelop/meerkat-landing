import { useRef } from 'react'
import { useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import ReactLenis from 'lenis/react'
import Navbar from './components/navbar/navbar'
import Features from './components/features'
import Tokenomics from './components/tokenomics'
import FAQ from './components/faq'
import Footer from './components/footer'
import About from './components/about'
import MeerkatWallet from './components/meerkat-wallet'
import Hero from './assets/hero'
import Cover from './components/cover'
import useCurrentDimensions from './hooks/useCurrentDimensions'
import NavbarMobile from './components/navbar-mobile'
import AboutMobile from './components/about-mobile'
import FeaturesMobile from './components/features-mobile'
import HeroMobile from './assets/hero-mobile'
import MeerkatWalletMobile from './components/meerkat-wallet-mobile'
import FAQMobile from './components/faq-mobile'
import FooterMobile from './components/footer-mobile'

function App() {
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const transitionRef = useRef<HTMLDivElement | null>(null)
  const triggerNavigation = useSpring(0, { damping: 30, stiffness: 100, mass: 2 })
  const { dimensions } = useCurrentDimensions()

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
          {dimensions.width < 1024 ? (
            <>
              <NavbarMobile moveTo={moveTo} />
              <HeroMobile />
            </>
          ) : (
            <>
              <Navbar move={transitionProgress} moveTo={moveTo} />
              <Hero move={scrollYProgress} />
              <Cover />
            </>
          )}

          <div ref={transitionRef} className="-mt-[98px]">
            {dimensions.width < 1024 ? (
              <>
                <AboutMobile />
                <FeaturesMobile />
                <MeerkatWalletMobile />
                <FAQMobile />
                <FooterMobile />
              </>
            ) : (
              <>
                <About />
                <Features />
                <Tokenomics />
                <MeerkatWallet />
                <FAQ />
                <Footer />
              </>
            )}

            {/* <Roadmap /> */}

            {/* <MediaMarketing /> */}

            {/* <Presale /> */}
          </div>
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
