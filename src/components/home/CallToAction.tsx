
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-gold/90 to-gold-dark rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Let's Grow Your Business Together
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Get in touch with us to discover our product offerings and how we can help expand your business with quality wholesale products.
              </p>
              <div>
                <Link 
                  to="/contact" 
                  className="bg-white text-gold font-medium px-8 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg inline-block text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1618160710825-a9b9c640a5dd?auto=format&fit=crop&w=800&q=80" 
                alt="Business meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
