import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Professor of Computer Science",
    quote: "Outstanding research contribution and exceptional analytical skills. A true asset to any academic team."
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Senior Software Engineer",
    quote: "Delivered complex projects with precision and creativity. Their technical expertise is truly impressive."
  },
  {
    id: 3,
    name: "Prof. Emily Chen",
    role: "Department Head, Data Science",
    quote: "Innovative thinking and meticulous attention to detail. A remarkable researcher and collaborator."
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Research Director",
    quote: "Consistently produces high-quality work with deep insights. A pleasure to work with on challenging projects."
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    role: "Associate Professor",
    quote: "Excellent communication skills and thorough understanding of complex concepts. Highly recommended."
  },
  {
    id: 6,
    name: "David Kim",
    role: "Technical Lead",
    quote: "Brings fresh perspectives and innovative solutions to every project. A true problem solver."
  },
  {
    id: 7,
    name: "Prof. Amanda White",
    role: "Research Supervisor",
    quote: "Demonstrates exceptional dedication and produces work of the highest academic standards."
  },
  {
    id: 8,
    name: "Robert Johnson",
    role: "Industry Consultant",
    quote: "Bridges the gap between theory and practice beautifully. Their work has real-world impact."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Testimonials from colleagues, professors, and industry professionals
          </p>
        </div>

        <div 
          className="relative max-h-80 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 hover:border-blue-accent/50 hover:shadow-2xl hover:shadow-blue-accent/10 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Quote className="w-8 h-8 text-blue-accent opacity-70" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6 font-medium">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-accent to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-accent scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
