import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Adjust path based on your file structure

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Ethiopian Heritage</h1>
        <p className="text-lg md:text-xl mb-8">
          Explore the ancient treasures, vibrant cultures, and unique destinations of Ethiopia.
        </p>
        <a
          href="#heritage-sites"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
