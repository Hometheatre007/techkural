import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* Abstract Kolam SVG Pattern */}
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="kolam-svg">
          <circle cx="400" cy="400" r="300" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" opacity="var(--opacity-bg-pattern-low)" />
          <path d="M 400 100 L 700 400 L 400 700 L 100 400 Z" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" opacity="var(--opacity-bg-pattern-low)" />
          <path d="M 400 150 L 650 400 L 400 650 L 150 400 Z" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" opacity="var(--opacity-bg-pattern-mid)" />
          <circle cx="400" cy="400" r="100" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" opacity="var(--opacity-bg-pattern-high)" />
        </svg>
      </div>

      <div className="container hero-content animate-fade-in">
        <div className="hero-text">
          <h1 className="hero-title">
            We Build Websites That Work As <span className="text-gold">Hard As You Do</span>
          </h1>
          <p className="hero-subtitle">
            TechKural — web development studio blending modern code with timeless wisdom.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">View Our Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
