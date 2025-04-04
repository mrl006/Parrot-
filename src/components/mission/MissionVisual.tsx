
import React from 'react';
import { Rocket } from 'lucide-react';

const MissionVisual: React.FC = () => {
  return (
    <div className="order-1 md:order-2 flex justify-center">
      <div className="relative w-full max-w-sm">
        <div className="w-full aspect-square rounded-xl p-1 border border-neon-yellow/20">
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-dark-lighter via-dark to-dark flex items-center justify-center">
            <div className="text-center p-8">
              <div className="inline-flex p-6 rounded-full bg-dark border border-neon-purple/30 mb-4">
                <Rocket className="w-16 h-16 text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Revolutionizing
              </h3>
              <p className="text-white mt-1">
                the Digital Landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisual;
