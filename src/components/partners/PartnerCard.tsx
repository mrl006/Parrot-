
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Partner } from '../../types/Partner';
import { toast } from "../../hooks/use-toast";

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
  const handleClick = () => {
    window.open(partner.website, '_blank');
    toast({
      title: "Opening partner website",
      description: "Redirecting to partner's official website",
    });
  };

  return (
    <motion.div 
      className={`backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center h-32 transition-all duration-300 cursor-pointer ${
        isHovered ? 'border-neon-yellow shadow-lg shadow-neon-yellow/20' : 'border-neon-yellow/20'
      } border bg-gradient-to-br from-dark/80 to-dark-lighter/80`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px 0 rgba(242, 183, 5, 0.2)'
      }}
      animate={isHovered ? { 
        y: -10,
        transition: { duration: 0.3 }
      } : {}}
    >
      <motion.div 
        className="flex flex-col justify-center items-center w-full h-full gap-2"
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="h-12 flex items-center justify-center">
          <img 
            src={partner.logoUrl} 
            alt={`${partner.name} logo`}
            className="max-h-12 max-w-full object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parentDiv = target.parentElement;
              if (parentDiv) {
                const textElement = document.createElement('p');
                textElement.className = `font-semibold text-center text-lg ${
                  isHovered ? 'text-neon-yellow' : 'text-white'
                }`;
                textElement.textContent = partner.name;
                parentDiv.appendChild(textElement);
              }
            }}
          />
        </div>
        <p className={`font-semibold text-center text-sm mt-2 ${
          isHovered ? 'text-neon-yellow' : 'text-white'
        }`}>
          {partner.name}
        </p>
        {isHovered && (
          <motion.div 
            className="flex items-center gap-1 text-xs text-neon-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>Visit</span>
            <ExternalLink size={12} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PartnerCard;
