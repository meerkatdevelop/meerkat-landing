import { useRef } from 'react'
import { useAppContext } from '../../context'
import { motion, useTransform, useScroll } from 'motion/react'
import Card from './card'
import { languageHandler } from '../../helpers'
import { Roadmap1, Roadmap10, Roadmap2, Roadmap3, Roadmap4, Roadmap5, Roadmap6, Roadmap7, Roadmap8, Roadmap9 } from '../../assets'

const roadmapImgs = [Roadmap1, Roadmap2, Roadmap3, Roadmap4, Roadmap5, Roadmap6, Roadmap7, Roadmap8, Roadmap9, Roadmap10]

const Roadmap = () => {
  const { language } = useAppContext()
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-74%'])
  return (
    <section id="roadmap" className="cursor-meerkat flex flex-col w-screen items-center gap-2.5 self-stretch py-28 bg-[#250807] -mb-20">
      <div ref={targetRef} className="relative w-full od:w-[1440px] h-[300vh] ">
        <div className="sticky top-0 flex w-full h-screen items-center overflow-x-hidden">
          <div className="absolute top-1/2 left-1/2 flex flex-col items-start gap-16 self-stretch -translate-x-2/4 -translate-y-2/4">
            <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-[186px] font-bold leading-[104px] tracking-[1.04px] uppercase">
              {languageHandler('roadmap-a', language)}
            </h2>
          </div>
          <motion.div style={{ x }} className="flex w-fit gap-[120px]">
            {roadmapImgs.map((_, i) => (
              <Card key={i} i={i} banner={roadmapImgs[i]} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
