
import React from 'react';

const ContactInfo = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="h3 mb-6">Our Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">Naif Deira, Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+971 50 859 9679</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">babalhara.dubai@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.6 6.32A8.39 8.39 0 0 0 12.02 4C7.59 4 4 7.6 4 12.02c0 1.42.32 2.82.95 4.09L4 20l4.03-.94a8.47 8.47 0 0 0 4 .96h.01c4.42 0 7.99-3.6 7.99-8.02 0-2.14-.83-4.16-2.33-5.68zm-5.58 12.32h-.01a7.03 7.03 0 0 1-3.58-.98l-.26-.15-2.67.7.71-2.6-.17-.27a7.01 7.01 0 0 1-1.07-3.71c0-3.86 3.14-7 7-7a6.98 6.98 0 0 1 4.95 2.05 6.99 6.99 0 0 1 2.05 4.95c0 3.87-3.13 7.01-6.95 7.01zm3.83-5.24c-.21-.11-1.25-.62-1.45-.69-.19-.07-.33-.1-.47.11-.14.21-.54.69-.66.83-.12.14-.24.15-.45.05-.21-.11-.89-.33-1.69-1.05-.62-.56-1.05-1.25-1.17-1.46-.12-.21-.01-.33.09-.43.09-.1.21-.26.31-.39.1-.13.13-.22.2-.37.07-.15.03-.28-.02-.39-.05-.11-.47-1.13-.64-1.55-.17-.42-.34-.36-.47-.37-.12-.01-.26-.01-.4-.01s-.36.05-.55.26c-.19.21-.72.71-.72 1.73s.74 2.01.84 2.15c.1.14 1.43 2.17 3.46 3.05.48.21.86.33 1.16.42.49.16.93.14 1.28.08.39-.06 1.2-.49 1.37-.96.17-.47.17-.88.12-.96-.05-.09-.19-.14-.4-.24z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20your%20products!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-lg overflow-hidden h-[300px] shadow-sm border border-gray-200">
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="h3 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
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

// Import ContactForm component
import ContactForm from '../common/ContactForm';

export default ContactInfo;
