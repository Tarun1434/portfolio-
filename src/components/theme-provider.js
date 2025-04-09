import {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext()

export function ThemeProvider({children, defaultTheme = 'dark', enableSystem}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    if (enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
    }
  }, [enableSystem])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
