import './App.css';
import HeroSection from './components/sections/hero';
import BehindTheLensSection from './components/sections/behind-the-lens';

function App() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      
      {/* LANDING PAGE SECTION */}
      <section id="home">
        <HeroSection />
      </section>

      {/* EDUCATIONAL BACKGROUND SECTION */}
      <section id="behind-the-lens">
        <BehindTheLensSection />
      </section>
    </div>
  );
}

export default App;