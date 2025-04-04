
import React from 'react';
import { Linkedin, Twitter, Youtube, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialLinks = {
    linkTree: "https://linktr.ee/parrotbamboo",
    telegram: "https://t.me/ParrotBambooCrypto",
    youtube: "https://www.youtube.com/c/ParrotBambooCrypto",
    twitter: "https://mobile.twitter.com/ParrotBamboo07",
    announcement: "https://t.me/parrotbambooann",
    instagram: "https://instagram.com/parrotbamboocrypto?igshid=ZDdkNTZiNTM=",
    binanceLive: "https://www.binance.com/en/live/u/24755389",
    binanceSquare: "https://www.binance.com/en/feed/profile/86893873"
  };

  return (
    <footer className="bg-dark-lighter border-t border-neon-yellow/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-neon-yellow/5 filter blur-3xl"></div>
      
      {/* Blockchain animation elements */}
      <div className="absolute top-20 right-20 blockchain-animation opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#0083CA" fillOpacity="0.8" />
          <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
          <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#0083CA" fillOpacity="0.8" />
        </svg>
      </div>
    
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/a46cbb0c-b340-45e7-aa9e-7ecdcb5dbb14.png" alt="ParrotBamboo Logo" className="h-12 mr-3" />
              <h3 className="text-2xl font-bold neon-text">ParrotBamboo</h3>
            </div>
            <p className="text-gray-300 mb-8">
              A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-neon-yellow" />
              </a>
              <a 
                href={socialLinks.telegram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/20 hover:border-neon-blue/40"
                aria-label="Telegram"
              >
                <MessageSquare size={18} className="text-neon-blue" />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="YouTube"
              >
                <Youtube size={18} className="text-neon-yellow" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-blue/20 transition-colors border border-neon-blue/20 hover:border-neon-blue/40"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-neon-blue" />
              </a>
              <a 
                href={socialLinks.linkTree} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-yellow/20 transition-colors border border-neon-yellow/20 hover:border-neon-yellow/40"
                aria-label="LinkTree"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L8.66 5.34H15.34L12 2Z" fill="#F2B705" />
                  <path d="M12 22L8.66 18.66H15.34L12 22Z" fill="#F2B705" />
                  <path d="M5.34 8.66L2 12L5.34 15.34V8.66Z" fill="#F2B705" />
                  <path d="M18.66 8.66L22 12L18.66 15.34V8.66Z" fill="#F2B705" />
                  <path d="M8.66 8.66H15.34V15.34H8.66V8.66Z" fill="#F2B705" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-yellow">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Team</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-yellow after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-blue">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Social Media Growth</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">AMA & Event Hosting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Corporate Partnerships</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Brand Promotion</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Content Creation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-yellow">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href={socialLinks.binanceSquare} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
                  <span className="text-neon-yellow text-xs font-bold">B</span>
                </div>
                <span>Binance Square</span>
              </a>
              
              <a 
                href={socialLinks.binanceLive} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-blue/30 group-hover:border-neon-blue/60">
                  <span className="text-neon-blue text-xs font-bold">BL</span>
                </div>
                <span>Binance Live</span>
              </a>
              
              <a 
                href={socialLinks.announcement} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/30 group-hover:border-neon-yellow/60">
                  <span className="text-neon-yellow text-xs font-bold">Ann</span>
                </div>
                <span>Announcements</span>
              </a>
              
              <a 
                href="#contact" 
                className="mt-6 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-dark font-semibold inline-block hover-scale"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ParrotBamboo. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href={socialLinks.linkTree} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-yellow text-xs transition-colors">LinkTree</a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-yellow text-xs transition-colors">Twitter</a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-yellow text-xs transition-colors">Telegram</a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-yellow text-xs transition-colors">YouTube</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-yellow text-xs transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
