
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const PartnersSectionHeader = () => {
  return (
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
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">Elite Blockchain Partnerships</span>
      </motion.h2>
      
      <motion.div 
        className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
      
      <motion.div className="flex justify-center mt-8">
        <Handshake size={48} className="text-neon-yellow mb-6" />
      </motion.div>
      
      <motion.p 
        className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        We collaborate with leading blockchain projects and platforms across the ecosystem to drive innovation and deliver exceptional value
      </motion.p>
    </div>
  );
};

export default PartnersSectionHeader;
