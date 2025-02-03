import { useEffect, useState } from 'react'
import { CoinPresale } from '../../../assets'
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
      setCountdown(getTimeLeftUntil(new Date(Date.UTC(2025, 1, 25, 16, 0, 0))))
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="pt-14">
      <div className="flex w-[383px] flex-col items-center gap-4">
        <div className="flex justify-center items-start gap-2 self-stretch">
          <img src={CoinPresale} alt="coin-presale" className="-scale-x-100" />
          <span className="font-newTitle text-[#521210] text-center text-[56px] font-bold leading-[75px] uppercase">PRESALE IS COMING</span>
          <img src={CoinPresale} alt="coin-presale" />
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-center gap-2 self-stretch p-4 rounded-3xl bg-[#3E0E0C]">
            <div className="flex items-center gap-2 self-stretch">
              <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#FFFAF2]">
                <div className="flex flex-col items-center gap-2 self-stretch p-1">
                  <span className="font-neueMontreal text-[#521210] text-center text-[40px] font-bold leading-[30px]">{countdown.days}</span>
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm font-bold leading-[10px]">
                    {languageHandler('action-box-b', language)}
                  </span>
                </div>
              </div>
              <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#FFFAF2]">
                <div className="flex flex-col items-center gap-2 self-stretch p-1">
                  <span className="font-neueMontreal text-[#521210] text-center text-[40px] font-bold leading-[30px]">{countdown.hours}</span>
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm font-bold leading-[10px]">
                    {languageHandler('action-box-c', language)}
                  </span>
                </div>
              </div>
              <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#FFFAF2]">
                <div className="flex flex-col items-center gap-2 self-stretch p-1">
                  <span className="font-neueMontreal text-[#521210] text-center text-[40px] font-bold leading-[30px]">{countdown.minutes}</span>
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm font-bold leading-[10px]">
                    {languageHandler('action-box-d', language)}
                  </span>
                </div>
              </div>
              <div className="flex h-16 flex-col justify-center items-center gap-2 flex-[1_0_0] p-2 rounded-xl bg-[#FFFAF2]">
                <div className="flex flex-col items-center gap-2 self-stretch p-1">
                  <span className="font-neueMontreal text-[#521210] text-center text-[40px] font-bold leading-[30px]">{countdown.seconds}</span>
                  <span className="font-neueMontreal text-[#3E0E0C] text-center text-sm font-bold leading-[10px]">
                    {languageHandler('action-box-e', language)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreSaleCover
