import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const technologies = [
    "React", "Next.js", "Node.js", "WordPress", 
    "Figma", "Tailwind CSS", "MongoDB", "AWS"
  ];
  
  // Duplicate for seamless scrolling
  const items = [...technologies, ...technologies, ...technologies];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {items.map((tech, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-dot">•</span> {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
