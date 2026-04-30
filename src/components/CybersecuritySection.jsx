import React, { useEffect, useRef } from 'react';
import './CybersecuritySection.css';

const COLUMNS = [
  {
    icon: '⚔️',
    title: 'Offensive Security',
    items: [
      'Web Application Penetration Testing',
      'Mobile App Security Testing',
      'Network Penetration Testing',
      'Social Engineering Assessments',
    ],
  },
  {
    icon: '🛡️',
    title: 'Defensive Security',
    items: [
      'Security Architecture Review',
      'Incident Response Planning',
      'Security Monitoring Setup',
      'Threat Intelligence Integration',
    ],
  },
  {
    icon: '📋',
    title: 'Compliance',
    items: [
      'OWASP Top 10 Assessment',
      'Security Policy Development',
      'Risk Assessment & Reporting',
      'Regulatory Compliance Audit',
    ],
  },
];

function CybersecuritySection() {
  const canvasRef = useRef(null);

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,./<>?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(247, 247, 248, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 184, 169, 0.08)';
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="cybersecurity section-padding" id="cybersecurity">
      <canvas ref={canvasRef} className="cybersecurity__matrix" />

      <div className="container cybersecurity__container">
        {/* Shield SVG */}
        <div className="cybersecurity__shield-wrap reveal">
          <svg className="cybersecurity__shield" viewBox="0 0 100 120" fill="none">
            <path
              d="M50 5 L90 25 L90 60 C90 85 70 105 50 115 C30 105 10 85 10 60 L10 25 Z"
              stroke="var(--cyber-teal)"
              strokeWidth="2"
              fill="none"
              className="cybersecurity__shield-path"
            />
            <path
              d="M45 60 L35 50 L30 55 L45 70 L70 45 L65 40 Z"
              fill="var(--cyber-teal)"
              opacity="0.6"
              className="cybersecurity__shield-check"
            />
          </svg>
        </div>

        <div className="cybersecurity__header reveal">
          <span className="section-label" style={{ color: 'var(--cyber-teal)' }}>Security Services</span>
          <h2 className="section-title">Protect Your Digital Assets</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive cybersecurity services to identify vulnerabilities, strengthen defenses, and ensure compliance.
          </p>
        </div>

        <div className="cybersecurity__columns stagger-children">
          {COLUMNS.map((col, i) => (
            <div key={i} className="cybersecurity__column reveal">
              <div className="cybersecurity__column-inner">
                <span className="cybersecurity__column-icon">{col.icon}</span>
                <h3>{col.title}</h3>
                <ul className="cybersecurity__list">
                  {col.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cybersecurity__cta-wrap reveal">
          <a
            href="https://calendly.com/techkural/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyber cybersecurity__cta"
          >
            Schedule a Security Audit
          </a>
        </div>
      </div>
    </section>
  );
}

export default CybersecuritySection;
