
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

    // Preload existing images
    preloadImage('/circuit-pattern.svg');
    preloadImage('/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png'); // Binance logo
    preloadImage('/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png'); // X logo
    preloadImage('/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png'); // Telegram logo
    preloadImage('/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png');
    preloadImage('/lovable-uploads/c69265d4-43a2-479c-8a0a-3478f05b59d0.png');
    preloadImage('/lovable-uploads/4d42739c-5c3a-45e9-8373-d429a64d6aa7.png');
    preloadImage('/lovable-uploads/30008db4-6520-4312-998e-256d65120c3e.png');
    preloadImage('/lovable-uploads/63732a0e-47b0-4ce2-9aef-9ae3722b07ad.png');
    preloadImage('/lovable-uploads/6bde171d-9ecc-4e99-be1b-b1256f86f19c.png');
    preloadImage('/lovable-uploads/e0c2ca26-8559-420d-aaff-43742a206063.png');
    preloadImage('/lovable-uploads/61fcc672-d9d9-46f4-937d-ba02dc86c041.png');
    preloadImage('/lovable-uploads/7b9b3fe7-38d5-4f98-bd13-25d4fa762acf.png');
    preloadImage('/lovable-uploads/43fda211-d474-412d-9613-218c14f9e954.png');
    preloadImage('/lovable-uploads/a2f262a6-70d5-4673-9aa6-0aa47a11a1e5.png'); // Reference image

    // Preload cryptocurrency and tech logos
    preloadImage('/lovable-uploads/7e7d7050-cffa-4228-a49c-54d8d9fc206e.png'); // Binance coin
    preloadImage('/lovable-uploads/2b0f9a3c-1884-4850-a27d-980f8334625b.png'); // Solana
    preloadImage('/lovable-uploads/7120bbe4-a36d-43f7-b7ce-13972d047ef5.png'); // Ethereum 
    preloadImage('/lovable-uploads/566698e8-c8ae-4125-8001-8f84d8771da0.png'); // Bitcoin
    preloadImage('/lovable-uploads/d46d80bf-7f84-4d8a-b312-5eb0ff837db8.png'); // Updated Binance logo
    
    // Preload web3/blockchain/AI icons
    preloadImage('/blockchain-icon.svg');
    preloadImage('/ai-icon.svg');
    preloadImage('/web3-icon.svg');
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
