import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Linkedin } from 'lucide-react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-8 uppercase tracking-tighter">
                LET'S <span className="gradient-text">TALK</span> <br/> GROWTH
              </h1>
              <p className="text-muted-text text-xl mb-12 leading-relaxed">
                Ready to stop guessing and start growing? Our technical strategists are ready to audit your current systems.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 glass-card border-l-4 border-l-growth-green">
                  <div className="w-12 h-12 rounded-full bg-growth-green/10 flex items-center justify-center text-growth-green">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-text mb-1">Fast Response</div>
                    <div className="text-lg font-bold">WhatsApp Us</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 glass-card border-l-4 border-l-electric-blue">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-text mb-1">Inquiries</div>
                    <div className="text-lg font-bold">growth@scaloralabs.com</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="glass-card p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                      placeholder="john@business.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Monthly Budget</label>
                  <select className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors appearance-none">
                    <option className="bg-primary-black">Select budget range</option>
                    <option className="bg-primary-black">₹15k - ₹30k</option>
                    <option className="bg-primary-black">₹30k - ₹60k</option>
                    <option className="bg-primary-black">₹60k - ₹1L+</option>
                    <option className="bg-primary-black">Custom Project</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-text">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-growth-green transition-colors resize-none"
                    placeholder="Tell us about your brand goals..."
                  />
                </div>

                <Button variant="primary" fullWidth size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
