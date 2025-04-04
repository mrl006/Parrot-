
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Users, Sparkles, ArrowRight, Lightbulb, LineChart, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function MissionSection() {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="mission" className="section-padding bg-dark relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-yellow/20 via-transparent to-neon-blue/20"></div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-6 py-2 rounded-full bg-neon-yellow/10 text-neon-yellow text-sm font-semibold mb-4 border border-neon-yellow/30"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Driving Web3 Innovation Forward
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-neon-purple mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Content */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <motion.div 
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-dark-lighter border border-neon-blue/30 shadow-lg shadow-neon-blue/10">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Globe className="w-7 h-7 text-neon-blue" />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    Vision 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4 text-neon-blue" />
                    </motion.span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the leading force in Web3 marketing and strategy, helping blockchain projects achieve mainstream recognition and adoption through innovative solutions and strategic partnerships.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-dark-lighter border border-neon-purple/30 shadow-lg shadow-neon-purple/10">
                    <motion.div
                      animate={{ 
                        y: [-3, 3, -3], 
                        rotate: [-5, 5, -5] 
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <Lightbulb className="w-7 h-7 text-neon-purple" />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    Innovation
                    <motion.div
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-3"
                    >
                      <Sparkles className="w-5 h-5 text-neon-purple" />
                    </motion.div>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Constantly exploring new technologies and strategies to keep our clients at the cutting edge of the decentralized revolution, enabling unprecedented growth and market presence.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-dark-lighter border border-neon-cyan/30 shadow-lg shadow-neon-cyan/10">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Users className="w-7 h-7 text-neon-cyan" />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Building and nurturing vibrant communities around blockchain projects to ensure long-term success, engagement, and organic growth through authentic connections and value creation.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-dark-lighter border border-neon-yellow/30 shadow-lg shadow-neon-yellow/10">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <LineChart className="w-7 h-7 text-neon-yellow" />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Driving measurable results through data-driven marketing strategies and performance optimization, helping Web3 projects reach their full potential and achieve sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Visual Element */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-md">
              <motion.div 
                className="w-full aspect-square rounded-2xl overflow-hidden p-1 border border-white/10 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(242, 183, 5, 0)", "0 0 30px rgba(242, 183, 5, 0.3)", "0 0 0px rgba(242, 183, 5, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-dark-lighter to-dark flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="inline-flex p-8 rounded-full bg-dark-lighter border border-neon-purple/30 mb-6"
                      animate={{ 
                        y: [0, -20, 0], 
                        rotate: [0, 5, 0, -5, 0],
                        boxShadow: ["0 0 0px rgba(139, 92, 246, 0)", "0 0 30px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"]
                      }}
                      transition={{ 
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      >
                        <Rocket className="w-20 h-20 text-neon-purple" />
                      </motion.div>
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-purple to-neon-blue"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      Revolutionizing
                    </motion.h3>
                    <motion.p 
                      className="text-white mt-2 text-xl"
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                        y: [0, -5, 0] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      the Digital Landscape
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Orbital particles */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-yellow/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-neon-blue/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                ></motion.div>
                
                <motion.div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-neon-purple/50"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                ></motion.div>
                
                <motion.div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-neon-cyan/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
