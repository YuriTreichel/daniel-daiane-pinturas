import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { ServiceAreas } from './components/ServiceAreas';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Documentary } from './components/Documentary';
import { FAQ } from './components/FAQ';
import { WhyTrustUs } from './components/WhyTrustUs';
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
        <Services />
        <Testimonials />
        <ServiceAreas />
        <Banner />
        <Portfolio />
        <Documentary />
        {/* <FAQ /> */}
        <WhyTrustUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
