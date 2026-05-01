import { Logo } from '@/src/components/ui/Logo';
import { Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-primary-black border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Logo className="mb-6" />
          <p className="text-muted-text text-sm leading-relaxed mb-8 max-w-[200px]">
            Scale Smarter. Grow Further. Helping businesses dominate the digital landscape.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:text-growth-green hover:bg-white/10 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:text-growth-green hover:bg-white/10 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:text-growth-green hover:bg-white/10 transition-all">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-text hover:text-growth-green hover:bg-white/10 transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {['Home', 'Pricing', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted-text hover:text-white transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
          <ul className="flex flex-col gap-4">
            {['Performance Marketing', 'Web Development', 'SEO', 'Automation'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-muted-text hover:text-white transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-muted-text text-sm mb-4">Stay ahead with the latest growth strategies.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full h-12 bg-white/5 border border-white/10 rounded-full px-6 text-sm focus:outline-none focus:border-growth-green transition-colors"
            />
            <button className="absolute right-1 top-1 h-10 px-4 bg-white text-black rounded-full text-xs font-bold uppercase transition-transform hover:scale-105">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-muted-text text-xs">
          © {new Date().getFullYear()} Scalora Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
