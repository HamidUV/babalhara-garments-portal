
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const productCategories = [
  {
    title: "Garments",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    description: "High-quality readymade garments for all ages and occasions."
  },
  {
    title: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    description: "Premium beauty and skincare products from renowned brands."
  },
  {
    title: "Household Accessories",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
    description: "Functional and stylish accessories for every room in your home."
  },
  {
    title: "FMCG Products",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    description: "Fast-moving consumer goods from trusted international suppliers."
  }
];

const ProductShowcase = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          title="Our Products"
          subtitle="Explore our diverse range of high-quality wholesale products"
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="group rounded-lg overflow-hidden shadow-sm border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white font-semibold text-xl">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20products!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <span>Inquire About Products</span>
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

export default ProductShowcase;
