import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600 mt-1">Anuradha Pandey</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
              Front-end Developer & Designer
            </h2>
            
            <p className="text-gray-600 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Currently, I'm focused on building 
              accessible, human-centered products at [Company].
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-80 h-80 bg-blue-600 rounded-full absolute -top-4 -right-4"></div>
            <div className="w-80 h-80 bg-white rounded-full shadow-lg overflow-hidden relative z-10">
              {/* Replace this with your actual profile image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;