
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { 
  FeaturesList, 
  MissionHeader, 
  MissionVisual,
  BackgroundEffects
} from './mission';

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-16 bg-dark relative overflow-hidden">
      {/* Add animated background effects */}
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 relative z-10">
        <MissionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Mission Content */}
          <div className="order-2 md:order-1">
            <FeaturesList />
          </div>
          
          {/* Visual Element with Animations */}
          <MissionVisual />
        </div>
      </div>
    </section>
  );
}
