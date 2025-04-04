
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20 overflow-hidden relative">
      {/* Circuit background overlay */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      {/* Web3/Blockchain themed animated elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-yellow/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-neon-blue/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Blockchain animation elements */}
      <div className="absolute top-20 left-[10%] blockchain-animation opacity-30">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M30 10L40 20L30 30L20 20L30 10Z" fill="white" fillOpacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-[15%] blockchain-animation opacity-30" style={{ animationDelay: '1.5s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L30 10L20 20L10 10L20 0Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M5 15L15 25L5 35L0 30L5 15Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M35 15L40 30L35 35L25 25L35 15Z" fill="#0083CA" fillOpacity="0.8" />
        </svg>
      </div>
      
      {/* Web3 particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="web3-particle" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3
          }}
        ></div>
      ))}
      
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
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-white font-medium flex items-center justify-center gap-2 hover-scale"
            >
              Our Services <ArrowRight size={16} />
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-neon-yellow/50 rounded-full text-white font-medium hover:bg-neon-yellow/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-neon-yellow rounded-full animate-glow"></div>
        </div>
        <span className="mt-2 text-sm text-gray-400">Scroll</span>
      </div>
    </section>
  );
}
