import { Award, ExternalLink } from "lucide-react"


const certificatesData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2022",
    link: "https://example.com/certificate/1",
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "March 2022",
    link: "https://example.com/certificate/2",
  },
  {
    id: 3,
    name: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "November 2021",
    link: "https://example.com/certificate/3",
  },
  {
    id: 4,
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "August 2021",
    link: "https://example.com/certificate/4",
  },
  {
    id: 5,
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "May 2021",
    link: "https://example.com/certificate/5",
  },
  {
    id: 6,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "February 2021",
    link: "https://example.com/certificate/6",
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
