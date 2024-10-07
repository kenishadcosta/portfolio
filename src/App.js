import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setIsScrollingDown(true);
      } else if (st < lastScrollTop.current) {
        setIsScrollingDown(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsScrollingDown(false);
    // Scroll to the top of the page instantly
    window.scrollTo(0, 0);
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="App">
      <nav className={`navigation ${isScrollingDown ? 'scrolling-down' : ''}`}>
        {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
          <button
            key={section}
            className={`nav-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => handleNavClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
