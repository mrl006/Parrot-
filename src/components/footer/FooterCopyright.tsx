
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

interface FooterCopyrightProps {
  socialLinks: {
    linkTree: string;
    telegram: string;
    youtube: string;
    instagram: string;
  };
}

export default function FooterCopyright({ socialLinks }: FooterCopyrightProps) {
  const { t } = useLanguage();
  
  return (
    <>
      <motion.div 
        className="pt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ParrotBamboo. {t('allRightsReserved')}
        </p>
        <motion.div 
          className="mt-4 flex justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a 
            href={socialLinks.linkTree} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
            whileHover={{ y: -2 }}
          >
            {t('linkTree')}
          </motion.a>
          <motion.a 
            href={socialLinks.telegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
            whileHover={{ y: -2 }}
          >
            {t('telegram')}
          </motion.a>
          <motion.a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
            whileHover={{ y: -2 }}
          >
            {t('youtube')}
          </motion.a>
          <motion.a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
            whileHover={{ y: -2 }}
          >
            {t('instagram')}
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}
