
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Rocket, Users, PenTool, Code, Headphones, Megaphone } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'marketing',
      icon: <Megaphone className="w-6 h-6" />,
      title: t('marketingService'),
      description: 'Strategic marketing campaigns tailored for blockchain projects',
      color: 'from-neon-yellow to-neon-purple',
      delay: 0
    },
    {
      id: 'consulting',
      icon: <Rocket className="w-6 h-6" />,
      title: t('consultingService'),
      description: 'Expert guidance on blockchain integration and tokenomics',
      color: 'from-neon-blue to-neon-cyan',
      delay: 0.1
    },
    {
      id: 'community',
      icon: <Users className="w-6 h-6" />,
      title: t('communityService'),
      description: 'Building and nurturing engaged crypto communities',
      color: 'from-neon-purple to-neon-blue',
      delay: 0.2
    },
    {
      id: 'development',
      icon: <Code className="w-6 h-6" />,
      title: t('developmentService'),
      description: 'Web3 development solutions and smart contract auditing',
      color: 'from-neon-cyan to-neon-yellow',
      delay: 0.3
    }
  ];

  // AMA Event hosting services with correct logos and black backgrounds
  const eventServices = [
    {
      id: 'binance-live',
      icon: '/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png',
      title: 'Binance Live',
      description: 'Professional AMA events on Binance platform',
      color: 'from-[#F0B90B] to-[#F8D12F]',
      delay: 0.4,
      iconClass: 'bg-black' // Ensuring all logos have black background
    },
    {
      id: 'twitter-audio',
      icon: '/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png',
      title: 'Twitter Audio Live',
      description: 'Engaging Twitter Space discussions and AMAs',
      color: 'from-gray-600 to-gray-800',
      delay: 0.5,
      iconClass: 'bg-black' // Black background for X logo
    },
    {
      id: 'telegram-audio',
      icon: '/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png',
      title: 'Telegram Audio Live',
      description: 'Community voice chats and announcements',
      color: 'from-[#0088cc] to-[#29B6F6]',
      delay: 0.6,
      iconClass: 'bg-black' // Black background for Telegram logo
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10"></div>
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-neon-blue/10 filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-neon-purple/10 filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What We Offer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>

        {/* AMA & Event Hosting section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-purple">
            {t('amaEventHosting')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventServices.map((service) => (
              <EventServiceCard 
                key={service.id}
                icon={service.icon}
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={service.delay}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  color,
  delay
}: { 
  icon: React.ReactNode; 
  title: string;
  description: string;
  color: string;
  delay: number;
}) => (
  <motion.div 
    className="p-6 rounded-xl border border-white/10 bg-dark/70 backdrop-blur-lg hover:bg-dark-lighter/50 transition-all group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const EventServiceCard = ({ 
  icon, 
  iconClass,
  title, 
  description, 
  color,
  delay
}: { 
  icon: string; 
  iconClass: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}) => (
  <motion.div 
    className="p-6 rounded-xl border border-white/10 bg-dark/70 backdrop-blur-lg hover:bg-dark-lighter/50 transition-all group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className={`w-12 h-12 rounded-full ${iconClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);
