import React, { useState } from 'react';
import './FAQ.css';

const FAQS = [
  {
    q: 'How long does it take to build a website?',
    a: 'Typically 2–4 weeks depending on the project scope. Simple landing pages can be done in under a week, while complex web applications may take 6–8 weeks.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer project-based pricing tailored to your specific needs. Every project starts with a free consultation where we scope the work and provide a transparent quote.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes! All our packages include post-launch support. We also offer monthly retainer plans for continuous optimization, content updates, and performance monitoring.',
  },
  {
    q: 'What makes your cybersecurity services different?',
    a: 'We combine offensive testing (finding vulnerabilities like a real attacker) with defensive recommendations and compliance guidance. Our reports are actionable — not just a list of issues, but a roadmap to fix them.',
  },
  {
    q: 'Can you work with clients outside India?',
    a: 'Absolutely! We work with clients worldwide. Our pricing supports INR, AUD, and USD. We use Zoom, Slack, and Notion to collaborate seamlessly across time zones.',
  },
  {
    q: 'What platforms do you use for advertising?',
    a: 'We specialize in Meta Ads (Facebook/Instagram) and Google Ads (Search/Display/YouTube). We also handle LinkedIn Ads for B2B clients. Every campaign is data-driven with transparent reporting.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq section-padding" id="faq">
      <div className="container">
        <div className="faq__header reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq__item reveal${openIndex === i ? ' faq__item--open' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq__chevron">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="faq__answer-wrap">
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
              <div className="faq__active-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
