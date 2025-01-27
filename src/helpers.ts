import { Languages } from './context'
import es from './languages/es.json'
import us from './languages/us.json'

export const languageHandler = (id: string, language: Languages) => {
  let array
  switch (true) {
    case language === Languages.ES:
      array = es
      break
    case language === Languages.IT:
      array = es
      break
    case language === Languages.CH:
      array = es
      break
    case language === Languages.IN:
      array = es
      break
    case language === Languages.PO:
      array = es
      break
    default:
      array = us
      break
  }

  return array[id as keyof typeof array]
}
