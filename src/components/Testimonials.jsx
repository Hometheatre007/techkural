import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Pugazhenthi J',
    role: 'CEO, Founder',
    text: 'Shateen transformed our online presence completely. Our lead generation increased by 5x within the first two months. Their attention to detail and understanding of our market is exceptional.',
    rating: 5,
    color: '#00ff88',
  },
  {
    name: 'nithiya',
    role: 'Devloper, team head',
    text: 'Working with Shateen was a game-changer for our wedding platform. They built a beautiful, high-converting website that our users love. Highly recommended!',
    rating: 5,
    color: '#00ffc8',
  },
  {
    name: 'keerthana',
    role: 'Marketing Head, ScaleupMax',
    text: 'The performance marketing campaigns they set up for us delivered consistent ROI. Their data-driven approach and transparent reporting made all the difference.',
    rating: 5,
    color: '#7b2fff',
  },
  {
    name: '',
    role: 'Director, Tripkadaii',
    text: 'From SEO to website development, Shateen handled everything professionally. Our organic traffic grew 300% in six months. True professionals who deliver results.',
    rating: 5,
    color: '#00ff88',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % TESTIMONIALS.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`testimonials__slide${isTransitioning ? ' testimonials__slide--exit' : ' testimonials__slide--enter'}`}>
            {/* Stars */}
            <div className="testimonials__stars">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="testimonials__star" style={{ animationDelay: `${i * 80}ms` }}>
                  ★
                </span>
              ))}
            </div>

            <blockquote className="testimonials__quote">
              "{current.text}"
            </blockquote>

            <div className="testimonials__author">
              <div className="testimonials__avatar" style={{ borderColor: current.color }}>
                <span style={{ color: current.color }}>
                  {current.name.charAt(0)}
                </span>
              </div>
              <div className="testimonials__author-info">
                <span className="testimonials__name">{current.name}</span>
                <span className="testimonials__role">{current.role}</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${i === activeIndex ? ' testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
