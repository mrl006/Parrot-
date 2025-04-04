
import React, { useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../hooks/useLanguage';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    binance?: string;
  };
}

export default function TeamSection() {
  const { t } = useLanguage();
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Kemal Bora",
      role: "Co-Founder",
      bio: "Expert in community management and strategic partnerships with extensive leadership experience in the Web3 space. Driving ParrotBamboo's vision to revolutionize blockchain marketing.",
      image: "/lovable-uploads/e0c2ca26-8559-420d-aaff-43742a206063.png",
      social: {
        linkedin: "https://linkedin.com/in/kemalbora",
        twitter: "https://twitter.com/kemalbora",
        binance: "https://binance.com/en/live/u/kemalbora"
      }
    },
    {
      name: "Serhat Coşkun",
      role: "Co-Founder",
      bio: "Specializes in marketing strategy and technical support, with a proven track record of facilitating growth through successful fundraising campaigns and strategic partnerships.",
      image: "/lovable-uploads/61fcc672-d9d9-46f4-937d-ba02dc86c041.png",
      social: {
        linkedin: "https://linkedin.com/in/serhatcoskun",
        twitter: "https://twitter.com/serhatcoskun",
        binance: "https://binance.com/en/live/u/serhatcoskun"
      }
    },
    {
      name: "Gizem Meltem",
      role: "Business Developer",
      bio: "Proficient in technology education and global partnerships. Skilled at event engagement and building connections that drive business growth in the blockchain ecosystem.",
      image: "/lovable-uploads/7b9b3fe7-38d5-4f98-bd13-25d4fa762acf.png",
      social: {
        linkedin: "https://linkedin.com/in/gizemmeltem",
        twitter: "https://twitter.com/gizemmeltem",
        binance: "https://binance.com/en/live/u/gizemmeltem"
      }
    },
    {
      name: "Murali M.",
      role: "Motion Graphics & Video Designer",
      bio: "Creative powerhouse with expertise in AI-driven design. Creates compelling visual content that helps blockchain projects communicate their vision effectively.",
      image: "/lovable-uploads/43fda211-d474-412d-9613-218c14f9e954.png",
      social: {
        linkedin: "https://linkedin.com/in/muralim",
        twitter: "https://twitter.com/muralim",
        binance: "https://binance.com/en/live/u/muralim"
      }
    }
  ];
  
  const toggleMember = (index: number) => {
    if (expandedMember === index) {
      setExpandedMember(null);
    } else {
      setExpandedMember(index);
    }
  };

  return (
    <section id="team" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="absolute w-96 h-96 rounded-full bg-neon-purple/30 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-neon-blue/30 blur-3xl -bottom-20 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
            {t('teamTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('teamSubtitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Our team combines deep expertise in Web3, blockchain technology, and digital marketing to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className={`bg-transparent glassmorphism rounded-xl overflow-hidden transition-all duration-300 ${
                expandedMember === index ? 'transform scale-105 z-10 border-neon-purple' : 'border-white/10 hover:border-neon-blue/50'
              }`}
              onClick={() => toggleMember(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-neon-purple">{member.role}</p>
                </div>
              </div>
              
              <CardContent className={`transition-all duration-500 ease-in-out ${
                expandedMember === index ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0 overflow-hidden'
              }`}>
                <p className="text-gray-300 mb-5 text-sm">{member.bio}</p>
                
                <div className="flex space-x-4 items-center">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-dark/50 flex items-center justify-center hover:bg-neon-purple/20 transition-colors border border-neon-purple/30"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} className="text-neon-purple" />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-dark/50 flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/30"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={16} className="text-neon-blue" />
                    </a>
                  )}
                  
                  {member.social.binance && (
                    <a 
                      href={member.social.binance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-dark/50 flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/30"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${member.name}'s Binance profile`}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-neon-yellow"
                      >
                        <path d="M7.9999 0L5.8999 2.1L3.7999 4.2L1.6999 6.3L1.7999 8.4L3.7999 6.4L5.8999 8.5L3.7999 10.6L1.7999 8.6L1.6999 10.7L3.7999 12.8L5.8999 14.9L7.9999 17L10.0999 14.9L12.1999 12.8L14.2999 10.7L14.1999 8.6L12.1999 10.6L10.0999 8.5L12.1999 6.4L14.1999 8.4L14.2999 6.3L12.1999 4.2L10.0999 2.1L7.9999 0Z" fill="currentColor"/>
                        <path d="M10.0999 8.5L7.9999 10.6L5.8999 8.5L7.9999 6.4L10.0999 8.5Z" fill="currentColor"/>
                      </svg>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Click on team member cards to learn more
          </p>
        </div>
      </div>
    </section>
  );
}
