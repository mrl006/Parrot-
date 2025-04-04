
import React from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import { useLanguage } from '../../hooks/useLanguage';
import { ExternalLink } from 'lucide-react';

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
        duration: 0.4
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
      whileTap={{ scale: 0.98 }}
      className="backdrop-blur-sm bg-dark/80 rounded-lg border border-white/5 hover:border-neon-blue/30 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300"
    >
      <a 
        href={partner.url} 
        target="_blank"
        rel="noopener noreferrer" 
        className="w-full h-full flex flex-col items-center justify-center p-5"
      >
        <h3 className="text-white font-semibold mb-2 text-center">{partner.name}</h3>
        
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
          <span className="px-2 py-1 rounded-full bg-dark border border-white/5">
            {language === 'tr' ? partner.categoryTR || partner.category : partner.category}
          </span>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-neon-blue">
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </motion.div>
  );
};

export default PartnerCard;
