
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
        staggerChildren: 0.02
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto"
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
