import React, { useState } from 'react';
import './Pricing.css';

const CURRENCIES = {
  INR: { symbol: '₹', rates: [15000, 25000, 35000, 40000] },
  AUD: { symbol: 'A$', rates: [270, 450, 630, 720] },
  USD: { symbol: '$', rates: [180, 300, 420, 480] },
};

const PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started online.',
    features: [
      'Custom 5-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    description: 'For businesses ready to scale their digital presence.',
    features: [
      'Custom 10-page website',
      'Advanced SEO optimization',
      'Meta & Google Ads setup',
      'Analytics dashboard',
      'Monthly performance reports',
      '3 months support',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    description: 'Full-stack digital growth for ambitious brands.',
    features: [
      'Custom web application',
      'Full SEO & content strategy',
      'Multi-platform ad campaigns',
      'CRM integration',
      'A/B testing & optimization',
      'Priority 6-month support',
    ],
    highlight: false,
  },
  {
    name: 'Cyber Shield',
    description: 'Comprehensive security for your digital assets.',
    features: [
      'Full penetration testing',
      'Vulnerability assessment',
      'Security audit report',
      'Remediation guidance',
      'Compliance review',
      'Quarterly re-assessment',
    ],
    highlight: true,
    badge: 'RECOMMENDED',
  },
];

function Pricing() {
  const [currency, setCurrency] = useState('INR');

  const curr = CURRENCIES[currency];

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container">
        <div className="pricing__header reveal">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Transparent Pricing, Real Value</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose a plan that fits your goals. All plans include free consultation.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="pricing__currency-switcher reveal">
          {Object.keys(CURRENCIES).map((key) => (
            <button
              key={key}
              className={`pricing__currency-btn${currency === key ? ' pricing__currency-btn--active' : ''}`}
              onClick={() => setCurrency(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="pricing__grid stagger-children">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card reveal${plan.highlight ? ' pricing__card--cyber' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {plan.badge && (
                <span className="pricing__badge">{plan.badge}</span>
              )}
              <h3 className="pricing__plan-name">{plan.name}</h3>
              <p className="pricing__plan-desc">{plan.description}</p>

              <div className="pricing__price">
                <span className="pricing__price-symbol">{curr.symbol}</span>
                <span className="pricing__price-amount" key={`${currency}-${i}`}>
                  {curr.rates[i].toLocaleString()}
                </span>
                <span className="pricing__price-period">/project</span>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, j) => (
                  <li key={j} className="pricing__feature">
                    <span className="pricing__feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pricing__cta">
                <a
                  href="https://calendly.com/shateen/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.highlight ? 'btn-cyber' : 'btn-ghost'}`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
