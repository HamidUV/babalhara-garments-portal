
import React from 'react';
import ContactForm from '../common/ContactForm';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const ContactInfo = () => {
  return (
    <section className="section py-16" id="contact-section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you"
            center
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-medium">Location</h3>
                </div>
                <p className="text-gray-600">Naif Deira, Dubai, United Arab Emirates</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                    <Phone size={20} />
                  </div>
                  <h3 className="font-medium">Phone</h3>
                </div>
                <p className="text-gray-600">+971 50 859 9679</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                    <Mail size={20} />
                  </div>
                  <h3 className="font-medium">Email</h3>
                </div>
                <p className="text-gray-600">babalhara.dubai@gmail.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <MessageCircle size={20} />
                  </div>
                  <h3 className="font-medium">WhatsApp</h3>
                </div>
                <a 
                  href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20your%20products!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  Chat with us
                </a>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden h-[320px] shadow-md border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.101783906461!2d55.29983057557165!3d25.271658077775373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccf30bc59df%3A0x8fa2887215cc9bca!2sNaif%2C%20Dubai!5e0!3m2!1sen!2sae!4v1652345678901!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bab AlHara Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <div>
              <h2 className="h3 mb-2">Send Us a Message</h2>
              <div className="w-20 h-1 bg-gold rounded"></div>
            </div>
            <p className="text-gray-600 my-6">
              Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
