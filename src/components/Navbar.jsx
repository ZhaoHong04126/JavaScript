import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
        JS 探索
      </div>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection('features')}>特性</li>
        <li onClick={() => scrollToSection('evolution')}>演進史</li>
        <li onClick={() => scrollToSection('architecture')}>框架</li>
        <li onClick={() => scrollToSection('terminal')}>指令</li>
        <li onClick={() => scrollToSection('references')}>資源</li>
      </ul>
    </nav>
  );
};

export default Navbar;