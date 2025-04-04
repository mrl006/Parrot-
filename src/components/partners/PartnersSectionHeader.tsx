
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const PartnersSectionHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-8">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('partnersTitle')}
      </motion.h2>
      
      <motion.p
        className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('partnersSubtitle')}
      </motion.p>
    </div>
  );
};

export default PartnersSectionHeader;
