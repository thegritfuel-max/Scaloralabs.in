import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShoppingBag, MapPin } from 'lucide-react';
import React from 'react';

const cases = [
  { title: 'Restaurant Growth', result: '+220% Orders', icon: MapPin, desc: 'How we used hyper-local Meta ads to pack a local restaurant every weekend.', stats: [65, 82, 95] },
  { title: 'Fashion Brand', result: '5.2x ROAS', icon: ShoppingBag, desc: 'Scaling an Indian streetwear brand from ₹50k to ₹12L in monthly revenue.', stats: [30, 45, 88] },
  { title: 'Elite Gym', result: '180 Leads/mo', icon: Users, desc: 'Automating high-quality lead flow for a premium fitness club in Mumbai.', stats: [20, 55, 92] },
  { title: 'Health Clinic', result: '#1 Maps Rank', icon: TrendingUp, desc: 'Local SEO mastery that generated 40+ appointments every week organically.', stats: [15, 33, 90] },
];

export const Portfolio: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              BATTLE TESTED <br/><span className="gradient-text">CASE STUDIES</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              Results don't lie. Browse the systems we've built for businesses just like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cases.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group"
              >
                <div className="h-64 bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={80} className="text-white/5 group-hover:text-growth-green transition-colors duration-700" />
                  </div>
                  {/* Mock Chart Animation */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2 h-32">
                    {project.stats.map((h, j) => (
                      <motion.div 
                        key={j}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + (j * 0.1), duration: 1 }}
                        className="flex-1 bg-growth-green/20 border-t border-growth-green rounded-t-lg"
                      />
                    ))}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-heading font-bold text-3xl mb-2">{project.title}</h3>
                      <p className="text-muted-text text-sm">{project.desc}</p>
                    </div>
                    <div className="bg-growth-green/10 text-growth-green px-4 py-2 rounded-xl text-xl font-bold font-stats">
                      {project.result}
                    </div>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:text-growth-green transition-colors">
                    View Full Strategy Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
