
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import MissionIcon from './MissionIcon';

interface MissionFeatureItemProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  animation: {
    y?: number[][];
    rotate?: number[][];
    scale?: number[][];
  };
  showArrow?: boolean;
  duration?: number;
}

const MissionFeatureItem: React.FC<MissionFeatureItemProps> = ({ 
  icon, 
  color, 
  title, 
  description, 
  animation,
  showArrow = false,
  duration
}) => {
  return (
    <motion.div className="flex gap-6">
      <div className="flex-shrink-0">
        <MissionIcon 
          Icon={icon} 
          color={color} 
          animation={animation} 
          duration={duration}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          {title}
          {showArrow && (
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="ml-2 w-4 h-4 text-neon-blue" />
            </motion.span>
          )}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MissionFeatureItem;
