
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact Us</h4>
            <div className="space-y-2 text-gray-600">
              <p>Naif Deira, Dubai</p>
              <p>Email: babalhara.dubai@gmail.com</p>
              <p>Phone: +971 50 859 9679</p>
            </div>
            <a 
              href="https://wa.me/971508599679?text=Hello%2C%20I%20am%20interested%20in%20your%20products!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block btn-primary mt-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {currentYear} Bab AlHara Readymade Garments Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
