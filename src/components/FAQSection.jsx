import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What research areas do you specialize in?",
    answer: "I specialize in machine learning, artificial intelligence, data science, and computational linguistics. My research focuses on developing innovative algorithms and applications that bridge theoretical concepts with practical implementations."
  },
  {
    id: 2,
    question: "How can I collaborate with you on a project?",
    answer: "I'm always open to collaboration opportunities. You can reach out through the contact form or email me directly. I'm particularly interested in interdisciplinary projects that combine technology with real-world problem solving."
  },
  {
    id: 3,
    question: "Do you offer consulting services?",
    answer: "Yes, I provide consulting services for academic institutions, research organizations, and industry partners. My expertise includes research methodology, data analysis, algorithm development, and technical writing."
  },
  {
    id: 4,
    question: "What programming languages and tools do you use?",
    answer: "I work with Python, R, JavaScript, and various specialized tools depending on the project requirements. I'm experienced with machine learning frameworks, data visualization libraries, and cloud computing platforms."
  },
  {
    id: 5,
    question: "Can you help with academic writing and publications?",
    answer: "Absolutely! I have extensive experience in academic writing, peer review processes, and publication strategies. I can assist with manuscript preparation, research proposal writing, and grant applications."
  },
  {
    id: 6,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Small projects typically take 2-4 weeks, while larger research initiatives may span several months. I always provide detailed timelines during the initial consultation phase."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-dark-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Common questions about my research, services, and collaboration opportunities
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div key={faq.id} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-blue-accent/30">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-200 group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-white font-semibold text-lg pr-4 group-hover:text-blue-300 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-accent transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-accent transition-all duration-200" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-slate-700/50">
                      <p className="text-gray-300 leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Have a different question?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-accent hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-accent/25">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
