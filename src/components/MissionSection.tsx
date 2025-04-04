
import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section id="mission" className="section-padding bg-dark relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driving Web3 Innovation Forward</h2>
            
            <div className="space-y-6 mt-8">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter border border-neon-blue/30">
                    <Target className="w-5 h-5 text-neon-blue" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-gray-300">
                    To be the leading force in Web3 marketing and strategy, helping blockchain projects achieve mainstream recognition and adoption.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ 
                    y: [-5, 5, -5], 
                    rotate: [-10, 10, -10] 
                  }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter border border-neon-purple/30">
                    <Rocket className="w-5 h-5 text-neon-purple" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    Constantly exploring new technologies and strategies to keep our clients at the cutting edge of the decentralized revolution.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter border border-neon-cyan/30">
                    <Users className="w-5 h-5 text-neon-cyan" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-300">
                    Building and nurturing vibrant communities around blockchain projects to ensure long-term success and engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-md">
              <div className="w-full aspect-square rounded-2xl overflow-hidden p-1 border border-white/10 shadow-lg">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-dark-lighter to-dark flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="inline-flex p-6 rounded-full bg-dark-lighter border border-neon-purple/30 mb-4"
                      animate={{ 
                        y: [0, -10, 0], 
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Rocket className="w-16 h-16 text-neon-purple" />
                    </motion.div>
                    <h3 className="text-2xl font-bold neon-text">Revolutionizing</h3>
                    <p className="text-white mt-2">the Digital Landscape</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neon-blue/10 filter blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-neon-purple/10 filter blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
