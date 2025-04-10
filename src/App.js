import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThemeProvider from "./components/ThemeProvider"
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <div className="animate-bounce conss">
        <h1>My Tailwind styled component!</h1>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
