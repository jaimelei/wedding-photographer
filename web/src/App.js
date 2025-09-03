import './App.css';
import Navbar from './components/layout/navbar';
import HeroSection from './components/sections/hero';
import BehindTheLensSection from './components/sections/behind-the-lens';
import WhatIOfferSection from './components/sections/what-i-offer';
import FeaturedWorksSection from './components/sections/featured-works';
import MetricsSection from './components/sections/metrics';
import TestimonialsSection from './components/sections/testimonials';
import ContactSection from './components/sections/contact';

function App() {
  return (
<div className="relative">
  <Navbar />

  <main className="pt-20">
    <section id="home">
      <HeroSection />
    </section>

    <section id="behind-the-lens">
      <BehindTheLensSection />
    </section>

    <section id="what-i-offer">
      <WhatIOfferSection />
    </section>

    <section id="featured-works">
      <FeaturedWorksSection />
    </section>

    <section id="metrics">
      <MetricsSection />
    </section>

    <section id="testimonials">
      <TestimonialsSection />
    </section>

    <section id="contact">
      <ContactSection />
    </section>
  </main>
</div>
  );  
}

export default App;