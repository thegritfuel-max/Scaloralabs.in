import { Button } from '@/src/components/ui/Button';
import { PageTransition } from '@/src/components/layout/PageTransition';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Linkedin, Loader2, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    budget: '',
    message: ''
  });

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGkP3eTq77h8WlBAy70ayIr59OcbTsH7HOD4oDv6Tya9e2fb4cXbJS793oP-ikQIa0/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // The script expects a JSON object in the request body
      const payload = {
        name: formData.name,
        business: formData.businessName,
        phone: formData.phone,
        email: formData.email,
        budget: formData.budget,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      // We use 'text/plain' with 'no-cors' to avoid preflight (OPTIONS) requests
      // which Google Apps Script web apps generally don't support.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'text/plain'
        }
      });

      // Since we are using no-cors, we can't see the response, 
      // but we assume success if no network error occurred.
      setIsSuccess(true);
      setFormData({
        name: '',
        businessName: '',
        phone: '',
        email: '',
        budget: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setError('There was an error sending your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <div className="text-lg font-bold">scaloralabs.in@gmail.com</div>
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
              {isSuccess ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-growth-green/20 rounded-full flex items-center justify-center text-growth-green mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-heading font-bold mb-4 uppercase">Message Received</h2>
                  <p className="text-muted-text max-w-sm mx-auto">
                    Thanks for reaching out! A growth strategist will be in touch with you within the next 24 hours.
                  </p>
                  <Button 
                    className="mt-8"
                    variant="outline" 
                    onClick={() => setIsSuccess(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Business Name</label>
                      <input 
                        type="text" 
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors"
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">Monthly Budget</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white focus:outline-none focus:border-growth-green transition-colors appearance-none"
                    >
                      <option className="bg-primary-black" value="">Select budget range</option>
                      <option className="bg-primary-black" value="₹15k - ₹30k">₹15k - ₹30k</option>
                      <option className="bg-primary-black" value="₹30k - ₹60k">₹30k - ₹60k</option>
                      <option className="bg-primary-black" value="₹60k - ₹1L+">₹60k - ₹1L+</option>
                      <option className="bg-primary-black" value="Custom Project">Custom Project</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-text">How can we help?</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-growth-green transition-colors resize-none"
                      placeholder="Tell us about your brand goals..."
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm font-bold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                      {error}
                    </div>
                  )}

                  <Button 
                    type="submit"
                    variant="primary" 
                    fullWidth 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 animate-spin" size={18} /> Sending...</>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
