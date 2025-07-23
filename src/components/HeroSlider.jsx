import React, { useState, useEffect, useRef } from 'react';

const sliderData = [
  {
    id: 1,
    video: '/Interior_x264.mp4',
    title: 'We give your brand a voice',
    description: 'Explore communication services',
    link: '#communication-services',
    buttonText: 'Explore communication services',
  },
  {
    id: 2,
    video: '/Interior_2_Inside_Exhibition_page.mp4',
    title: 'Amplify Your Reach',
    description: 'Discover our marketing solutions',
    link: '#marketing-solutions',
    buttonText: 'Discover marketing solutions',
  },
  {
    id: 3,
    video: '/Event_2_Inside_Event_page.mp4',
    title: 'Innovate with Technology',
    description: 'See our tech integrations',
    link: '#tech-integrations',
    buttonText: 'See tech integrations',
  },
  {
    id: 4,
    video: '/Event_x264.mp4',
    title: 'Crafting Unique Experiences',
    description: 'Our event management expertise',
    link: '#event-management',
    buttonText: 'Our event management expertise',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Play/pause videos based on current slide
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentSlide) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentSlide]);

  const handleDotClick = (idx) => setCurrentSlide(idx);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Videos for Slider */}
      {sliderData.map((slide, idx) => (
        <video
          key={slide.id}
          ref={el => videoRefs.current[idx] = el}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={slide.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

      {/* Slide Content */}
      <div className="relative z-30 text-white text-center w-full max-w-4xl px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          {sliderData[currentSlide].title}
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          {sliderData[currentSlide].description}
        </p>
        <a
          href={sliderData[currentSlide].link}
          className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition-colors duration-300"
        >
          {sliderData[currentSlide].buttonText}
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
        {sliderData.map((_, idx) => (
          <button
            key={idx}
            className={`w-10 h-1 bg-white rounded-full transition-all duration-300 ${idx === currentSlide ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;