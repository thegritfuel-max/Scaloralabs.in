import { Navbar } from '@/src/components/layout/Navbar';
import { CinematicFooter } from '@/src/components/ui/motion-footer';
import { Home } from '@/src/pages/Home';
import { Services } from '@/src/pages/Services';
import { Pricing } from '@/src/pages/Pricing';
import { Portfolio } from '@/src/pages/Portfolio';
import { About } from '@/src/pages/About';
import { Contact } from '@/src/pages/Contact';
import { Demo } from '@/src/pages/Demo';
import { AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen selection:bg-growth-green selection:text-black">
      <Navbar />
      <main className="flex-grow relative z-10 bg-primary-black shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-b-[40px] mb-[-40px]">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo-video" element={<Demo />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>
      <CinematicFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
