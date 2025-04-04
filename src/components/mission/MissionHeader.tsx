
import React from 'react';
import { motion } from 'framer-motion';

const MissionHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        className="inline-flex justify-center items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="inline-block px-6 py-2 rounded-full bg-neon-yellow/10 text-neon-yellow text-sm font-semibold border border-neon-yellow/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Mission
        </motion.span>
      </motion.div>
      
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        animate={{ 
          backgroundPosition: ['0% center', '200% center', '0% center']
        }}
        style={{ backgroundSize: '200% auto' }}
      >
        Driving Web3 Innovation Forward
      </motion.h2>
      
      <motion.div 
        className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-neon-purple mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default MissionHeader;
