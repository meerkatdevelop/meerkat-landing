import { PlayIcon } from '../../assets'
import { useAppContext } from '../../context'
import { languageHandler } from '../../helpers'

const MediaMarketing = () => {
  const { language } = useAppContext()
  return (
    <section className="cursor-meerkat flex flex-col w-screen items-center bg-[#250807] ">
      <div className="flex flex-col w-full od:w-[1440px] justify-center items-center px-12 py-28">
        <div className="flex flex-col items-center gap-16 self-stretch">
          <h2 className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[104px] font-bold leading-[104px] tracking-[1.04px] uppercase">
            {languageHandler('media-marketing-a', language)}
          </h2>
          <div className="flex items-start gap-6 self-stretch">
            <div className="flex h-[344px] flex-col items-start gap-4 flex-[1_0_0] pt-4 pb-6 px-4 border border-[#521210] rounded-3xl bg-[#521210]">
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch p-2 rounded-2xl bg-[#3e0e0c]">
                <PlayIcon className="opacity-[0.37]" />
              </div>
              <div className="flex w-96 flex-col items-start gap-2 px-2 py-0">
                <h5 className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-medium leading-6 tracking-[0.24px]">
                  {languageHandler('media-marketing-b', language)}
                </h5>
                <div className="flex items-start gap-2 self-stretch">
                  <span className="font-neueMontreal text-[#FFEFD4] text-sm leading-[normal]">{languageHandler('media-marketing-c', language)} </span>
                </div>
              </div>
            </div>
            <div className="flex h-[344px] flex-col items-start gap-4 flex-[1_0_0] pt-4 pb-6 px-4 border border-[#521210] rounded-3xl bg-[#521210]">
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch p-2 rounded-2xl bg-[#3e0e0c]">
                <PlayIcon className="opacity-[0.37]" />
              </div>
              <div className="flex w-96 flex-col items-start gap-2 px-2 py-0">
                <h5 className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-medium leading-6 tracking-[0.24px]">
                  {languageHandler('media-marketing-b', language)}
                </h5>
                <div className="flex items-start gap-2 self-stretch">
                  <span className="font-neueMontreal text-[#FFEFD4] text-sm leading-[normal]">{languageHandler('media-marketing-c', language)} </span>
                </div>
              </div>
            </div>
            <div className="flex h-[344px] flex-col items-start gap-4 flex-[1_0_0] pt-4 pb-6 px-4 border border-[#521210] rounded-3xl bg-[#521210]">
              <div className="flex justify-center items-center flex-[1_0_0] self-stretch p-2 rounded-2xl bg-[#3e0e0c]">
                <PlayIcon className="opacity-[0.37]" />
              </div>
              <div className="flex w-96 flex-col items-start gap-2 px-2 py-0">
                <h5 className="self-stretch font-neueMontreal text-[#FFEFD4] text-2xl font-medium leading-6 tracking-[0.24px]">
                  {languageHandler('media-marketing-b', language)}
                </h5>
                <div className="flex items-start gap-2 self-stretch">
                  <span className="font-neueMontreal text-[#FFEFD4] text-sm leading-[normal]">{languageHandler('media-marketing-c', language)} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaMarketing
