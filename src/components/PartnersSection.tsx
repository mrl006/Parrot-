
import React, { useEffect, useRef } from 'react';

export default function PartnersSection() {
  const partners = [
    "Binance", "Solv", "ApeBond", "Bybit", "ChainGPT", "Decubate", "BNB Chain", 
    "StarryNift", "KuCoin", "Hooked", "Kommunitas", "Bitget", "Biconomy", 
    "Toobit", "GT Protocol", "KIP", "MEXC Global", "Mogul", "Gate.io", 
    "Huobi", "BitMart", "Poolz", "GPTVerse", "LBank", "Probit Global", "Golden Paws"
  ];

  // Ref for animation
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const partnerElements = document.querySelectorAll('.partner-item');
    partnerElements.forEach((el) => observer.observe(el));

    return () => {
      partnerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="partners" 
      className="section-padding bg-dark relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Enhanced background animations */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neon-yellow/5 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Advanced Web3/Blockchain themed animated particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="web3-particle" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Blockchain network animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-neon-yellow animate-pulse"
            style={{
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {/* Connection lines */}
            {i < 4 && (
              <div 
                className="absolute h-px bg-gradient-to-r from-neon-yellow/50 to-neon-blue/50"
                style={{
                  width: `${Math.random() * 150 + 50}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  transformOrigin: 'left center'
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-yellow/10 text-neon-yellow text-sm font-medium mb-4">Our Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We collaborate with leading projects and platforms across the blockchain ecosystem
          </p>
        </div>

        <div className="relative">
          {/* Floating blockchain elements */}
          <div className="absolute -top-10 -left-10 blockchain-animation opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
              <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#0083CA" fillOpacity="0.8" />
              <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
              <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#0083CA" fillOpacity="0.8" />
            </svg>
          </div>
          <div className="absolute -bottom-10 -right-10 blockchain-animation opacity-20" style={{ animationDelay: '1.5s' }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0L53.4 8V24L40 32L26.6 24V8L40 0Z" fill="#0083CA" fillOpacity="0.8" />
              <path d="M13.3 24L26.7 32V48L13.3 56L0 48V32L13.3 24Z" fill="#F2B705" fillOpacity="0.8" />
              <path d="M66.7 24L80 32V48L66.7 56L53.3 48V32L66.7 24Z" fill="#0083CA" fillOpacity="0.8" />
              <path d="M40 48L53.4 56V72L40 80L26.6 72V56L40 48Z" fill="#F2B705" fillOpacity="0.8" />
            </svg>
          </div>

          {/* Redesigned partners grid with more visual interest */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="partner-item glassmorphism rounded-xl p-4 flex items-center justify-center h-24 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(242,183,5,0.3)] opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center items-center w-full h-full relative overflow-hidden group">
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/0 to-neon-blue/0 group-hover:from-neon-yellow/10 group-hover:to-neon-blue/10 transition-all duration-300"></div>
                  
                  {/* Partner name with improved styling */}
                  <p className="font-medium text-center text-neon-yellow group-hover:text-white transition-colors duration-300">
                    {partner}
                  </p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-yellow/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-blue/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced AI/Blockchain themed animation element */}
        <div className="mt-20 relative">
          <div className="h-1 w-full bg-gradient-to-r from-neon-yellow/0 via-neon-yellow/40 to-neon-yellow/0"></div>
          <div className="absolute left-1/2 top-0 w-10 h-10 -mt-5 -ml-5 rounded-full bg-dark border border-neon-yellow/50 flex items-center justify-center animate-spin-slow">
            <div className="w-4 h-4 bg-neon-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
