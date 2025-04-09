import {HashRouter as Router, Link} from 'react-router-dom'
import {Button} from './components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import {Badge} from './components/ui/badge'
import {
  Github,
  Linkedin,
  Download,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'
import './App.css' // Import app-specific styles

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* Navigation */}
        <header className='header'>
          <div className='container header-content'>
            <div className='nav-left hidden-md'>
              <Link to='/' className='logo'>
                <span className='logo-text'>CS.Student</span>
              </Link>
              <nav className='nav-menu'>
                <Link to='#about' className='nav-link'>
                  About
                </Link>
                <Link to='#skills' className='nav-link'>
                  Skills
                </Link>
                <Link to='#projects' className='nav-link'>
                  Projects
                </Link>
                <Link to='#education' className='nav-link'>
                  Education
                </Link>
                <Link to='#certifications' className='nav-link'>
                  Certifications
                </Link>
                <Link to='#contact' className='nav-link'>
                  Contact
                </Link>
              </nav>
            </div>
            <div className='nav-right'>
              <Button variant='outline' className='cv-button hidden-md'>
                <Download className='icon-small' />
                Download My CV
              </Button>
              <nav className='mobile-nav'>
                <Link to='/' className='logo'>
                  <span className='logo-text'>CS.Student</span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className='main'>
          {/* About Section */}
          <section id='about' className='section section-about'>
            <div className='container text-center'>
              <h1 className='heading-primary'>
                Hi, I'm <span className='highlight'>John Doe</span>
              </h1>
              <p className='subheading'>
                Computer Science Student & Aspiring Software Developer
              </p>
              <p className='description'>
                I'm passionate about building innovative solutions and exploring
                new technologies...
              </p>
              <div className='button-group'>
                <Button className='button-primary'>
                  <Download className='icon-small' />
                  Download My CV
                </Button>
                <Button variant='outline' className='button-outline'>
                  <Send className='icon-small' />
                  Contact Me
                </Button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id='skills' className='section section-skills'>
            <div className='container'>
              <h2 className='heading-secondary'>Skills</h2>
              <div className='skills-grid'>
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Python',
                  'Java',
                  'C++',
                  'HTML/CSS',
                  'Tailwind CSS',
                  'Git',
                  'SQL',
                  'MongoDB',
                  'Docker',
                  'AWS',
                  'Machine Learning',
                ].map(skill => (
                  <div key={skill} className='skill-item'>
                    <p className='skill-text'>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id='projects' className='section section-projects'>
            <div className='container'>
              <h2 className='heading-secondary'>Projects</h2>
              <div className='projects-grid'>
                {[
                  {
                    title: 'E-Commerce Platform',
                    description:
                      'A full-stack e-commerce platform built with React, Node.js, and MongoDB...',
                    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
                  },
                  {
                    title: 'Machine Learning Classifier',
                    description:
                      'An image classification system using convolutional neural networks...',
                    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision'],
                  },
                  {
                    title: 'Task Management App',
                    description:
                      'A productivity application that helps users organize tasks...',
                    tags: [
                      'React Native',
                      'Firebase',
                      'Redux',
                      'Mobile Development',
                    ],
                  },
                  {
                    title: 'Portfolio Website',
                    description:
                      'A responsive portfolio website built with Next.js and Tailwind CSS...',
                    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
                  },
                  {
                    title: 'Blockchain Explorer',
                    description:
                      'A web application that allows users to explore blockchain transactions...',
                    tags: ['JavaScript', 'Web3.js', 'API Integration'],
                  },
                  {
                    title: 'Inventory Management System',
                    description:
                      'A system for tracking inventory, managing stock levels...',
                    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
                  },
                ].map((project, index) => (
                  <Card key={index} className='card'>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='card-description'>{project.description}</p>
                      <div className='tag-group'>
                        {project.tags.map(tag => (
                          <Badge
                            key={tag}
                            variant='secondary'
                            className='badge'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className='card-footer'>
                      <div className='social-buttons'>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='icon-button'
                        >
                          <Github className='icon-small' />
                          <span className='sr-only'>GitHub</span>
                        </Button>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='icon-button'
                        >
                          <Linkedin className='icon-small' />
                          <span className='sr-only'>LinkedIn</span>
                        </Button>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='icon-button'
                        >
                          <MessageSquare className='icon-small' />
                          <span className='sr-only'>WhatsApp</span>
                        </Button>
                      </div>
                      <Button
                        variant='outline'
                        size='sm'
                        className='view-button'
                      >
                        View Project
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id='education' className='section section-education'>
            <div className='container'>
              <h2 className='heading-secondary'>Education</h2>
              <div className='education-content'>
                <Card className='card'>
                  <CardHeader>
                    <div className='card-header-content'>
                      <CardTitle>
                        Bachelor of Science in Computer Science
                      </CardTitle>
                      <Badge className='badge badge-emerald'>
                        2020 - Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='institution'>University of Technology</p>
                    <p className='card-description'>
                      Focusing on software engineering, artificial
                      intelligence...
                    </p>
                    <div className='coursework'>
                      <p className='coursework-title'>Relevant Coursework:</p>
                      <ul className='coursework-list'>
                        <li>Data Structures and Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Database Systems</li>
                        <li>Web Development</li>
                        <li>Artificial Intelligence</li>
                        <li>Computer Networks</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className='card'>
                  <CardHeader>
                    <div className='card-header-content'>
                      <CardTitle>High School Diploma</CardTitle>
                      <Badge className='badge'>2016 - 2020</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='institution'>Science Academy High School</p>
                    <p className='card-description'>
                      Graduated with honors. Participated in science and
                      mathematics...
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section
            id='certifications'
            className='section section-certifications'
          >
            <div className='container'>
              <h2 className='heading-secondary'>Certifications</h2>
              <div className='certifications-content'>
                <Card className='card'>
                  <CardContent className='certifications-list'>
                    <ul className='certifications-items'>
                      {[
                        {
                          name: 'AWS Certified Developer - Associate',
                          issuer: 'Amazon Web Services',
                          date: 'June 2023',
                          link: '#',
                        },
                        // ... (rest of certifications)
                      ].map((cert, index) => (
                        <li key={index} className='certification-item'>
                          <div className='certification-content'>
                            <div>
                              <a
                                href={cert.link}
                                className='certification-link'
                              >
                                {cert.name}
                                <ExternalLink className='icon-tiny' />
                              </a>
                              <p className='certification-issuer'>
                                {cert.issuer}
                              </p>
                            </div>
                            <Badge variant='outline' className='badge'>
                              {cert.date}
                            </Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id='contact' className='section section-contact'>
            <div className='container'>
              <h2 className='heading-secondary'>Contact Me</h2>
              <div className='contact-form-container'>
                <Card className='card'>
                  <CardContent className='form-content'>
                    <form className='contact-form'>
                      <div className='form-group'>
                        <label htmlFor='name' className='form-label'>
                          Name
                        </label>
                        <input
                          id='name'
                          className='form-input'
                          placeholder='Your name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email' className='form-label'>
                          Email
                        </label>
                        <input
                          id='email'
                          type='email'
                          className='form-input'
                          placeholder='Your email'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message' className='form-label'>
                          Message
                        </label>
                        <textarea
                          id='message'
                          className='form-textarea'
                          placeholder='Your message'
                        />
                      </div>
                      <Button className='button-primary button-full'>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className='footer'>
          <div className='container footer-content'>
            <div className='footer-text'>
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </div>
            <div className='footer-socials'>
              <Button variant='ghost' size='icon' className='icon-button'>
                <Github className='icon-medium' />
                <span className='sr-only'>GitHub</span>
              </Button>
              <Button variant='ghost' size='icon' className='icon-button'>
                <Linkedin className='icon-medium' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
              <Button variant='ghost' size='icon' className='icon-button'>
                <MessageSquare className='icon-medium' />
                <span className='sr-only'>WhatsApp</span>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
