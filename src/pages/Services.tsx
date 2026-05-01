import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { 
  Target, 
  Search, 
  Layout, 
  ArrowRightCircle, 
  LineChart, 
  Instagram, 
  Workflow, 
  Camera,
  BarChart,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

const detailedServices = [
  { 
    id: 'ads', 
    icon: Target, 
    title: 'Meta Ads', 
    desc: 'Direct response Facebook & Instagram campaigns built to sell out your stock.', 
    timeline: 'Launch in 7 days',
    longDesc: 'Our Meta Ads strategy goes beyond just pressing "Boost Post". We implement complex funnel structures using Advantage+ shopping campaigns, custom audience lookalikes, and rigorous A/B testing on creatives. We focus on ROAS (Return on Ad Spend) that actually translates to profit.',
    features: ['Dynamic Creative Optimization', 'Retargeting Funnels', 'Pixel & CAPI Setup', 'Creative Strategy']
  },
  { 
    id: 'google', 
    icon: Search, 
    title: 'Google Ads', 
    desc: 'Capture intent-based traffic. Search, Display, and Performance Max mastery.', 
    timeline: 'Launch in 10 days',
    longDesc: 'Be exactly where your customers are searching. We dominate Search, Shopping, and Youtube ads. Our Google Ads management includes keyword harvesting, negative keyword pruning, and landing page optimization to ensure the highest Quality Score possible.',
    features: ['Performance Max Campaigns', 'Keyword Research', 'Conversion Tracking', 'YouTube Ad Placement']
  },
  { 
    id: 'web', 
    icon: Layout, 
    title: 'Website Design', 
    desc: 'Premium luxury websites built on high-conversion architectures.', 
    timeline: '14-21 days',
    longDesc: 'A website shouldn\'t just look good—it should be a 24/7 salesperson. We build lightning-fast, mobile-optimized sites using modern frameworks that prioritize user experience and conversion rate optimization (CRO).',
    features: ['Speed Optimization', 'SEO-Ready Structure', 'Mobile-First Design', 'Custom E-commerce Flows']
  },
  { 
    id: 'funnels', 
    icon: ArrowRightCircle, 
    title: 'High-Ticket Funnels', 
    desc: 'End-to-end sales funnels for high-ticket services and lead generation.', 
    timeline: '10 days',
    longDesc: 'For businesses selling premium products or services, a simple product page isn\'t enough. We build sophisticated multi-step funnels involving VSLs (Video Sales Letters), application forms, and automated qualification systems.',
    features: ['Lead Scoring', 'VSL Implementation', 'Email Sequencing', 'Calendar Integration']
  },
  { 
    id: 'seo', 
    icon: LineChart, 
    title: 'Organic SEO', 
    desc: 'Dominate organic search results and build long-term sustainable traffic.', 
    timeline: 'Ongoing / 6 months',
    longDesc: 'Skip the "get-rich-quick" schemes. Our SEO approach focuses on technical foundation, content authority, and high-quality backlink acquisition. We aim for top-of-funnel keyword dominance to reduce your reliance on paid media.',
    features: ['Technical Audit', 'Content Strategy', 'Link Building', 'Local SEO Dominance']
  },
  { 
    id: 'social', 
    icon: Instagram, 
    title: 'Social Management', 
    desc: 'Content production that doesn\'t just look good, it builds brand authority.', 
    timeline: 'Monthly retainer',
    longDesc: 'We manage your brand\'s digital pulse. From community engagement to viral content strategy, we ensure your social presence reflects the premium nature of your business while driving actual engagement metrics that matter.',
    features: ['Content Scheduling', 'Community Management', 'Influencer Outreach', 'Trend Monitoring']
  },
  { 
    id: 'crm', 
    icon: Workflow, 
    title: 'CRM Automation', 
    desc: 'Connect your ads to your sales team with 24/7 lead notification systems.', 
    timeline: '7 days',
    longDesc: 'Don\'t let leads go cold. We automate the entire follow-up process. As soon as a lead enters your funnel, our systems can trigger WhatsApp notifications, email drips, and CRM entries for your sales team to act instantly.',
    features: ['WhatsApp Automation', 'Email Drip Campaigns', 'Zapier/Make Integration', 'Sales Pipeline Setup']
  },
  { 
    id: 'production', 
    icon: Camera, 
    title: 'Creative Production', 
    desc: 'High-end visual content production designed specifically for ad performance.', 
    timeline: 'Monthly / Project',
    longDesc: 'In the modern ad landscape, creative is the new targeting. We produce high-impact UGC (User Generated Content), cinematic brand videos, and high-conversion static ads designed specifically to stop the scroll and drive clicks.',
    features: ['UGC Production', 'Product Cinematography', 'Ad Copywriting', 'Graphic Design']
  },
];

const caseStudies = [
  {
    title: "MBA Chai Wala",
    brand: "Food & Beverage",
    result: "0 to 100Cr+ Valuation",
    description: "How a local tea startup used viral performance marketing and personal branding to scale into a nationwide franchise system.",
    strategy: "Hyper-local social targeting & Viral Hooks",
    img: "https://images.unsplash.com/photo-1544787210-2827251c5e94?auto=format&fit=crop&q=80&w=800",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61z-vS_t5H6e7q6rXm6a6LzJ9qM8A3dO1vA&s" 
  },
  {
    title: "Real Estate Giant",
    brand: "Property Prep",
    result: "500+ Qualified High-Ticket Leads",
    description: "Implementing a multi-channel lead generation funnel for a major real estate developer in Noida, resulting in ₹12Cr in bookings in 30 days.",
    strategy: "Advanced CRM Automation & VSL Funnels",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    logo: "https://cdn.worldvectorlogo.com/logos/reliance-industries-logo.svg" 
  },
  {
    title: "D2C Fashion Hub",
    brand: "E-commerce Retail",
    result: "4.5x ROAS Sustainably",
    description: "Taking a local Indian ethnic wear brand from ₹5 Lakh/month to ₹50 Lakh/month using Meta Advantage+ Shopping and UGC.",
    strategy: "Creative-first Ad Strategy",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    logo: "https://cdn.worldvectorlogo.com/logos/mahindra.svg"
  }
];

export const Services: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* SEO Hero Section */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-growth-green/10 text-growth-green text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-growth-green/20"
            >
              <TrendingUp size={14} /> Full-Stack Growth Infrastructure
            </motion.div>
            <h1 className="font-heading font-extrabold text-5xl md:text-8xl mb-8 uppercase tracking-tighter leading-[0.9]">
              Growth <span className="gradient-text">Engines</span> <br/>That Deliver
            </h1>
            <p className="text-muted-text text-xl max-w-3xl mx-auto leading-relaxed">
              Scalora Labs doesn't just manage ads. We build <strong className="text-white">Revenue Infrastructure</strong>. From technical SEO to high-performance Meta funnels, we optimize every touchpoint of your customer journey.
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedServices.map((service, i) => (
              <Dialog key={service.id}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-8 flex flex-col hover:border-growth-green/40 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-growth-green/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-growth-green/10 transition-colors" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-growth-green group-hover:scale-110 group-hover:bg-growth-green/10 transition-all duration-500 shadow-xl border border-white/5">
                      <service.icon size={28} />
                    </div>
                    
                    <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-growth-green transition-colors">{service.title}</h3>
                    <p className="text-muted-text text-sm mb-8 leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-muted-text/60 mb-1">Layout</div>
                        <div className="text-xs font-bold text-growth-green">{service.timeline}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-text group-hover:bg-growth-green group-hover:text-black transition-all">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[600px] bg-primary-black border-white/10 rounded-3xl">
                  <DialogHeader>
                    <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center text-growth-green mb-4">
                      <service.icon size={24} />
                    </div>
                    <DialogTitle className="text-3xl font-heading font-black uppercase tracking-tight text-white">{service.title}</DialogTitle>
                    <DialogDescription className="text-lg py-4 leading-relaxed font-medium text-muted-text">
                      {service.longDesc}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-growth-green" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <Button variant="primary" className="flex-grow py-6 text-base" onClick={() => window.location.href = '/contact'}>
                      Book Strategy Consultation
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Case Studies / Indian Brands Section */}
          <div className="mt-40 mb-20">
            <div className="text-center mb-20">
               <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 uppercase tracking-tighter">
                 SCALE <span className="gradient-text">LEGENDS</span>
               </h2>
               <p className="text-muted-text text-lg max-w-2xl mx-auto leading-relaxed">
                 We've helped local Indian brands disrupt their markets and achieve massive scalability using modern growth engineering.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.div 
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-[40px] overflow-hidden bg-white/5 border border-white/5 hover:border-growth-green/20 transition-all group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={study.img} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shadow-2xl">
                        <img src={study.logo} alt={study.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-white text-xl uppercase leading-none">{study.title}</h4>
                        <span className="text-[10px] font-bold text-growth-green tracking-[0.2em] uppercase">{study.brand}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={16} className="text-growth-green" />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{study.result}</span>
                    </div>
                    <p className="text-muted-text text-sm mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="text-[10px] font-bold text-muted-text/60 uppercase tracking-widest mb-1">Core Strategy</div>
                      <div className="text-xs font-bold text-white uppercase">{study.strategy}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="mt-40 text-center">
            <h2 className="font-heading font-extrabold text-4xl mb-12 uppercase tracking-tight">TRANSFORM YOUR INFRASTRUCTURE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 rounded-[40px] p-12 lg:p-20 border border-white/10 relative overflow-hidden text-left">
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-growth-green/5 blur-[120px] -mr-48 -mb-48" />
               <div className="relative z-10">
                  <h3 className="font-heading font-bold text-4xl mb-6 uppercase tracking-tight">Performance Dashboards</h3>
                  <p className="text-muted-text leading-relaxed mb-8 text-lg">
                    See exactly where every rupee is going with our custom analytics infrastructure. No hidden math. No confusing spreadsheets. Just real-time growth data at your fingertips.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {[
                      { label: 'Real-time spend tracking', icon: BarChart },
                      { label: 'Customer acquisition cost analysis', icon: TrendingUp },
                      { label: 'Life-time value reporting', icon: Users },
                      { label: 'Creative performance heatmaps', icon: Layout }
                    ].map(item => (
                      <li key={item.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-growth-green/10 flex items-center justify-center text-growth-green">
                          <item.icon size={16} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-white">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="px-10 py-6 text-base group" onClick={() => window.location.href = '/contact'}>
                    Access Dashboard Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
               <div className="relative group lg:block hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Analytics Dashboard"
                    className="rounded-[32px] shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-1000 border border-white/10 grayscale-[0.8] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
