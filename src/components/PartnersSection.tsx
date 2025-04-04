
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from "../hooks/use-toast";

interface Partner {
  name: string;
  website: string;
  logoUrl: string;
}

export default function PartnersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAllPartners, setShowAllPartners] = useState(false);
  
  const partners: Partner[] = [
    {
      name: "Binance",
      website: "https://www.binance.com",
      logoUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
    },
    {
      name: "Solv",
      website: "https://solv.xyz",
      logoUrl: "https://cryptologos.cc/logos/solv-protocol-solv-logo.png"
    },
    {
      name: "ApeBond",
      website: "https://www.apebond.com",
      logoUrl: "https://www.apebond.com/img/logo.svg"
    },
    {
      name: "Bybit",
      website: "https://www.bybit.com",
      logoUrl: "https://cryptologos.cc/logos/bybit-bbt-logo.png"
    },
    {
      name: "ChainGPT",
      website: "https://www.chaingpt.org",
      logoUrl: "https://assets.coingecko.com/coins/images/29462/small/cgpt.png"
    },
    {
      name: "Decubate",
      website: "https://www.decubate.com",
      logoUrl: "https://www.decubate.com/images/logo.svg"
    },
    {
      name: "BNB Chain",
      website: "https://bnbchain.org",
      logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png"
    },
    {
      name: "StarryNift",
      website: "https://www.starrynift.com",
      logoUrl: "https://www.starrynift.com/logo.png"
    },
    {
      name: "KuCoin",
      website: "https://www.kucoin.com",
      logoUrl: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png"
    },
    {
      name: "Hooked",
      website: "https://www.hooked.finance",
      logoUrl: "https://www.hooked.finance/assets/images/logo.svg"
    },
    {
      name: "Kommunitas",
      website: "https://www.kommunitas.net",
      logoUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/10403.png"
    },
    {
      name: "Bitget",
      website: "https://www.bitget.com",
      logoUrl: "https://cryptologos.cc/logos/bitget-token-bgb-logo.png"
    },
    {
      name: "Biconomy",
      website: "https://www.biconomy.com",
      logoUrl: "https://cryptologos.cc/logos/biconomy-bico-logo.png"
    },
    {
      name: "Toobit",
      website: "https://www.toobit.com",
      logoUrl: "https://www.toobit.com/static/images/logo.png"
    },
    {
      name: "GT Protocol",
      website: "https://www.gtprotocol.io",
      logoUrl: "https://www.gtprotocol.io/images/logo.png"
    },
    {
      name: "KIP",
      website: "https://www.kip.io",
      logoUrl: "https://www.kip.io/static/media/kip-logo.png"
    },
    {
      name: "MEXC Global",
      website: "https://www.mexc.com",
      logoUrl: "https://cryptologos.cc/logos/mexc-token-mexc-logo.png"
    },
    {
      name: "Mogul",
      website: "https://www.mogulproductions.com",
      logoUrl: "https://www.mogulproductions.com/images/logo.png"
    },
    {
      name: "Gate.io",
      website: "https://www.gate.io",
      logoUrl: "https://cryptologos.cc/logos/gate-gt-logo.png"
    },
    {
      name: "Huobi",
      website: "https://www.huobi.com",
      logoUrl: "https://cryptologos.cc/logos/huobi-token-ht-logo.png"
    },
    {
      name: "BitMart",
      website: "https://www.bitmart.com",
      logoUrl: "https://cryptologos.cc/logos/bitmart-token-bmx-logo.png"
    },
    {
      name: "Poolz",
      website: "https://www.poolz.finance",
      logoUrl: "https://cryptologos.cc/logos/poolz-finance-poolz-logo.png"
    },
    {
      name: "GPTVerse",
      website: "https://www.gptverse.com",
      logoUrl: "https://www.gptverse.com/images/logo.png"
    },
    {
      name: "LBank",
      website: "https://www.lbank.info",
      logoUrl: "https://cryptologos.cc/logos/lbank-token-lbk-logo.png"
    },
    {
      name: "Probit Global",
      website: "https://www.probit.com",
      logoUrl: "https://cryptologos.cc/logos/probit-token-prob-logo.png"
    },
    {
      name: "Golden Paws",
      website: "https://www.goldenpaws.io",
      logoUrl: "https://www.goldenpaws.io/images/logo.png"
    },
    {
      name: "Web3D",
      website: "https://web3decision.com/",
      logoUrl: "https://web3decision.com/images/logo.png"
    }
  ];

  // Calculate how many partners to show initially - 2 rows (12 partners)
  const partnersPerRow = 6;
  const initialPartnersCount = partnersPerRow * 2;
  const displayedPartners = showAllPartners ? partners : partners.slice(0, initialPartnersCount);

  const handlePartnerClick = (website: string) => {
    window.open(website, '_blank');
    toast({
      title: "Opening partner website",
      description: "Redirecting to partner's official website",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
        <div className="mb-16 text-center">
          <motion.span 
            className="inline-block px-6 py-2 rounded-full bg-neon-yellow/20 text-neon-yellow text-sm font-semibold mb-4 border border-neon-yellow/30"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Partners
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">Trusted by Industry Leaders</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
          
          <motion.div className="flex justify-center mt-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Handshake size={48} className="text-neon-yellow mb-6" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We collaborate with leading projects and platforms across the blockchain ecosystem to deliver exceptional results
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedPartners.map((partner, index) => (
            <motion.div 
              key={index}
              className={`backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center h-32 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? 'border-neon-yellow shadow-lg shadow-neon-yellow/20' : 'border-neon-yellow/20'
              } border bg-gradient-to-br from-dark/80 to-dark-lighter/80`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handlePartnerClick(partner.website)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px 0 rgba(242, 183, 5, 0.2)'
              }}
              animate={hoveredIndex === index ? { 
                y: -10,
                transition: { duration: 0.3 }
              } : {}}
            >
              <motion.div 
                className="flex flex-col justify-center items-center w-full h-full gap-2"
                animate={hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
              >
                <div className="h-12 flex items-center justify-center">
                  <img 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parentDiv = target.parentElement;
                      if (parentDiv) {
                        const textElement = document.createElement('p');
                        textElement.className = `font-semibold text-center text-lg ${
                          hoveredIndex === index ? 'text-neon-yellow' : 'text-white'
                        }`;
                        textElement.textContent = partner.name;
                        parentDiv.appendChild(textElement);
                      }
                    }}
                  />
                </div>
                <p className={`font-semibold text-center text-sm mt-2 ${
                  hoveredIndex === index ? 'text-neon-yellow' : 'text-white'
                }`}>
                  {partner.name}
                </p>
                {hoveredIndex === index && (
                  <motion.div 
                    className="flex items-center gap-1 text-xs text-neon-blue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Visit</span>
                    <ExternalLink size={12} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Show More/Less Button */}
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
              {showAllPartners ? 'Show Less Partners' : 'Show More Partners'}
            </span>
            {showAllPartners ? (
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
      </div>
    </section>
  );
}
