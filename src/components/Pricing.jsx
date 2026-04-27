import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "₹5,000",
      features: ["5-page website", "Mobile responsive", "Contact form", "1 month support"],
      highlighted: false
    },
    {
      name: "Growth",
      price: "₹15,000",
      features: ["Up to 15 pages", "CMS / WordPress", "SEO optimization", "WhatsApp integration", "3 months support"],
      highlighted: true
    },
    {
      name: "Premium",
      price: "₹30,000+",
      features: ["E-commerce / Custom app", "Payment gateway", "Admin dashboard", "6 months support", "Priority response"],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Investment Plans</h2>
          <p className="text-secondary">Transparent pricing for premium digital solutions.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.highlighted ? 'highlighted' : ''}`}>
              {tier.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3 className="tier-name">{tier.name}</h3>
              <div className="tier-price">{tier.price}</div>
              <ul className="tier-features">
                {tier.features.map((feature, i) => (
                  <li key={i}>
                    <Check className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'} pricing-btn`}>
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
