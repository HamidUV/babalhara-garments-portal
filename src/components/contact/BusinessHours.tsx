
import React from 'react';

const BusinessHours = () => {
  const hours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 12:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h3 mb-2">Business Hours</h2>
            <div className="w-20 h-1 bg-gold rounded mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {hours.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-colors hover:bg-gray-100"
                >
                  <span className="font-medium text-lg mb-2">{item.day}</span>
                  <span 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.hours === 'Closed' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-green-100 text-green-600'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need immediate assistance? Reach out to us directly via WhatsApp.
            </p>
            <a 
              href="https://wa.me/971508599679?text=Hello%2C%20I%20need%20some%20assistance!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
