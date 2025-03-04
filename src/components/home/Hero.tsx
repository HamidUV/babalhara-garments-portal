
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="container-custom relative z-10 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in bg-black/40 p-10 rounded-lg border border-gold/30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Bab Alhara Readymade Garments Trading LLC
          </h1>
          <div className="w-40 h-1 bg-gold mx-auto my-6"></div>
          <p className="text-xl text-white/90 animate-slide-in max-w-2xl mx-auto">
            Specializing in high-quality garments, cosmetics, and household accessories since 2020.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
