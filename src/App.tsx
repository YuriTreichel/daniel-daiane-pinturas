import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { ServiceAreas } from './components/ServiceAreas';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Documentary } from './components/Documentary';
import { WhyTrustUs } from './components/WhyTrustUs';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { TrabalheConosco } from './components/TrabalheConosco';

export default function App() {
  const [view, setView] = useState<'home' | 'trabalhe-conosco'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#trabalhe-conosco') {
        setView('trabalhe-conosco');
      } else {
        setView('home');
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (view === 'home' && window.location.hash && window.location.hash !== '#') {
      const id = window.location.hash;
      const timer = setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [view]);

  useEffect(() => {
    if (view === 'trabalhe-conosco') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [view]);

  return (
    <div className="min-h-screen font-sans text-brand-secondary bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyUs />
        <Services />
        <WorkProcess />
        <Testimonials />
        <ServiceAreas />
        <Banner />
        <Portfolio />
        <Documentary />
        <WhyTrustUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      <TrabalheConosco 
        isOpen={view === 'trabalhe-conosco'} 
        onClose={() => {
          window.location.hash = '';
          setView('home');
        }} 
      />
    </div>
  );
}

