import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              DevPortfolio
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 md:mb-0 md:mr-4">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
