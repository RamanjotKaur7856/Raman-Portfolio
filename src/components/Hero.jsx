import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
// import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero"
    //   style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <div className="hero-content-inner">
          {/* Main Heading */}
          <h1 className="hero-title">
            Hello, I'm {''}
            <span className="hero-name">
              Ramanjot Kaur
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Aspiring Software Engineer | Web Developer
          </p>
          
          {/* Description */}
          <p className="hero-description">
            Passionate CSE student crafting innovative digital solutions with modern technologies. 
            Turning ideas into reality through clean code and thoughtful design.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button
              onClick={scrollToProjects}
              className="btn btn-primary"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            
            
          </div>
          
          {/* Social Links */}
          <div className="hero-social">
            <a
              href="https://github.com/RamanjotKaur7856"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramanjot-kaur-7147772b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ramanjot3565@gmail.com"
              className="hero-social-link"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
