
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const PartnersSectionHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-12">
      <motion.span 
        className="inline-block px-6 py-2 rounded-full bg-neon-blue/15 text-neon-blue text-sm font-semibold mb-4 border border-neon-blue/30"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('partnersTitle')}
      </motion.span>
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('partnersTitle')}
      </motion.h2>
      
      <motion.div 
        className="w-32 h-1.5 bg-gradient-to-r from-neon-yellow to-neon-blue mx-auto mb-8"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      ></motion.div>
      
      <motion.p
        className="text-gray-300 max-w-3xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {t('partnersSubtitle')}
      </motion.p>
    </div>
  );
};

export default PartnersSectionHeader;
