
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

export default function FooterQuickLinks() {
  const { t } = useLanguage();
  
  const links = [
    { title: t('homeLink'), href: '#home' },
    { title: t('aboutUsLink'), href: '#about' },
    { title: t('servicesLink'), href: '#services' },
    { title: t('teamLink'), href: '#team' },
    { title: t('partnersLink'), href: '#partners' }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-lg font-semibold mb-6 text-neon-yellow">{t('quickLinks')}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <motion.li key={link.href}
            variants={footerLinkVariants}
            initial="initial"
            whileHover="hover"
          >
            <a 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
