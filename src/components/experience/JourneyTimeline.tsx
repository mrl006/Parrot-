
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Flag, Sparkles, Trophy, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function JourneyTimeline() {
  const { t } = useLanguage();
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Binance Launchpad Partnership",
      description: "Represented multiple Binance Launchpad projects, delivering comprehensive marketing and community management.",
      icon: <Trophy className="text-neon-yellow" strokeWidth={1.5} />,
      color: "from-neon-yellow to-neon-purple"
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology.",
      icon: <Sparkles className="text-neon-blue" strokeWidth={1.5} />,
      color: "from-neon-blue to-neon-yellow"
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem.",
      icon: <TrendingUp className="text-neon-purple" strokeWidth={1.5} />,
      color: "from-neon-purple to-neon-blue"
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building.",
      icon: <Flag className="text-neon-cyan" strokeWidth={1.5} />,
      color: "from-neon-cyan to-neon-blue"
    }
  ];

  return (
    <div className="relative w-full py-12">
      {/* Connecting line through timeline */}
      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-yellow transform -translate-x-1/2 rounded-full 
        before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-4 before:h-4 before:bg-neon-blue before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-4 after:h-4 after:bg-neon-yellow after:rounded-full after:transform after:-translate-x-1/2 after:translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`relative flex mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <motion.div 
                className={`w-12 h-12 rounded-full bg-dark-lighter border-2 border-neon-purple flex items-center justify-center glass-card`}
                animate={{ 
                  boxShadow: ["0 0 0px rgba(139, 92, 246, 0.3)", "0 0 15px rgba(139, 92, 246, 0.7)", "0 0 0px rgba(139, 92, 246, 0.3)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {milestone.icon}
              </motion.div>
            </div>

            {/* Content card - alternating sides */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}></div>
            
            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
              {/* Year badge */}
              <motion.div 
                className="mb-3 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-20 text-white font-semibold text-sm border border-white/20`}>
                  <Calendar size={14} className="mr-1" />
                  {milestone.year}
                </span>
              </motion.div>

              <Card className="bg-dark-lighter/60 backdrop-blur-lg border border-white/10 overflow-hidden">
                <motion.div 
                  className={`h-1 w-full bg-gradient-to-r ${milestone.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                <CardContent className="p-5">
                  <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-gray-300">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
