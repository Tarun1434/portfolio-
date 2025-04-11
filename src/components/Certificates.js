import { Award, ExternalLink } from "lucide-react"


const certificatesData = [
  {
    id: 1,
    name: "Build Your Own Responsive Website",
    issuer: "NxtWave Disruptive Tecnologies",
    skills : "HTML-CSS-Bootstrap" ,
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=ZIDVRIYGDB",
  },
  {
    id: 2,
    name: "Responsive Web Design using Flexbox",
    issuer: "NxtWave Disruptive Tecnologies",
    skills : "HTML-CSS-Flexboxes" ,
    link: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=YJCKXWKKJS",
  },
  {
    id: 3,
    name: "Build Your Own Dynamic Web Application",
    issuer: "NxtWave Disruptive Tecnologies",
    skills : "JavaScript" ,
    link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=NHADZCSOKD",
  },
  {
    id: 4,
    name: "Introduction to Databases (MySQL)",
    issuer: "NxtWave Disruptive Tecnologies",
    skills : "SQLite-Database" ,
    link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=NFMEGZRGMT",
  },
  {
    id: 5,
    name: "Developer Foundations",
    issuer: "NxtWave Disruptive Tecnologies",
    skills : "GIT-Command Line" ,
    link: "https://certificates.ccbp.in/academy/developer-foundations?id=DYFNCXXBYL",
  },
 
]

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Certificates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="flex items-start mb-4">
                <Award size={24} className="text-emerald-500 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{certificate.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{certificate.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{certificate.date}</p>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  <span className="mr-1">View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
