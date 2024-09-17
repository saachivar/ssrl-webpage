import React, { useState, useEffect } from 'react';
import './App.css'; 

const OneTimeAnimation = () => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstLine(true);
    }, 500);

    setTimeout(() => {
      setShowSecondLine(true);
    }, 500); 

    setTimeout(() => {
      setShowFirstLine(false);
      setShowSecondLine(false);
    }, 6000);
  }, []);

  return (
    <div className="animation">
      {showFirstLine && <h1 style={{marginBottom:'-30px'}} className="first-line">Introducing the SSRL's newest venture...</h1>}
      {showSecondLine && <h1 style={{fontSize:'100px'}}className="second-line">LEARNSat.</h1>}
    </div>
  );
};

export default OneTimeAnimation;
