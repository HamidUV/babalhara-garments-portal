
import React from 'react';

const ProductInquiry = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 mb-6">Interested in Our Products?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to assist you with product inquiries, pricing, and wholesale orders. 
            Reach out to us to discuss your business needs.
          </p>
          
          <a 
            href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20products!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Contact Us Now
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductInquiry;
