import React from 'react';
import { Code, Palette, BookOpen, Lightbulb } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm a passionate front-end developer with a strong background in creating 
            responsive, user-friendly web applications. With over 5 years of experience 
            in the field, I've worked on projects ranging from simple landing pages to 
            complex enterprise applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in JavaScript, React, and modern CSS techniques. My approach 
            combines technical expertise with an eye for design, ensuring that the 
            applications I build are not only functional but also visually appealing 
            and intuitive to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            icon={<Code size={32} />} 
            title="Web Development" 
            description="Building responsive and performant web applications using modern technologies and best practices."
          />
          <SkillCard 
            icon={<Palette size={32} />} 
            title="UI/UX Design" 
            description="Creating intuitive and visually appealing user interfaces with attention to detail and user experience."
          />
          <SkillCard 
            icon={<BookOpen size={32} />} 
            title="Continuous Learning" 
            description="Constantly improving my skills and staying up-to-date with the latest web development trends."
          />
          <SkillCard 
            icon={<Lightbulb size={32} />} 
            title="Problem Solving" 
            description="Finding efficient and elegant solutions to complex technical challenges."
          />
        </div>
      </div>
    </section>
  );
};

export default About;