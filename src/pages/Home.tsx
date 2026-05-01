import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe, Megaphone, Search, Settings, Zap, Plus, Minus } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCarousel } from '@/src/components/ui/logo-carousel';
import { InfiniteTextMarquee } from '@/src/components/ui/infinite-text-marquee';
import { Calendar } from '@/src/components/ui/calendar';
import Testimonials from '@/src/components/ui/testimonials';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Megaphone, title: 'Performance Marketing', desc: 'Direct ROI-focused ad campaigns on Meta & Google.' },
  { icon: Globe, title: 'Web Development', desc: 'Premium, conversion-optimized websites and landing pages.' },
  { icon: Search, title: 'SEO & Local Growth', desc: 'Dominate search results and Google Maps sightings.' },
  { icon: Zap, title: 'Automation Systems', desc: 'Smarter CRM and business workflow automations.' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Real-time transparent growth reporting systems.' },
  { icon: Settings, title: 'Branding & Content', desc: 'Luxury creative assets designed to scale brands.' },
];

const faqs = [
  {
    question: "What kind of results can I expect in the first 30 days?",
    answer: "During the first 30 days, we focus on technical foundations, creative testing, and tracking setup. However, most clients see a significant improvement in ad efficiency (ROAS) and lead quality within the first 45 days as our systems start to optimize."
  },
  {
    question: "Do you only work with big Indian brands?",
    answer: "No. While we scale heavyweights, our 'Starter Launch' plan is specifically designed for ambitious startups and businesses ready to transition into a performance-first model."
  },
  {
    question: "Why is your pricing higher than local freelance agencies?",
    answer: "We aren't just managing ads; we're building growth infrastructure. We provide custom analytics models, premium creatives, and technical automation that freelancers typically don't have the stack for. We're an investment in long-term equity, not just a service cost."
  },
  {
    question: "Will I have a dedicated account manager?",
    answer: "Every brand working with Scalora Labs gets direct access to a strategist and a technical lead. Communication happens via dedicated Slack/WhatsApp channels for real-time adjustments."
  }
];

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Hero Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-heading', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
      
      gsap.to('.particles', {
        y: -100,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={containerRef} className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 md:px-12 hero-section overflow-hidden bg-[#050505]">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow z-0 opacity-50" />
          <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.05)_0%,transparent_70%)] blur-[100px] z-0" />
          
          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
              >
                <span className="text-xs font-bold tracking-widest text-growth-green uppercase">Digital Expansion Lab</span>
              </motion.div>
              
              <h1 className="hero-heading font-heading font-extrabold text-5xl md:text-8xl lg:text-9xl tracking-tighter mb-10 leading-[0.85] uppercase">
                WE <span className="gradient-text">SCALE</span> BRANDS TO <span className="gradient-text">NEW HEIGHTS</span>
              </h1>
              
              <p className="hero-heading text-muted-text text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-sans mx-auto">
                Performance marketing, websites, funnels and automation for ambitious Indian businesses ready to dominate their market.
              </p>
              
              <div className="hero-heading flex flex-wrap justify-center gap-6 mb-20">
                <Button variant="primary" size="lg" className="px-12 h-16 text-lg">Start Growing</Button>
                <Button variant="outline" size="lg" className="px-12 h-16 text-lg">View Pricing</Button>
              </div>
              
              <div className="hero-heading grid grid-cols-3 gap-12 pt-12 border-t border-white/5 w-full">
                {[
                  { value: '250+', label: 'Campaigns' },
                  { value: '98%', label: 'Satisfaction' },
                  { value: '12Cr+', label: 'Revenue' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-stats font-bold text-3xl md:text-4xl text-white mb-2">{stat.value}</div>
                    <div className="text-muted-text text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <AnimatedCarousel 
          title="Trusted by Modern Startups, Restaurants, and Indian Retail Brands"
        />

        {/* MARQUEE */}
        <InfiniteTextMarquee 
          text="SCALE SMARTER" 
          tooltipText="Time to dominate🚀"
          speed={25}
          fontSize="10rem"
        />

        {/* SERVICES SECTION */}
        <section className="py-32 px-6 md:px-12 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">SERVICES BUILT <br/><span className="gradient-text">FOR CONVERSION</span></h2>
              <div className="w-20 h-1 growth-gradient mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-10 hover:border-growth-green/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-growth-green transition-colors group-hover:text-black">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-growth-green transition-colors">{item.title}</h3>
                  <p className="text-muted-text leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SCALORA */}
        <section className="py-32 px-6 md:px-12 bg-primary-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-12 uppercase leading-[0.9]">
                  Why Ambitious <br/> Brands <span className="gradient-text">Choose Us</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    'Fast execution & turnaround',
                    'Founder-led support',
                    'Premium creative systems',
                    'ROI focused decisions',
                    'Transparent reporting',
                    'Indian market expertise',
                  ].map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="p-2 rounded-lg bg-growth-green/10 text-growth-green">
                        <Zap size={18} fill="currentColor" />
                      </div>
                      <span className="text-lg font-medium text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-growth-green/20 blur-[100px] rounded-full" />
                <div className="relative space-y-4">
                  {['Strategy', 'Launch', 'Optimize', 'Scale'].map((step, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02, x: 20 }}
                      className="glass-card p-8 flex items-center justify-between border-l-4 border-l-growth-green"
                    >
                      <div>
                        <span className="text-growth-green font-stats text-xs uppercase block mb-1">Step 0{i+1}</span>
                        <h4 className="font-heading font-bold text-2xl">{step}</h4>
                      </div>
                      <ArrowRight className="text-growth-green opacity-30" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* BOOKING & FAQ SECTION */}
        <section className="py-32 px-6 bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-12">
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-6 uppercase">Common <br/><span className="gradient-text">Questions</span></h2>
                <p className="text-muted-text max-w-md">Everything you need to know about our scaling methodology and results.</p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="flex items-center justify-center">
              <Calendar />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center rounded-[40px] bg-linear-to-br from-white/10 to-white/5 border border-white/10 p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] opacity-10 bg-cover bg-center grayscale" />
            
            <div className="relative z-10">
              <h2 className="font-heading font-extrabold text-5xl md:text-7xl mb-10 uppercase">READY TO <span className="gradient-text">SCALE?</span></h2>
              <p className="text-muted-text text-xl mb-12 max-w-xl mx-auto">
                No fluff. No random agencies. Just pure performance-driven growth for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button variant="primary" size="lg">Book Strategy Call</Button>
                <Button variant="outline" size="lg">See Pricing</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
