import { createContext, useContext, useMemo, useState } from 'react'

const TranslatorContext = createContext()

export function TranslatorProvider(props) {
  const [isTranslator, setIsTranslator] = useState(true)

  const handleToggle = () => {setIsTranslator(!isTranslator)}

  const value = useMemo(() => {
    return ({
      isTranslator,
      handleToggle,
    })
  }, [isTranslator])

  return <TranslatorContext.Provider value={value} {...props} />
}

export function useTranslator() {
  const context = useContext(TranslatorContext)
  if (!context) {
    throw new Error('El context no esta encapsulado por su Provider')
  }  
  return context
}
  