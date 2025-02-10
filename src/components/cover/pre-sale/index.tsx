import { useEffect, useState } from 'react'
import { Coin3 } from '../../../assets'
import { languageHandler } from '../../../helpers'
import { useAppContext } from '../../../context'

const PreSaleCover = () => {
  const { language } = useAppContext()
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })

  useEffect(() => {
    const getTimeLeftUntil = (targetDate: Date): { days: string; hours: string; minutes: string; seconds: string } => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      if (diff <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' }
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      return {
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
      }
    }
    const interval = setInterval(() => {
      setCountdown(getTimeLeftUntil(new Date(Date.UTC(2025, 1, 25, 17, 0, 0))))
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex w-full px-3 flex-col justify-center items-center gap-[13.81px]">
      <div className="flex w-[358px] flex-col items-center gap-[13.81px]  pt-[17.263px] pb-[13.81px] px-[13.81px] border-t-[#EEE7E7] border-r-[#EEE7E7] border-l-[#EEE7E7] rounded-3xl border-t-[0.863px] border-x-[0.863px] bg-presalecover">
        <div className="flex flex-col items-center gap-2 self-stretch">
          <div className="flex  justify-center items-center gap-1 self-stretch">
            <img src={Coin3} alt="meerkat-coin" className="w-10 h-10 object-contain" />
            <h3 className="flex-[1_0_0] font-newTitle text-[#521210] text-center text-[40px] font-bold leading-10 uppercase">
              {languageHandler('presale-box-a', language)}
            </h3>
            <img src={Coin3} alt="meerkat-coin" className="w-10 h-10 object-contain" />
          </div>
          <span className="self-stretch text-center text-[#521210] font-neueMontreal leading-[18px]">
            <span className="font-bold">{languageHandler('presale-box-b', language)}</span>
            {languageHandler('presale-box-c', language)}
            <span className="font-bold">{languageHandler('presale-box-d', language)}</span> 🚀 {languageHandler('presale-box-e', language)}
          </span>
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex items-center gap-2 self-stretch">
            <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#521210]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1">
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-[32px] font-bold leading-[30px]">{countdown.days}</span>
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-sm font-bold leading-[10px]">
                  {languageHandler('action-box-b', language)}
                </span>
              </div>
            </div>
            <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#521210]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1">
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-[32px] font-bold leading-[30px]">{countdown.hours}</span>
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-sm font-bold leading-[10px]">
                  {languageHandler('action-box-c', language)}
                </span>
              </div>
            </div>
            <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#521210]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1">
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-[32px] font-bold leading-[30px]">{countdown.minutes}</span>
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-sm font-bold leading-[10px]">
                  {languageHandler('action-box-d', language)}
                </span>
              </div>
            </div>
            <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#521210]">
              <div className="flex flex-col items-center gap-2 self-stretch p-1">
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-[32px] font-bold leading-[30px]">{countdown.seconds}</span>
                <span className="font-neueMontreal text-[#FFEFD4] text-center text-sm font-bold leading-[10px]">
                  {languageHandler('action-box-e', language)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 self-stretch px-0  border-b-[#EEE7E7]  rounded-[0px_0px_24px_24px] border-b  bg-transparent">
          <div className="flex items-center gap-[31px] self-stretch pb-4 border-b-[#C9B6B5] border-b-[0.5px]">
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5  border border-[#521210] rounded-[100px]  bg-[#FFFAEA]">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px] uppercase">
                  {languageHandler('presale-box-f', language)} 1
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="font-neueMontreal text-[#521210] text-xl font-medium leading-5">25 Feb 17:00 UTC</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end gap-2 flex-[1_0_0]">
              <div className="flex h-7 justify-center items-center gap-1.5 rounded-lg">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px]">
                  {languageHandler('presale-box-g', language)}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="text-left font-neueMontreal text-[#521210] text-xl font-bold leading-5">$0.0005</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[31px] self-stretch pb-4 border-b-[#C9B6B5] border-b-[0.5px] opacity-15 opacity-15 hover:opacity-100 transition-all delay-100 ease-in-out">
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5  border border-[#521210] rounded-[100px]  bg-[#FFFAEA]">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px]">
                  {languageHandler('presale-box-f', language)} 2
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="font-neueMontreal text-[#521210] text-xl font-medium leading-5">10 Mar 17:00 UTC</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end gap-2 flex-[1_0_0]">
              <div className="flex h-7 justify-center items-center gap-1.5 rounded-lg">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px]">
                  {languageHandler('presale-box-g', language)}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="text-left font-neueMontreal text-[#521210] text-xl font-bold leading-5">$0.0015</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[31px] self-stretch pb-4 border-b-[#C9B6B5] border-b-[0.5px] opacity-15 hover:opacity-100 transition-all delay-100 ease-in-out">
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex h-7 justify-center items-center gap-1.5 px-3 py-1.5  border border-[#521210] rounded-[100px]  bg-[#FFFAEA]">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px]">
                  {languageHandler('presale-box-f', language)} 3
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="font-neueMontreal text-[#521210] text-xl font-medium leading-5">25 Mar 17:00 UTC</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end gap-2 flex-[1_0_0]">
              <div className="flex h-7 justify-center items-center gap-1.5 rounded-lg">
                <span className="font-neueMontreal text-[#521210] text-xs font-bold leading-[normal] tracking-[0.12px]">
                  {languageHandler('presale-box-g', language)}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <span className="text-left font-neueMontreal text-[#521210] text-xl font-bold leading-5">$0.003</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreSaleCover
