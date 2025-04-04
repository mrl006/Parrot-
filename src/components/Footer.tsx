
import React from 'react';
import { Linkedin, Twitter, Youtube, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-6">ParrotBamboo</h3>
            <p className="text-gray-400 mb-6">
              A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Social Media Growth</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AMA & Event Hosting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Corporate Partnerships</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Brand Promotion</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Content Creation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <p className="text-gray-400 mb-4">Have questions or want to collaborate? Reach out to us.</p>
            <a 
              href="#contact" 
              className="px-5 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium inline-block hover-scale"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ParrotBamboo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
