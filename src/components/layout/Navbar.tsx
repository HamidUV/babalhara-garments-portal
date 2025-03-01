
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        scrolled ? "bg-white/95 shadow-md py-3" : "bg-white/80 py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-gold">
            Bab AlHara
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium link-hover">Home</Link>
          <Link to="/about" className="font-medium link-hover">About Us</Link>
          <Link to="/products" className="font-medium link-hover">Products</Link>
          <Link to="/contact" className="font-medium link-hover">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle - Improved styling */}
        <button 
          className="lg:hidden text-gold p-2 rounded-md hover:bg-gold-light/30 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Improved styling */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/98 z-40 transition-transform duration-300 transform lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: scrolled ? '57px' : '73px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <Link 
            to="/" 
            className="font-medium link-hover" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium link-hover" 
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/products" 
            className="font-medium link-hover" 
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/contact" 
            className="font-medium link-hover" 
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
