
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
          <Link 
            to="/" 
            className={cn(
              "font-medium transition-colors hover:bg-gold-light/80 px-4 py-2 rounded-md",
              location.pathname === "/" ? "text-gold" : "link-hover"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "font-medium transition-colors hover:bg-gold-light/80 px-4 py-2 rounded-md",
              location.pathname === "/about" ? "text-gold" : "link-hover"
            )}
          >
            About Us
          </Link>
          <Link 
            to="/products" 
            className={cn(
              "font-medium transition-colors hover:bg-gold-light/80 px-4 py-2 rounded-md",
              location.pathname === "/products" ? "text-gold" : "link-hover"
            )}
          >
            Products
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "font-medium transition-colors hover:bg-gold-light/80 px-4 py-2 rounded-md",
              location.pathname === "/contact" ? "text-gold" : "link-hover"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gold p-2 rounded-md hover:bg-gold-light/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Improved with solid background */}
      <div 
        className={cn(
          "fixed inset-0 bg-[#eee] z-40 transition-transform duration-300 transform lg:hidden shadow-lg",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: scrolled ? '57px' : '73px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full p-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact" }
          ].map((item, index) => (
            <Link 
              key={index}
              to={item.to} 
              className={cn(
                "font-medium text-xl w-full text-center py-4 mb-4 transition-all hover:bg-gold-light/80",
                location.pathname === item.to 
                  ? "text-gold-dark font-semibold bg-gold-light/40" 
                  : "text-gold-dark"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
