import './App.css';
import HeroSection from './components/sections/hero';
import BehindTheLensSection from './components/sections/behind-the-lens';
import WhatIOfferSection from './components/sections/what-i-offer';
import FeaturedWorksSection from './components/sections/featured-works';
import MetricsSection from './components/sections/metrics';
import TestimonialsSection from './components/sections/testimonials';

function App() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      
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
    </div>
  );  
}

export default App;