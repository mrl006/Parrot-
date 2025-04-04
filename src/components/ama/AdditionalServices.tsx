
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Calendar } from 'lucide-react';
import AdditionalService from './AdditionalService';

const AdditionalServices: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
    >
      <AdditionalService 
        icon={<Mic className="text-neon-yellow" />}
        title="panelDiscussions"
        description="panelDescription"
      />
      <AdditionalService 
        icon={<Users className="text-neon-blue" />}
        title="communityAMA"
        description="communityAMADescription"
      />
      <AdditionalService 
        icon={<Calendar className="text-neon-purple" />}
        title="eventPlanning"
        description="eventPlanningDescription"
      />
    </motion.div>
  );
};

export default AdditionalServices;
