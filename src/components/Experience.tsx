import React, { useState } from 'react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'job1',
    company: 'Company One',
    position: 'Senior Front-end Developer',
    duration: 'Jan 2022 - Present',
    description: [
      'Led the development of the company\'s flagship product, resulting in a 30% increase in user engagement.',
      'Implemented responsive design principles, ensuring seamless experiences across all devices.',
      'Collaborated with designers and back-end developers to implement new features and improvements.',
      'Mentored junior developers, providing code reviews and architectural guidance.'
    ]
  },
  {
    id: 'job2',
    company: 'Company Two',
    position: 'Front-end Developer',
    duration: 'Mar 2019 - Dec 2021',
    description: [
      'Developed and maintained multiple client-facing web applications using React and TypeScript.',
      'Improved application performance by 40% through code optimization and implementing lazy loading.',
      'Worked with a team of 5 developers to implement new features and fix bugs.',
      'Participated in daily standups, sprint planning, and retrospectives as part of an agile development team.'
    ]
  },
  {
    id: 'job3',
    company: 'Company Three',
    position: 'Junior Web Developer',
    duration: 'Jun 2017 - Feb 2019',
    description: [
      'Assisted in the development of responsive websites for various clients.',
      'Implemented UI components according to design specifications.',
      'Fixed bugs and improved website performance.',
      'Participated in code reviews and team meetings to discuss project progress and challenges.'
    ]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="border-l-2 border-gray-200 md:border-l-0 md:border-r-2">
                {experienceData.map((item) => (
                  <button
                    key={item.id}
                    className={`block w-full text-left px-6 py-4 focus:outline-none transition-colors ${
                      activeTab === item.id
                        ? 'border-blue-600 text-blue-600 md:border-r-2 md:-mr-0.5 font-medium'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.company}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              {experienceData
                .filter((item) => item.id === activeTab)
                .map((item) => (
                  <div key={item.id} className="animate-fadeIn">
                    <h3 className="text-xl font-bold text-gray-900">{item.position}</h3>
                    <p className="text-gray-600 mb-4">{item.duration}</p>
                    <ul className="space-y-3">
                      {item.description.map((point, index) => (
                        <li key={index} className="flex">
                          <span className="text-blue-600 mr-2">▹</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;