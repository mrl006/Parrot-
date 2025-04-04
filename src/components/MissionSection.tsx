
import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="section-padding bg-dark relative">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driving Web3 Innovation Forward</h2>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border">
                    <Target className="w-5 h-5 text-neon-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-gray-300">
                    To be the leading force in Web3 marketing and strategy, helping blockchain projects achieve mainstream recognition and adoption.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border">
                    <Rocket className="w-5 h-5 text-neon-purple" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    Constantly exploring new technologies and strategies to keep our clients at the cutting edge of the decentralized revolution.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-lighter glow-border">
                    <Users className="w-5 h-5 text-neon-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-300">
                    Building and nurturing vibrant communities around blockchain projects to ensure long-term success and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main image/graphic */}
              <div className="w-full aspect-square rounded-2xl glassmorphism overflow-hidden p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex p-6 rounded-full bg-dark glow-border mb-4">
                      <Rocket className="w-16 h-16 text-neon-purple" />
                    </div>
                    <h3 className="text-2xl font-bold neon-text">Revolutionizing</h3>
                    <p className="text-white mt-2">the Digital Landscape</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-neon-blue/10 filter blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-neon-purple/10 filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
