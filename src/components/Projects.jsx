import { ExternalLink, Github } from 'lucide-react';
import project1Image from '../assets/project1Image.png';
import project2Image from '../assets/project2Image.png';
import project3Image from '../assets/project3Image.png';
import project4Image from '../assets/project4Image.png'; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Edemy – Student Learning Platform",
      description:
        "Built a secure and scalable backend system using Node.js and Express. Designed RESTful APIs for users, courses, enrollments, and quizzes. Implemented real-time quiz functionality using WebSockets and deployed using Docker with MongoDB Atlas integration.",
      image: project1Image,
      technologies: ["Node.js", "Express.js", "MongoDB", "WebSockets", "Docker"],
      githubUrl: "https://github.com/RamanjotKaur7856/Edemy-LearningPlatform",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Finance Management System",
      description:
        "Developed a web-based finance management system using Java and Spring Boot with microservices architecture. Designed RESTful APIs for income/expense tracking and integrated MySQL using JPA/Hibernate with Apache Tomcat deployment.",
      image: project2Image,
      technologies: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "Microservices"],
      githubUrl: "https://github.com/RamanjotKaur7856/Finance-Management-System",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Blog Management System",
      description:
        "Created a full-stack blog application using Node.js, Express, EJS, and MongoDB. Implemented complete CRUD functionality, RESTful routing, and dynamic content management.",
      image: project3Image,
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB"],
      githubUrl: "https://github.com/RamanjotKaur7856/Blog-Management",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "College Event Management System",
      description:
        "Built a Java console application using Object-Oriented Programming principles. Implemented event creation, participant management, and reporting modules using efficient data structures.",
      image: project4Image,
      technologies: ["Java", "OOP", "Data Structures"],
      githubUrl: "https://github.com/RamanjotKaur7856/College-Event-Management-System",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid lg-grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-link"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-action-link btn btn-outline">
                    Code
                  </a>
                  {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-action-link btn btn-primary">
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: 'var(--spacing-12)' }}>
          <a href="https://github.com/RamanjotKaur7856" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Projects
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;