import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Check, Zap, Rocket, Shield } from 'lucide-react';
import React from 'react';

const plans = [
  {
    name: 'Starter Launch',
    price: '₹14,999',
    period: '/mo',
    desc: 'Perfect for new brands looking to build presence.',
    features: ['8 high-converting creatives', 'Ad campaign setup', 'Conversion landing page', 'Monthly growth report', 'Meta/Google Ads focus'],
    icon: Rocket,
    color: 'white'
  },
  {
    name: 'Growth Pro',
    price: '₹29,999',
    period: '/mo',
    popular: true,
    desc: 'Scale your business with advanced management.',
    features: ['15 premium creatives', 'End-to-end ad management', 'Website optimization', 'Lead automation flows', 'Weekly performance reports', 'Competitor analysis'],
    icon: Zap,
    color: 'growth-green'
  },
  {
    name: 'Scale Elite',
    price: '₹59,999',
    period: '/mo',
    desc: 'The full growth team in your pocket.',
    features: ['Full growth team access', 'Ads + SEO + Funnels', 'Deep CRM systems integration', 'Weekly strategy calls', 'Unlimited technical support', 'Conversion rate optimization'],
    icon: Shield,
    color: 'electric-blue'
  }
];

export const Pricing: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              PRICING BUILT <br/><span className="gradient-text">FOR ACCELERATION</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              Transparent, performance-driven plans with no hidden fees. Choose your growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass-card p-10 flex flex-col ${plan.popular ? 'border-growth-green ring-2 ring-growth-green/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-growth-green text-black text-[10px] uppercase font-black px-4 py-1 rounded-full tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 ${plan.popular ? 'text-growth-green' : 'text-white'}`}>
                  <plan.icon size={24} />
                </div>

                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-text text-sm mb-8 leading-relaxed">{plan.desc}</p>

                <div className="mb-10">
                  <span className="font-stats font-bold text-5xl text-white">{plan.price}</span>
                  <span className="text-muted-text text-sm">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <Check size={16} className="text-growth-green mt-1 flex-shrink-0" />
                      <span className="text-sm text-white/80">{f}</span>
                    </div>
                  ))}
                </div>

                <Button variant={plan.popular ? 'primary' : 'outline'} fullWidth size="lg">
                  Choose Plan
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 glass-card p-12 text-center border border-white/5">
            <h3 className="font-heading font-bold text-3xl mb-4">Need Something Custom?</h3>
            <p className="text-muted-text mb-8 max-w-xl mx-auto">
              For enterprise solutions, custom software, or specialized retail growth, we build bespoke systems.
            </p>
            <Button variant="outline" size="md">Talk to Founders</Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
