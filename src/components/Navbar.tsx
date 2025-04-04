
import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Simplified menu items - max 5 as requested
const navItems = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'partners', href: '#partners' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Find current active section
      const sections = navItems.map(item => item.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveItem(href);
    
    // Smooth scroll implementation
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src="/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png" 
            alt="ParrotBamboo Logo" 
            className="h-12 mr-2"
            whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
          />
          <span className="text-xl font-bold neon-text">ParrotBamboo</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-gray-300 hover:text-white transition-colors relative ${
                    activeItem === item.href ? 'text-white' : ''
                  }`}
                >
                  {t(item.label as any)}
                  {activeItem === item.href && (
                    <motion.span 
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-neon-yellow"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button 
                className="flex items-center text-white p-2 rounded-full hover:bg-dark-lighter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'TR'}</span>
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className={language === 'en' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('en')}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={language === 'tr' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('tr')}
              >
                Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Language selector for mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button 
                className="flex items-center text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="h-5 w-5" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className={language === 'en' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('en')}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={language === 'tr' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('tr')}
              >
                Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <motion.button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(
          'fixed inset-0 bg-dark-lighter/95 backdrop-blur-md z-40 md:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <motion.ul 
            className="space-y-6 text-center"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              },
              closed: {}
            }}
          >
            {navItems.map((item, i) => (
              <motion.li 
                key={item.label} 
                className="text-xl"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 }
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    activeItem === item.href ? 'text-white' : ''
                  }`}
                >
                  {t(item.label as any)}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </nav>
  );
}
