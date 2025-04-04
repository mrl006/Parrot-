
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MissionIconProps {
  Icon: LucideIcon;
  color: string;
  animation: {
    y?: number[][];
    rotate?: number[][];
    scale?: number[][];
  };
  duration?: number;
}

const MissionIcon: React.FC<MissionIconProps> = ({ Icon, color, animation, duration = 3 }) => {
  return (
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-dark-lighter border border-${color}/30 shadow-lg shadow-${color}/10`}>
      <motion.div
        animate={{ 
          y: animation.y ? animation.y.flat() : undefined,
          rotate: animation.rotate ? animation.rotate.flat() : undefined,
          scale: animation.scale ? animation.scale.flat() : undefined
        }}
        transition={{ 
          duration: duration, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon className={`w-7 h-7 text-${color}`} />
      </motion.div>
    </div>
  );
};

export default MissionIcon;
