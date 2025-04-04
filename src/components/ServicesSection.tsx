
import React, { useState } from 'react';
import { MessageSquare, BarChart3, Link, Users, FileText, ChevronRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0);
  
  const services: Service[] = [
    {
      icon: <BarChart3 size={24} />,
      title: "Social Media Growth & Management",
      description: "Strategic growth and engagement across leading platforms in the Web3 space.",
      features: [
        "Twitter (X) community building and engagement",
        "Telegram group management and moderation",
        "YouTube channel optimization and content strategy",
        "Binance Square presence establishment",
        "Comprehensive social media analytics and reporting"
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AMA & Event Hosting",
      description: "Professional hosting and management of virtual events to increase project visibility.",
      features: [
        "X Space events with industry leaders",
        "Telegram AMA sessions with engaged communities",
        "Moderated panel discussions on blockchain topics",
        "Community Q&A sessions with project teams",
        "Post-event content distribution and amplification"
      ]
    },
    {
      icon: <Link size={24} />,
      title: "Corporate Partnerships & Listings",
      description: "Strategic partnerships and exchange listings to boost project credibility and reach.",
      features: [
        "Exchange listing acquisition and management",
        "Strategic partnership development with key industry players",
        "Partnership negotiation and relationship management",
        "Co-marketing opportunities with established projects",
        "Industry alliance building and management"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Brand Promotion",
      description: "Comprehensive brand building strategies tailored for Web3 projects.",
      features: [
        "Integrated marketing campaigns across platforms",
        "Creative social media content creation",
        "Brand identity development and refinement",
        "Community-focused promotional activities",
        "Brand awareness metrics and performance tracking"
      ]
    },
    {
      icon: <FileText size={24} />,
      title: "Content Creation",
      description: "Expert development of technical and marketing content for blockchain projects.",
      features: [
        "Whitepaper writing and editing",
        "Gitbook documentation creation",
        "Marketing materials development",
        "Technical article writing for Web3 concepts",
        "Social media content calendars and creation"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark relative">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Tabs */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-3 ${
                    activeService === index 
                      ? 'glassmorphism border-l-4 border-neon-purple' 
                      : 'hover:bg-dark-lighter'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeService === index 
                      ? 'bg-neon-purple text-white' 
                      : 'bg-dark-lighter text-gray-300'
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`font-medium ${activeService === index ? 'text-white' : 'text-gray-300'}`}>
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Details */}
          <div className="lg:col-span-3 glassmorphism rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 neon-text">{services[activeService].title}</h3>
              <p className="text-gray-300">{services[activeService].description}</p>
            </div>
            
            <div className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-neon-purple mt-1">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium hover-scale"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
