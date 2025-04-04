
import React, { useState } from 'react';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useLanguage } from '../hooks/useLanguage';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    binance?: string;
  };
}

export default function TeamSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Kemal Bora",
      role: "Co-Founder",
      bio: "Expert in community management and strategic partnerships with extensive leadership experience in the Web3 space. Driving ParrotBamboo's vision to revolutionize blockchain marketing.",
      image: "/lovable-uploads/e0c2ca26-8559-420d-aaff-43742a206063.png",
      social: {
        linkedin: "https://linkedin.com/in/kemalbora",
        twitter: "https://twitter.com/kemalbora",
        binance: "https://binance.com/en/live/u/kemalbora"
      }
    },
    {
      name: "Serhat Coşkun",
      role: "Co-Founder",
      bio: "Specializes in marketing strategy and technical support, with a proven track record of facilitating growth through successful fundraising campaigns and strategic partnerships.",
      image: "/lovable-uploads/61fcc672-d9d9-46f4-937d-ba02dc86c041.png",
      social: {
        linkedin: "https://linkedin.com/in/serhatcoskun",
        twitter: "https://twitter.com/serhatcoskun",
        binance: "https://binance.com/en/live/u/serhatcoskun"
      }
    },
    {
      name: "Gizem Meltem",
      role: "Business Developer",
      bio: "Proficient in technology education and global partnerships. Skilled at event engagement and building connections that drive business growth in the blockchain ecosystem.",
      image: "/lovable-uploads/7b9b3fe7-38d5-4f98-bd13-25d4fa762acf.png",
      social: {
        linkedin: "https://linkedin.com/in/gizemmeltem",
        twitter: "https://twitter.com/gizemmeltem"
      }
    },
    {
      name: "Murali M.",
      role: "Motion Graphics & Video Designer",
      bio: "Creative powerhouse with expertise in AI-driven design. Creates compelling visual content that helps blockchain projects communicate their vision effectively.",
      image: "/lovable-uploads/43fda211-d474-412d-9613-218c14f9e954.png",
      social: {
        linkedin: "https://linkedin.com/in/muralim",
        twitter: "https://twitter.com/muralim"
      }
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="team" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <motion.div 
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[600px] h-[600px] rounded-full bg-neon-purple/30 blur-3xl -top-64 -left-64"
        />
        <motion.div 
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-neon-blue/30 blur-3xl -bottom-64 -right-64"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4"
          >
            {t('teamTitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          >
            {t('teamSubtitle')}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Our team combines deep expertise in Web3, blockchain technology, and digital marketing to deliver exceptional results.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="cursor-pointer"
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <Card className="bg-dark border border-white/5 overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <motion.img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90" />
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0.8,
                          y: activeIndex === index ? 0 : 10
                        }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{member.name}</h3>
                        <p className="text-neon-purple text-sm font-medium">{member.role}</p>
                        
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex space-x-3">
                            {member.social.linkedin && (
                              <motion.a 
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-dark/50 flex items-center justify-center hover:bg-neon-purple/20 transition-colors border border-neon-purple/30"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Linkedin size={16} className="text-neon-purple" />
                              </motion.a>
                            )}
                            
                            {member.social.twitter && (
                              <motion.a 
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-dark/50 flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/30"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Twitter size={16} className="text-neon-blue" />
                              </motion.a>
                            )}
                            
                            {member.social.binance && (
                              <motion.a 
                                href={member.social.binance}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-dark/50 flex items-center justify-center hover:bg-yellow-400/20 transition-colors border border-yellow-400/30"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 16 16" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-yellow-400"
                                >
                                  <path d="M8 0L9.8 1.8L3.6 8L9.8 14.2L8 16L0 8L8 0Z" fill="currentColor"/>
                                  <path d="M8 0L6.2 1.8L12.4 8L6.2 14.2L8 16L16 8L8 0Z" fill="currentColor"/>
                                  <path d="M5.33334 8.00022L8.00001 5.33356L10.6667 8.00022L8.00001 10.6669L5.33334 8.00022Z" fill="currentColor"/>
                                </svg>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-3xl bg-dark-lighter border border-white/10 text-white p-0 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{member.name}</h3>
                      <p className="text-neon-purple text-lg font-medium mb-6">{member.role}</p>
                      
                      <div className="h-px w-full bg-gradient-to-r from-neon-purple to-neon-blue mb-6" />
                      
                      <p className="text-gray-300 mb-8">{member.bio}</p>
                    </div>
                    
                    <div className="flex space-x-4">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark/50 hover:bg-neon-purple/20 transition-colors border border-neon-purple/30 text-sm"
                        >
                          <Linkedin size={16} className="text-neon-purple" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark/50 hover:bg-neon-blue/20 transition-colors border border-neon-blue/30 text-sm"
                        >
                          <Twitter size={16} className="text-neon-blue" />
                          <span>Twitter</span>
                        </a>
                      )}
                      
                      {member.social.binance && (
                        <a 
                          href={member.social.binance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark/50 hover:bg-yellow-400/20 transition-colors border border-yellow-400/30 text-sm"
                        >
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-yellow-400"
                          >
                            <path d="M8 0L9.8 1.8L3.6 8L9.8 14.2L8 16L0 8L8 0Z" fill="currentColor"/>
                            <path d="M8 0L6.2 1.8L12.4 8L6.2 14.2L8 16L16 8L8 0Z" fill="currentColor"/>
                            <path d="M5.33334 8.00022L8.00001 5.33356L10.6667 8.00022L8.00001 10.6669L5.33334 8.00022Z" fill="currentColor"/>
                          </svg>
                          <span>Binance</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 tracking-wide">
            Click on team member cards to view full profile
          </p>
        </motion.div>
      </div>
    </section>
  );
}
