import React from 'react';
import { Award, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering work that exceeds academic standards and expectations.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building lasting relationships through reliable, confidential, and professional service.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters - from research accuracy to flawless presentation.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-[#3366ff]">Lewis Grant</span>
          </h2>
          <div className="w-24 h-1 bg-[#3366ff] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Dedicated Academic Professional with a Passion for Excellence
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                With over 8 years of experience in academic writing and research, I have dedicated my career to helping students and researchers achieve their academic goals through high-quality, impactful work.
              </p>
              <p>
                My journey began during my graduate studies, where I discovered my passion for transforming complex ideas into clear, compelling academic content. Since then, I have worked with hundreds of clients across diverse fields, from undergraduate assignments to doctoral dissertations.
              </p>
              <p>
                I believe that great academic work is not just about meeting requirements—it's about creating content that contributes meaningfully to your field of study while showcasing your unique perspective and expertise.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 cursor-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#3366ff] rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
