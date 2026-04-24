import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnalyticsNotice from './components/AnalyticsNotice';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="app">
      <div 
        className="cursor-glow" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Marquee />
        <About />
        <Team />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <AnalyticsNotice />
    </div>
  );
}

export default App;
