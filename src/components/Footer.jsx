import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import './Footer.css';
import logoImg from '../../team/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-img-container">
                <img src={logoImg} alt="TechKural Logo" className="logo-img" />
              </div>
              <span>TechKural</span><span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">Code with Purpose. Build with Wisdom.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Linkedin /></a>
              <a href="https://github.com/pugazhexploit" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#portfolio">Our Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-links-group">
            <h4>Services</h4>
            <a href="#services">Web Design</a>
            <a href="#services">E-Commerce</a>
            <a href="#services">Web Applications</a>
            <a href="#services">SEO Optimization</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Developed by TechKural Team. All rights reserved.</p>
          <p className="footer-motto">Whatever is thought of, will be achieved as thought of — Kural 666</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
