import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery & Brief", desc: "Understanding your vision, target audience, and business goals." },
    { num: "02", title: "Design & Prototype", desc: "Creating wireframes and high-fidelity Figma designs for your approval." },
    { num: "03", title: "Development", desc: "Writing clean, optimized, and responsive code." },
    { num: "04", title: "Testing & Launch", desc: "Rigorous QA testing across devices before going live." },
    { num: "05", title: "Support & Growth", desc: "Ongoing maintenance to keep your site secure and updated." }
  ];

  return (
    <section className="section-padding process-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">How We Work</h2>
          <div className="tamil-divider">
            <span>✧</span>
          </div>
        </div>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {index !== steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
