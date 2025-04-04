
import React from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import PartnerCard from './PartnerCard';

interface PartnersListProps {
  partners: Partner[];
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
    >
      {partners.map((partner, index) => (
        <PartnerCard
          key={index}
          partner={partner}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default PartnersList;
