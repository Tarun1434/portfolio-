import { Download, ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly
            applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 dark:border-emerald-400 shadow-xl">
            <img src="/placeholder.svg?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="#projects" className="animate-bounce p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg">
          <ArrowDown size={24} className="text-emerald-600 dark:text-emerald-400" />
        </a>
      </div>
    </section>
  )
}

export default Hero
