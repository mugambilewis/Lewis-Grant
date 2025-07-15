
import { Mail, Phone, ArrowDown, Star, Users, Code } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);



  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center mb-2">
        {Icon && <Icon className="w-8 h-8 text-primary mr-2" />}
        <span className="text-3xl font-bold gradient-text">{count}+</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3366ff] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-[#3366ff] relative">
                Lewis Grant
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3366ff] opacity-30 rounded"></div>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Elevating Academic Excellence through Writing, Research & Design.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Helping students and researchers achieve top-level results with clear, precise, and impactful work that meets the highest academic standards.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-[#3366ff]" />
                <span>lewisgrant.tech@gmail.com</span>
              </div>
              
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-[#3366ff] text-white font-semibold rounded-lg hover:bg-[#2855cc] transform hover:scale-105 transition-all duration-200 cursor-hover"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-[#3366ff] text-[#3366ff] font-semibold rounded-lg hover:bg-[#3366ff] hover:text-white transform hover:scale-105 transition-all duration-200 cursor-hover"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 w-80 h-80 lg:w-88 lg:h-88  border-4 border-[#3366ff] opacity-50 animate-pulse"></div>
              <div className="absolute inset-2 w-76 h-76 lg:w-80 lg:h-80  border-2 border-[#3366ff] opacity-30"></div>

              {/* Profile Image */}
              <div className="w-80 h-80 lg:w-88 lg:h-88 overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-[#3366ff] to-purple-600">
                
                  <img className="w-full h-full object-cover" alt="Lewis Grant"
                    src="/Lewisgrant Academics.png" />
                
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#3366ff] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                📚
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#3366ff] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
                style={{ animationDelay: '1s' }}
              >
                ✍️
              </div>
              <div
                className="absolute top-1/2 -left-8 w-10 h-10 bg-[#3366ff] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
                style={{ animationDelay: '2s' }}
              >
                🎨
              </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 pt-8 bottom-4 dark:text-white">
          <AnimatedCounter end={100} label="Projects" icon={Code} />
          <AnimatedCounter end={30} label="Happy Clients" icon={Users} />
          <AnimatedCounter end={3} label="Years Experience" icon={Star} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          
          <ArrowDown className="w-6 h-6 text-[#3366ff] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
