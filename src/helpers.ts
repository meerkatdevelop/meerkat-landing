import { CountryCH, CountryEN, CountryIN, CountryIT, CountryPT, CountrySP } from './assets'
import { Languages } from './context'
import es from './languages/es.json'
import us from './languages/us.json'
import it from './languages/it.json'
import ch from './languages/ch.json'
import ind from './languages/ind.json'
import pt from './languages/pt.json'

export const languageHandler = (id: string, language: Languages) => {
  let array
  switch (true) {
    case language === Languages.ES:
      array = es
      break
    case language === Languages.IT:
      array = it
      break
    case language === Languages.CH:
      array = ch
      break
    case language === Languages.IN:
      array = ind
      break
    case language === Languages.PO:
      array = pt
      break
    default:
      array = us
      break
  }

  return array[id as keyof typeof array]
}

export const flagSelector = (language: Languages) => {
  switch (true) {
    case language === Languages.ES:
      return CountrySP
    case language === Languages.IT:
      return CountryIT
    case language === Languages.CH:
      return CountryCH
    case language === Languages.IN:
      return CountryIN
    case language === Languages.PO:
      return CountryPT
    default:
      return CountryEN
  }
}

export const getFooterTop = (language: Languages) => {
  switch (true) {
    case language === Languages.ES:
      return 474.75
    case language === Languages.IT:
      return 384.75
    case language === Languages.CH:
      return 394.75
    case language === Languages.IN:
      return 394.75
    case language === Languages.PO:
      return 374.75
    default:
      return 374.75
  }
}
