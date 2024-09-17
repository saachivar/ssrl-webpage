import React, { useState, useRef, useEffect } from 'react';
import "./setting-up-balloon2-960x533.jpg"


const SwipeySlider = () => {
  const [position, setPosition] = useState(5); 
  const handleRef = useRef(null);

  const handleDrag = (event) => {
    const container = handleRef.current.parentNode;
    const containerRect = container.getBoundingClientRect();
    const newPosition = ((event.clientX - containerRect.left) / containerRect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  };

  const stopDragging = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', stopDragging);
  };

  const startDragging = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', stopDragging);
  };

  return (
    <div className="swipey-container">
      {/* Image Section */}
      <div
        className="image-wrapper"
        style={{ width: `${position}%` }}
      >
        <img src={require('./setting-up-balloon2-960x533.jpg')} alt="Revealed Image" />
      </div>

      {/* Text Section */}
      <div
        className="text-wrapper"
        style={{ fontSize:'12px', width: `${93 - position}%`, left: `${position}%` }}
      >
        <p style={{ marginRight:'30px', marginTop:'-5px', marginBottom:'-5px'}}> Through the LEARNSat program, high schools will be given an opportunity to be
involved by creating payloads housed in satellite buses developed by UGA SSRL
that will be given to them as part of LEARNSat kits. LEARNSat Kits will consist of
the Satellite bus and the educational content required to assemble it and help
develop the payload. </p>
        <p style={{marginTop:'-5px', marginBottom:'-5px'}}> Completed LEARNSats will be launched using weather balloons making it a suborbital mission, thereby overcoming exorbitant launch costs. This would also
mean that stringent technical requirements of NASA do not need to be adhered
to, which would otherwise be hard for high school students to meet. </p>
      </div>

      <div
        ref={handleRef}
        className="handle"
        style={{ left: `${position}%` }}
        onMouseDown={startDragging}
      />
    </div>
  );
};

export default SwipeySlider;
