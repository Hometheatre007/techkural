import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { title: "Aaranya Silk", tag: "E-Commerce", tech: "Shopify, Custom CSS", desc: "A premium South Indian silk saree boutique with seamless checkout and inventory management." },
    { title: "Nexus Tech", tag: "Corporate Site", tech: "React, Tailwind", desc: "A modern corporate presence for an enterprise software provider." },
    { title: "Vibe Health", tag: "Healthcare", tech: "Next.js, Node", desc: "A patient portal and secure appointment booking system for a clinic network." },
    { title: "Chennai Marina", tag: "Real Estate", tech: "HTML, Vanilla JS", desc: "An interactive property showcase and virtual tour platform for luxury coastal apartments." },
    { title: "EduSmart", tag: "Education", tech: "React Native Web", desc: "An e-learning platform featuring video courses, quizzes, and student tracking." },
    { title: "Madurai Spice", tag: "Restaurant", tech: "WooCommerce", desc: "An online food ordering and delivery management system for a popular chain of authentic restaurants." }
  ];

  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Selected Works</h2>
          <div className="tamil-divider">
            <span>✧</span>
          </div>
          <p className="text-secondary" style={{ marginTop: '1rem' }}>
            A glimpse into our crafted digital experiences across multiple industries.
          </p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-text-card">
              <span className="portfolio-tag">{project.tag}</span>
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-desc">{project.desc}</p>
              <div className="portfolio-card-footer">
                <p className="portfolio-tech">{project.tech}</p>
                <a href="#" className="btn btn-secondary portfolio-btn">Case Study</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
