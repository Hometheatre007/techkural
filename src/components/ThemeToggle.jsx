import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isLightMode, toggleTheme }) => {
  return (
    <button 
      className={`theme-toggle ${isLightMode ? 'light' : 'dark'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-circle"></div>
    </button>
  );
};

export default ThemeToggle;
