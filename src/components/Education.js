import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization Techniques.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2014 - 2018",
    description:
      "Graduated with honors. Focused on software engineering and data structures. Participated in multiple hackathons and coding competitions.",
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Tech Preparatory Academy",
    location: "San Francisco, CA",
    period: "2010 - 2014",
    description: "Advanced placement in mathematics and computer science. President of the Coding Club.",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-emerald-500 dark:border-emerald-400 pl-8 ml-4">
            {educationData.map((item, index) => (
              <div key={item.id} className={`mb-12 ${index === educationData.length - 1 ? "" : ""}`}>
                <div className="absolute -left-4 mt-1 w-7 h-7 bg-emerald-500 dark:bg-emerald-400 rounded-full flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{item.degree}</h3>
                  <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                    {item.institution}
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                    <span className="mx-2">•</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
