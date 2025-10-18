import { Heart} from 'lucide-react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-grid md-grid-cols-3">
            <div>
              <div className="footer-brand">
                My<span className="footer-brand-accent">Portfolio</span>
              </div>
              <p className="footer-description">
                Passionate CSE student crafting innovative digital solutions 
                with modern technologies.
              </p>
            </div>
            
            <div>
              <h3 className="footer-section-title">Quick Links</h3>
              <div className="footer-links">
                {['About','Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="footer-section-title">Get In Touch</h3>
              <div className="footer-contact">
                <p>ramanjot3565@gmail.com</p>
                <p>+91 8427733804</p>
                <p>Punjab, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <span>© 2025 Ramanjot Kaur. Made with</span>
              <Heart className="footer-heart" size={16} fill="currentColor" />
              <span>All Rights Reserved.</span>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;