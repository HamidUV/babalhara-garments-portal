
import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Company Info */}
          <div className="space-y-6 md:pr-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gold mb-2">Bab AlHara</h3>
              <p className="text-gray-600 font-medium">
                UAE | QATAR
              </p>
            </div>
            
            <div className="pt-2">
              <h4 className="font-serif text-md font-semibold text-gray-700 mb-2">Logistic Partner:</h4>
              <p className="text-gray-600">
                Maxco Import & Exports Ltd
              </p>
              <p className="text-gray-600 italic">
                YIWU | GUANGZHOU | THAILAND | HONGKONG
              </p>
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-serif text-md font-semibold text-gray-700 mb-1">Contact Us</h4>
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2 text-gold" />
                <a href="mailto:babalhara.dubai@gmail.com" className="hover:text-gold transition-colors">
                  babalhara.dubai@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2 text-gold" />
                <a href="tel:+971508599679" className="hover:text-gold transition-colors">
                  +971 50 859 9679
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-2">
              <h4 className="font-serif text-md font-semibold text-gray-700 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gold transition-colors bg-white shadow-sm p-2.5 rounded-full hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gold transition-colors bg-white shadow-sm p-2.5 rounded-full hover:shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="mailto:babalhara.dubai@gmail.com" 
                  className="text-gray-500 hover:text-gold transition-colors bg-white shadow-sm p-2.5 rounded-full hover:shadow-md"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
