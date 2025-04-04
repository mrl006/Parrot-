
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "../ui/card";

interface MissionFeatureItemProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
}

const MissionFeatureItem: React.FC<MissionFeatureItemProps> = ({ 
  icon: Icon, 
  color, 
  title, 
  description
}) => {
  return (
    <Card className="bg-dark-lighter border-none shadow-md">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-dark border border-${color}/30`}>
              <Icon className={`w-5 h-5 text-${color}`} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">
              {title}
            </h3>
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionFeatureItem;
