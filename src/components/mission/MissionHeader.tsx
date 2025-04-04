
import React from 'react';
import { motion } from 'framer-motion';

const MissionHeader: React.FC = () => {
  return (
    <div className="text-center mb-14">
      <motion.div
        className="inline-flex justify-center items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="inline-block px-8 py-2.5 rounded-full bg-dark-lighter text-neon-yellow text-sm font-semibold border border-neon-yellow/30 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(242, 183, 5, 0)",
              "0 0 15px rgba(242, 183, 5, 0.3)",
              "0 0 0px rgba(242, 183, 5, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Our Mission
        </motion.span>
      </motion.div>
      
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"
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
        className="h-1.5 bg-gradient-to-r from-neon-yellow to-neon-purple mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
    </div>
  );
};

export default MissionHeader;
