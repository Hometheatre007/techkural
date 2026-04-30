import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import './Navbar.css';
import logoImg from '../../team/logo.png';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Our Works' },
  { id: 'services', label: 'Services' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'testimonials', label: 'Testimonials' },
];

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleLinkClick('home')}>
          <img src={logoImg} alt="Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            Tech<span className="navbar__logo-bold">Kural</span>
            <span className="navbar__logo-dot">.</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id} className="navbar__link-item" style={{ animationDelay: `${i * 80}ms` }}>
              <a
                href={`#${link.id}`}
                className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://calendly.com/techkural/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
        >
          Book a Meeting
        </a>

        <div className="navbar__mobile-actions">
          {/* Mobile CTA Icon */}
          <a
            href="https://calendly.com/techkural/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-cta"
            aria-label="Book a Meeting"
          >
            <Calendar size={22} />
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${isOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`navbar__overlay${isOpen ? ' navbar__overlay--visible' : ''}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`navbar__drawer${isOpen ? ' navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.id} style={{ animationDelay: `${i * 60 + 100}ms` }}>
              <a
                href={`#${link.id}`}
                className={`navbar__drawer-link${activeSection === link.id ? ' navbar__drawer-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com/techkural/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__drawer-cta"
        >
          Book a Meeting
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
