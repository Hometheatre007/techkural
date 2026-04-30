import React from 'react';
import './Process.css';

const STEPS = [
  {
    number: '01',
    title: 'Strategy Call',
    description: 'We start by understanding your business, goals, target audience, and current challenges through a detailed discovery session.',
  },
  {
    number: '02',
    title: 'Research & Planning',
    description: 'Deep-dive into your market, competitors, and opportunities. We craft a tailored strategy and project roadmap.',
  },
  {
    number: '03',
    title: 'Build & Setup',
    description: 'We design and develop your digital assets — websites, ad campaigns, or security infrastructure — with precision.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Everything goes live. Campaigns start running, websites go public, and security systems activate.',
  },
  {
    number: '05',
    title: 'Track & Improve',
    description: 'We continuously monitor performance, optimize based on data, and scale what works for sustained growth.',
  },
];

function Process() {
  return (
    <section className="process section-padding" id="process">
      <div className="container">
        <div className="process__header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">The Way We Build Results</h2>
        </div>

        <div className="process__timeline">
          {/* Vertical connecting line */}
          <div className="process__line">
            <svg className="process__line-svg" viewBox="0 0 2 100" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" className="process__line-draw" />
            </svg>
          </div>

          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`process__step reveal process__step--${i % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="process__step-number">
                <span className="process__number-ring" />
                <span className="process__number-text">{step.number}</span>
              </div>
              <div className="process__step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
