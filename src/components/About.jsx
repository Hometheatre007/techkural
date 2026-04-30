import React, { useEffect, useState, useRef } from 'react';
import './About.css';

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

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
        <div className="about__content">
          <div className="about__text reveal">
            <span className="section-label">About Us</span>
            <h2 className="section-title">We Build More Than Just Pixels</h2>
            <p>
              We are two freelancers with over a year of experience crafting digital experiences that drive real business results. 
              Based in Chidambaram, Tamil Nadu, we've helped 25+ clients across industries — from real estate to e-commerce — 
              achieve measurable growth through strategic web development, performance marketing, and cybersecurity services.
            </p>
            <p>
              Our approach is simple: understand your business, identify growth levers, and build systems that convert visitors into customers consistently.
            </p>
          </div>

          <div className="about__stats stagger-children">
            <div className="about__stat reveal">
              <span className="about__stat-number">
                <AnimatedCounter target={50} prefix="₹" suffix="L+" />
              </span>
              <span className="about__stat-label">Revenue Generated</span>
            </div>
            <div className="about__stat reveal">
              <span className="about__stat-number">
                <AnimatedCounter target={30} suffix="+" />
              </span>
              <span className="about__stat-label">Projects Completed</span>
            </div>
            <div className="about__stat reveal">
              <span className="about__stat-number">
                <AnimatedCounter target={25} suffix="+" />
              </span>
              <span className="about__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
