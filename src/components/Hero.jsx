import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const HEADLINE_WORDS = ['We', 'build', 'high', 'converting', 'websites', 'and', 'run', 'ads', 'that', 'generate', 'leads.'];

function Hero() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev >= HEADLINE_WORDS.length) {
          clearInterval(timer);
          setTimeout(() => setShowSub(true), 300);
          return prev;
        }
        return prev + 1;
      });
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      {/* Animated Mesh Gradient Background */}
      <div className="hero__mesh" />
      <div className="hero__grid-overlay" />

      <div className="hero__content container">
        {/* Badge */}
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          <span>May '26 Slots Open — Only 5 Left</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={i}
              className={`hero__word${i < visibleWords ? ' hero__word--visible' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p className={`hero__subtext${showSub ? ' hero__subtext--visible' : ''}`}>
          We help businesses grow 3x–10x with performance websites, Meta/Google ads, SEO, and cybersecurity services.
        </p>

        {/* Buttons */}
        <div className={`hero__buttons${showSub ? ' hero__buttons--visible' : ''}`}>
          <a href="https://calendly.com/techkural/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero__btn-primary">
            Book a Meeting
          </a>
          <a href="#portfolio" className="btn btn-ghost hero__btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Our Work
          </a>
        </div>

        {/* Avatar Stack */}
        <div className={`hero__social-proof${showSub ? ' hero__social-proof--visible' : ''}`}>
          <div className="hero__avatars">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="hero__avatar" style={{ backgroundColor: `hsl(${n * 50 + 200}, 60%, 55%)` }}>
                {String.fromCharCode(64 + n)}
              </div>
            ))}
          </div>
          <span className="hero__clients-text">25+ Happy Clients</span>
        </div>

        {/* Stat Cards — Inline Row */}
        <div className={`hero__stats${showSub ? ' hero__stats--visible' : ''}`}>
          <div className="hero__stat-card">
            <span className="hero__stat-number">3x–10x</span>
            <span className="hero__stat-label">Growth</span>
          </div>
          <div className="hero__stat-card">
            <span className="hero__stat-number">25+</span>
            <span className="hero__stat-label">Clients</span>
          </div>
          <div className="hero__stat-card">
            <span className="hero__stat-number">248K</span>
            <span className="hero__stat-label">Impressions</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="var(--text-dim)" strokeWidth="1.5" />
            <circle className="hero__scroll-dot" cx="10" cy="10" r="3" fill="var(--accent)" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
