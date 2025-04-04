
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const MissionHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-10">
      <span className="inline-block px-4 py-1.5 rounded-full bg-dark-lighter text-neon-yellow text-sm font-medium border border-neon-yellow/30 mb-4">
        {t('ourMission')}
      </span>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {t('drivingWeb3')}
      </h2>
      
      <div className="h-1 bg-gradient-to-r from-neon-yellow to-neon-purple mx-auto w-24 rounded-full"></div>
    </div>
  );
};

export default MissionHeader;
