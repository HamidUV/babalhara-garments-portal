
import React from 'react';
import { cn } from '@/lib/utils';

const productCategories = [
  {
    title: "Garments",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    description: "High-quality readymade garments for all ages and occasions, including traditional and modern clothing options.",
    items: ["Men's Clothing", "Women's Apparel", "Children's Wear", "Casual Attire", "Formal Wear"]
  },
  {
    title: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    description: "Premium beauty and skincare products from renowned brands that cater to diverse skin types and preferences.",
    items: ["Skincare", "Makeup", "Hair Care", "Fragrance", "Personal Care"]
  },
  {
    title: "Household Accessories",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
    description: "Functional and stylish accessories for every room in your home, designed to enhance comfort and aesthetics.",
    items: ["Kitchen Essentials", "Bathroom Accessories", "Decorative Items", "Home Organization", "Textiles"]
  },
  {
    title: "FMCG Products",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    description: "Fast-moving consumer goods from trusted international suppliers, ensuring quality and reliability.",
    items: ["Food & Beverages", "Health Products", "Cleaning Supplies", "Personal Hygiene", "Paper Products"]
  }
];

const ProductCategories = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="space-y-16">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div 
                className={cn(
                  "rounded-lg overflow-hidden shadow-md h-[400px]",
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className={cn(
                "space-y-4",
                index % 2 !== 0 ? "md:order-1" : "md:order-2"
              )}>
                <h2 className="h2 text-gold">{category.title}</h2>
                <p className="text-gray-600 text-lg">{category.description}</p>
                
                <ul className="space-y-2 mt-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
