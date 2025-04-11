import { Server, Database, Palette, PenToolIcon as Tool,  } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    name: "Frontend Development",
    icon: <Palette size={24} />,
    skills: [
      "HTML5",
      "CSS3/SCSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS"
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    icon: <Server size={24} />,
    skills: ["Node.js", "Express.js", "Python"],
  },
  {
    id: 3,
    name: "Database",
    icon: <Database size={24} />,
    skills: ["MySQL", "SQLite"],
  },
  {
    id: 4,
    name: "Tools & Technologies",
    icon: <Tool size={24} />,
    skills: ["Git/GitHub", "VS Code" , "Deployment"],
  },
 
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and expertise.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
