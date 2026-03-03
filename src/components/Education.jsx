import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-grid lg-grid-cols-3">
        {/* B.Tech */}
        <div className="education-card">
          <GraduationCap size={40} className="education-icon" />
          <h3 className="education-degree">B.Tech in Computer Science Engineering</h3>
          <p className="education-institution">Chitkara University, Punjab</p>
          <p className="education-duration">2023 – 2027</p>
          <p className="education-details">
            Relevant Coursework: Data Structures, Algorithms, Web Development, Cloud Computing, etc.<br></br>
            Current CGPA: 9.26
          </p>
        </div>
        {/* 12th */}
        <div className="education-card">
          <GraduationCap size={40} className="education-icon" />
          <h3 className="education-degree">Senior Secondary (12th)</h3>
          <p className="education-institution">Scholars Public School, Rajpura, Punjab</p>
          <p className="education-duration">2022 – 2023</p>
          <p className="education-details">
            Stream: Science (PCM)<br />
            Percentage: 79.2%
          </p>
        </div>
        {/* 10th */}
        <div className="education-card">
          <GraduationCap size={40} className="education-icon" />
          <h3 className="education-degree">Secondary (10th)</h3>
          <p className="education-institution">Scholars Public School, Rajpura, Punjab</p>
          <p className="education-duration">2020 – 2021</p>
          <p className="education-details">
            Percentage: 88.4%
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;