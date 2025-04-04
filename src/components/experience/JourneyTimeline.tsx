
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Milestone {
  year: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
}

export default function JourneyTimeline() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Binance Launchpad Partnership",
      description: "Represented multiple Binance Launchpad projects, delivering comprehensive marketing and community management.",
      color: "from-neon-yellow to-neon-purple",
      bgColor: "bg-neon-yellow/10",
      borderColor: "border-neon-yellow/30",
      dotColor: "bg-neon-yellow"
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology.",
      color: "from-neon-blue to-neon-yellow",
      bgColor: "bg-neon-blue/10",
      borderColor: "border-neon-blue/30",
      dotColor: "bg-neon-blue"
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem.",
      color: "from-neon-purple to-neon-blue",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30",
      dotColor: "bg-neon-purple"
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building.",
      color: "from-neon-cyan to-neon-blue",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30",
      dotColor: "bg-neon-cyan"
    }
  ];
  
  // Animated circle component
  const AnimatedCircle = ({ color }: { color: string }) => (
    <div className="relative">
      <motion.div 
        className={`w-12 h-12 rounded-full ${color} z-10 relative`}
        animate={{
          boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0.2)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className={`absolute top-1 left-1 w-10 h-10 rounded-full ${color} opacity-50`}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
  
  // Simplified horizontal timeline for both mobile and desktop
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {isMobile ? (
        // Mobile version - scrollable horizontal timeline
        <div className="relative py-10">
          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-6 px-2 min-w-max">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="w-72 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <AnimatedCircle color={milestone.dotColor} />
                    
                    <motion.div 
                      className={`mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold inline-flex items-center`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={14} className="mr-1.5" />
                      {milestone.year}
                    </motion.div>
                  </div>
                  
                  <Card className="bg-dark-lighter/80 backdrop-blur-md border border-white/10 overflow-hidden h-full">
                    <motion.div
                      className={`h-1 w-full bg-gradient-to-r ${milestone.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <CardContent className="p-5">
                      <h4 className="text-xl font-bold mb-2 text-white">{milestone.title}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      ) : (
        // Desktop version - clean horizontal timeline
        <div className="relative py-16">
          {/* Horizontal timeline line */}
          <div className="absolute left-0 right-0 h-1 top-[90px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-yellow"></div>
          
          <div className="flex justify-between relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-1/4 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline animated circle */}
                <div className="relative mb-4 z-10">
                  <AnimatedCircle color={milestone.dotColor} />
                </div>
                
                {/* Year badge */}
                <motion.div 
                  className={`mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold inline-flex items-center`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar size={14} className="mr-1.5" />
                  {milestone.year}
                </motion.div>
                
                {/* Content card with hover effect */}
                <motion.div
                  className="w-full"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-dark-lighter/80 backdrop-blur-md border border-white/10 overflow-hidden h-full">
                    <motion.div
                      className={`h-1 w-full bg-gradient-to-r ${milestone.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white">{milestone.title}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
