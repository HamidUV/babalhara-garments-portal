
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-[2px]" />
      
      <div className="container-custom relative z-10 mt-[-50px]">
        <div className="max-w-xl animate-fade-in">
          <div className="rounded-lg bg-black/30 backdrop-blur-sm p-8 border-l-4 border-gold">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-2">
              Bab AlHara Readymade Garments Trading <span className="text-base md:text-lg lg:text-xl align-top font-light tracking-wider">LLC</span>
            </h1>
            <div className="w-20 h-1 bg-gold my-4"></div>
            <p className="text-xl text-white/90 animate-slide-in">
              Specializing in high-quality garments, cosmetics, and household accessories since 2020.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
