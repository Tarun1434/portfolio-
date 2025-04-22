import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  // Set initial state to false (light mode initially, but potentially overridden)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      // No saved theme, default to dark
      setIsDarkMode(true) // Set state to dark
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark") // Save default
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
