
import React from 'react';
import { Youtube, Instagram, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = {
    linkTree: "https://linktr.ee/parrotbamboo",
    telegram: "https://t.me/ParrotBambooCrypto",
    youtube: "https://www.youtube.com/c/ParrotBambooCrypto",
    announcement: "https://t.me/parrotbambooann",
    instagram: "https://instagram.com/parrotbamboocrypto?igshid=ZDdkNTZiNTM=",
    binanceLive: "https://www.binance.com/en/live/u/24755389",
    binanceSquare: "https://www.binance.com/en/feed/profile/86893873"
  };

  // Animation variants
  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const footerLinkVariants = {
    initial: { opacity: 0.8, y: 0 },
    hover: { 
      opacity: 1, 
      y: -3,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const connectItemVariants = {
    initial: { opacity: 0.9, x: 0 },
    hover: { 
      opacity: 1, 
      x: 5,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  return (
    <footer className="bg-dark-lighter border-t border-neon-yellow/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <motion.div 
        className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-neon-yellow/5 filter blur-3xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      {/* Blockchain animation elements */}
      <motion.div 
        className="absolute top-20 right-20 blockchain-animation opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#0083CA" fillOpacity="0.8" />
        </svg>
      </motion.div>
    
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <motion.img 
                src="/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png" 
                alt="ParrotBamboo Logo" 
                className="h-12 mr-3" 
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.3 }
                }}
              />
              <h3 className="text-2xl font-bold neon-text">ParrotBamboo</h3>
            </div>
            <p className="text-gray-300 mb-8">
              A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* X (Twitter) Icon */}
              <motion.a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="Twitter"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="#F2B705"/>
                </svg>
              </motion.a>
              
              {/* Telegram Icon */}
              <motion.a 
                href={socialLinks.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/20 hover:border-neon-blue/40"
                aria-label="Telegram"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.9-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#0083CA"/>
                </svg>
              </motion.a>
              
              {/* YouTube Icon */}
              <motion.a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="YouTube"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
              >
                <Youtube size={18} className="text-neon-yellow" />
              </motion.a>
              
              {/* Instagram Icon */}
              <motion.a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/20 hover:border-neon-blue/40"
                aria-label="Instagram"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
              >
                <Instagram size={18} className="text-neon-blue" />
              </motion.a>
              
              {/* LinkTree Icon */}
              <motion.a 
                href={socialLinks.linkTree} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="LinkTree"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L8.66 5.34H15.34L12 2Z" fill="#F2B705" />
                  <path d="M12 22L8.66 18.66H15.34L12 22Z" fill="#F2B705" />
                  <path d="M5.34 8.66L2 12L5.34 15.34V8.66Z" fill="#F2B705" />
                  <path d="M18.66 8.66L22 12L18.66 15.34V8.66Z" fill="#F2B705" />
                  <path d="M8.66 8.66H15.34V15.34H8.66V8.66Z" fill="#F2B705" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-yellow">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Team", "Partners"].map((link, index) => (
                <motion.li key={link}
                  variants={footerLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`} 
                    className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-blue">Services</h3>
            <ul className="space-y-4">
              {[
                "Social Media Growth",
                "AMA & Event Hosting",
                "Corporate Partnerships",
                "Brand Promotion",
                "Content Creation"
              ].map((service, index) => (
                <motion.li key={service}
                  variants={footerLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-neon-yellow">Connect With Us</h3>
            <div className="space-y-4">
              {/* Binance Square */}
              <motion.a 
                href={socialLinks.binanceSquare} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                variants={connectItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L7.873 4.127L5.127 1.381L0 6.508L5.127 11.635L12 4.762L18.873 11.635L24 6.508L18.873 1.381L16.127 4.127L12 0Z" fill="#F2B705"/>
                    <path d="M12 9.524L6.508 15.016L12 20.508L17.492 15.016L12 9.524Z" fill="#F2B705"/>
                    <path d="M0 12.381L5.127 17.508L0 22.635L5.127 17.508L0 12.381Z" fill="#F2B705"/>
                    <path d="M18.873 17.508L24 12.381L18.873 17.508L24 22.635L18.873 17.508Z" fill="#F2B705"/>
                  </svg>
                </div>
                <span>Binance Square</span>
              </motion.a>
              
              {/* Binance Live */}
              <motion.a 
                href={socialLinks.binanceLive} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                variants={connectItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-blue/30 group-hover:border-neon-blue/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#0083CA" strokeWidth="2" />
                    <path d="M9 8L16 12L9 16V8Z" fill="#0083CA" />
                  </svg>
                </div>
                <span>Binance Live</span>
              </motion.a>
              
              {/* Announcements */}
              <motion.a 
                href={socialLinks.announcement} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                variants={connectItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#F2B705"/>
                    <path d="M11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="#F2B705"/>
                  </svg>
                </div>
                <span>Announcements</span>
              </motion.a>
              
              {/* Contact Us Button */}
              <motion.a 
                href="#contact" 
                className="mt-6 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-dark font-semibold inline-block"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(242, 183, 5, 0.5)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ParrotBamboo. All rights reserved.
          </p>
          <motion.div 
            className="mt-4 flex justify-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href={socialLinks.linkTree} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkTree
            </motion.a>
            <motion.a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
              whileHover={{ y: -2 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
              whileHover={{ y: -2 }}
            >
              Telegram
            </motion.a>
            <motion.a 
              href={socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
              whileHover={{ y: -2 }}
            >
              YouTube
            </motion.a>
            <motion.a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-yellow text-xs transition-colors"
              whileHover={{ y: -2 }}
            >
              Instagram
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
