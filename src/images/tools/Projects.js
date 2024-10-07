import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "EHR Deployment",
    image: "/images/projects/project4.png",
    description: "Designed technical infrastructures, employed operational techniques to quantify improvements, resulting in a 20% increase in hospital revenue and managed a comprehensive risk assessment for the model."
  },
  {
    title: "EHR Project Management",
    image: "/images/projects/project2.png",
    description: "Applied adaptive project management techniques, conducted risk assessments, estimated costs, demonstrated project goals, budget, schedule, stakeholder analysis, and presented a product demo."
  },
  {
    title: "Clinical Decision Support Integration",
    image: "/images/projects/project1.png",
    description: "Integrated a diabetes care module within an existing Health Information System, addressing interoperability, privacy,and security to improve healthcare quality, clinical outcomes, and enhanced patient involvement."
  },
  {
    title: "BMI Analyser",
    image: "/images/projects/project3.png",
    description: "Developed a BMI calculator using object-oriented programming, used classes to calculate and manage BMI, files to store and retrieve data, and matplotlib to graphically display BMI overtime."
  }
];

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="projects-container" ref={projectsRef}>
      {/* <h2>Projects</h2> */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
