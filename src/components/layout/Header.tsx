import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pest Detection', path: '/pest-detection' },
    { name: 'Pest Library', path: '/pest-library' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Precision Ag', path: '/precision-agriculture' },
    { name: 'Community', path: '/community' },
    { name: 'Roadmap', path: '/roadmap' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf 
              size={32} 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`} 
            />
            <span 
              className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
            >
              AgriGuard AI
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="ml-2 px-5 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Try Now
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 right-0 animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md ${
                  location.pathname === link.path
                    ? 'text-primary-600 bg-primary-50 font-medium'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="block w-full text-center mt-4 px-5 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Try Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};