
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
import AMAEventHostingSection from '../components/AMAEventHostingSection';

const Index = () => {
  useEffect(() => {
    // Preload needed assets
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage('/circuit-pattern.svg');
    preloadImage('/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png');
    preloadImage('/lovable-uploads/c69265d4-43a2-479c-8a0a-3478f05b59d0.png');
    preloadImage('/lovable-uploads/4d42739c-5c3a-45e9-8373-d429a64d6aa7.png');
    preloadImage('/lovable-uploads/30008db4-6520-4312-998e-256d65120c3e.png');
    preloadImage('/lovable-uploads/63732a0e-47b0-4ce2-9aef-9ae3722b07ad.png');
    preloadImage('/lovable-uploads/6bde171d-9ecc-4e99-be1b-b1256f86f19c.png');
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <AMAEventHostingSection />
      <PartnersSection />
      <ExperienceSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
