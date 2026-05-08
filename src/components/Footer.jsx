import React, { useState, useEffect } from 'react';
import './Footer.css';

const INDUSTRIES = ['Real Estate', 'Construction', 'Interior Design', 'E-Commerce', 'Education', 'Cybersecurity'];

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Our Work', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const SOCIALS = [
  { label: 'Instagram', url: 'https://instagram.com/shateen', icon: '📸' },
  { label: 'LinkedIn', url: 'https://linkedin.com/company/shateen', icon: '💼' },
  { label: 'WhatsApp', url: 'https://wa.me/919876543210', icon: '💬' },
  { label: 'Email', url: 'mailto:shateen.co@gmail.com', icon: '✉️' },
];

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Headline */}
        <div className="footer__headline reveal">
          <h2 className="footer__headline-text">
            Let's build something awesome
          </h2>
        </div>

        <div className="footer__grid">
          {/* Industries */}
          <div className="footer__col reveal">
            <h4 className="footer__col-title">Industries</h4>
            <ul className="footer__list">
              {INDUSTRIES.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer__col reveal">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__list footer__list--links">
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="footer__col reveal">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__list footer__list--socials">
              {SOCIALS.map((social, i) => (
                <li key={i}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <span className="footer__social-icon">{social.icon}</span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col reveal">
            <h4 className="footer__col-title">Get In Touch</h4>
            <p className="footer__contact-email">shateen.co@gmail.com</p>
            <a
              href="https://calendly.com/shateen/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary footer__cta"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© 2026 Shateen. All rights reserved.</p>
          <div className="footer__logo">
            Sha<span className="footer__logo-bold">teen</span><span className="footer__logo-dot">.</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`footer__back-top${showTop ? ' footer__back-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
