import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import './Team.css';

import founderImg from '../../team/founder.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Pugazhenthi J",
      role: "CEO & Founder",
      image: founderImg,
      isFounder: true,
      bio: "Visionary leader driving the mission to blend modern technology with timeless wisdom at TechKural."
    }
  ];

  const founder = teamMembers.find(m => m.isFounder);

  return (
    <section id="team" className="section-padding team-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">The People Behind the Code</h2>
          <div className="tamil-divider">
            <span>✧</span>
          </div>
        </div>

        {/* Founder Card */}
        <div className="founder-card">
          <div className="founder-image-wrapper">
            <img src={founder.image} alt={founder.name} className="founder-image" />
          </div>
          <div className="founder-info">
            <span className="role-badge">CEO & Founder</span>
            <h3>{founder.name}</h3>
            <p className="founder-bio">{founder.bio}</p>
            <div className="social-links team-socials">
              <a href="https://www.instagram.com/official___pugazh_007/" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={18} /></a>
              <a href="#" className="social-icon"><Linkedin size={18} /></a>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Team;
