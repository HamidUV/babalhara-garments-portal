
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-gold">Bab AlHara</h3>
            <p className="text-gray-600 max-w-xs">
              Wholesale trading in Dubai specializing in garments, cosmetics, household accessories and FMCG.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:babalhara.dubai@gmail.com" 
                className="text-gray-500 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Contact Us</h4>
            <div className="space-y-1 text-gray-600">
              <p>Naif Deira, Dubai</p>
              <p>Email: babalhara.dubai@gmail.com</p>
              <p>Phone: +971 50 859 9679</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
