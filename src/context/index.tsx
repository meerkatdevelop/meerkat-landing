import { createContext, useContext, useState } from 'react'

type DefaultValueProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValueForContext = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
}

const AppContext = createContext<DefaultValueProps>(defaultValueForContext)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
