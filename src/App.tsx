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

export default function App() {
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
    </div>
  );
}
