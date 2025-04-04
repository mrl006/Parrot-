
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
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-yellow/10 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-neon-blue/10 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Advanced Web3/Blockchain themed animated particles */}
      {[...Array(18)].map((_, i) => (
        <div 
          key={i}
          className="web3-particle" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Blockchain network animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute w-4 h-4 rounded-full bg-neon-yellow animate-pulse"
            style={{
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {/* Connection lines */}
            {i < 6 && (
              <div 
                className="node-connection"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
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
          <span className="inline-block px-6 py-2 rounded-full bg-neon-yellow/20 text-neon-yellow text-sm font-semibold mb-4 glow-border">Our Partners</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Trusted by Industry Leaders</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"></div>
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading projects and platforms across the blockchain ecosystem to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Floating blockchain elements */}
          <div className="absolute -top-10 -left-10 blockchain-animation opacity-40">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0L53.3 10L40 20L26.7 10L40 0Z" fill="#F2B705" fillOpacity="0.9" />
              <path d="M13.3 20L26.7 30L13.3 40L0 30L13.3 20Z" fill="#0083CA" fillOpacity="0.9" />
              <path d="M66.7 20L80 30L66.7 40L53.3 30L66.7 20Z" fill="#F2B705" fillOpacity="0.9" />
              <path d="M40 40L53.3 50L40 60L26.7 50L40 40Z" fill="#0083CA" fillOpacity="0.9" />
              <circle cx="40" cy="30" r="3" fill="#FFFFFF" fillOpacity="0.9">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="absolute -bottom-10 -right-10 blockchain-animation opacity-40" style={{ animationDelay: '1.5s' }}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L66.7 10V30L50 40L33.3 30V10L50 0Z" fill="#0083CA" fillOpacity="0.9" />
              <path d="M16.7 30L33.3 40V60L16.7 70L0 60V40L16.7 30Z" fill="#F2B705" fillOpacity="0.9" />
              <path d="M83.3 30L100 40V60L83.3 70L66.7 60V40L83.3 30Z" fill="#0083CA" fillOpacity="0.9" />
              <path d="M50 60L66.7 70V90L50 100L33.3 90V70L50 60Z" fill="#F2B705" fillOpacity="0.9" />
              <circle cx="50" cy="50" r="4" fill="#FFFFFF" fillOpacity="0.9">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Enhanced partners grid with more visual interest */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="partner-item glassmorphism rounded-xl p-5 flex items-center justify-center h-28 transition-all duration-500 opacity-0 hover:scale-110 hover:shadow-[0_0_25px_rgba(242,183,5,0.4)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center items-center w-full h-full relative overflow-hidden group">
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/0 to-neon-blue/0 group-hover:from-neon-yellow/20 group-hover:to-neon-blue/20 transition-all duration-500"></div>
                  
                  {/* Partner name with improved styling */}
                  <p className="font-semibold text-center text-neon-yellow group-hover:text-white transition-colors duration-300 text-lg">
                    {partner}
                  </p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-yellow/40 opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-blue/40 opacity-0 group-hover:opacity-100 transition-all"></div>
                  
                  {/* Pulsing effect on hover */}
                  <div className="absolute inset-0 bg-neon-yellow/0 group-hover:bg-neon-yellow/5 transition-all duration-500 group-hover:scale-105 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced AI/Blockchain themed animation element */}
        <div className="mt-24 relative">
          <div className="h-1 w-full bg-gradient-to-r from-neon-yellow/0 via-neon-yellow/40 to-neon-yellow/0"></div>
          <div className="absolute left-1/2 top-0 w-16 h-16 -mt-8 -ml-8 rounded-full bg-dark border-2 border-neon-yellow/50 flex items-center justify-center animate-spin-slow">
            <div className="w-6 h-6 bg-neon-yellow rounded-full"></div>
          </div>
          
          {/* Data flow animation */}
          <div className="absolute top-0 left-0 w-full">
            {[...Array(6)].map((_, i) => (
              <div 
                key={`data-${i}`} 
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-neon-yellow/30 to-transparent animate-data-flow" 
                style={{
                  top: `${i * 4}px`,
                  animationDuration: `${4 + i}s`,
                  animationDelay: `${i * 0.8}s`,
                  opacity: 0
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
