import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Advanced Research Methodology Thesis',
      category: 'Academic Writing',
      description: 'Comprehensive 150-page doctoral thesis on quantitative research methodologies in social sciences.',
      image: '/api/placeholder/400/250',
      tags: ['PhD Level', 'Research', 'Methodology'],
      stats: { pages: 150, citations: 200, grade: 'A+' }
    },
    {
      title: 'Corporate Sustainability Report',
      category: 'Technical Writing',
      description: 'Annual sustainability report for Fortune 500 company analyzing environmental impact and CSR initiatives.',
      image: '/api/placeholder/400/250',
      tags: ['Corporate', 'Analysis', 'Sustainability'],
      stats: { pages: 85, stakeholders: 1000, impact: 'High' }
    },
    {
      title: 'Medical Journal Publication',
      category: 'Research Support',
      description: 'Peer-reviewed research paper on innovative treatment protocols published in leading medical journal.',
      image: '/api/placeholder/400/250',
      tags: ['Medical', 'Peer-Reviewed', 'Innovation'],
      stats: { citations: 150, impact: '8.5', status: 'Published' }
    },
    {
      title: 'Academic Portfolio Website',
      category: 'Web Design',
      description: 'Modern, responsive website for university professor showcasing research and publications.',
      image: '/api/placeholder/400/250',
      tags: ['Web Design', 'Academic', 'Responsive'],
      stats: { pages: 12, visitors: 5000, rating: '5.0' }
    },
    {
      title: 'Grant Proposal Success',
      category: 'Proposal Writing',
      description: '$2.5M NSF research grant proposal for interdisciplinary climate change research project.',
      image: '/api/placeholder/400/250',
      tags: ['Grant Writing', 'NSF', 'Climate Research'],
      stats: { funding: '$2.5M', success: '100%', duration: '5 years' }
    },
    {
      title: 'International Conference Paper',
      category: 'Academic Writing',
      description: 'Keynote presentation paper for international AI conference attended by 3000+ researchers.',
      image: '/api/placeholder/400/250',
      tags: ['Conference', 'AI Research', 'Keynote'],
      stats: { attendees: 3000, downloads: 1200, rating: '4.9' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-[#3366ff]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of exceptional academic and professional work that demonstrates excellence and impact
          </p>
          <div className="w-24 h-1 bg-[#3366ff] mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-hover"
            >
              <div className="h-48 bg-gradient-to-br from-[#3366ff] to-purple-600 flex items-center justify-center">
                <FileText className="w-16 h-16 text-white opacity-50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#3366ff] text-white text-sm rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-[#3366ff] transition-colors cursor-hover" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-[#3366ff]">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#3366ff] text-white font-semibold rounded-lg hover:bg-[#2855cc] transform hover:scale-105 transition-all duration-200 cursor-hover">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
