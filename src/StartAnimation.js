import React, { useState, useEffect } from 'react';

const OneTimeAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasShownAnimation = localStorage.getItem('hasShownAnimation');

    if (!hasShownAnimation) {
      setShowAnimation(true);

      // After animation is done (e.g., after 3 seconds), mark it as shown
      setTimeout(() => {
        setShowAnimation(false);
        localStorage.setItem('hasShownAnimation', 'true');
      }, 3000); // Duration for the animation
    }
  }, []);

  if (!showAnimation) return null;

  return (
    <div style={styles.animation}>
      <h1 style={styles.text}>Welcome to LEARNSat!</h1>
    </div>
  );
};

const styles = {
  animation: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1, // On top of the starry background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
    transform: 'translateY(-100px)', // Start above the screen
    animation: 'dropIn 0.5s ease-out forwards, fadeOut 1s ease-out 2s forwards', // Drop in quickly, then fade out
  },
};

export default OneTimeAnimation;
