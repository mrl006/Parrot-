
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
      className="py-16 md:py-20 bg-dark-lighter relative"
    >
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-neon-yellow/20 via-transparent to-neon-blue/20"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <PartnersSectionHeader />
        <PartnersList partners={partnersData} />
      </div>
    </section>
  );
}
