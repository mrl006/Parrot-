
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function JourneyHeader() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Animated circle */}
      <div className="flex justify-center mb-4">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            boxShadow: ["0 0 0px rgba(242,183,5,0.2)", "0 0 30px rgba(242,183,5,0.6)", "0 0 0px rgba(242,183,5,0.2)"]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-14 h-14 rounded-full bg-neon-yellow/20 border border-neon-yellow/40"
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-neon-yellow/30 mx-auto mt-2"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.4, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>
      
      <motion.h3 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue gradient-animate">{t('ourJourney')}</span>
      </motion.h3>
      
      <motion.div 
        className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-neon-blue mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
      
      <motion.p
        className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Our growth journey from foundation to industry leadership
      </motion.p>
    </motion.div>
  );
}
