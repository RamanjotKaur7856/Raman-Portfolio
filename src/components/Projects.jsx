import { ExternalLink, Github } from 'lucide-react';
import project1Image from '../assets/project1Image.jpg';
import project2Image from '../assets/project2Image.jpg';
import project3Image from '../assets/project3Image.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clothify-Ecommerce Website",
      description: "A responsive clothing website featuring dedicated sections for women, men, and kids. It offers an interactive shopping experience with product listings, images, prices, and a user-friendly cart across all devices.",
      image: project1Image,
      technologies: ["React", "Node.js", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/RamanjotKaur7856/Clothify",
      liveUrl: "https://clothify-app.vercel.app/"
    },
    {
      id: 2,
      title: "College Event Management System",
      description: "A full-stack web application built to manage college events efficiently. It features event CRUD operations, participant registration, authentication with JWT, and admin controls for organizers.",
      image: project2Image,
      technologies: ["React","Express.js","CSS","MongoDB"],
      githubUrl: "https://github.com/RamanjotKaur7856/CEMS",
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Blog Management System",
      description: "A full-stack web application for creating, editing, and managing blog posts with CRUD functionality. Built using Node.js, Express, and EJS, it allows users to add, update, and delete posts stored in a JSON file or database. The system supports dynamic routing, user-friendly interfaces, and efficient content management.",
      image: project3Image,
      technologies: ["Node.js", "Express.js", "EJS", "CSS","MongoDB"],
      githubUrl: "https://github.com/RamanjotKaur7856/Blog-Management",
      liveUrl: "https://example.com"
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
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-action-link btn btn-primary">
                    Live Demo
                  </a>
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