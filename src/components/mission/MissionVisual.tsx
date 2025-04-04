
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
        delay: i * 0.2
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
        repeatType: "reverse"
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
        repeatType: "reverse"
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
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-dark-lighter via-dark to-dark flex items-center justify-center relative overflow-hidden">
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

            <div className="text-center p-8 relative z-10">
              <motion.div
                variants={launchVariants}
                initial="initial"
                animate="animate"
                className="inline-flex p-6 rounded-full bg-dark border border-neon-purple/30 mb-4 relative z-10"
              >
                <Rocket className="w-16 h-16 text-neon-purple" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Revolutionizing
              </h3>
              
              <p className="text-white mb-8">
                the Digital Landscape
              </p>
              
              <div className="flex justify-center space-x-6 mt-4">
                {/* Telegram Logo */}
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-dark/70 flex items-center justify-center hover:bg-blue-500/20 transition-colors border border-blue-500/30"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13L12 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9L12 13L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                
                {/* Binance Logo */}
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-dark/70 flex items-center justify-center hover:bg-yellow-400/20 transition-colors border border-yellow-400/30"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-400"
                  >
                    <path d="M12 0L14.7 2.7L5.4 12L14.7 21.3L12 24L0 12L12 0Z" fill="currentColor"/>
                    <path d="M12 0L9.30001 2.7L18.6 12L9.30001 21.3L12 24L24 12L12 0Z" fill="currentColor"/>
                    <path d="M8 12.0002L12 8.00017L16 12.0002L12 16.0002L8 12.0002Z" fill="currentColor"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisual;
