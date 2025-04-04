
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
      description: `Visiting ${partner.name}'s official website`,
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
    >
      <motion.div 
        className="flex flex-col justify-center items-center w-full h-full gap-2"
      >
        <h3 className={`text-xl font-bold text-center ${
          isHovered ? 'text-neon-yellow' : 'text-white'
        }`}>
          {partner.name}
        </h3>
        
        {isHovered && (
          <motion.div 
            className="flex items-center gap-1 text-sm text-neon-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>Visit Website</span>
            <ExternalLink size={16} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PartnerCard;
