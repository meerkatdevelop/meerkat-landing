import { createContext, useContext, useState } from 'react'

type DefaultValueProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  language: Languages
  setLanguage: React.Dispatch<React.SetStateAction<Languages>>
}

const defaultValueForContext = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  language: 'us' as Languages,
  setLanguage: () => {},
}

export enum Languages {
  US = 'us',
  ES = 'es',
  IT = 'it',
  CH = 'ch',
  IN = 'in',
  PO = 'po',
}

const AppContext = createContext<DefaultValueProps>(defaultValueForContext)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Languages>('us' as Languages)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
