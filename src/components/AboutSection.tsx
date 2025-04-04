
import React from 'react';
import { Code, Globe, Shield, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-neon-blue" />,
      title: "Web3 Experts",
      description: "Deep expertise in blockchain technology, NFTs, and decentralized applications."
    },
    {
      icon: <Zap className="w-6 h-6 text-neon-purple" />,
      title: "Innovative Strategies",
      description: "Cutting-edge marketing approaches tailored for the crypto and blockchain space."
    },
    {
      icon: <Code className="w-6 h-6 text-neon-cyan" />,
      title: "Technical Excellence",
      description: "Strong technical background ensuring quality implementation of Web3 projects."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Trusted Partners",
      description: "Reliable collaborators with established partnerships in the blockchain ecosystem."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-lighter relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-300">
            ParrotBamboo is a dynamic Web3 agency at the forefront of blockchain innovation. We combine technical expertise with creative marketing strategies to help crypto and blockchain ventures thrive in this rapidly evolving digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-6 hover-scale"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-dark glow-border">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
