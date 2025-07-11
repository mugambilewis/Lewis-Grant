import React from 'react';
import {
  BookOpen,
  Search,
  FileText,
  Edit,
  BarChart,
  Palette,
  ArrowRight,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Academic Writing',
      description:
        'Comprehensive academic papers, essays, and research articles tailored to your specific requirements and academic level.',
      features: ['Research Papers', 'Essays & Dissertations', 'Literature Reviews', 'Case Studies'],
    },
    {
      icon: Search,
      title: 'Research Support',
      description:
        'In-depth research assistance including data collection, analysis, and interpretation for your academic projects.',
      features: ['Data Collection', 'Statistical Analysis', 'Research Methodology', 'Source Verification'],
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description:
        'Clear, precise technical writing for scientific papers, manuals, and specialized documentation.',
      features: ['Scientific Papers', 'Technical Manuals', 'Lab Reports', 'Documentation'],
    },
    {
      icon: Edit,
      title: 'Proofreading & Editing',
      description:
        'Meticulous editing and proofreading services to ensure your work meets the highest academic standards.',
      features: ['Grammar & Style', 'Citation Formatting', 'Content Review', 'Final Polish'],
    },
    {
      icon: BarChart,
      title: 'Report Writing',
      description:
        'Professional business reports, research findings, and analytical documents for academic and corporate needs.',
      features: ['Business Reports', 'Research Findings', 'Executive Summaries', 'Proposals'],
    },
    {
      icon: Palette,
      title: 'Design Services',
      description:
        'Visual design and web development services to enhance your academic presentations and online presence.',
      features: ['Web Design', 'Infographics', 'Presentations', 'Visual Content'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premium <span className="text-[#3366ff]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive academic and professional services designed to elevate your work to the highest standards
          </p>
          <div className="w-24 h-1 bg-[#3366ff] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:bg-[#3366ff] transition-all duration-300 cursor-hover"
            >
              <div className="w-16 h-16 bg-[#3366ff] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white group-hover:text-[#3366ff] transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200 mb-6 transition-colors duration-300">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-[#3366ff] group-hover:text-white transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-transparent border-2 border-[#3366ff] group-hover:border-white text-[#3366ff] group-hover:text-white font-semibold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
