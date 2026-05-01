import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Linkedin, Target, Shield, Zap, TrendingUp } from 'lucide-react';
import React from 'react';

const founders = [
  {
    name: 'Devansh Kadam',
    role: 'Co-Founder | Growth Strategist',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    link: '#'
  },
  {
    name: 'Soham Powar',
    role: 'Co-Founder | Tech & Systems',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    link: '#'
  }
];

const values = [
  { title: 'Speed', icon: Zap, desc: 'Launching campaigns in days, not months.' },
  { title: 'Trust', icon: Shield, desc: 'Founder-led direct communication always.' },
  { title: 'Execution', icon: Target, desc: 'We value real data over beautiful promises.' },
  { title: 'Innovation', icon: TrendingUp, desc: 'Leveraging AI & tech for outlier results.' },
];

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              BUILT TO SCALE <br/><span className="gradient-text">INDIAN BRANDS</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              India's next growth-first digital agency. Born from a hunger to see Indian DTC and local businesses compete globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
               <div className="absolute inset-0 bg-electric-blue/20 blur-[100px] rounded-full" />
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                 alt="Our Team"
                 className="relative z-10 rounded-[40px] border border-white/10"
               />
            </div>
            <div>
              <h2 className="font-heading font-bold text-4xl mb-8">OUR MISSION</h2>
              <p className="text-muted-text text-lg leading-relaxed mb-6">
                At Scalora Labs, we don't think like a traditional agency. We think like co-founders. Your CAC (Customer Acquisition Cost) is our obsession. Your ROAS (Return on Ad Spend) is our scoreboard.
              </p>
              <p className="text-muted-text text-lg leading-relaxed mb-10">
                We believe the Indian market is going through a massive digital shift. Those who leverage premium visual systems combined with data-driven performance will win the next decade.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {values.map(v => (
                  <div key={v.title}>
                    <div className="flex items-center gap-3 mb-3">
                      <v.icon size={20} className="text-growth-green" />
                      <h4 className="font-heading font-bold">{v.title}</h4>
                    </div>
                    <p className="text-muted-text text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="font-heading font-extrabold text-4xl text-center mb-16 uppercase">MEET THE <span className="gradient-text">FOUNDERS</span></h2>
            <div className="flex flex-wrap justify-center gap-12">
              {founders.map(f => (
                <div key={f.name} className="glass-card p-10 text-center group cursor-pointer w-full md:w-80">
                  <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-growth-green transition-colors">
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl mb-2">{f.name}</h4>
                  <p className="text-muted-text text-sm mb-6">{f.role}</p>
                  <a href={f.link} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
