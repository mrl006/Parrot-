
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import PartnerCard from './PartnerCard';

interface PartnersListProps {
  partners: Partner[];
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {partners.map((partner, index) => (
        <PartnerCard
          key={index}
          partner={partner}
          index={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </motion.div>
  );
};

export default PartnersList;
