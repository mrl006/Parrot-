
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Milestone } from 'lucide-react';

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
      <div className="flex justify-center mb-4">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="inline-block bg-dark-lighter p-4 rounded-full border border-neon-yellow/20"
        >
          <Milestone size={32} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" />
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
