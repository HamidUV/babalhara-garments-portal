import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-gold">Bab AlHara</h3>
            <p className="text-gray-600 text-sm mt-1">
              UAE | QATAR
            </p>
            
            <div className="mt-4">
              <h4 className="font-serif text-sm font-semibold text-gray-700">Logistic Partner:</h4>
              <p className="text-gray-600 text-sm">
                Maxco Import & Exports Ltd
              </p>
              <p className="text-gray-600 text-sm">
                YIWU | GUANGZHOU | THAILAND | HONGKONG
              </p>
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div className="text-center md:text-right">
            <div className="text-sm text-gray-600 mb-4">
              <p className="mb-2">babalhara.dubai@gmail.com</p>
              <p>+971 50 859 9679</p>
              <p>(04) 552 2823</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-end">
              <a 
                href="https://www.facebook.com/share/1BKW7KGRws/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors bg-gray-100 p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/alhara.uae?igsh=MW51NnpleXhmNmN4bg%3D%3D&utm_source=qr" 
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

        {/* Copyright & Developer Credit */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC</p>
          <p>All rights reserved.</p>
          <p className="mt-2 text-xs"> {/* Made text smaller */}
            Developed by 
            <a 
              href="http://hamid-portfolio.surge.sh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 font-medium hover:text-gold transition-colors ml-1"
            >
              Hamid U V
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;