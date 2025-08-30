import './App.css';
import HeroSection from './components/sections/hero-section';

function App() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      
      {/* LANDING PAGE SECTION */}
      <section id="home">
        <HeroSection />
      </section>
    </div>
  );
}

export default App;