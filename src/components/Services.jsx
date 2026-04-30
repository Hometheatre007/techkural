import React, { useEffect, useState, useRef } from 'react';
import './Services.css';

/* ---------- Typewriter Hook ---------- */
function useTypewriter(lines, speed = 50, lineDelay = 800) {
  const [output, setOutput] = useState([]);
  const [started, setStarted] = useState(false);

  const start = () => setStarted(true);

  useEffect(() => {
    if (!started) return;
    let lineIdx = 0, charIdx = 0;
    const current = [];

    const tick = () => {
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      charIdx++;
      current[lineIdx] = line.substring(0, charIdx);
      setOutput([...current]);

      if (charIdx >= line.length) {
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, lineDelay);
      } else {
        setTimeout(tick, speed);
      }
    };
    tick();
  }, [started]);

  return { output, start };
}

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ---------- SVG Line Chart ---------- */
function MiniChart() {
  const ref = useRef(null);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setDraw(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = "10,60 40,45 70,50 100,30 130,35 160,15 190,20";

  return (
    <svg ref={ref} className="services__chart" viewBox="0 0 200 70" fill="none">
      <polyline
        points={points}
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`services__chart-line${draw ? ' services__chart-line--drawn' : ''}`}
      />
      <polyline
        points={`10,70 ${points} 190,70`}
        fill="url(#chartGrad)"
        opacity={draw ? '0.15' : '0'}
        style={{ transition: 'opacity 1s ease 1s' }}
      />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- Main Component ---------- */
function Services() {
  const terminalRef = useRef(null);
  const { output, start: startTyping } = useTypewriter([
    '> Initializing scan...',
    '[SCANNING] Port 443, 8080, 3306...',
    '[CRITICAL] 3 vulnerabilities found',
    '> Generating report...',
    '> Report generated ✓',
  ], 35, 600);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startTyping(); },
      { threshold: 0.3 }
    );
    if (terminalRef.current) observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  const cyberServices = [
    'Web App Penetration Testing',
    'Network Security Audits',
    'API Security Assessment',
    'Cloud Security Review',
    'Vulnerability Scanning',
    'Security Compliance',
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Three Things We Are Really Good At</h2>
        </div>

        <div className="services__grid stagger-children">
          {/* Card 1: Website Development */}
          <div className="services__card reveal">
            <div className="services__card-inner">
              <div className="services__card-header">
                <span className="services__card-icon">🌐</span>
                <h3>Website Development</h3>
              </div>
              <p className="services__card-desc">
                High-converting, performance-first websites that turn visitors into customers.
              </p>
              <div className="services__card-demo services__card-demo--stats">
                <div className="services__demo-header">Campaign Performance</div>
                <div className="services__demo-metrics">
                  <div className="services__demo-metric">
                    <span className="services__demo-metric-value"><AnimatedCounter target={5} suffix="×" /></span>
                    <span className="services__demo-metric-label">Sales</span>
                  </div>
                  <div className="services__demo-metric">
                    <span className="services__demo-metric-value"><AnimatedCounter target={248} suffix="K" /></span>
                    <span className="services__demo-metric-label">Impressions</span>
                  </div>
                  <div className="services__demo-metric">
                    <span className="services__demo-metric-value"><AnimatedCounter target={3} suffix=".8%" /></span>
                    <span className="services__demo-metric-label">Conv. Rate</span>
                  </div>
                </div>
                <MiniChart />
              </div>
            </div>
          </div>

          {/* Card 2: Performance Marketing */}
          <div className="services__card reveal">
            <div className="services__card-inner">
              <div className="services__card-header">
                <span className="services__card-icon">📊</span>
                <h3>Performance Marketing</h3>
              </div>
              <p className="services__card-desc">
                Data-driven Meta & Google ad campaigns that generate consistent, quality leads.
              </p>
              <div className="services__card-demo services__card-demo--marketing">
                <div className="services__marketing-row">
                  <div className="services__platform-badge">Meta Ads</div>
                  <div className="services__bar-container">
                    <div className="services__bar services__bar--meta" />
                  </div>
                  <span className="services__bar-label"><AnimatedCounter target={85} suffix="%" /></span>
                </div>
                <div className="services__marketing-row">
                  <div className="services__platform-badge">Google Ads</div>
                  <div className="services__bar-container">
                    <div className="services__bar services__bar--google" />
                  </div>
                  <span className="services__bar-label"><AnimatedCounter target={72} suffix="%" /></span>
                </div>
                <div className="services__marketing-row">
                  <div className="services__platform-badge">SEO</div>
                  <div className="services__bar-container">
                    <div className="services__bar services__bar--seo" />
                  </div>
                  <span className="services__bar-label"><AnimatedCounter target={94} suffix="%" /></span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: SEO */}
          <div className="services__card reveal">
            <div className="services__card-inner">
              <div className="services__card-header">
                <span className="services__card-icon">🔍</span>
                <h3>SEO Optimization</h3>
              </div>
              <p className="services__card-desc">
                First-page rankings that drive organic traffic and long-term business growth.
              </p>
              <div className="services__card-demo services__card-demo--serp">
                <div className="services__serp-header">Search Results</div>
                <div className="services__serp-item services__serp-item--top">
                  <span className="services__serp-rank">#1</span>
                  <div className="services__serp-info">
                    <span className="services__serp-url">yoursite.com</span>
                    <span className="services__serp-title">Your Business — Best Services</span>
                  </div>
                </div>
                <div className="services__serp-item services__serp-item--other">
                  <span className="services__serp-rank">#2</span>
                  <div className="services__serp-info">
                    <span className="services__serp-url">competitor1.com</span>
                    <span className="services__serp-title">Competitor Service Page</span>
                  </div>
                </div>
                <div className="services__serp-item services__serp-item--other">
                  <span className="services__serp-rank">#3</span>
                  <div className="services__serp-info">
                    <span className="services__serp-url">competitor2.com</span>
                    <span className="services__serp-title">Another Competitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Cybersecurity */}
          <div className="services__card services__card--cyber reveal" ref={terminalRef}>
            <div className="services__card-inner services__card-inner--cyber">
              <div className="services__cyber-scanline" />
              <div className="services__card-header">
                <span className="services__card-icon">🛡️</span>
                <h3>Penetration Testing & Cybersecurity</h3>
                <span className="services__new-badge">NEW SERVICE</span>
              </div>
              <p className="services__card-desc">
                Identify and fix vulnerabilities before hackers do. Comprehensive security audits for your digital assets.
              </p>

              {/* Terminal */}
              <div className="services__terminal">
                <div className="services__terminal-header">
                  <span className="services__terminal-dot services__terminal-dot--red" />
                  <span className="services__terminal-dot services__terminal-dot--yellow" />
                  <span className="services__terminal-dot services__terminal-dot--green" />
                  <span className="services__terminal-title">security-scan.sh</span>
                </div>
                <div className="services__terminal-body">
                  {output.map((line, i) => (
                    <div key={i} className={`services__terminal-line${line.includes('[CRITICAL]') ? ' services__terminal-line--critical' : ''}`}>
                      {line}
                      {i === output.length - 1 && <span className="services__terminal-cursor">▌</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-services */}
              <ul className="services__cyber-list">
                {cyberServices.map((item, i) => (
                  <li key={i} className="services__cyber-list-item" style={{ animationDelay: `${i * 100 + 500}ms` }}>
                    <span className="services__cyber-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#cybersecurity" className="btn btn-cyber" onClick={(e) => { e.preventDefault(); document.getElementById('cybersecurity')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get a Security Audit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
