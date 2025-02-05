import { useAppContext } from '../../context'
import { ListIcon, LogoLight } from '../../assets'
import CaretCloseIcon from '../../assets/icons/caret-close'

const NavbarMobile = ({ moveTo }: { moveTo: (to: number) => void }) => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext()

  return (
    <nav className="sticky top-0 flex w-full justify-between items-center p-7 bg-[#250807] z-10">
      <button
        className="flex flex-col items-start gap-2.5 shrink-0 cursor-meerkat"
        onClick={() => {
          moveTo(0)
          setIsMenuOpen(false)
        }}
      >
        <img src={LogoLight} alt="logo" className="w-[136.163px] h-10 object-cover" />
      </button>
      {isMenuOpen ? (
        <button className="w-10 h-[34px] transition-all ease-in-out cursor-meerkat" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CaretCloseIcon color="#FFCC29" />
        </button>
      ) : (
        <button
          className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out cursor-meerkat"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ListIcon color={'#521210'} />
        </button>
      )}
    </nav>
  )
}

export default NavbarMobile
