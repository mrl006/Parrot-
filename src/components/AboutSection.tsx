
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Shield, Zap, Sparkles, BarChart } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Globe className="w-7 h-7 text-neon-blue" />,
      title: "Web3 Experts",
      description: "Deep expertise in blockchain technology, NFTs, and decentralized applications."
    },
    {
      icon: <Zap className="w-7 h-7 text-neon-purple" />,
      title: "Innovative Strategies",
      description: "Cutting-edge marketing approaches tailored for the crypto and blockchain space."
    },
    {
      icon: <Code className="w-7 h-7 text-neon-cyan" />,
      title: "Technical Excellence",
      description: "Strong technical background ensuring quality implementation of Web3 projects."
    },
    {
      icon: <Shield className="w-7 h-7 text-blue-400" />,
      title: "Trusted Partners",
      description: "Reliable collaborators with established partnerships in the blockchain ecosystem."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-lighter relative">
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            className="inline-block px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold mb-4 border border-neon-purple/30"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Who We Are
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Sparkles className="w-12 h-12 text-neon-yellow" />
            </motion.div>
          </div>
          
          <p className="text-xl text-gray-300">
            ParrotBamboo is a dynamic Web3 agency at the forefront of blockchain innovation. We combine technical expertise with creative marketing strategies to help crypto and blockchain ventures thrive in this rapidly evolving digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="rounded-xl p-6 backdrop-blur-sm bg-dark/60 border border-white/10 shadow-lg hover:shadow-neon-blue/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px -15px rgba(0, 131, 202, 0.3)"
              }}
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dark-lighter to-dark border border-white/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <motion.h3 
                className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
