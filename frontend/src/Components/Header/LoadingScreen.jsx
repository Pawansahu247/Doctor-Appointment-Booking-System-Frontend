import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // We'll create this CSS file next

function LoadingScreen({ onAnimationEnd }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation after 2 seconds (adjust as needed)
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Logo visible for 2 seconds before fading out

    // After fade-out animation is complete, notify parent to hide
    const hideTimer = setTimeout(() => {
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, 2800); // Total time: 2s (visible) + 0.8s (fade out duration)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo-animation-container">
        {/* Replace with your actual logo component or SVG/IMG tag */}
        {/* For now, using the image you provided earlier */}
        <img 
          src="https://via.placeholder.com/150/FF69B4/FFFFFF?text=Healthiva" // Placeholder, replace with your actual logo URL
          alt="Healthiva Logo" 
          className="animated-logo" 
        />
        {/* If you prefer text: */}
        {/* <h1 className="animated-logo-text">Healthiva</h1> */}
      </div>
    </div>
  );
}

export default LoadingScreen;