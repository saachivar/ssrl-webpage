import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import StarryBackground from './StarryBackground';
import OneTimeAnimation from './OneTimeAnimation';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const contentWrapperRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000); 
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section) => {
    const contentWrapper = contentWrapperRef.current;
    const targetSection = contentWrapper.querySelector(`.${section}-section`);

    if (targetSection && contentWrapper) {
      contentWrapper.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <StarryBackground />
      {!showContent && <OneTimeAnimation />}
      {showContent && (
        <div className="container">
          <Sidebar activeSection={activeSection} onScrollToSection={scrollToSection} />
          {/* Pass the ref to MainContent */}
          <MainContent setActiveSection={setActiveSection} contentWrapperRef={contentWrapperRef} />
        </div>
      )}
    </div>
  );
}

export default App;
