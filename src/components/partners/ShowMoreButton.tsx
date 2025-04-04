
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreButtonProps {
  showAll: boolean;
  toggleShowAll: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ showAll, toggleShowAll }) => {
  return (
    <div id="partners-show-more" className="flex justify-center mt-16">
      <motion.button
        onClick={toggleShowAll}
        className="group flex items-center gap-3 px-10 py-3.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 hover:border-neon-blue/60 text-white font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,131,202,0.25)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-blue">
          {showAll ? 'Show Less Partners' : 'Show More Partners'}
        </span>
        {showAll ? (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronUp size={18} className="text-neon-blue group-hover:text-neon-yellow transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-neon-blue group-hover:text-neon-yellow transition-colors" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ShowMoreButton;
