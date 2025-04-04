
import React, { useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Kemal Bora",
      role: "Co-Founder",
      bio: "Expert in community management and strategic partnerships with extensive leadership experience in the Web3 space. Driving ParrotBamboo's vision to revolutionize blockchain marketing.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Serhat Coşkun",
      role: "Co-Founder",
      bio: "Specializes in marketing strategy and technical support, with a proven track record of facilitating growth through successful fundraising campaigns and strategic partnerships.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Gizem Meltem",
      role: "Business Developer",
      bio: "Proficient in technology education and global partnerships. Skilled at event engagement and building connections that drive business growth in the blockchain ecosystem.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Murali M.",
      role: "Motion Graphics & Video Designer",
      bio: "Creative powerhouse with expertise in AI-driven design. Creates compelling visual content that helps blockchain projects communicate their vision effectively.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
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
    <section id="team" className="section-padding bg-dark-lighter relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Our team combines deep expertise in Web3, blockchain technology, and digital marketing to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`glassmorphism rounded-xl overflow-hidden transition-all duration-300 ${
                expandedMember === index ? 'transform scale-105 z-10' : 'hover-scale'
              }`}
              onClick={() => toggleMember(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-neon-purple">{member.role}</p>
                </div>
              </div>
              
              <div className={`p-6 transition-all duration-300 ${
                expandedMember === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'
              }`}>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Click on team member cards to learn more</p>
        </div>
      </div>
    </section>
  );
}
