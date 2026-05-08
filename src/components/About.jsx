import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import avatar1 from '../../team/avator1.png';
import avatar2 from '../../team/avator2.png';

function About() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement('span');
      dot.className = 'about__particle';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${3 + Math.random() * 4}s`;
      dot.style.animationDelay = `${Math.random() * 3}s`;
      dot.style.width = dot.style.height = `${2 + Math.random() * 3}px`;
      container.appendChild(dot);
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <section className="about section-padding" id="about">
      <div className="about__particles" ref={particlesRef} />
      <div className="container">
        <div className="about__content-unique">
          <div className="about__header-center reveal">
            <span className="section-label-unique">About us</span>
            <h2 className="about__title-unique">
              Design With a 
              <span className="about__avatar-wrapper-inline">
                <img src={avatar1} alt="Avatar 1" className="about__avatar-img-inline" />
              </span> 
              <span className="text-accent">Pulse.</span>
              <br />
              We Shape 
              <span className="about__avatar-wrapper-inline">
                <img src={avatar2} alt="Avatar 2" className="about__avatar-img-inline" />
              </span> 
              More Than Just Pixels.
            </h2>
          </div>

          <div className="about__description-unique reveal">
            <p>
              We're a Strategist and a Storyteller — a duo that believes every great product starts with understanding people, not just pixels. With over a year of hands-on experience across diverse industries, we approach every project with deep empathy and a commitment to craft.
            </p>
            <p>
              We don't just build websites — we shape experiences. From solving complex business puzzles to creating brand stories that resonate, we're your creative partners who care about the "why" behind every decision and the "feel" behind every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
