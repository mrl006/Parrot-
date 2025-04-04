
import React from 'react';
import { motion } from 'framer-motion';
import PartnersSectionHeader from './partners/PartnersSectionHeader';
import PartnersList from './partners/PartnersList';
import { partnersData } from '../data/partners';
import { useLanguage } from '../hooks/useLanguage';

export default function PartnersSection() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="partners" 
      className="py-24 md:py-32 bg-dark-lighter relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/30 via-transparent to-neon-purple/20"></div>
      </motion.div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <PartnersSectionHeader />
        <PartnersList partners={partnersData} />
      </div>
    </section>
  );
};
