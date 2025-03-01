
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CategoryCard from '../common/CategoryCard';

const Categories = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Our Product Categories"
          subtitle="Explore our diverse range of high-quality products"
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard 
            title="Garments"
            description="Premium readymade garments sourced from the finest manufacturers across Asia, including casual wear, formal attire, and traditional clothing."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.2 2h11.6M3 7l3.3-5h11.4l3.3 5M3 7h18M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M8 12h.01M16 12h.01"/>
              </svg>
            }
          />
          
          <CategoryCard 
            title="Cosmetics"
            description="High-quality beauty and skincare products from renowned brands in Japan, Korea, and Thailand, catering to diverse beauty needs."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V11H7v10z" />
                <path d="M11 11V3a1 1 0 0 1 1-1h2.75a4 4 0 0 1 4 4v.25" />
                <path d="M8 9 6 3h3" />
              </svg>
            }
          />
          
          <CategoryCard 
            title="Household Accessories"
            description="Functional and stylish accessories for every room in your home, from kitchen essentials to bathroom fixtures and decorative items."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            }
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/971508599679?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <span>Inquire About Our Products</span>
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

export default Categories;
