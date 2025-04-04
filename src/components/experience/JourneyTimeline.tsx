
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
  bgGradient: string;
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
      color: "from-yellow-400 to-yellow-600",
      bgGradient: "bg-gradient-to-br from-yellow-400/5 to-yellow-600/20",
      borderColor: "border-yellow-400/30",
      dotColor: "bg-gradient-to-br from-yellow-300 to-yellow-500"
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology.",
      color: "from-neon-blue to-blue-400",
      bgGradient: "bg-gradient-to-br from-neon-blue/5 to-blue-400/20",
      borderColor: "border-neon-blue/30",
      dotColor: "bg-gradient-to-br from-blue-400 to-neon-blue"
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem.",
      color: "from-neon-purple to-purple-400",
      bgGradient: "bg-gradient-to-br from-neon-purple/5 to-purple-400/20",
      borderColor: "border-neon-purple/30",
      dotColor: "bg-gradient-to-br from-purple-400 to-neon-purple"
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building.",
      color: "from-neon-cyan to-cyan-400",
      bgGradient: "bg-gradient-to-br from-neon-cyan/5 to-cyan-400/20",
      borderColor: "border-neon-cyan/30",
      dotColor: "bg-gradient-to-br from-cyan-400 to-neon-cyan"
    }
  ];
  
  // Animated circle component
  const AnimatedCircle = ({ color }: { color: string }) => (
    <div className="relative flex items-center justify-center">
      <motion.div 
        className={`w-16 h-16 rounded-full ${color} flex items-center justify-center z-10 relative shadow-lg`}
        animate={{
          boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0.2)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-dark border border-white/20 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            className="w-6 h-6 rounded-full bg-white/20"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
  
  // Timeline component with cards layout inspired by the reference image
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {isMobile ? (
        // Mobile version - scrollable horizontal timeline
        <div className="relative py-10">
          <ScrollArea className="w-full">
            <div className="flex space-x-6 pb-6 px-2 min-w-max">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="w-80 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <AnimatedCircle color={milestone.dotColor} />
                    
                    <motion.div 
                      className={`mt-3 px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold inline-flex items-center`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={14} className="mr-1.5" />
                      {milestone.year}
                    </motion.div>
                  </div>
                  
                  <Card className={`${milestone.bgGradient} backdrop-blur-md border ${milestone.borderColor} overflow-hidden h-full`}>
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
              ))}
            </div>
          </ScrollArea>
        </div>
      ) : (
        // Desktop version - horizontal timeline with connected line
        <div className="relative py-16">
          {/* Horizontal timeline line */}
          <div className="absolute left-0 right-0 h-1 top-[90px] bg-gradient-to-r from-yellow-400 via-neon-purple to-neon-cyan"></div>
          
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
                <div className="relative mb-6 z-10">
                  <AnimatedCircle color={milestone.dotColor} />
                </div>
                
                {/* Year badge */}
                <motion.div 
                  className={`mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-bold inline-flex items-center`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar size={14} className="mr-1.5" />
                  {milestone.year}
                </motion.div>
                
                {/* Content card with glass effect */}
                <motion.div
                  className="w-full"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`${milestone.bgGradient} backdrop-blur-md border ${milestone.borderColor} overflow-hidden h-full`}>
                    <motion.div
                      className={`h-1.5 w-full bg-gradient-to-r ${milestone.color}`}
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
