
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create interactive blockchain network animation
    const createNetworkEffect = () => {
      if (!heroRef.current) return;
      
      const networkContainer = heroRef.current;
      
      // Clear any existing elements
      const existingNodes = networkContainer.querySelectorAll('.network-node');
      existingNodes.forEach(node => node.remove());
      
      // Create network nodes
      for (let i = 0; i < 8; i++) {
        const node = document.createElement('div');
        node.classList.add('network-node');
        node.style.position = 'absolute';
        node.style.width = '4px';
        node.style.height = '4px';
        node.style.backgroundColor = i % 2 === 0 ? '#F2B705' : '#0083CA';
        node.style.borderRadius = '50%';
        node.style.top = `${Math.random() * 100}%`;
        node.style.left = `${Math.random() * 100}%`;
        node.style.boxShadow = `0 0 10px 2px ${i % 2 === 0 ? 'rgba(242, 183, 5, 0.3)' : 'rgba(0, 131, 202, 0.3)'}`;
        node.style.animation = `network-pulse ${3 + Math.random() * 2}s infinite`;
        node.style.animationDelay = `${Math.random() * 2}s`;
        node.style.zIndex = '1';
        
        networkContainer.appendChild(node);
      }
      
      // Connect some nodes with lines
      const nodes = networkContainer.querySelectorAll('.network-node');
      if (nodes.length >= 2) {
        for (let i = 0; i < nodes.length - 1; i++) {
          if (Math.random() > 0.3) continue; // Only create some connections
          
          const line = document.createElement('div');
          line.classList.add('node-connection');
          
          const node1 = nodes[i].getBoundingClientRect();
          const node2 = nodes[i+1].getBoundingClientRect();
          const container = networkContainer.getBoundingClientRect();
          
          // Calculate relative positions
          const x1 = (node1.left + node1.width/2) - container.left;
          const y1 = (node1.top + node1.height/2) - container.top;
          const x2 = (node2.left + node2.width/2) - container.left;
          const y2 = (node2.top + node2.height/2) - container.top;
          
          // Calculate distance and angle
          const dx = x2 - x1;
          const dy = y2 - y1;
          const distance = Math.sqrt(dx*dx + dy*dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          // Position and rotate line
          line.style.width = `${distance}px`;
          line.style.left = `${x1}px`;
          line.style.top = `${y1}px`;
          line.style.transformOrigin = '0 0';
          line.style.transform = `rotate(${angle}deg)`;
          
          networkContainer.appendChild(line);
        }
      }
      
      // Add data transfer animations
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          if (!heroRef.current) return;
          const dataLine = document.createElement('div');
          dataLine.classList.add('data-line');
          dataLine.style.width = '100%';
          dataLine.style.top = `${20 + Math.random() * 60}%`;
          dataLine.style.animationDelay = `${i * 1.5}s`;
          
          heroRef.current.appendChild(dataLine);
          
          // Remove after animation completes
          setTimeout(() => dataLine.remove(), 8000);
        }, i * 1500);
      }
    };
    
    // Initialize network effect
    createNetworkEffect();
    
    // Re-create effect on window resize
    const handleResize = () => {
      createNetworkEffect();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center hero-gradient pt-20 overflow-hidden relative"
      ref={heroRef}
    >
      {/* Enhanced circuit background overlay */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      {/* Web3/Blockchain themed animated elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-yellow/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Glowing accent points */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="led-glow"
          style={{
            backgroundColor: i % 2 === 0 ? '#F2B705' : '#0083CA',
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.7}s`
          }}
        ></div>
      ))}
      
      {/* Blockchain animation elements - enhanced */}
      <div className="absolute top-20 left-[10%] blockchain-animation opacity-40">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M30 10L40 20L30 30L20 20L30 10Z" fill="white" fillOpacity="0.3" />
          <circle cx="30" cy="30" r="2" fill="#F2B705" fillOpacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-[15%] blockchain-animation opacity-40" style={{ animationDelay: '1.5s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L30 10L20 20L10 10L20 0Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M5 15L15 25L5 35L0 30L5 15Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M35 15L40 30L35 35L25 25L35 15Z" fill="#0083CA" fillOpacity="0.8" />
          <circle cx="20" cy="20" r="2" fill="#0083CA" fillOpacity="0.9">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      {/* Enhanced Web3 particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="web3-particle" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.5
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="neon-text">Revolutionizing</span>
            <span className="block mt-2">the Digital Landscape</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-white font-medium flex items-center justify-center gap-2 hover-scale group relative overflow-hidden"
            >
              <span className="relative z-10">Our Services</span> 
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-neon-yellow/50 rounded-full text-white font-medium hover:bg-neon-yellow/10 transition-colors group"
            >
              Contact Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neon-yellow"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-neon-yellow rounded-full animate-pulse-glow"></div>
        </div>
        <span className="mt-2 text-sm text-gray-400">Scroll</span>
      </div>
    </section>
  );
}
