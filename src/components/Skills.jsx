const Skills = () => {
  

  const techStack = [
    "React", "Node.js", "JavaScript", "TypeScript", "Python", "Java",
    "MongoDB", "PostgreSQL", "Express.js", "CSS", "Git",
    "AWS", "Docker"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        
        
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Technologies I Work With</h3>
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Skills;