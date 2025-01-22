import { useEffect, useRef, useState } from 'react'
import Card from './card'

const Roadmap = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  // const [isScrollingHorizontally, setIsScrollingHorizontally] = useState(false)
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     if (entry.isIntersecting) {
    //       // console.log(entry)
    //       // console.log('here')
    //       setIsScrollingHorizontally(true)
    //       // document.body.style.overflowY = 'hidden'
    //     } else {
    //       setIsScrollingHorizontally(false)
    //       // document.body.style.overflowY = 'auto'
    //     }
    //   },
    //   { threshold: 0.73 }
    // )
    // observer.observe(section)
    // return () => observer.disconnect()

    const { top, bottom } = section.getBoundingClientRect()
    console.log('top:', top, 'bottom:', bottom, 'media:', bottom + top / 2)
  }, [])

  useEffect(() => {
    const container = sectionRef.current
    // console.log(container)
    if (!container) return

    let scrollAmount = 0
    // const scrollStep = 10;
    const maxScroll = container.scrollWidth - container.clientWidth
    // console.log(maxScroll)

    const handleScroll = (event: WheelEvent) => {
      const { top, bottom } = container.getBoundingClientRect()
      // console.log('top:', top, 'bottom:', bottom, 'media:', bottom + top / 2)
      // console.log(event.clientY)

      const isActive = event.clientY >= top && event.clientY <= bottom
      console.log(isActive)
      if (isActive) {
        event.preventDefault() // Stop vertical scrolling
        scrollAmount = Math.min(Math.max(scrollAmount + event.deltaY, 0), maxScroll) // Boundaries for horizontal scrolling
        setAmount(scrollAmount)
      }
      // console.log(event.deltaY)
      // event.preventDefault() // Stop vertical scrolling
      // scrollAmount = Math.min(Math.max(scrollAmount + event.deltaY, 0), maxScroll) // Boundaries for horizontal scrolling
      // setAmount(scrollAmount)
      // container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
      // container.style.transform = `translateX(-${scrollAmount}px)`
      // console.log(scrollAmount)
      // Check if horizontal scrolling is done
      // if (scrollAmount >= maxScroll) {
      //   setIsScrollingHorizontally(false)
      //   document.body.style.overflowY = 'auto' // Re-enable vertical scrolling
      // }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => window.removeEventListener('wheel', handleScroll)
  }, [])

  console.log(amount)

  return (
    <section className="cursor-meerkat flex flex-col h-screen items-start gap-2.5 self-stretch px-20 py-28 bg-[#250807] overflow-x-hidden">
      <div className="flex flex-col items-start gap-16 self-stretch">
        <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[104px] tracking-[1.04px] uppercase">Roadmap</h2>
      </div>
      <div className="flex items-start gap-28 w-screen  px-12" ref={sectionRef}>
        <div
          className="flex items-start gap-28 w-fit"
          style={{
            willChange: 'transform',
            opacity: 1,
            transform: `translateX(-${amount}px)`,
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* <div
        className="content-start items-start flex flex-none flex-col flex-nowrap gap-[70px] h-screen justify-center max-w-[1440px] overflow-hidden sticky w-full will-change-transform z-[1] p-0 top-0"
        ref={sectionRef}
      >
        <div
          className="content-center items-center flex flex-none flex-row flex-nowrap gap-[180px] h-min justify-start overflow-visible relative w-min pl-[200px] pr-0 py-0"
          style={{
            willChange: 'transform',
            opacity: 1,
            transform: `translateX(-${amount}px)`,
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}
    </section>
  )
}

export default Roadmap
