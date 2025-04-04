
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';

const AMAHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
        {t('amaEventHosting')}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-purple">
        {t('professionalEventHosting')}
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        {t('eventVisibilityDescription')}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
    </motion.div>
  );
};

export default AMAHeader;
