
import React from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceSection() {
  const achievements: Achievement[] = [
    {
      icon: <Award className="text-neon-blue" size={24} />,
      title: "Major Projects",
      description: "Successfully represented and promoted top-tier blockchain ventures",
      value: "25+",
      label: "Projects"
    },
    {
      icon: <CheckCircle className="text-neon-purple" size={24} />,
      title: "X Space Events",
      description: "Hosted high-impact discussions with industry leaders",
      value: "100+",
      label: "Events"
    },
    {
      icon: <Calendar className="text-neon-cyan" size={24} />,
      title: "Years Experience",
      description: "Deep expertise in the Web3 and blockchain industry",
      value: "5+",
      label: "Years"
    }
  ];
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Binance Launchpad Partnership",
      description: "Represented multiple Binance Launchpad projects, delivering comprehensive marketing and community management."
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology."
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem."
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-lighter relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Our Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Track Record</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-8 text-center hover-scale"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-dark glow-border">
                  {achievement.icon}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-4xl font-bold mb-1 neon-text">{achievement.value}</h3>
                <p className="text-sm text-gray-400">{achievement.label}</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h3 className="text-2xl font-bold mb-12 text-center">Our Journey</h3>
        
        <div className="relative max-w-3xl mx-auto pb-12">
          {/* Center line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-neon-purple/20"></div>
          
          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative mb-20 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
            >
              <div className="timeline-circle"></div>
              
              <div className={`glassmorphism rounded-xl p-6 ${
                index % 2 === 0 
                  ? 'ml-8 lg:ml-0 lg:mr-8 lg:text-right' 
                  : 'ml-8'
              } relative ${index % 2 === 0 ? 'lg:left-timeline' : 'lg:right-timeline'}`}>
                <span className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-3">
                  {milestone.year}
                </span>
                <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
