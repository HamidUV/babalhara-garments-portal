
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const MissionVision = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Our Mission & Vision"
          subtitle="Driven by hard work, passion, and a commitment to global branding"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 animate-slide-in">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To establish ourselves as the premier wholesale trading partner in the UAE by providing high-quality products at competitive prices. We aim to build lasting relationships with our clients through exceptional service, reliability, and a deep understanding of market needs.
            </p>
            <p className="text-gray-600 mt-4">
              We are committed to supporting the growth of our clients' businesses by offering unique products that help them stand out in a competitive marketplace.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <circle cx="12" cy="12" r="9"></circle>
                <circle cx="12" cy="12" r="5"></circle>
                <path d="m9 9 6 6"></path>
                <path d="m9 15 6-6"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision Bab AlHara becoming a globally recognized brand synonymous with quality and excellence in wholesale trading. Our goal is to expand our presence across international markets while maintaining our core values and commitment to quality.
            </p>
            <p className="text-gray-600 mt-4">
              Through hard work, passion, and innovation, we strive to create a trading ecosystem that benefits all stakeholders and contributes positively to the economic landscape of the regions we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
