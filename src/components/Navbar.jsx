import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';
import logoImg from '../../team/logo.png';

const Navbar = ({ isLightMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <div className="logo-img-container">
            <img src={logoImg} alt="TechKural Logo" className="logo-img" />
          </div>
          <span>TechKural</span><span className="logo-dot">.</span>
        </a>
        
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <ThemeToggle isLightMode={isLightMode} toggleTheme={toggleTheme} />
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
