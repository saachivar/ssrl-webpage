import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    // Initialize stars
    function initStars() {
      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          opacity: Math.random(),
        });
      }
    }

    // Draw stars
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    }

    // Animation for twinkling effect
    function animateStars() {
      stars.forEach(star => {
        star.opacity += (Math.random() - 0.5) * 0.09;
        star.opacity = Math.min(1, Math.max(0, star.opacity)); 
      });
      drawStars();
      requestAnimationFrame(animateStars);
    }

    // Resize canvas when window resizes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars(); // Redraw stars after resizing
    };

    window.addEventListener('resize', handleResize);

    initStars();
    animateStars();

    // Clean up on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
  );
};

export default StarryBackground;
