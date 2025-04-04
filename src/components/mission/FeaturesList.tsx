
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Users, LineChart } from 'lucide-react';
import MissionFeatureItem from './MissionFeatureItem';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const FeaturesList: React.FC = () => {
  return (
    <motion.div 
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants}>
        <MissionFeatureItem
          icon={Globe}
          color="neon-blue"
          title="Vision"
          description="To be the leading force in Web3 marketing and strategy, helping blockchain projects achieve mainstream recognition and adoption through innovative solutions and strategic partnerships."
          animation={{ rotate: [[0, 10, -10, 0]], scale: [[1, 1.05, 1]] }}
          showArrow={true}
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <MissionFeatureItem
          icon={Lightbulb}
          color="neon-purple"
          title="Innovation"
          description="Constantly exploring new technologies and strategies to keep our clients at the cutting edge of the decentralized revolution, enabling unprecedented growth and market presence."
          animation={{ y: [[-3, 3, -3]], rotate: [[-5, 5, -5]] }}
          duration={2.5}
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <MissionFeatureItem
          icon={Users}
          color="neon-cyan"
          title="Community"
          description="Building and nurturing vibrant communities around blockchain projects to ensure long-term success, engagement, and organic growth through authentic connections and value creation."
          animation={{ rotate: [[0, 360]] }}
          duration={10}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <MissionFeatureItem
          icon={LineChart}
          color="neon-yellow"
          title="Growth"
          description="Driving measurable results through data-driven marketing strategies and performance optimization, helping Web3 projects reach their full potential and achieve sustainable growth."
          animation={{ scale: [[1, 1.1, 1]] }}
          duration={2}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturesList;
