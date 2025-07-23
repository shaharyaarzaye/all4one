import React, { useEffect } from 'react';

const HeroSection = () => {

  useEffect(() => {
    // Initialize AOS or any animation if needed
    // AOS.init();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <video autoPlay playsInline muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="Herovideo.mp4" type="video/webm" />
        <source src="Herovideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center z-10 text-white">
        {/* First word (Top Left) */}
        <h1
          className="absolute top-40 left-10 text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-8xl font-bold uppercase tracking-wider animate__animated animate__fadeInLeft animate__delay-2s"
          data-aos="fade-right"
          data-aos-delay="2000"
        >
          All 4 One
        </h1>

        {/* Second word (Bottom Right) */}
        <h1
          className="absolute bottom-40 right-10 text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-8xl font-bold uppercase tracking-wider animate__animated animate__fadeInRight animate__delay-2.2s"
          data-aos="fade-left"
          data-aos-delay="2200"
        >
          <span>Planners</span>
        </h1>
      </div>

      <a href="#nextSection" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <lottie-player
          src="https://bigboldthinkers.com/wp-content/themes/bbt/json/arrow-down.json"
          className="down-arrow w-12 h-12 sm:w-16 sm:h-16"
          background="transparent"
          speed="1"
          loop
          autoPlay
        ></lottie-player>
      </a>
    </section>
  );
};

export default HeroSection;
