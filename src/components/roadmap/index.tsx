import { motion, useTransform, useScroll } from 'motion/react'

import { useRef } from 'react'
import Card from './card'

const Roadmap = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-110%'])
  return (
    <section className="cursor-meerkat flex flex-col w-screen items-center gap-2.5 self-stretch py-28 bg-[#250807] ">
      <div ref={targetRef} className="relative w-[1400px] h-[300vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-x-hidden">
          <div className="absolute top-1/2 left-1/2 flex flex-col items-start gap-16 self-stretch -translate-x-2/4 -translate-y-2/4">
            <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-[186px] font-bold leading-[104px] tracking-[1.04px] uppercase">Roadmap</h2>
          </div>
          <motion.div style={{ x }} className="flex w-fit gap-[180px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
