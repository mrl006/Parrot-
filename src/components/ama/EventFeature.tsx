
import React from 'react';

interface EventFeatureProps {
  icon: React.ReactNode;
  text: string;
}

const EventFeature: React.FC<EventFeatureProps> = ({ icon, text }) => (
  <li className="flex items-center gap-3 text-white">
    <div className="text-white/80">
      {icon}
    </div>
    <span>{text}</span>
  </li>
);

export default EventFeature;
