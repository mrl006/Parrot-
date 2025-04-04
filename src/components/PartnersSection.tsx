
import React from 'react';

export default function PartnersSection() {
  const partners = [
    "Binance", "Solv", "ApeBond", "Bybit", "ChainGPT", "Decubate", "BNB Chain", 
    "StarryNift", "KuCoin", "Hooked", "Kommunitas", "Bitget", "Biconomy", 
    "Toobit", "GT Protocol", "KIP", "MEXC Global", "Mogul", "Gate.io", 
    "Huobi", "BitMart", "Poolz", "GPTVerse", "LBank", "Probit Global", "Golden Paws"
  ];

  return (
    <section 
      id="partners" 
      className="py-24 bg-dark-lighter relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-6 py-2 rounded-full bg-neon-yellow/20 text-neon-yellow text-sm font-semibold mb-4 border border-neon-yellow/30">Our Partners</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">Trusted by Industry Leaders</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"></div>
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading projects and platforms across the blockchain ecosystem to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-dark/80 backdrop-blur-sm rounded-xl p-5 flex items-center justify-center h-28 transition-all duration-300 hover:scale-105 border border-neon-yellow/20 hover:border-neon-yellow/60"
            >
              <div className="flex justify-center items-center w-full h-full">
                <p className="font-semibold text-center text-neon-yellow text-lg">
                  {partner}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
