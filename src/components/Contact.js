import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-container" ref={contactRef}>
      <h2 className="contact-title">Connect with Me</h2>
      <div className="contact-links">
        <a 
          href="https://www.linkedin.com/in/kenishadcosta/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button linkedin"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a 
          href="https://github.com/kenishadcosta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button github"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
        <a 
          href="mailto:kenishadcosta@gmail.com" 
          className="contact-button gmail"
        >
          <FaEnvelope className="contact-icon" />
          Email
        </a>
      </div>
    </div>
  );
}

export default Contact;
