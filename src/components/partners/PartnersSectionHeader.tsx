
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const PartnersSectionHeader = () => {
  return (
    <div className="mb-8 text-center">
      <motion.span 
        className="inline-block px-4 py-1 rounded-full bg-neon-yellow/20 text-neon-yellow text-sm font-semibold mb-3 border border-neon-yellow/30"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Partners
      </motion.span>
      
      <motion.div className="flex items-center justify-center gap-2 mb-2">
        <motion.h2 
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">Elite Blockchain Partnerships</span>
        </motion.h2>
        <Handshake size={28} className="text-neon-yellow" />
      </motion.div>
      
      <motion.div 
        className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-4"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default PartnersSectionHeader;
