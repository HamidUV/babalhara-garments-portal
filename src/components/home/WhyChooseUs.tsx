
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quality Assurance",
      description: "We source only the highest quality products from trusted manufacturers, ensuring durability and customer satisfaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 12 2 2 4-4" />
          <path d="M12 3c-1.2 0-2.4.6-3 1.7A4 4 0 0 0 5.5 9L12 21l6.5-12a4 4 0 0 0-3.5-4.3A3.7 3.7 0 0 0 12 3z" />
        </svg>
      )
    },
    {
      title: "Competitive Pricing",
      description: "Our strategic partnerships and efficient operations enable us to offer competitive wholesale prices to our customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Diverse Product Range",
      description: "With products sourced from Japan, Thailand, India, Korea, and China, we offer a diverse selection to meet various market needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Reliable Supply Chain",
      description: "Our established supply chain ensures consistent availability of products and timely delivery to meet your business needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Discover the advantages of partnering with Bab AlHara Trading"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-8">
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
        
        <div className="mt-16 bg-gold/10 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between animate-slide-up">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl font-semibold mb-2">Ready to start a partnership?</h3>
            <p className="text-gray-700">Reach out to discuss your wholesale needs.</p>
          </div>
          <a 
            href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20a%20partnership!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
