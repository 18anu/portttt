import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Task Manager',
    description: 'A task manager website helps users organize, prioritize, and track tasks efficiently with features like deadlines, categories, reminders, and progress tracking for better productivity.',
    image: 'https://images.pexels.com/photos/8534228/pexels-photo-8534228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/18anu/task-manager',
    liveLink: ''
  },
  {
    id: 2,
    title: 'Map dude',
    description: 'Map Dude is a map based Api Website for tracking places, searching places and customising maps.',
    image: 'https://www.androidauthority.com/wp-content/uploads/2022/02/rotate-a-google-map-on-pc-or-mac-1.jpg.webp',
    technologies: ['React', 'Node.js', 'API', 'Tailwind CSS '],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application that displays current and forecasted weather data using a third-party API.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;