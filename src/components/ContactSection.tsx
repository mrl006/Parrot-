
import React from 'react';
import { Send, Linkedin, Twitter, MessageSquare, Headphones } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-dark relative">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to revolutionize your Web3 presence? Connect with our team through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder="John Doe"
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder="name@company.com"
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="bg-dark-lighter border border-gray-700 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block w-full p-3"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium flex items-center justify-center gap-2 hover-scale w-full"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect with Us</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border flex-shrink-0">
                  <Headphones className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Schedule a Call</h4>
                  <p className="text-gray-300 mb-4">
                    Book a consultation call with our team to discuss your project needs and how we can help you achieve your goals.
                  </p>
                  <a 
                    href="#" 
                    className="text-neon-purple hover:underline inline-flex items-center gap-1"
                  >
                    Book a meeting <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Join Our Community</h4>
                  <p className="text-gray-300 mb-4">
                    Be part of our vibrant community on Telegram and stay updated with the latest trends in Web3 and blockchain technology.
                  </p>
                  <a 
                    href="#" 
                    className="text-neon-blue hover:underline inline-flex items-center gap-1"
                  >
                    Join Telegram <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
