import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Play, PlayCircle, Eye, Search } from 'lucide-react';
import React from 'react';

const demos = [
  { title: 'Premium Websites', desc: 'Watch how we build conversion architecture.', type: 'Web Design' },
  { title: 'Ads Strategy', desc: 'A deep dive into our Meta Ads creative testing.', type: 'Marketing' },
  { title: 'Sales Dashboards', desc: 'Real-time transparency on every rupee spent.', type: 'Automation' },
];

export const Demo: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              SEE THE <br/><span className="gradient-text">SYSTEMS IN ACTION</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              Behind-the-scenes recordings of how we scale brands to ₹10L+ monthly revenue.
            </p>
          </div>

          <div className="mb-20 glass-card p-4 relative overflow-hidden group">
             <div className="aspect-video bg-white/5 rounded-[20px] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                />
                <button className="relative z-10 w-24 h-24 rounded-full bg-growth-green flex items-center justify-center text-black hover:scale-110 transition-transform shadow-[0_0_50px_rgba(34,197,94,0.5)]">
                  <Play size={40} fill="currentColor" />
                </button>
             </div>
             <div className="p-8 text-center">
                <h2 className="font-heading font-bold text-3xl mb-4 uppercase">The Scalora Full Growth Engine</h2>
                <p className="text-muted-text mb-8">A 12-minute deep dive into our methodology, from tracking to scale.</p>
                <Button variant="outline">Schedule Personalized Demo</Button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((d, i) => (
              <div key={i} className="glass-card p-8 flex flex-col group cursor-pointer hover:border-growth-green/30 transition-colors">
                <div className="aspect-video bg-white/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent z-10" />
                   <PlayCircle size={48} className="text-white/20 group-hover:text-growth-green transition-colors" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-growth-green mb-2">{d.type}</div>
                <h3 className="font-heading font-bold text-xl mb-2">{d.title}</h3>
                <p className="text-muted-text text-sm mb-6">{d.desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                   Watch Clip <Eye size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
             <h2 className="font-heading font-bold text-4xl mb-12 uppercase">WANT A FREE GROWTH AUDIT?</h2>
             <p className="text-muted-text mb-12 max-w-xl mx-auto">We'll record a screen-share auditing your website and ads to show you exactly where you're losing money. No strings attached.</p>
             <Button variant="primary" size="lg">Claim Free Audit Video</Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
