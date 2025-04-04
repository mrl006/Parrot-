
import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const coinVariants = {
    initial: { y: -50, opacity: 0 },
    animate: (i: number) => ({
      y: 300,
      opacity: [0, 1, 1, 0],
      x: Math.sin(i * 10) * 30,
      rotate: Math.random() * 360,
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    })
  };
  
  const launchVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -5, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="order-1 md:order-2 flex justify-center relative" ref={containerRef}>
      <div className="relative w-full max-w-sm">
        {/* Animated glow effect */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple/20 via-neon-blue/10 to-yellow-400/20 blur-xl z-0"
        />

        <div className="w-full aspect-square rounded-xl p-1 border border-neon-yellow/20 relative z-10">
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-dark-lighter via-dark to-dark flex items-center justify-center relative overflow-hidden backdrop-blur-lg">
            {/* 3D glass effect with backdrop filter */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            
            {/* Crypto coins animation */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${(i % 4) * 25 + 15}%`, top: "-20px" }}
                variants={coinVariants}
                custom={i}
                initial="initial"
                animate="animate"
              >
                <div className={`w-${i % 2 === 0 ? 6 : 4} h-${i % 2 === 0 ? 6 : 4} rounded-full ${
                  i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-neon-blue' : 'bg-neon-purple'
                } flex items-center justify-center text-dark font-bold text-xs`}>
                  {i % 3 === 0 ? '₿' : i % 3 === 1 ? 'Ξ' : '$'}
                </div>
              </motion.div>
            ))}

            <div className="text-center relative z-10">
              <motion.div
                variants={launchVariants}
                initial="initial"
                animate="animate"
                className="inline-flex p-8 rounded-full bg-gradient-to-br from-dark-lighter/40 to-dark-lighter/10 backdrop-blur-md border border-white/10 mb-4 relative z-10 shadow-lg shadow-neon-purple/20"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                {/* Larger rocket icon with glass effect */}
                <Rocket className="w-24 h-24 text-neon-purple filter drop-shadow-lg" />
              </motion.div>
              
              {/* Removed text as requested */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisual;
