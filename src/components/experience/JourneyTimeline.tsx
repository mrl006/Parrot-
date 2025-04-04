
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Flag, Sparkles, Trophy, TrendingUp, Link } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Separator } from '@/components/ui/separator';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function JourneyTimeline() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Binance Launchpad Partnership",
      description: "Represented multiple Binance Launchpad projects, delivering comprehensive marketing and community management.",
      icon: <Trophy className="h-7 w-7" />,
      color: "from-neon-yellow to-neon-purple",
      bgColor: "bg-neon-yellow/10",
      borderColor: "border-neon-yellow/30"
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology.",
      icon: <Sparkles className="h-7 w-7" />,
      color: "from-neon-blue to-neon-yellow",
      bgColor: "bg-neon-blue/10",
      borderColor: "border-neon-blue/30"
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem.",
      icon: <Link className="h-7 w-7" />,
      color: "from-neon-purple to-neon-blue",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30"
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building.",
      icon: <Flag className="h-7 w-7" />,
      color: "from-neon-cyan to-neon-blue",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30"
    }
  ];
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      {isMobile ? (
        // Mobile version - vertical stacked timeline
        <div className="relative px-4">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-yellow"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 pl-12"
            >
              {/* Timeline node - positioned absolutely */}
              <motion.div
                className={`absolute left-0 top-6 w-12 h-12 rounded-full ${milestone.bgColor} border ${milestone.borderColor} flex items-center justify-center z-10`}
                animate={{
                  boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 15px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0.2)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-white">{milestone.icon}</div>
              </motion.div>
              
              {/* Year badge */}
              <div className="mb-3">
                <motion.span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-medium`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar size={14} className="mr-1.5" />
                  {milestone.year}
                </motion.span>
              </div>
              
              {/* Content card */}
              <Card className="bg-dark-lighter/80 backdrop-blur-md border border-white/10 overflow-hidden">
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
      ) : (
        // Desktop version - zigzag timeline
        <div className="relative py-20">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-yellow transform -translate-x-1/2"></div>
          
          {/* Timeline nodes at each milestone point */}
          {milestones.map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${(i / (milestones.length - 1)) * 100}%` }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-neon-blue"
                animate={{
                  boxShadow: ["0 0 0px rgba(0,131,202,0.3)", "0 0 15px rgba(0,131,202,0.8)", "0 0 0px rgba(0,131,202,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          ))}
          
          {/* Milestone cards - alternating sides */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex mb-32 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="w-1/2"></div>
              
              <div className={`absolute left-1/2 transform -translate-x-1/2 ${index === 0 ? 'top-0' : ''} ${index === milestones.length - 1 ? 'bottom-0' : ''}`} 
                   style={{ top: index > 0 && index < milestones.length - 1 ? `${(index / (milestones.length - 1)) * 100}%` : undefined }}>
                <motion.div
                  className={`w-14 h-14 rounded-full ${milestone.bgColor} border ${milestone.borderColor} flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-white">{milestone.icon}</div>
                </motion.div>
              </div>
              
              <div className="w-1/2 px-8">
                {/* Year badge */}
                <motion.div className="mb-4 inline-block" whileHover={{ scale: 1.05 }}>
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold`}>
                    <Calendar size={14} className="mr-1.5" />
                    {milestone.year}
                  </span>
                </motion.div>
                
                {/* Content card with hover effect */}
                <motion.div
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-dark-lighter/80 backdrop-blur-md border border-white/10 overflow-hidden">
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
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
