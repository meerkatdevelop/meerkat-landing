import { motion } from 'motion/react'
import { springInLaguageSelector } from '../../constants'
import { languageHandler } from '../../helpers'
import { CountryCH, CountryEN, CountryIN, CountryIT, CountryPT, CountrySP, MagnifyingGlassIcon } from '../../assets'
import { Languages } from '../../context'

const LanguagesList = [Languages.US, Languages.ES, Languages.CH, Languages.IT, Languages.IN, Languages.PO]
const LanguagesIcons = [CountryEN, CountrySP, CountryCH, CountryIT, CountryIN, CountryPT]

interface LanguageSelectorProps {
  language: Languages
  search: string
  setSearch: (search: string) => void
  handleLanguage: (id: Languages) => void
}

const LanguageSelector = ({ language, handleLanguage, search, setSearch }: LanguageSelectorProps) => {
  const handleSearch = () => {
    const languages: { lingo: string; icon: string; selector: Languages }[] = []
    for (let i = 0; i <= 5; i++) {
      languages.push({ lingo: languageHandler('language-menu-' + (i + 1), language) as string, icon: LanguagesIcons[i], selector: LanguagesList[i] })
    }

    const result = languages.filter((language) => language.lingo.slice(0, search.length).toLowerCase() === search.toLowerCase())

    return result
  }

  return (
    <motion.div
      variants={springInLaguageSelector}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-14 -right-10 flex w-[240px] h-[460px] flex-col justify-start items-start gap-4 p-6 shadow-[1px_2px_13px_0px_rgba(0,0,0,0.30)] rounded-3xl bg-[#250807] overflow-hidden"
      onWheel={(e) => {
        e.stopPropagation()
      }}
    >
      <div className="flex justify-center items-center gap-2.5 self-stretch px-3 py-0">
        <span className="flex-[1_0_0] font-neueMontreal text-[#FFFDFB] text-[15px] font-bold leading-[18px]">
          {languageHandler('language-menu-a', language)}
        </span>
      </div>
      <div className="flex items-center min-h-[36px] gap-2.5 self-stretch px-3 py-0 border border-[#521210] rounded-lg bg-[#310B0A]">
        <MagnifyingGlassIcon color="#EEE7E7" />
        <input
          type="text"
          placeholder={`${languageHandler('language-menu-b', language)}`}
          className="font-neueMontreal text-[#FFFDFB] text-[15px] font-normal leading-[18px] bg-transparent outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Languages List */}
      <div className="flex flex-col items-start gap-2 self-stretch overflow-x-auto custom-scrollbar">
        {handleSearch().map((idiom, i) => (
          <div
            key={i}
            className="flex w-full justify-start gap-4 p-2 hover:bg-[#400D0B] transition-all ease-in-out"
            onClick={() => handleLanguage(idiom.selector)}
          >
            <img src={idiom.icon} alt="flag" className="w-6 h-6" />
            <span className="font-neueMontreal text-[#FFF] text-sm font-medium leading-6">{idiom.lingo}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default LanguageSelector
