
import React from 'react';

const MissionHeader: React.FC = () => {
  return (
    <div className="text-center mb-10">
      <span className="inline-block px-4 py-1.5 rounded-full bg-dark-lighter text-neon-yellow text-sm font-medium border border-neon-yellow/30 mb-4">
        Our Mission
      </span>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Driving Web3 Innovation Forward
      </h2>
      
      <div className="h-1 bg-gradient-to-r from-neon-yellow to-neon-purple mx-auto w-24 rounded-full"></div>
    </div>
  );
};

export default MissionHeader;
