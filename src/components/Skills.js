import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'Electronic Health Record', image: `${process.env.PUBLIC_URL}/images/tools/epic.png` },
  { name: 'Medical Device standards', image:  `${process.env.PUBLIC_URL}/images/tools/ISO.png` },
  { name: 'FHIR', image: `${process.env.PUBLIC_URL}/images/tools/FHIR.png` },
  { name: 'HL7', image: `${process.env.PUBLIC_URL}/images/tools/hl7.jpg` },
  { name: 'HIPAA', image: `${process.env.PUBLIC_URL}/images/tools/HIPAA.jpg` },
  { name: 'SQL', image: `${process.env.PUBLIC_URL}/images/tools/mysql.png` },
  { name: 'Python', image: `${process.env.PUBLIC_URL}/images/tools/python.jpg` },
  { name: 'Looker', image: `${process.env.PUBLIC_URL}/images/tools/looker.png` },
  { name: 'Tableau', image: `${process.env.PUBLIC_URL}/images/tools/tableau.png` },
  { name: 'Power BI', image: `${process.env.PUBLIC_URL}/images/tools/power-bi.png` }, 
  { name: 'DAX', image: `${process.env.PUBLIC_URL}/images/tools/excel.png` },
  { name: 'Project plan 365', image: `${process.env.PUBLIC_URL}/images/tools/project-plan-365-logo.webp` },
  { name: 'MS office', image: `${process.env.PUBLIC_URL}/images/tools/ms-office.jpg` },
  { name: 'Visual Studio', image: `${process.env.PUBLIC_URL}/images/tools/visual-studio.png` },
  { name: 'Lucid chart', image: `${process.env.PUBLIC_URL}/images/tools/lucid-chart.png` },
  { name: 'Jira', image: `${process.env.PUBLIC_URL}/images/tools/jira.png` },
  { name: 'Adobe XD', image: `${process.env.PUBLIC_URL}/images/tools/adobexd.png` },
  { name: 'MS Visio', image: `${process.env.PUBLIC_URL}/images/tools/ms-visio.png` },
  { name: 'Github', image: `${process.env.PUBLIC_URL}/images/tools/github.png` },
  { name: 'Cursor', image: `${process.env.PUBLIC_URL}/images/tools/Cursor.jpg` },
  { name: 'React app', image: `${process.env.PUBLIC_URL}/images/tools/react-app.png` },
  { name: 'Node JS', image: `${process.env.PUBLIC_URL}/images/tools/node-js.png` },
  { name: 'Kali Linux', image: `${process.env.PUBLIC_URL}/images/tools/kali-linux.jpg` },
  { name: 'Matlab', image: `${process.env.PUBLIC_URL}/images/tools/matlab.png` },
  { name: 'Unity', image: `${process.env.PUBLIC_URL}/images/tools/unity.jpg` }
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
