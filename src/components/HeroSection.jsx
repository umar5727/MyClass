// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg md:text-xl mb-8">Explore and discover amazing things!</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
