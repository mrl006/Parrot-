
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreButtonProps {
  showAll: boolean;
  toggleShowAll: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ showAll, toggleShowAll }) => {
  return (
    <div id="partners-show-more" className="flex justify-center mt-12">
      <motion.button
        onClick={toggleShowAll}
        className="group flex items-center gap-2 px-8 py-3 rounded-full bg-dark border border-neon-yellow/30 hover:border-neon-yellow/70 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,183,5,0.3)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>
          {showAll ? 'Show Less Partners' : 'Show More Partners'}
        </span>
        {showAll ? (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronUp size={18} className="text-neon-yellow group-hover:text-neon-blue transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-neon-yellow group-hover:text-neon-blue transition-colors" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ShowMoreButton;
