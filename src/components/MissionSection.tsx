
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { 
  FeaturesList, 
  MissionHeader, 
  MissionVisual 
} from './mission';

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="section-padding bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <MissionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <div className="order-2 lg:order-1">
            <FeaturesList />
          </div>
          
          {/* Visual Element */}
          <MissionVisual />
        </div>
      </div>
    </section>
  );
}
