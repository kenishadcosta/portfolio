import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { FaBriefcase, FaCode, FaChartLine, FaLaptopMedical } from 'react-icons/fa';
import company1Pic from '../images/company1.png';
import company2Pic from '../images/company2.png';
import company3Pic from '../images/company3.png';
import company4Pic from '../images/company4.png';

function Experience() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="experience-container">
      {/* <h2>Professional Experience</h2> */}

      <div ref={el => sectionRefs.current.push(el)} className="info-section section">
        <div className="experience-item">
          <div className="experience-image-container">
            <img src={company1Pic} alt="Company 1" className="experience-image" />
          </div>
          <div className="experience-content">
            <FaChartLine className="experience-icon" />
            <h3>Operations Analyst</h3>
            <h4>Commonwealth Care Alliance</h4>
            <p>May 2024 - August 2024</p>
            <ul>
              <li>Created data visualizations and dashboards using Looker.</li>
              <li>Led operational analytics for the Engagement Center, analyzed attendance data, and 
                factors that contributed to patient engagement.</li>
              <li>Designed and implemented a patient satisfaction survey,
                 which contributed to an increase in overall service delivery.</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={el => sectionRefs.current.push(el)} className="info-section section">
        <div className="experience-item">
          <div className="experience-image-container">
            <img src={company2Pic} alt="Company 2" className="experience-image" />
          </div>
          <div className="experience-content">
            <FaLaptopMedical className="experience-icon" />
            <h3>Research Assistant</h3>
            <h4>Boston University</h4>
            <p>Nov 2023 - May 2024</p>
            <ul>
              <li>Presented a research work at the EAI conference based on the implementation of AI in Clinical Decision Support Systems (CDSS).</li>
              {/* <li>Conducted in-depth research on generative AI applications in healthcare, exploring innovative ways to enhance the safety
                 and effectiveness of Clinical Decision Support Systems (CDSS) through adaptive models and risk assessment.</li> */}
              <li>Achieved a 77% reduction in associated risks by implementing Boehm 
                Spiral Model and Human-in-the-Loop (HITL).</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={el => sectionRefs.current.push(el)} className="info-section section">
        <div className="experience-item">
          <div className="experience-image-container">
            <img src={company3Pic} alt="Company 3" className="experience-image" />
          </div>
          <div className="experience-content">
            <FaBriefcase className="experience-icon" />
            <h3>Design Quality Engineer</h3>
            <h4>Medtronic</h4>
            <p>Mar 2022 - Aug 2023 </p>
            <ul>
              <li>Led quality management, risk assessment, 
                and improved the efficiency of non-product software validation by 18%.</li>
              <li>Worked in a SAFe agile environment and 
                ensured seamless integration of software tools with surgical robotics product.</li>
              <li>Collaborated with cross-functional teams to identify and escalate critical issues.</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={el => sectionRefs.current.push(el)} className="info-section section">
        <div className="experience-item">
          <div className="experience-image-container">
            <img src={company4Pic} alt="Company 4" className="experience-image" />
          </div>
          <div className="experience-content">
            <FaCode className="experience-icon" />
            <h3>Computer Science Intern</h3>
            <h4>Deakin University</h4>
            <p>Feb 2022 - Jun 2022</p>
            <ul>
              <li>Developed a simulation in Unity and created interactive controls using C#.</li>
              <li>Implemented user-friendly interfaces with sliders for intuitive input and dynamic joint rotation calculations.</li>
              {/* <li>Assisted in the development of predictive models for sales forecasting.</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;


