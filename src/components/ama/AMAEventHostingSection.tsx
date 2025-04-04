
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AMAHeader from './AMAHeader';
import PlatformCards from './PlatformCards';
import AdditionalServices from './AdditionalServices';
import BackgroundDecorations from './BackgroundDecorations';

export default function AMAEventHostingSection() {
  const { t } = useLanguage();

  return (
    <section id="ama-events" className="section-padding relative overflow-hidden bg-dark-lighter">
      <BackgroundDecorations />

      <div className="container mx-auto px-4 relative z-10">
        <AMAHeader />
        <PlatformCards />
        <AdditionalServices />

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            {t('boostVisibility')}
          </h3>
          <Button
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-6 rounded-full hover:shadow-lg hover:shadow-neon-purple/20 transition-all"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('scheduleEvent')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
