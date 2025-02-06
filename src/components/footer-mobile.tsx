import { useAppContext } from '../context'
import { languageHandler } from '../helpers'
import { Coin3, DividerFooterMobile, InstagramIcon, LogoLight, TelegramIcon, TiktokIcon, XIcon } from '../assets'
import Marquee from './about/marquee-imgs'
const FooterMobile = () => {
  const { language } = useAppContext()
  return (
    <footer className="cursor-meerkat relative h-[430px] w-screen justify-center bg-no-repeat shrink-0 bg-cover bg-[url('./assets/images/footer-mobile.svg')] overflow-hidden">
      <div className="flex w-full">
        {/* TOP ILUSTRATION */}
        <div className="absolute top-0 left-0 flex w-full justify-center items-center gap-16 self-stretch px-6 py-6 border-t-[#3E0E0C] border-b-[#3E0E0C] border-y-[6px] bg-[#250807]">
          <Marquee speed={16}>
            <div className="flex w-fit gap-x-28 ml-28">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="self-stretch font-newTitle text-[#FFEFD4] text-center text-[32px] font-bold leading-8 tracking-[0.32px] uppercase">
                    {languageHandler('footer-a', language)}
                  </span>
                  <img src={Coin3} alt="coin" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <img src={DividerFooterMobile} alt="decoration" className="absolute top-20 left-0 w-full object-contain" />
        <div className="absolute bottom-10 left-10 flex flex-col items-start gap-4 self-stretch">
          <img src={LogoLight} alt="logo" className="w-[98px] h-[29px] object-cover" />
          <div className="flex flex-col items-start gap-7">
            <div className="flex justify-end items-end gap-6">
              <a className="cursor-meerkat" href="https://x.com/Meerkatwtf" target="blank_" rel="noreferrer">
                <XIcon color="#EEE7E7" className="w-[24px] h-[24px] object-contain" />
              </a>
              <a className="cursor-meerkat" href="https://t.me/meerkatwtf" target="blank_" rel="noreferrer">
                <TelegramIcon color="#EEE7E7" className="w-[24px] h-[24px] object-contain" />
              </a>

              <a className="cursor-meerkat" href="https://www.instagram.com/meerkatwtf/#/" target="blank_" rel="noreferrer">
                <InstagramIcon color="#EEE7E7" className="w-[24px] h-[24px] object-contain" />
              </a>
              <a className="cursor-meerkat" href="https://www.tiktok.com/@meerkatwtf" target="blank_" rel="noreferrer">
                <TiktokIcon color="#EEE7E7" className="w-[24px] h-[24px] object-contain" />
              </a>
            </div>
            <span className="self-stretch font-neueMontreal text-white text-2xl font-medium leading-8 tracking-[0.24px]">
              © {new Date().getFullYear()} Meerkat
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMobile
