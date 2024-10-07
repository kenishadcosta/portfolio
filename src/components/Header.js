import React from 'react';

function Header({ setCurrentPage }) {
  return (
    <header>
      <nav>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('experience')}>Experience</button>
        <button onClick={() => setCurrentPage('projects')}>Projects</button>
        <button onClick={() => setCurrentPage('skills')}>Skills</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
