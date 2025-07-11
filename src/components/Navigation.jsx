import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Menu, X } from 'lucide-react';

{/**import { useTheme } from '../contexts/useTheme'; */}

const Navigation = () => {
  {/**  const { theme, toggleTheme } = useTheme();*/}
 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
       
      window.history.pushState(null, '', {sectionId});

      closeMenu();
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Lewis Grant<span className="text-[#3366ff]">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#3366ff] dark:hover:text-[#3366ff] transition-colors duration-200 cursor-hover"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          
          {/* Conatct Us + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700  bg-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
            {/* Mobile Navigation */}
          {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col space-y-3 bg-white">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="px-4 py-2 text-left bg-white text-gray-700 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
           
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
