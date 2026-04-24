import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import './Team.css';

import founderImg from '../../team/founder.jpg';
import dev1Img from '../../team/dev1.jpg';
import dev2Img from '../../team/devvv.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: "Pugazhenthi J",
      role: "CEO & Founder",
      image: founderImg,
      isFounder: true,
      bio: "Visionary leader driving the mission to blend modern technology with timeless wisdom at TechKural."
    },
    {
      name: "Lead Developer",
      role: "Full-Stack Engineer",
      image: dev1Img,
      isFounder: false
    },
    {
      name: "Creative Director",
      role: "UI/UX Design",
      image: dev2Img,
      isFounder: false
    },
    {
      name: "Backend Specialist",
      role: "Systems Architecture",
      image: founderImg,
      isFounder: false
    }
  ];

  const founder = teamMembers.find(m => m.isFounder);
  const developers = teamMembers.filter(m => !m.isFounder);

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

        {/* Team Grid */}
        <div className="team-grid">
          {developers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <p className="text-secondary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
