import React, { useEffect, useRef } from 'react';
import profilePic from '../images/profile.png'; // Import your image
import university1Pic from '../images/university1.jpg';
import university2Pic from '../images/university2.jpg';
import certificationPic from '../images/certification.jpg';
import './About.css'; // Import the CSS file
import { FaHeartbeat, FaLaptopMedical, FaDna, FaBrain, FaGraduationCap,
   FaCertificate, FaMicrophone, FaChalkboardTeacher, FaProjectDiagram } from 'react-icons/fa';

function About() {
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
    <div className="about-container">
      <div className="profile-header animate">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Your Name" className="profile-pic" />
        </div>
        <h1 className="about-title">Kenisha D'costa</h1>
      </div>
      <div className="profile-content">
        <div ref={el => sectionRefs.current.push(el)} className="intro-card section">
          {/* <h2>Hello, I'm Kenisha! </h2> */}
          <p>A <span className="highlight">Health Informatics Professional</span> with a passion for solving complex
          problems and a keen interest in leveraging data and technology to drive healthcare innovation. My experiencence spans
          diverse projects ranging from Surgical Robotics to AI in Medical Diagnostics. Apart from this, I enjoy public speaking
      and traveling. The plan is to go where no one has gone before! </p>
        </div>
        
        <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <h3>Focus Areas</h3>
          <div className="focus-areas-container">
            <ul className="focus-areas-column">
              <li><FaHeartbeat /> Digital Health Platforms</li>
              <li><FaLaptopMedical /> Telemedicine Solutions</li>
            </ul>
            <ul className="focus-areas-column">
              <li><FaDna /> Clinical Data Analytics</li>
              <li><FaBrain /> AI in Medical Diagnostics</li>
            </ul>
          </div>
        </div>
        
        <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <h3>Professional Background</h3>
          <div className="education-item">
            <div className="education-image-container">
              <img src={university1Pic} alt="First University" className="education-image" />
            </div>
            <div className="education-content">
              <FaGraduationCap className="education-icon" />
              <h4>Master's Degree</h4>
              <p>Health Informatics</p>
              <p>Boston University</p>
              <p>2024</p>
            </div>
          </div>
        </div>
        
        <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <div className="education-item">
            <div className="education-image-container">
              <img src={university2Pic} alt="Second University" className="education-image" />
            </div>
            <div className="education-content">
              <FaGraduationCap className="education-icon" />
              <h4>Bachelor's Degree</h4>
              <p>Biomedical Engineering</p>
              <p>Manipal Institute of Technology</p>
              <p>2022</p>
            </div>
          </div>
        </div>
        
        <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <div className="education-item">
            <div className="education-image-container">
              <img src={certificationPic} alt="Certification" className="education-image" />
            </div>
            <div className="education-content">
              <FaCertificate className="education-icon certification-icon" />
              <h4>Certification</h4>
              <p>Certified Associate in Project Management</p>
              <p>Project Management Institute</p>
              <p>2024</p>
            </div>
          </div>
        </div>
        
        <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <h3>Extracurricular Activities</h3>
          <ul className="highlights-list">
            <li>
              <FaMicrophone /> Regularly participating in Toastmasters sessions, 
              refining my public speaking skills and learning to captivate audiences with impactful presentations.
            </li>
            <li> <FaProjectDiagram /> Organized and led community service projects, instilling a sense of empathy and responsibility among teens.
              </li>
              <li> <FaChalkboardTeacher /> A teaching assistant for the Project Management course at BU, where I help students understand 
                complex concepts and guide them through assignments and projects.</li>
          </ul>
        </div>
        
        {/* <div ref={el => sectionRefs.current.push(el)} className="info-section section">
          <h3>Vision</h3>
          <p>I'm committed to leveraging technology to enhance patient outcomes, streamline healthcare processes, and make quality care more accessible to all.</p>
        </div> */}
        
        <div ref={el => sectionRefs.current.push(el)} className="fun-fact section">
          <h3>Fun Fact</h3>
          <p>I love to bake. If stressed, I do three things. [1] Work on the problem, [2] Bake cookies, [3] Eat them
          while finding the solution!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
