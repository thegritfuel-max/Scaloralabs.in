import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShoppingBag, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import React from 'react';

const projects = [
  { 
    title: 'Trim & Fit Co.', 
    desc: '4.2x ROAS in 60 days for a D2C apparel brand.', 
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  { 
    title: 'Elite Real Estate', 
    desc: '₹12Cr in bookings via automated lead nurturing.', 
    img: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  { 
    title: 'Mumbai Gourmet', 
    desc: 'Local SEO mastery packing restaurants every weekend.', 
    img: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42177?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  { 
    title: 'Zenith Wellness', 
    desc: '180+ qualified clinical leads monthly.', 
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  { 
    title: 'SaaS Pulse', 
    desc: 'Custom analytics dashboard for high-growth startups.', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

const products = [
  {
    title: 'QR Menu System',
    desc: 'Digital interactive menu for restaurants. ₹10,000/year (Includes maintenance & 3 menu updates monthly).',
    img: 'https://i.ibb.co/0RWCV6dP/eng-qr.png',
    link: 'https://myrestorants.netlify.app'
  },
  {
    title: 'Scalora CRM',
    desc: 'Bespoke CRM tailored for Indian retail chains to manage loyalty and data.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'AdEngine AI',
    desc: 'Automated performance marketing creative generator for fast-paced D2C.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    title: 'LeadHub',
    desc: 'Unified dashboard for multi-channel lead tracking and attribution.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    link: '#'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen flex flex-col overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
              OUR PROJECTS <br/><span className="gradient-text">& PRODUCTS</span>
            </h1>
            <p className="text-muted-text text-xl max-w-2xl mx-auto">
              Real results, real systems. Browse the work we've built for ambitious Indian businesses.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Section */}
        <div className="relative group overflow-hidden">
          <motion.div 
            className="flex py-10 w-max"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...projects, ...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[450px] glass-card overflow-hidden mx-4 flex-shrink-0 group/card"
              >
                <div className="h-64 md:h-80 relative overflow-hidden">
                   <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-6 left-6 right-6">
                       <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-white mb-2">{project.title}</h3>
                       <p className="text-white/70 text-sm mb-6 leading-relaxed line-clamp-2">
                         {project.desc}
                       </p>
                       <a 
                        href={project.link} 
                        className="inline-flex items-center justify-center gap-2 bg-growth-green text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
                       >
                         View Project <ArrowRight size={14} />
                       </a>
                    </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Scrolling Products Section */}
        <div className="mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl uppercase tracking-tighter italic">
              OUR <span className="gradient-text">PRODUCTS</span>
            </h2>
            <p className="text-muted-text text-lg max-w-xl mt-4">
              Internal systems and software tools we've engineered to automate growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
            {products.map((product, i) => (
              <motion.div 
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group/product"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/product:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover/product:bg-black/20 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-3 text-white">{product.title}</h3>
                  <p className="text-muted-text text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href={product.link} 
                      target={product.link.startsWith('http') ? "_blank" : undefined}
                      rel={product.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-growth-green text-xs font-bold uppercase tracking-widest border-b border-growth-green/20 hover:border-growth-green transition-all"
                    >
                      Learn More
                    </a>
                    {product.title === 'QR Menu System' && (
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">₹10K / Year</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center px-6">
           <p className="text-muted-text font-bold tracking-[0.3em] uppercase text-xs mb-10">Want results like these?</p>
           <a href="https://calendar.app.google/XzTZdumveiY2RaBw9" target="_blank" rel="noopener noreferrer">
             <Button variant="primary" size="lg" className="px-12">Start Your Project</Button>
           </a>
        </div>
      </div>
    </PageTransition>
  );
};
