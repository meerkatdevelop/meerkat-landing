import { CaretDownIcon, CountryEN1, ListIcon, Logo } from '../assets'

const Navbar = () => {
  return (
    <nav className="flex w-[1280px] items-center gap-6 pt-10 px-20">
      <div className="flex items-center gap-10 flex-[1_0_0]">
        <button className="flex justify-center items-center p-2 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out">
          <ListIcon color={'#521210'} />
        </button>
        <button className="flex flex-col items-start gap-2.5 flex-[1_0_0]">
          <img src={Logo} alt="logo" className="w-[136.163px] h-10 object-cover" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex h-12 justify-center items-center px-4 py-0 rounded-lg bg-[#FFCC29] hover:bg-[#FFEFBD] transition-all ease-in-out">
          <span className="font-neueMontreal text-[#521210] text-sm font-bold leading-6">BUY $MERK</span>
        </button>
        <button className="flex justify-center items-center gap-2 p-2 rounded-lg">
          <img src={CountryEN1} alt="flag" className="w-6 h-6" />
          <CaretDownIcon color={'#521210'} className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
