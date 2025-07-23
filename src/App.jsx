import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroSlider from './components/HeroSlider';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [videoClasses, setVideoClasses] = useState('scale-100 opacity-100');

  useEffect(() => {
    // Set a timer to start the disappearance animation after 2 seconds
    const animationTimer = setTimeout(() => {
      setVideoClasses('scale-0 opacity-0');
    }, 2000);

    // Set a timer to hide the splash screen (unmount component) after 3 seconds
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Cleanup timers
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll from text animation */}
      {/* Splash Screen Video */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            src="./loder.mp4" // ⭐ IMPORTANT: Replace with the correct path to your .mov file
            autoPlay
            muted
            playsInline
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${videoClasses}`}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Main App Content */}
      <div className={`${showSplash ? 'hidden' : ''}`}> {/* Hide entire content while splash is showing */}
        <Navbar />
        <HeroSection />
        <HeroSlider />
      </div>
    </div>
  );
}

export default App;