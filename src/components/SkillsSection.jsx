import React from 'react';
import {
  PenTool,
  Search,
  FileText,
  CheckCircle,
  BarChart,
  Palette,
  Presentation,
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: PenTool,
      title: 'Academic Writing',
      level: 95,
      description: 'Essays, research papers, and scholarly articles',
    },
    {
      icon: Search,
      title: 'Research & Analysis',
      level: 92,
      description: 'Comprehensive literature reviews and data analysis',
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      level: 88,
      description: 'Clear, precise technical and scientific writing',
    },
    {
      icon: CheckCircle,
      title: 'Proofreading & Editing',
      level: 96,
      description: 'Meticulous attention to grammar and style',
    },
    {
      icon: BarChart,
      title: 'Report & Proposal Writing',
      level: 90,
      description: 'Business reports and research proposals',
    },
    {
      icon: Palette,
      title: 'Web & Graphics Design',
      level: 85,
      description: 'Visual design and web development',
    },
    {
      icon: Presentation,
      title: 'Visual Communication',
      level: 87,
      description: 'Presentations and infographic design',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core <span className="text-[#3366ff]">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set developed through years of academic excellence and professional practice
          </p>
          <div className="w-24 h-1 bg-[#3366ff] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#3366ff] rounded-lg flex items-center justify-center mr-4">
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {skill.description}
              </p>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[#3366ff] h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
