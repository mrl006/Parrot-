
import React from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import { useLanguage } from '../../hooks/useLanguage';

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partner, 
  index
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
      className="bg-dark rounded-lg p-4 flex flex-col items-center justify-center border border-transparent hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/10 h-32"
    >
      <a 
        href={partner.url} 
        target="_blank"
        rel="noopener noreferrer" 
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <h3 className="text-white text-center font-semibold text-md mb-1">{partner.name}</h3>
        
        <p className="text-gray-400 text-center text-xs">
          {language === 'tr' ? partner.categoryTR || partner.category : partner.category}
        </p>
      </a>
    </motion.div>
  );
};

export default PartnerCard;
