
import { Mail, Phone, MapPin } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

const Contact = () => {
//   const { toast } = useToast();
  

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ramanjot3565@gmail.com",
      href: "mailto:ramanjot3565@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 8427733804",
      href: "tel:+91 8427733804"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p className="contact-intro-text">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology. Feel free to reach out!
          </p>
        </div>
        
        <div className="contact-grid lg-grid-cols-2">
          <div>
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="contact-info-item">
                  <div className="contact-info-icon">
                    <item.icon size={24} />
                  </div>
                  <div className="contact-info-text">
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;