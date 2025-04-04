
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
      y: 30
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
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
      className="backdrop-blur-sm bg-dark/80 rounded-xl border border-white/5 hover:border-neon-blue/30 hover:shadow-lg hover:shadow-neon-blue/15 transition-all duration-300 h-44"
    >
      <a 
        href={partner.url} 
        target="_blank"
        rel="noopener noreferrer" 
        className="w-full h-full flex flex-col items-center justify-center p-8 group relative overflow-hidden"
      >
        {/* Background glow effect */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-neon-blue/5 blur-3xl group-hover:bg-neon-blue/10 transition-all duration-500"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-neon-purple/5 blur-3xl group-hover:bg-neon-purple/10 transition-all duration-500"></div>
        
        <h3 className="text-xl text-white font-bold mb-3 text-center group-hover:text-neon-blue transition-colors duration-300">{partner.name}</h3>
        
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-dark border border-white/10 text-gray-300 group-hover:border-neon-blue/20 group-hover:text-neon-blue/80 transition-all duration-300">
            {language === 'tr' ? partner.categoryTR || partner.category : partner.category}
          </span>
        </div>
        
        <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neon-blue">
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </motion.div>
  );
};

export default PartnerCard;
