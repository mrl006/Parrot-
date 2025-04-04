
import React from 'react';
import { Globe, Lightbulb, Users, LineChart } from 'lucide-react';
import MissionFeatureItem from './MissionFeatureItem';

const FeaturesList: React.FC = () => {
  return (
    <div className="space-y-4">
      <MissionFeatureItem
        icon={Globe}
        color="neon-blue"
        title="Vision"
        description="To be the leading force in Web3 marketing and strategy."
      />
      
      <MissionFeatureItem
        icon={Lightbulb}
        color="neon-purple"
        title="Innovation"
        description="Exploring new technologies to keep our clients at the cutting edge."
      />
      
      <MissionFeatureItem
        icon={Users}
        color="neon-cyan"
        title="Community"
        description="Building vibrant communities around blockchain projects."
      />

      <MissionFeatureItem
        icon={LineChart}
        color="neon-yellow"
        title="Growth"
        description="Driving measurable results through data-driven strategies."
      />
    </div>
  );
};

export default FeaturesList;
