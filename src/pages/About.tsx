import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, Code, BarChart3, GraduationCap, Target, Shield, Zap, TrendingUp } from 'lucide-react';
import React from 'react';

const founders = [
  {
    name: 'Devansh G Kadam',
    role: 'Co-Founder | Growth Strategist',
    email: 'devanshkadam2@gmail.com',
    linkedin: 'https://www.linkedin.com/in/devansh-kadam?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: 'https://www.instagram.com/thedevanshkadam?igsh=eWFhY2VvYXVnMm5s',
    bio: 'Engineer in Computer Science and Business Systems. Specialized in building performance-driven growth engines and technical marketing architectures.',
    img: 'https://i.postimg.cc/kXND7zyM/devansh-kadam.jpg'
  },
  {
    name: 'Soham C Pawar',
    role: 'Co-Founder | Tech & Systems',
    email: 'sohamcr7744@gmail.com',
    linkedin: 'https://www.linkedin.com/in/soham-c-pawar/',
    bio: 'Engineer in Computer Science and Business Systems. Architecting high-load digital systems and scalable business infrastructures.',
    img: 'https://i.postimg.cc/bJ2NWBJj/soham-profile-page.jpg'
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
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              BUILT TO SCALE <br/><span className="gradient-text">INDIAN BRANDS</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              India's next growth-first digital agency. Born from a hunger to see Indian DTC and local businesses compete globally.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
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

          {/* Founders Section */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl uppercase tracking-tight">
                MEET THE <span className="gradient-text">FOUNDERS</span>
              </h2>
              <p className="text-muted-text mt-4">Engineers at heart, strategists by trade.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <motion.div 
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={founder.img} 
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-8 left-8 right-8 text-left">
                      <h3 className="font-heading font-extrabold text-3xl mb-1 uppercase tracking-tight">{founder.name}</h3>
                      <p className="text-growth-green font-bold uppercase tracking-widest text-xs mb-4">{founder.role}</p>
                    </div>
                  </div>

                  <div className="p-8 text-left">
                    <div className="flex gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider">
                        <GraduationCap size={14} className="text-growth-green" /> CSBS Engineer
                      </div>
                    </div>

                    <p className="text-muted-text mb-8 leading-relaxed">
                      {founder.bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-growth-green/10 border border-growth-green/20 text-growth-green font-bold text-sm hover:bg-growth-green hover:text-black transition-all"
                      >
                        <Linkedin size={18} /> LinkedIn
                      </a>
                      {founder.instagram && (
                        <a 
                          href={founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
                        >
                          <Instagram size={18} /> Instagram
                        </a>
                      )}
                      <a 
                        href={`mailto:${founder.email}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
                      >
                        <Mail size={18} /> Email
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CSBS Section */}
          <div className="p-12 glass-card text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-growth-green to-electric-blue" />
            <h2 className="font-heading font-bold text-3xl mb-6">THE CSBS EDGE</h2>
            <p className="text-muted-text text-lg max-w-3xl mx-auto leading-relaxed">
              As Computer Science and Business Systems engineers, we don't just build code; we architect economic engines. Our approach combines rigorous algorithmic efficiency with business-centric growth models to ensure every technical decision drives a commercial outcome.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

