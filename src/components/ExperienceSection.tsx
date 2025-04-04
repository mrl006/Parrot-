
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, CheckCircle, Calendar, Medal, TrendingUp, Trophy } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const achievements: Achievement[] = [
    {
      icon: <Award className="text-neon-blue filter drop-shadow-[0_0_8px_rgba(0,131,202,0.7)]" size={28} />,
      title: t('majorProjects'),
      description: "Successfully represented and promoted top-tier blockchain ventures",
      value: "25+",
      label: t('projects'),
      color: "from-neon-blue to-blue-400"
    },
    {
      icon: <CheckCircle className="text-neon-purple filter drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" size={28} />,
      title: t('xSpaceEvents'),
      description: "Hosted high-impact discussions with industry leaders",
      value: "100+",
      label: t('events'),
      color: "from-neon-purple to-purple-400"
    },
    {
      icon: <Calendar className="text-neon-cyan filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" size={28} />,
      title: t('yearsExperience'),
      description: "Deep expertise in the Web3 and blockchain industry",
      value: "5+",
      label: t('years'),
      color: "from-neon-cyan to-cyan-400"
    }
  ];
  
  const milestones: Milestone[] = [
    {
      year: "2023",
      title: "Binance Launchpad Partnership",
      description: "Represented multiple Binance Launchpad projects, delivering comprehensive marketing and community management."
    },
    {
      year: "2022",
      title: "Record-Breaking X Space Event",
      description: "Hosted an X Space event that attracted over 100,000 viewers, discussing the future of Web3 technology."
    },
    {
      year: "2021",
      title: "Chainlink Collaboration",
      description: "Partnered with Chainlink to promote oracle technology and its applications in the DeFi ecosystem."
    },
    {
      year: "2020",
      title: "Agency Foundation",
      description: "ParrotBamboo was established with a mission to revolutionize Web3 marketing and community building."
    }
  ];

  // For the animated achievement numbers
  const AnimatedValue = ({ value }: { value: string }) => {
    // Extract the numeric part if possible
    const numericValue = parseInt(value.replace(/\D/g, ''));
    
    if (isNaN(numericValue)) {
      return <span className="text-4xl font-bold">{value}</span>;
    }
    
    return (
      <motion.span
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    );
  };

  return (
    <section id="experience" className="section-padding bg-dark relative overflow-hidden" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-neon-blue/20"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mr-2"
            >
              <Trophy size={24} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" />
            </motion.div>
            <span className="inline-block px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold border border-neon-purple/30">{t('ourExperience')}</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">{t('provenTrackRecord')}</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>

        {/* Achievements */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="rounded-xl p-8 text-center backdrop-blur-sm bg-dark-lighter/60 border border-white/10 shadow-lg"
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center bg-dark border border-white/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    boxShadow: ["0 0 0px rgba(255, 255, 255, 0.1)", "0 0 20px rgba(255, 255, 255, 0.2)", "0 0 0px rgba(255, 255, 255, 0.1)"]
                  }}
                >
                  {achievement.icon}
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                <AnimatedValue value={achievement.value} />
                <p className="text-sm text-gray-400">{achievement.label}</p>
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <TrendingUp size={32} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" />
            </motion.div>
          </div>
          <h3 className="text-3xl font-bold">{t('ourJourney')}</h3>
        </motion.div>
        
        {/* Horizontal Timeline with Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          {/* Horizontal timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-yellow opacity-30 transform -translate-y-1/2 rounded-full"></div>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {milestones.map((milestone, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pt-16 pb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Year badge on top */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-0 transform -translate-y-1/2 z-10"
                    >
                      <motion.span 
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-neon-purple text-sm font-bold border border-neon-purple/30"
                        animate={{ 
                          boxShadow: ["0 0 0px rgba(139, 92, 246, 0)", "0 0 8px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {milestone.year}
                      </motion.span>
                    </motion.div>
                    
                    {/* Timeline node */}
                    <motion.div
                      className="absolute top-0 w-6 h-6 rounded-full bg-dark-lighter border-4 border-neon-purple z-20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: ["0 0 0px rgba(139, 92, 246, 0.3)", "0 0 15px rgba(139, 92, 246, 0.7)", "0 0 0px rgba(139, 92, 246, 0.3)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                    
                    {/* Content card */}
                    <div className="w-full mt-8">
                      <motion.div 
                        className="rounded-xl p-6 backdrop-blur-sm bg-dark/80 border border-white/10 shadow-lg h-full"
                        whileHover={{ 
                          y: -5,
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                        }}
                      >
                        <h4 className="text-xl font-semibold mb-3 text-white">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-dark text-white border-neon-purple hover:bg-dark-lighter hover:text-neon-purple z-10" />
            <CarouselNext className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-dark text-white border-neon-purple hover:bg-dark-lighter hover:text-neon-purple z-10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
