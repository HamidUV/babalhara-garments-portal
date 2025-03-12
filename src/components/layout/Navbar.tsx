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
      setScrolled(window.scrollY > 10);
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
      <div className="container-custom flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-gold">Bab AlHara</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {["/", "/about", "/products", "/contact"].map((path, index) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "font-medium px-4 py-2 rounded-md transition-all duration-200",
                location.pathname === path
                  ? "text-gold bg-gray-200"
                  : "text-black hover:text-gold hover:bg-gray-100"
              )}
            >
              {['Home', 'About Us', 'Products', 'Contact'][index]}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gold p-2 rounded-md hover:bg-gold-light/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-md z-40 transform transition-transform duration-300 shadow-lg",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gold/40">
          <h2 className="text-lg font-bold text-gold">Menu</h2>
          <button
            className="p-2 text-white hover:text-gold transition"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col items-start p-4 space-y-2">
          {["/", "/about", "/products", "/contact"].map((path, index) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "w-full text-left py-3 px-4 text-lg font-semibold rounded-md transition-all duration-200",
                location.pathname === path
                  ? "border-l-4 border-gold/40 bg-black/60 text-gold"
                  : "text-white hover:text-gold hover:bg-black/30"
              )}
              onClick={toggleMenu}
            >
              {['Home', 'About Us', 'Products', 'Contact'][index]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
