import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Top Wave Separator */}
      <div className="w-full overflow-hidden">
        <svg 
          className="w-full h-10 fill-current text-white transform translate-y-1" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-gold">Bab AlHara</h3>
            <p className="text-gray-600 text-sm mt-1">
              Wholesale trading in Dubai
            </p>
          </div>

          {/* Contact Info & Social Media */}
          <div className="text-center md:text-right">
            <div className="text-sm text-gray-600 mb-4">
              <p className="mb-2">Naif Deira, Dubai</p>
              <p className="mb-2">babalhara.dubai@gmail.com</p>
              <p>+971 50 859 9679</p>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-serif text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gold text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gold text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="mailto:babalhara.dubai@gmail.com" 
                  className="bg-gray-700 hover:bg-gold text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors mx-2">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;