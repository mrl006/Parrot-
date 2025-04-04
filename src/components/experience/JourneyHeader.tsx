
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function JourneyHeader() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Animated circle */}
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            boxShadow: ["0 0 0px rgba(242,183,5,0.2)", "0 0 30px rgba(242,183,5,0.6)", "0 0 0px rgba(242,183,5,0.2)"]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-yellow to-neon-purple flex items-center justify-center"
        >
          <motion.div
            className="w-14 h-14 rounded-full bg-dark border border-neon-yellow/40 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <motion.div 
              className="w-8 h-8 rounded-full bg-neon-yellow/30"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-neon-yellow to-neon-cyan gradient-animate">{t('ourJourney')}</span>
      </motion.h2>
      
      <motion.div 
        className="w-48 h-1.5 bg-gradient-to-r from-neon-yellow via-neon-purple to-neon-cyan mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 192 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
      
      <motion.p
        className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {t('journeyDescription')}
      </motion.p>
    </motion.div>
  );
}
