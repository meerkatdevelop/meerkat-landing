import InstagramIcon from '../../assets/icons/instagram'
import TelegramIcon from '../../assets/icons/telegram'
import XIcon from '../../assets/icons/x'

const SocialNetworks = () => {
  return (
    <div className="flex justify-end items-center gap-4 flex-[1_0_0]">
      <a className="cursor-meerkat" href="https://x.com/Meerkatwtf" target="blank_" rel="noreferrer">
        <XIcon color="#EEE7E7" />
      </a>
      <a className="cursor-meerkat" href="https://t.me/meerkatwtf" target="blank_" rel="noreferrer">
        <TelegramIcon color="#EEE7E7" />
      </a>
      {/* <a className="cursor-meerkat">
      <DiscordIcon color="#EEE7E7" />
    </a> */}
      <a className="cursor-meerkat" href="https://www.instagram.com/meerkatwtf/#/" target="blank_" rel="noreferrer">
        <InstagramIcon color="#EEE7E7" />
      </a>
    </div>
  )
}

export default SocialNetworks
