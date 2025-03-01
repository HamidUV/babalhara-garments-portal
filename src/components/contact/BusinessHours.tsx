
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
          <h2 className="h3 text-center mb-8">Business Hours</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {hours.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 md:p-6 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{item.day}</span>
                  <span 
                    className={`${
                      item.hours === 'Closed' ? 'text-red-500' : 'text-gray-600'
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
              className="btn-primary"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
