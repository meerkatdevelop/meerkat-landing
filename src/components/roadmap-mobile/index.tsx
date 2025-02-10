import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'
import CardMobile from './card'
import {
  RoadmapMobile1,
  RoadMapMobile10,
  RoadmapMobile2,
  RoadmapMobile3,
  RoadmapMobile4,
  RoadmapMobile5,
  RoadmapMobile6,
  RoadmapMobile7,
  RoadmapMobile8,
  RoadmapMobile9,
} from '../../assets'

const roadmapImgs = [
  RoadmapMobile1,
  RoadmapMobile2,
  RoadmapMobile3,
  RoadmapMobile4,
  RoadmapMobile5,
  RoadmapMobile6,
  RoadmapMobile7,
  RoadmapMobile8,
  RoadmapMobile9,
  RoadMapMobile10,
]

const RoadmapMobile = () => {
  const { language } = useAppContext()
  return (
    <section id="roadmap" className="flex w-screen flex-col items-center px-4 py-8 gap-8 bg-[#310B0A]">
      <h4 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[85px] uppercase">
        {languageHandler('roadmap-a', language)}
      </h4>
      <div className="flex flex-col items-start gap-4">
        {roadmapImgs.map((_, i) => (
          <CardMobile key={i} i={i} banner={roadmapImgs[i]} />
        ))}
      </div>
    </section>
  )
}

export default RoadmapMobile
