import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
{/*
  import { ThemeProvider } from '../contexts/ThemeProvider';
        */}

const Index = () => {
  return (
    
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <TestimonialsCarousel />
        <FAQSection />
        <Footer />
        <ScrollToTop />
      </div>
    
  );
};

export default Index;