
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    title: "Customer Satisfaction",
    description: "We prioritize our clients' needs and work closely with them to ensure complete satisfaction with our products and services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"></path>
        <path d="M16 12c0 2-1.791 4-4 4s-4-2-4-4s1.791-4 4-4s4 2 4 4Z"></path>
        <path d="m9 12 .5.5L12 10m6 2a6 6 0 0 0-12 0"></path>
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    description: "Our efficient operations and strong supplier relationships allow us to offer competitive wholesale prices without compromising on quality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "Strong Supply Chain",
    description: "We've built reliable supply networks across multiple countries, ensuring consistent product availability and timely delivery.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 6H3"></path>
        <path d="M21 12H3"></path>
        <path d="M21 18H3"></path>
      </svg>
    ),
  },
  {
    title: "Ethical Business Practices",
    description: "We conduct business with integrity, transparency, and a commitment to ethical standards that build trust with our partners.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
        <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"></path>
        <path d="M12 22v-8.3a4 4 0 0 0-1.8-3.3L6 8"></path>
        <path d="M18 8 13.8 10.4a4 4 0 0 0-1.8 3.3V22"></path>
      </svg>
    ),
  },
];

const WorkWithUs = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Why Work With Us"
          subtitle="Discover the advantages of partnering with Bab AlHara"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-14 h-14 mr-6 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Partner With Us</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're a retailer looking for quality products or a business seeking a reliable wholesale supplier, Bab AlHara is ready to become your trusted partner. Let's work together to grow your business.
          </p>
          <a 
            href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20partnering%20with%20Bab%20AlHara!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <span>Start a Conversation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="m8 9 4-4 4 4" />
              <path d="M12 5v14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
