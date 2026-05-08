import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Zap, TrendingUp, Users } from 'lucide-react';
import './Hero.css';

function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Decorative elements */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__grid-lines" />

      <div className="hero__content container">
        {/* Left Column - Text */}
        <div className="hero__text">
          {/* Badge */}
          <div className={`hero__badge${showContent ? ' hero__badge--visible' : ''}`}>
            <span className="hero__badge-dot" />
            <span>May '26 Slots Open — Only 5 Left</span>
          </div>

          {/* Headline */}
          <h1 className={`hero__headline${showContent ? ' hero__headline--visible' : ''}`}>
            We build{' '}
            <span className="hero__highlight">high converting</span>
            <br />
            websites & run{' '}
            <span className="hero__highlight">ads that</span>
            <br />
            generate leads
          </h1>

          {/* Subtext */}
          <p className={`hero__subtext${showContent ? ' hero__subtext--visible' : ''}`}>
            We help businesses grow <strong>3x–10x</strong> by building dynamic websites
            and running <strong>Meta ads</strong> that generate consistent leads and sales.
          </p>

          {/* CTA Buttons */}
          <div className={`hero__buttons${showContent ? ' hero__buttons--visible' : ''}`}>
            <a
              href="https://calendly.com/shateen/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__btn-primary"
            >
              Book a meeting with us
              <span className="btn__arrow"><ArrowUpRight size={18} /></span>
            </a>
            <a href="#portfolio" className="btn btn-ghost hero__btn-ghost">
              View our work
            </a>
          </div>
        </div>

        {/* Right Column - Visual showcase */}
        <div className={`hero__visual${showContent ? ' hero__visual--visible' : ''}`}>
          <div className="hero__visual-container">
            {/* Floating stat cards */}
            <div className="hero__float-card hero__float-card--1">
              <div className="hero__float-card-icon"><TrendingUp size={20} /></div>
              <div className="hero__float-card-info">
                <span className="hero__float-card-number">10x</span>
                <span className="hero__float-card-label">Lead Growth</span>
              </div>
            </div>

            <div className="hero__float-card hero__float-card--2">
              <div className="hero__float-card-icon"><Users size={20} /></div>
              <div className="hero__float-card-info">
                <span className="hero__float-card-number">50+</span>
                <span className="hero__float-card-label">Happy Clients</span>
              </div>
            </div>

            <div className="hero__float-card hero__float-card--3">
              <div className="hero__float-card-icon"><Zap size={20} /></div>
              <div className="hero__float-card-info">
                <span className="hero__float-card-number">99%</span>
                <span className="hero__float-card-label">Uptime SLA</span>
              </div>
            </div>

            {/* Central glow ring */}
            <div className="hero__ring" />
            <div className="hero__ring hero__ring--inner" />

            {/* Orbit dots */}
            <div className="hero__orbit-dot hero__orbit-dot--1" />
            <div className="hero__orbit-dot hero__orbit-dot--2" />
            <div className="hero__orbit-dot hero__orbit-dot--3" />
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className={`hero__stats-bar${showContent ? ' hero__stats-bar--visible' : ''}`}>
        <div className="container hero__stats-inner">
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">3x-10x</span>
            <span className="hero__stat-label">Revenue Growth</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">24/7</span>
            <span className="hero__stat-label">Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
