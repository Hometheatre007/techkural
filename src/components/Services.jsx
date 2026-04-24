import React from 'react';
import { LayoutGrid, ShoppingCart, Code2, BarChart3, PenTool, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Website Design",
      desc: "Beautiful, responsive websites for businesses of all sizes",
      icon: <LayoutGrid className="service-icon" />
    },
    {
      title: "E-Commerce",
      desc: "Online stores built to convert visitors into customers",
      icon: <ShoppingCart className="service-icon" />
    },
    {
      title: "Web Applications",
      desc: "Custom web apps built with React, Node.js and modern stack",
      icon: <Code2 className="service-icon" />
    },
    {
      title: "SEO & Performance",
      desc: "Fast, optimized sites that rank on Google",
      icon: <BarChart3 className="service-icon" />
    },
    {
      title: "UI/UX Design",
      desc: "Figma designs that users love to interact with",
      icon: <PenTool className="service-icon" />
    },
    {
      title: "Maintenance",
      desc: "Monthly support and update plans for your digital presence",
      icon: <ShieldCheck className="service-icon" />
    }
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <div className="tamil-divider">
            <span>✧</span>
          </div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
