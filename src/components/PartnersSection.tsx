
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

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
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-neon-yellow/20 via-transparent to-neon-blue/20"></div>
      </motion.div>

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
          
          <motion.div className="flex justify-center mt-8">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                y: [0, -5, 0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Handshake size={48} className="text-neon-yellow mb-6" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We collaborate with leading projects and platforms across the blockchain ecosystem to deliver exceptional results
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className={`backdrop-blur-sm rounded-xl p-5 flex items-center justify-center h-28 transition-all duration-300 ${
                hoveredIndex === index ? 'border-neon-yellow shadow-lg shadow-neon-yellow/20' : 'border-neon-yellow/20'
              } border bg-gradient-to-br from-dark/80 to-dark-lighter/80`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px 0 rgba(242, 183, 5, 0.2)'
              }}
              animate={hoveredIndex === index ? { 
                y: -10,
                transition: { duration: 0.3 }
              } : {}}
            >
              <motion.div 
                className="flex justify-center items-center w-full h-full"
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
              >
                <p className={`font-semibold text-center text-lg ${
                  hoveredIndex === index ? 'text-neon-yellow' : 'text-white'
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
