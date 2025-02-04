import { CountryCH, CountryEN, CountryIN, CountryIT, CountryPT, CountrySP } from './assets'
import { Languages } from './context'
import es from './languages/es.json'
import us from './languages/us.json'
import it from './languages/it.json'
import ch from './languages/ch.json'
import ind from './languages/ind.json'
import pt from './languages/pt.json'

export const languageHandler = (id: string, language: Languages): string | string[] => {
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

  if (id in array === false) return id

  if (array[id as keyof typeof array].includes('$MERK')) {
    let newArray = array[id as keyof typeof array].split('$MERK')
    if (newArray.length > 2 && newArray.length <= 3) {
      newArray = [newArray[0], '$MERK', newArray[1], '$MERK', newArray[2]]
    } else {
      newArray = [newArray[0], '$MERK', newArray[1]]
    }

    array = newArray
  } else {
    array = array[id as keyof typeof array]
  }

  return array
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

//
