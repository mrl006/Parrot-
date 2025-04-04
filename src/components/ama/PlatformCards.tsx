
import React from 'react';
import { motion } from 'framer-motion';
import PlatformCard from './PlatformCard';

const PlatformCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* Binance Live */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <PlatformCard 
          platform="binance"
          logoSrc="/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png"
          titleKey="binanceLiveEvents"
          descriptionKey="Reach millions of users on the world's largest crypto exchange platform"
          features={[
            "binanceGlobalAudience",
            "scheduledPromotionalEvents",
            "professionalHosting",
            "liveQASessions"
          ]}
          accentColor="#F0B90B"
        />
      </motion.div>
      
      {/* Twitter Audio Live */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PlatformCard 
          platform="twitter"
          logoSrc="/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png"
          titleKey="twitterAudioLive"
          descriptionKey="Connect with your community through Twitter's audio spaces"
          features={[
            "engageCryptoEnthusiasts",
            "regularTwitterSpaces",
            "industryExpertDiscussions",
            "communityQASessions"
          ]}
          accentColor="#333333"
        />
      </motion.div>
      
      {/* Telegram Audio Live */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <PlatformCard 
          platform="telegram"
          logoSrc="/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png"
          titleKey="telegramAudioLive"
          descriptionKey="Host engaging audio sessions in Telegram communities"
          features={[
            "Direct access to Telegram communities",
            "Scheduled AMA sessions with enthusiasts",
            "Interactive voice discussions",
            "Real-time community engagement"
          ]}
          accentColor="#0088cc"
        />
      </motion.div>
    </div>
  );
};

export default PlatformCards;
