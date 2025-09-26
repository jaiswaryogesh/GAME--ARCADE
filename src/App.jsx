// Importing all the section components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Character from "./components/Character";
import Mobile from "./components/Mobile";
import Retro from "./components/Retro";
import Modern from "./components/Modern";
import Footer from "./components/Footer";
import Playable, { GameView } from "./components/Playable";
import History from "./components/History";

const HomePage = () => (
  <>
    {/* Hero Section with video background */}
    <section id="hero" className="relative z-0">
      <Hero />
    </section>

    {/* Avatar/Character Section */}
    <section id="avatar" className="relative z-10 scroll-mt-20">
      <Character />
    </section>

    {/* Arena or Mobile Section */}
    <section id="arena" className="relative z-10 scroll-mt-20">
      <Mobile />
    </section>

    {/* Retro Games Section */}
    <section id="retro" className="relative z-10 scroll-mt-20">
      <Retro />
    </section>

    {/* Modern Games Section */}
    <section id="modern" className="relative z-10 scroll-mt-20">
      <Modern />
    </section>
    {/* Playable Games Section */}
    <section id="playable" className="relative z-10 scroll-mt-20">
      <Playable />
    </section>

    {/* Footer Section */}
    <footer id="footer" className="relative z-10">
      <Footer />
    </footer>
  </>
);

const App = () => {
  return (
    <Router>
      {/* Root container with smooth scrolling and dark background */}
      <div className="bg-[#0a0a23] text-white scroll-smooth font-sans overflow-x-hidden">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:gameName" element={<GameView />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
