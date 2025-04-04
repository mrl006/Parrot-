
import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-lighter to-dark pt-20 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.div
                className="flex items-center justify-center mb-2"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="neon-text">Revolutionizing</span>
                <motion.div
                  className="ml-4 relative top-1"
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket size={40} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <motion.span 
                className="block mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                the Digital Landscape
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-white font-medium flex items-center justify-center gap-2 transition-transform shadow-[0_0_15px_rgba(0,131,202,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242, 183, 5, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Our Services</span> 
                <motion.div
                  animate={{ 
                    x: [0, 5, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut" 
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border border-neon-yellow rounded-full text-white font-medium hover:bg-neon-yellow/10 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(242, 183, 5, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1"
          animate={{ 
            scale: [1, 1.1, 1],
            y: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-3 bg-neon-yellow rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              y: [0, 5, 0] 
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
        <span className="mt-2 text-sm text-gray-400">Scroll</span>
      </motion.div>
    </section>
  );
}
