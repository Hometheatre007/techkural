import React from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    title: 'Achidam',
    category: 'Wedding Platform',
    description: 'A premium wedding services marketplace connecting couples with the best vendors.',
    color: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)',
    accent: '#5eead4',
  },
  {
    title: 'Tripkadaii.com',
    category: 'Travel',
    description: 'Full-featured travel booking platform with personalized itinerary planning.',
    color: 'linear-gradient(135deg, #2563eb 0%, #1e3a5f 100%)',
    accent: '#93c5fd',
  },
  {
    title: 'ScaleupMax',
    category: 'Marketing Agency',
    description: 'Performance marketing dashboard with real-time campaign analytics.',
    color: 'linear-gradient(135deg, #7c3aed 0%, #3b0764 100%)',
    accent: '#c4b5fd',
  },
  {
    title: 'UV Smart Lands',
    category: 'Real Estate',
    description: 'Real estate listing platform with virtual tours and lead generation.',
    color: 'linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)',
    accent: '#fdba74',
  },
];

function Portfolio() {
  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <div className="portfolio__header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Signature Projects</h2>
          <p className="section-subtitle">Selected work that showcases our capability to deliver results.</p>
        </div>

        <div className="portfolio__grid stagger-children">
          {PROJECTS.map((project, i) => (
            <div key={i} className="portfolio__card reveal">
              <div className="portfolio__card-inner" style={{ background: project.color }}>
                <div className="portfolio__card-content">
                  <span className="portfolio__category" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                  <h3 className="portfolio__title">{project.title}</h3>
                  <p className="portfolio__desc">{project.description}</p>
                </div>
                <div className="portfolio__card-overlay" style={{ background: `linear-gradient(180deg, transparent 0%, ${project.accent}10 100%)` }} />
                {/* Decorative elements */}
                <div className="portfolio__deco-dots">
                  {[...Array(6)].map((_, j) => (
                    <span key={j} className="portfolio__deco-dot" style={{ background: project.accent, animationDelay: `${j * 200}ms` }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
