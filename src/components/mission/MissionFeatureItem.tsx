
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "../ui/card";

interface MissionFeatureItemProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  animation: {
    y?: number[][];
    rotate?: number[][];
    scale?: number[][];
  };
  showArrow?: boolean;
  duration?: number;
}

const MissionFeatureItem: React.FC<MissionFeatureItemProps> = ({ 
  icon: Icon, 
  color, 
  title, 
  description, 
  animation,
  showArrow = false,
  duration = 3
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-dark-lighter border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]">
        <CardContent className="p-6">
          <div className="flex gap-5">
            <div className="flex-shrink-0 mt-1">
              <motion.div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-dark border border-${color}/30 shadow-lg`}
                animate={{ 
                  y: animation.y ? animation.y.flat() : undefined,
                  rotate: animation.rotate ? animation.rotate.flat() : undefined,
                  scale: animation.scale ? animation.scale.flat() : undefined,
                  boxShadow: [`0 0 0px ${color}/0`, `0 0 15px ${color}/30`, `0 0 0px ${color}/0`]
                }}
                transition={{ 
                  duration: duration, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon className={`w-6 h-6 text-${color}`} />
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center text-white">
                {title}
                {showArrow && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2 text-neon-blue"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                )}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MissionFeatureItem;
