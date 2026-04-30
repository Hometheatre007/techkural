import React from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    title: 'Ilanthoodhu',
    category: 'College Magazine Club',
    description: 'The digital home of our 36-year-old college magazine club. A platform where creativity, history, and achievements come together—celebrating decades of student expression and innovation.',
    color: 'linear-gradient(135deg, #0d9488 0%, #065f46 100%)',
    accent: '#5eead4',
    link: 'http://ilanthoodhu.com/'
  },
  {
    title: 'Sketchzpire Art Gallery',
    category: 'Artist Portfolio',
    description: 'A beautiful artist portfolio featuring incredible face drawings and sketching art.',
    color: 'linear-gradient(135deg, #2563eb 0%, #1e3a5f 100%)',
    accent: '#93c5fd',
    link: 'https://sketchzpire-art-gallery.netlify.app'
  },
  {
    title: 'MBA Student Portfolio',
    category: 'Interactive Resume',
    description: 'A highly animated, modern portfolio project designed specifically for an MBA student to showcase their achievements.',
    color: 'linear-gradient(135deg, #7c3aed 0%, #3b0764 100%)',
    accent: '#c4b5fd',
    link: '#'
  }
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
          {PROJECTS.map((project, i) => {
            const CardWrapper = project.link && project.link !== '#' ? 'a' : 'div';
            return (
              <CardWrapper 
                href={project.link !== '#' ? project.link : undefined}
                target={project.link !== '#' ? "_blank" : undefined}
                rel={project.link !== '#' ? "noopener noreferrer" : undefined}
                key={i} 
                className="portfolio__card reveal"
                style={{ textDecoration: 'none' }}
              >
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
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
