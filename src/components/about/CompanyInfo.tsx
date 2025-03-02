
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const CompanyInfo = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle
              title="Our Company"
              subtitle="Excellence in wholesale trading"
            />
            
            <div className="space-y-6 text-gray-600">
              <p>
                At Bab AlHara, we specialize in providing a diverse selection of premium products to businesses throughout the UAE and beyond. Our strategic location in Dubai's commercial heart positions us perfectly to serve the region's dynamic market needs.
              </p>
              
              <p>
                What sets us apart is our carefully cultivated network of international suppliers, allowing us to offer unique products that help our clients gain a competitive edge. Our business relationships extend across Asia, including Japan, Thailand, India, Korea, and China.
              </p>
              
              <p>
                Our team is dedicated to understanding your business challenges and finding the right product solutions to help you succeed. We believe that our success is measured by the success of our clients, which is why we go beyond simply supplying products to become a trusted advisor and partner.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animate-zoom-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Bab AlHara Modern Business" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 w-2/3 h-full rounded-lg bg-gold/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
