
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-gold">Bab AlHara</h3>
            <p className="text-gray-600 text-sm mt-1">
              Wholesale trading in Dubai
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">Naif Deira, Dubai</p>
            <p className="mb-2">babalhara.dubai@gmail.com</p>
            <p>+971 50 859 9679</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end items-center space-y-4">
            <div className="flex space-x-5">
              <Link to="/" className="text-gray-600 hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">About</Link>
              <Link to="/products" className="text-gray-600 hover:text-gold transition-colors">Products</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">Contact</Link>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors bg-gray-100 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors bg-gray-100 p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:babalhara.dubai@gmail.com" 
                className="text-gray-500 hover:text-gold transition-colors bg-gray-100 p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
