import './App.css';
import HeroSection from './components/sections/hero';
import BehindTheLensSection from './components/sections/behind-the-lens';
import WhatIOfferSection from './components/sections/what-i-offer';
import FeaturedWorksSection from './components/sections/featured-works';

function App() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      
      {/* LANDING PAGE SECTION */}
      <section id="home">
        <HeroSection />
      </section>

      {/* BEHIND THE LENS SECTION */}
      <section id="behind-the-lens">
        <BehindTheLensSection />
      </section>

      {/* BEHIND THE LENS SECTION */}
      <section id="what-i-offer">
        <WhatIOfferSection />
      </section>

      {/* FEATURED WORKS SECTION */}
      <section id="featured-works">
        <FeaturedWorksSection />
      </section>
    </div>
  );  
}

export default App;