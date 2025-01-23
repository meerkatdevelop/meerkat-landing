import { CaretDownIcon, CountryEN1, ListIcon, Logo, LogoLight } from '../assets'
import CaretCloseIcon from '../assets/icons/caret-close'
import { useAppContext } from '../context'
import Menu from './menu'

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext()
  const isConnected = false
  return (
    <nav className={`sticky top-0 flex-col w-[1280px]  ${isMenuOpen ? 'z-20' : 'z-10'}`}>
      <div className="relative w-screen">
        <Menu />
      </div>
      <div className="flex items-center gap-6 pt-10 px-20">
        <div className="flex items-center gap-10 flex-[1_0_0]">
          {isMenuOpen ? (
            <button className="w-10 h-10 transition-all ease-in-out cursor-meerkat" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CaretCloseIcon color={'#FFCC29'} />
            </button>
          ) : (
            <button
              className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ListIcon color={'#521210'} />
            </button>
          )}
          <div className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
            <img src={isMenuOpen ? LogoLight : Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-12 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat">
            <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6 uppercase">{isConnected ? 'BUY $MERK' : 'connect wallet'}</span>
          </button>
          <button className="flex justify-center items-center gap-2 p-2 rounded-lg cursor-meerkat">
            <img src={CountryEN1} alt="flag" className="w-6 h-6" />
            <CaretDownIcon width="24" height="24" color={isMenuOpen ? '#FFCC29' : '#521210'} className="w-6 h-6 object-contain" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
