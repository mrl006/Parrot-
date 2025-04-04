
import React from 'react';

export default function PartnersSection() {
  const partners = [
    "Binance", "Solv", "ApeBond", "Bybit", "ChainGPT", "Decubate", "BNB Chain", 
    "StarryNift", "KuCoin", "Hooked", "Kommunitas", "Bitget", "Biconomy", 
    "Toobit", "GT Protocol", "KIP", "MEXC Global", "Mogul", "Gate.io", 
    "Huobi", "BitMart", "Poolz", "GPTVerse", "LBank", "Probit Global", "Golden Paws"
  ];

  return (
    <section id="partners" className="section-padding bg-dark relative overflow-hidden">
      {/* Background animations for blockchain/web3/AI theme */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-yellow/5 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Web3/Blockchain themed animated particles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="web3-particle" 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Blockchain animation */}
      <div className="absolute top-10 right-10 blockchain-animation opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0L53.4 8V24L40 32L26.6 24V8L40 0Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M13.3 24L26.7 32V48L13.3 56L0 48V32L13.3 24Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M66.7 24L80 32V48L66.7 56L53.3 48V32L66.7 24Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M40 48L53.4 56V72L40 80L26.6 72V56L40 48Z" fill="#0083CA" fillOpacity="0.8" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-yellow/10 text-neon-yellow text-sm font-medium mb-4">Our Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-3 flex items-center justify-center h-24 hover-scale"
            >
              <div className="flex justify-center items-center w-full h-full">
                <p className="font-semibold text-center partner-logo text-neon-yellow">{partner}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI-themed animation element */}
        <div className="mt-16 relative">
          <div className="h-1 w-full bg-gradient-to-r from-neon-yellow/0 via-neon-yellow/30 to-neon-yellow/0"></div>
          <div className="absolute left-1/2 top-0 w-8 h-8 -mt-4 -ml-4 rounded-full bg-dark border border-neon-yellow/50 flex items-center justify-center animate-spin-slow">
            <div className="w-3 h-3 bg-neon-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
