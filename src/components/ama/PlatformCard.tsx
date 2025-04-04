
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Users, Calendar, Mic, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EventFeature from './EventFeature';

interface PlatformCardProps {
  platform: string;
  logoSrc: string;
  titleKey: string;
  descriptionKey: string;
  features: string[];
  accentColor: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ 
  platform, 
  logoSrc, 
  titleKey, 
  descriptionKey, 
  features, 
  accentColor 
}) => {
  const { t } = useLanguage();

  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0: return <Users size={18} />;
      case 1: return <Calendar size={18} />;
      case 2: return <Mic size={18} />;
      case 3: return <Headphones size={18} />;
      default: return <Users size={18} />;
    }
  };

  return (
    <Card className="overflow-hidden border border-white/10 bg-dark/70 backdrop-blur-lg h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 mb-2">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[${accentColor}] to-[${accentColor === '#0088cc' ? '#29B6F6' : accentColor === '#333333' ? '#000000' : '#F8D12F'}] flex items-center justify-center`}>
            <img 
              src={logoSrc} 
              alt={platform} 
              className="w-8 h-8" 
            />
          </div>
          <CardTitle className="text-2xl text-white">{t(titleKey)}</CardTitle>
        </div>
        <CardDescription className="text-gray-300">
          {descriptionKey.startsWith('t(') ? t(descriptionKey.slice(2, -1)) : descriptionKey}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mt-2 mb-8">
          <div className={`bg-gradient-to-r from-[${accentColor}]/20 to-transparent p-6 rounded-lg border border-[${accentColor}]/30`}>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <EventFeature 
                  key={index}
                  icon={getIconForIndex(index)} 
                  text={feature.startsWith("t(") ? t(feature.slice(2, -1)) : feature}
                />
              ))}
            </ul>
            
            <div className="mt-6 flex justify-center">
              <motion.div 
                className={`voice-wave inline-flex items-end h-10 space-x-1 bg-[${accentColor}]/10 px-4 rounded-full`}
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`${platform}-wave-${i}`}
                    className={`w-1.5 bg-[${accentColor}] rounded-t-sm`}
                    animate={{ 
                      height: [
                        `${4 + Math.floor(Math.random() * 12)}px`,
                        `${8 + Math.floor(Math.random() * 12)}px`, 
                        `${4 + Math.floor(Math.random() * 12)}px`
                      ]
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      repeatType: "reverse" as const
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
