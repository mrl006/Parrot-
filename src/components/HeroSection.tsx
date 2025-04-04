
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20 overflow-hidden relative">
      {/* Circuit background overlay */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-neon-blue/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="neon-text">Revolutionizing</span>
            <span className="block mt-2">the Digital Landscape</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium flex items-center justify-center gap-2 hover-scale"
            >
              Our Services <ArrowRight size={16} />
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-neon-purple/50 rounded-full text-white font-medium hover:bg-neon-purple/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-glow"></div>
        </div>
        <span className="mt-2 text-sm text-gray-400">Scroll</span>
      </div>
    </section>
  );
}
