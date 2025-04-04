
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const footerLinkVariants = {
  initial: { opacity: 0.8, y: 0 },
  hover: { 
    opacity: 1, 
    y: -2,
    transition: { 
      duration: 0.2 
    }
  }
};

export default function FooterServices() {
  const { t } = useLanguage();
  
  const services = [
    t('socialMediaGrowth'),
    t('amaEventHosting'),
    t('corporatePartnerships'),
    t('brandPromotion'),
    t('contentCreation')
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-6 text-neon-blue">{t('servicesHeader')}</h3>
      <ul className="space-y-4">
        {services.map((service) => (
          <motion.li key={service}
            variants={footerLinkVariants}
            initial="initial"
            whileHover="hover"
          >
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {service}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
