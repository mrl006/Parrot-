
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const partners = [
    "Binance", "Solv", "ApeBond", "Bybit", "ChainGPT", "Decubate", "BNB Chain", 
    "StarryNift", "KuCoin", "Hooked", "Kommunitas", "Bitget", "Biconomy", 
    "Toobit", "GT Protocol", "KIP", "MEXC Global", "Mogul", "Gate.io", 
    "Huobi", "BitMart", "Poolz", "GPTVerse", "LBank", "Probit Global", "Golden Paws"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="partners" 
      className="py-24 bg-dark-lighter relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            className="inline-block px-6 py-2 rounded-full bg-neon-yellow/20 text-neon-yellow text-sm font-semibold mb-4 border border-neon-yellow/30"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Partners
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">Trusted by Industry Leaders</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We collaborate with leading projects and platforms across the blockchain ecosystem to deliver exceptional results
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className={`bg-dark backdrop-blur-sm rounded-xl p-5 flex items-center justify-center h-28 transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-lg shadow-neon-yellow/20 border-neon-yellow' : 'border-neon-yellow/20'
              } border`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px 0 rgba(242, 183, 5, 0.3)'
              }}
            >
              <motion.div className="flex justify-center items-center w-full h-full">
                <p className={`font-semibold text-center text-lg ${
                  hoveredIndex === index ? 'text-white' : 'text-neon-yellow'
                }`}>
                  {partner}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
