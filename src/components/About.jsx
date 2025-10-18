import { GraduationCap, Code, Target } from 'lucide-react';
import profileImage from '../assets/raman.jpg'; // fixed path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid lg-grid-cols-2">
          {/* Image */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src={profileImage}
                alt="Raman"
                className="about-image"
              />
              <div className="about-image-accent">
                <Code size={40} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="about-content">
            <p className="about-text">
              I'm a passionate Computer Science Engineering student with a deep love for creating 
              innovative digital solutions. My journey in technology started with curiosity about 
              how software shapes our world, and it has evolved into a commitment to building 
              meaningful applications that solve real-world problems.
            </p>
            
            <p className="about-text">
              With experience in full-stack development, I enjoy working with modern technologies 
              like React, Node.js, and cloud platforms. I believe in writing clean, efficient code 
              and creating user experiences that are both functional and delightful.
            </p>
            
            {/* Highlights */}
            <div className="about-highlights md-grid-cols-3">
              <div className="about-highlight">
                <GraduationCap className="about-highlight-icon" size={40} />
                <h3 className="about-highlight-title">Education</h3>
                <p className="about-highlight-text">CSE Student</p>
                <p className="about-highlight-text">Focus on Software Engineering</p>
              </div>
              
              <div className="about-highlight">
                <Code className="about-highlight-icon" size={40} />
                <h3 className="about-highlight-title">Development</h3>
                <p className="about-highlight-text">Full-Stack Developer</p>
                <p className="about-highlight-text">Modern Tech Stack</p>
              </div>
              
              <div className="about-highlight">
                <Target className="about-highlight-icon" size={40} />
                <h3 className="about-highlight-title">Goals</h3>
                <p className="about-highlight-text">Software Engineer</p>
                <p className="about-highlight-text">Impact Through Code</p>
              </div>
            </div>
            
            {/* CTA */}
            <div style={{ paddingTop: 'var(--spacing-6)' }}>
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;