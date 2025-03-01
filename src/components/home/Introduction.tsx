
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const Introduction = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <SectionTitle
              title="About Bab AlHara"
              subtitle="Your trusted trading partner in Dubai since 2020"
            />
            <p className="text-gray-600">
              Bab AlHara Readymade Garments Trading LLC is a wholesale trading company based in Dubai, specializing in garments, cosmetics, household accessories, and FMCG products. Located in the vibrant commercial district of Deira, Naif, we have established strong import partnerships with suppliers from Japan, Thailand, India, Korea, and China.
            </p>
            <p className="text-gray-600">
              Our business philosophy is built on trust, reliability, and quality. We are committed to providing our customers with the best products at competitive prices, supported by exceptional service and a robust supply chain.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80" 
              alt="Bab AlHara Trading" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-white font-serif text-2xl font-bold">Established 2020</h3>
              <p className="text-white/80">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
