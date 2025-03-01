
import React from 'react';
import { PhoneCall } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
            <PhoneCall size={28} />
          </div>
          <h1 className="h1 mb-6">Get In Touch With Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our wholesale products or services? We're here to help you find the perfect solutions for your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
