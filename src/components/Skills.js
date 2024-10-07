import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'Electronic Health Record', image: '/images/tools/epic.png' },
  { name: 'Medical Device standards', image: '/images/tools/ISO.png' },
  { name: 'FHIR', image: '/images/tools/FHIR.png' },
  { name: 'HL7', image: '/images/tools/hl7.jpg' },
  { name: 'HIPAA', image: '/images/tools/HIPAA.jpg' },
  { name: 'SQL', image: '/images/tools/mysql.png' },
  { name: 'Python', image: '/images/tools/python.jpg' },
  { name: 'Looker', image: '/images/tools/looker.png' },
  { name: 'Tableau', image: '/images/tools/tableau.png' },
  { name: 'Power BI', image: '/images/tools/power-bi.png' }, 
  { name: 'DAX', image: '/images/tools/excel.png' },
  { name: 'Project plan 365', image: '/images/tools/project-plan-365-logo.webp' },
  { name: 'MS office', image: '/images/tools/ms-office.jpg' },
  { name: 'Visual Studio', image: '/images/tools/visual-studio.png' },
  { name: 'Lucid chart', image: '/images/tools/lucid-chart.png' },
  { name: 'Jira', image: '/images/tools/jira.png' },
  { name: 'Adobe XD', image: '/images/tools/adobexd.png' },
  { name: 'MS Visio', image: '/images/tools/ms-visio.png' },
  { name: 'Github', image: '/images/tools/github.png' },
  { name: 'Cursor', image: '/images/tools/Cursor.jpg' },
  { name: 'React app', image: '/images/tools/react-app.png' },
  { name: 'Node JS', image: '/images/tools/node-js.png' },
  { name: 'Kali Linux', image: '/images/tools/kali-linux.jpg' },
  { name: 'Matlab', image: '/images/tools/matlab.png' },
  { name: 'Unity', image: '/images/tools/unity.jpg' }
  // Add more tools as needed
];

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      {/* <h2>Skills & Tools</h2> */}
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
