
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const CompanyInfo = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle
              title="About Our Company"
              subtitle="A leader in wholesale trading based in Dubai since 2020"
            />
            
            <div className="space-y-6 text-gray-600">
              <p>
                Established in 2020, Bab AlHara Readymade Garments Trading LLC has quickly emerged as a reliable wholesale trading company in Dubai's vibrant commercial district of Deira, Naif. We specialize in supplying a diverse range of high-quality products including garments, cosmetics, household accessories, and FMCG.
              </p>
              
              <p>
                Our business operations are built on strong import partnerships with Japan, Thailand, India, Korea, and China, allowing us to offer a unique selection of products that meet international quality standards. These strategic relationships enable us to provide our customers with exclusive items that stand out in the market.
              </p>
              
              <p>
                At Bab AlHara, we believe in the values of trust, reliability, and quality. Our team is dedicated to maintaining the highest standards in every aspect of our business, from product sourcing to customer service. We understand that our success is directly linked to the success of our clients, which is why we go the extra mile to ensure satisfaction.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animate-zoom-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Bab AlHara Office" 
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
