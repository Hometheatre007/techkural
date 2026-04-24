import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="tamil-quote-card">
              <div className="kural-number">Kural 396</div>
              <p className="tamil-text" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.5rem', lineHeight: '1.4' }}>
                "Water will flow from a well in the sand in proportion to the depth to which it is dug, and knowledge will flow from a man in proportion to his learning."
              </p>
            </div>
          </div>

          <div className="about-right">
            <h2 className="section-title">Built on Wisdom.<br />Powered by Code.</h2>
            <p className="about-description">
              Led by CEO <strong>Pugazhenthi J</strong>, the TechKural Team is a collective of passionate developers and designers based in Chennai.
              Our mission is to blend modern web technologies with the timeless wisdom of continuous learning and deep understanding. We don't just build websites; we craft digital experiences that elevate your brand and drive results.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
