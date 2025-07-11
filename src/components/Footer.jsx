import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' }
    ],
    'Services': [
      { label: 'Academic Writing', href: '#services' },
      { label: 'Research Support', href: '#services' },
      { label: 'Proofreading', href: '#services' },
      { label: 'Design Services', href: '#services' }
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">
                Lewis Grant<span className="text-[#3366ff]">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Elevating academic excellence through premium writing, research, and design services. 
              Trusted by students and researchers worldwide.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Available for projects worldwide</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 text-[#3366ff]">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors cursor-hover"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {currentYear} Lewis Grant. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Crafted with excellence</span>
              <Heart className="w-4 h-4 text-[#3366ff] animate-pulse" />
              <span>by Lewis Grant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
