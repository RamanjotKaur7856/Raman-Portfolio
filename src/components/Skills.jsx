const Skills = () => {
  

  const techStack = [
    "React", "Node.js", "JavaScript", "TypeScript", "Python", "Java",
    "MongoDB", "PostgreSQL", "Express.js", "CSS", "Git",
    "AWS"
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
        
        <div className="learning-section">
          <h3 className="learning-title">Currently Learning</h3>
          <div className="learning-grid">
            {["Machine Learning", "DevOps"].map((item, index) => (
              <span key={index} className="learning-tag">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;