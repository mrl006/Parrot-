
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PartnersSectionHeader from './partners/PartnersSectionHeader';
import PartnersList from './partners/PartnersList';
import ShowMoreButton from './partners/ShowMoreButton';
import { partnersData } from '../data/partners';
import { useLanguage } from '../hooks/useLanguage';

export default function PartnersSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  
  // Only show first 6 partners initially
  const displayedPartners = showAll ? partnersData : partnersData.slice(0, 6);
  
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  
  return (
    <section 
      id="partners" 
      className="py-20 bg-dark-lighter relative"
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
        <PartnersList partners={displayedPartners} />
        {partnersData.length > 6 && (
          <ShowMoreButton showAll={showAll} toggleShowAll={toggleShowAll} />
        )}
      </div>
    </section>
  );
}
