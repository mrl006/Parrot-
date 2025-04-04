
import React from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import { useLanguage } from '../../hooks/useLanguage';

interface PartnerCardProps {
  partner: Partner;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partner, 
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  const { language } = useLanguage();
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.95 }}
      className="bg-dark rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-neon-blue/30 hover:shadow-lg hover:shadow-neon-blue/5 text-center h-32"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a 
        href={partner.url} 
        target="_blank"
        rel="noopener noreferrer" 
        className="w-full h-full flex flex-col items-center"
      >
        <motion.div
          className="flex justify-center items-center w-12 h-12 mb-2 rounded-full bg-dark-lighter p-2"
          animate={{
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -2 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon with zoom effect on hover */}
          <motion.div
            className="text-neon-blue w-8 h-8"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {partner.icon}
          </motion.div>
        </motion.div>
        
        <h3 className="text-sm font-semibold mb-0.5">{partner.name}</h3>
        
        <motion.p 
          className="text-xs text-gray-400 mt-0.5"
          animate={{
            opacity: isHovered ? 1 : 0.7
          }}
        >
          {language === 'tr' ? partner.categoryTR || partner.category : partner.category}
        </motion.p>
      </a>
    </motion.div>
  );
};

export default PartnerCard;
