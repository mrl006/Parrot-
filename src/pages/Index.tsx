
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Preload needed assets
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage('/circuit-pattern.svg');
    preloadImage('/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png');
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <TeamSection />
      <ServicesSection />
      <PartnersSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
