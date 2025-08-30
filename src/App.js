import './App.css';
import HeroSection from './components/sections/hero';
import BehindTheLensSection from './components/sections/behind-the-lens';
import WhatIOfferSection from './components/sections/what-i-offer';

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
    </div>
  );  
}

export default App;