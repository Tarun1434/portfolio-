import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "College Admission Website",
    description:
      "A responsive college website built using React, HTML, CSS, and Bootstrap. It features an admission form where submitted student details are automatically sent to a connected Google Sheet for real-time data collection and management.",
    technologies: ["React", "HTML", "CSS", "Bootstrap", "Google Sheets"],
    demoLink: "https://kiranmayieducationalnstitiution.vercel.app/", 
    githubLink: "https://github.com/Tarun1434/KIranmayieducationalnstitiutions",
    image: "https://res.cloudinary.com/dsnjnciud/image/upload/v1744362757/Screenshot_2025-04-11_144207_ugn38a.png?height=400&width=400",
  },
  {
    id: 2,
    title: "FLAMES Relationship Finder",
    description:
      "A fun and interactive web app that calculates relationship compatibility using the FLAMES game logic. Built with React, it captures two names and dynamically shows the relationship result.",
    technologies: ["React", "HTML", "CSS", "Bootstrap"],
    demoLink: "https://flames.ccbp.tech/", 
    githubLink: "https://github.com/yourusername/flames-relationship",
    image: "https://res.cloudinary.com/dsnjnciud/image/upload/v1744363400/Screenshot_2025-04-11_145249_b9x768.png?height=400&width=200",
  },
  {
    id: 3,
    title: "WhatsApp ChatBot",
    description:
      "A simple WhatsApp chatbot that sends automated replies to user queries. Integrates deliver real-time responses based on user input.",
    technologies: [ "JavaScript", "HTML", "CSS"],
    demoLink: "https://whatsappchatbot.ccbp.tech/", 
    githubLink: "https://github.com/yourusername/whatsapp-chatbot",
    image: "https://res.cloudinary.com/dsnjnciud/image/upload/v1744363551/Xenioo-WhatsApp-Chatbots_nzitpk.png?height=200&width=400",
  },
  {
    id: 4,
    title: "Tech Stack",
    description:
      "This project is a full-stack web application for managing and studying programming interview questions. It features user authentication, question saving/unsaving, and language-based question filtering, using a React frontend and an Express.js backend with MySQL for data storage.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://whatsappchatbot.ccbp.tech/", 
    githubLink: "https://tech-stack-question.vercel.app/",
    image: "https://res.cloudinary.com/dsnjnciud/image/upload/v1745301704/Screenshot_2025-04-22_113041_djnrw6.png?height=200&width=400",
 
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
