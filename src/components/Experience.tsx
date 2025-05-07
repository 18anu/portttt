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
    <></>
  );
};

export default Experience;
