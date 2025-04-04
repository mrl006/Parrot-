
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PartnersSectionHeader from './partners/PartnersSectionHeader';
import PartnersList from './partners/PartnersList';
import ShowMoreButton from './partners/ShowMoreButton';
import { partnersData } from '../data/partners';

export default function PartnersSection() {
  const [showAllPartners, setShowAllPartners] = useState(false);
  
  // Calculate how many partners to show initially - 2 rows (12 partners)
  const partnersPerRow = 6;
  const initialPartnersCount = partnersPerRow * 2;
  const displayedPartners = showAllPartners ? partnersData : partnersData.slice(0, initialPartnersCount);

  const toggleShowAll = () => {
    setShowAllPartners(!showAllPartners);
    
    // Scroll to the newly revealed partners if showing more
    if (!showAllPartners) {
      setTimeout(() => {
        const element = document.getElementById('partners-show-more');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll back to the partners section if collapsing
      const element = document.getElementById('partners');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section 
      id="partners" 
      className="py-24 bg-dark-lighter relative"
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
        <ShowMoreButton showAll={showAllPartners} toggleShowAll={toggleShowAll} />
      </div>
    </section>
  );
}
