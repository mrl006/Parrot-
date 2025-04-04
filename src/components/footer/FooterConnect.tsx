
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface FooterConnectProps {
  socialLinks: {
    binanceSquare: string;
    binanceLive: string;
    announcement: string;
  }
}

const connectItemVariants = {
  initial: { opacity: 0.9, x: 0 },
  hover: { 
    opacity: 1, 
    x: 3,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 20 
    }
  }
};

export default function FooterConnect({ socialLinks }: FooterConnectProps) {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-6 text-neon-yellow">{t('connectWithUs')}</h3>
      <div className="space-y-4">
        {/* Binance Square */}
        <motion.a 
          href={socialLinks.binanceSquare} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          variants={connectItemVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400"
            >
              <path d="M8 0L9.8 1.8L3.6 8L9.8 14.2L8 16L0 8L8 0Z" fill="#F2B705"/>
              <path d="M8 0L6.2 1.8L12.4 8L6.2 14.2L8 16L16 8L8 0Z" fill="#F2B705"/>
              <path d="M5.33334 8.00022L8.00001 5.33356L10.6667 8.00022L8.00001 10.6669L5.33334 8.00022Z" fill="#F2B705"/>
            </svg>
          </div>
          <span>{t('binanceSquare')}</span>
        </motion.a>
        
        {/* Binance Live */}
        <motion.a 
          href={socialLinks.binanceLive} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          variants={connectItemVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-blue/30 group-hover:border-neon-blue/60">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400"
            >
              <path d="M8 0L9.8 1.8L3.6 8L9.8 14.2L8 16L0 8L8 0Z" fill="#0083CA"/>
              <path d="M8 0L6.2 1.8L12.4 8L6.2 14.2L8 16L16 8L8 0Z" fill="#0083CA"/>
              <path d="M5.33334 8.00022L8.00001 5.33356L10.6667 8.00022L8.00001 10.6669L5.33334 8.00022Z" fill="#0083CA"/>
            </svg>
          </div>
          <span>{t('binanceLive')}</span>
        </motion.a>
        
        {/* Announcements */}
        <motion.a 
          href={socialLinks.announcement} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          variants={connectItemVariants}
          initial="initial"
          whileHover="hover"
        >
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.9 8.1L15.08 16.11C15 16.57 14.7 16.7 14.32 16.5L11.52 14.5L10.16 15.79C10.07 15.88 9.99 15.96 9.83 15.96L9.95 13.11L14.7 8.82C14.85 8.69 14.67 8.61 14.47 8.74L8.5 12.48L5.73 11.64C5.28 11.5 5.27 11.16 5.82 10.95L16.09 7.07C16.47 6.95 16.8 7.19 16.9 8.1Z" fill="#F2B705"/>
            </svg>
          </div>
          <span>{t('announcements')}</span>
        </motion.a>
        
        {/* Contact Us Button */}
        <motion.a 
          href="#contact" 
          className="mt-6 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-dark font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,131,202,0.3)]"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(242, 183, 5, 0.5)"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          <MessageSquare size={16} />
          {t('contactUs')}
        </motion.a>
      </div>
    </motion.div>
  );
}
