
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, Medal, TrendingUp, Trophy } from 'lucide-react';

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
  const achievements: Achievement[] = [
    {
      icon: <Award className="text-neon-blue" size={28} />,
      title: "Major Projects",
      description: "Successfully represented and promoted top-tier blockchain ventures",
      value: "25+",
      label: "Projects",
      color: "from-neon-blue to-blue-400"
    },
    {
      icon: <CheckCircle className="text-neon-purple" size={28} />,
      title: "X Space Events",
      description: "Hosted high-impact discussions with industry leaders",
      value: "100+",
      label: "Events",
      color: "from-neon-purple to-purple-400"
    },
    {
      icon: <Calendar className="text-neon-cyan" size={28} />,
      title: "Years Experience",
      description: "Deep expertise in the Web3 and blockchain industry",
      value: "5+",
      label: "Years",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

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
    <section id="experience" className="section-padding bg-dark relative overflow-hidden">
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
                rotate: [0, 360],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mr-2"
            >
              <Trophy size={24} className="text-neon-yellow" />
            </motion.div>
            <span className="inline-block px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold border border-neon-purple/30">Our Experience</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">Proven Track Record</span>
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
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="rounded-xl p-8 text-center backdrop-blur-sm bg-dark/60 border border-white/10 shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dark to-dark-lighter border border-white/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                  animate={{
                    boxShadow: ["0 0 0 rgba(255, 255, 255, 0.1)", "0 0 20px rgba(255, 255, 255, 0.2)", "0 0 0 rgba(255, 255, 255, 0.1)"]
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
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block"
            >
              <TrendingUp size={32} className="text-neon-yellow" />
            </motion.div>
          </div>
          <h3 className="text-3xl font-bold">Our Journey</h3>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pb-12">
          {/* Center line */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple via-neon-blue to-neon-yellow opacity-50 rounded-full"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              className={`relative mb-24 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
              } md:w-[45%] pl-8 md:pl-0`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Circle on timeline */}
              <motion.div 
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'right-0 md:right-[-22px]' : 'right-auto md:left-[-22px] left-0'
                } w-10 h-10 rounded-full bg-dark-lighter border-4 border-neon-purple flex items-center justify-center z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.3 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
              
              <motion.div 
                className="rounded-xl p-6 backdrop-blur-sm bg-dark/80 border border-white/10 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <motion.span 
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-neon-purple text-sm font-bold mb-3 border border-neon-purple/30"
                  animate={{ boxShadow: ["0 0 0px rgba(139, 92, 246, 0)", "0 0 8px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {milestone.year}
                </motion.span>
                <h4 className="text-xl font-semibold mb-3 text-white">{milestone.title}</h4>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
