
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
              subtitle="Your trusted trading partner in Dubai"
            />
            <p className="text-gray-600">
              Established in 2020, Bab AlHara Readymade Garments Trading LLC has quickly emerged as a reliable wholesale trading company in Dubai's vibrant commercial district of Deira, Naif.
            </p>
            <p className="text-gray-600">
              Our expertise spans across garments, cosmetics, household accessories, and FMCG products, supported by strong import partnerships with suppliers from Japan, Thailand, India, Korea, and China.
            </p>
            <p className="text-gray-600">
              Our core values of trust, reliability, and quality guide everything we do, ensuring our customers receive exceptional products at competitive prices.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Bab AlHara Trading Professional Environment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="text-white font-serif text-2xl font-bold">Founded 2020</h3>
              <p className="text-white/80">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
