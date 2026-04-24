import React, { useState } from 'react';
import './AnalyticsNotice.css';

const AnalyticsNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="analytics-notice">
      <p>
        We use privacy-friendly, cookie-free analytics to improve your experience. 
        No personal data is tracked or stored.
      </p>
      <button 
        className="close-notice" 
        onClick={() => setIsVisible(false)}
        aria-label="Close notice"
      >
        &times;
      </button>
    </div>
  );
};

export default AnalyticsNotice;
