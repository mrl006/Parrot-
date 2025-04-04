
import React from 'react';
import { motion } from 'framer-motion';

interface CryptoSnowflakeProps {
  imageUrl: string;
  index: number;
}

const CryptoSnowflake: React.FC<CryptoSnowflakeProps> = ({ imageUrl, index }) => {
  // Calculate random positions and durations
  const startX = `${Math.random() * 100}%`;
  const endX = `${Math.random() * 100}%`;
  const size = Math.random() * 15 + 10; // Random size between 10px and 25px
  const duration = Math.random() * 20 + 15; // Random duration between 15-35s
  const delay = Math.random() * 5; // Random delay up to 5s
  
  return (
    <motion.div
      className="absolute top-0 z-0"
      style={{ 
        left: startX,
        width: size,
        height: size,
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: "100vh",
        x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
        opacity: [0, 0.6, 0.7, 0.6, 0]
      }}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}
    >
      <img 
        src={imageUrl} 
        alt="Crypto logo" 
        className="w-full h-full object-contain"
        style={{ 
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.3))" 
        }}
      />
    </motion.div>
  );
};

// Define the crypto logos
const cryptoLogos = [
  "/lovable-uploads/7e7d7050-cffa-4228-a49c-54d8d9fc206e.png", // Binance coin
  "/lovable-uploads/2b0f9a3c-1884-4850-a27d-980f8334625b.png", // Solana
  "/lovable-uploads/7120bbe4-a36d-43f7-b7ce-13972d047ef5.png", // Ethereum
  "/lovable-uploads/566698e8-c8ae-4125-8001-8f84d8771da0.png"  // Bitcoin
];

const CryptoSnow: React.FC = () => {
  // Create 30 snowflakes with random crypto logos
  const snowflakes = Array.from({ length: 30 }).map((_, index) => {
    const randomLogo = cryptoLogos[Math.floor(Math.random() * cryptoLogos.length)];
    return (
      <CryptoSnowflake 
        key={index} 
        imageUrl={randomLogo}
        index={index} 
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes}
    </div>
  );
};

export default CryptoSnow;
