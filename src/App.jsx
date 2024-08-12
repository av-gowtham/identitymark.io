import Header from "./components/Header";
import Hero from "./components/Hero";
import NavSlider from "./components/NavSlider";
import Slider from "./components/Slider";
import Logo from "./components/Logo";
import Build from "./components/Build";
import Chat from "./components/Chat";
import Instantly from "./components/Instantly";
import Creations from "./components/Creations";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header toggleNav={toggleNav} />
      <Hero />
      <NavSlider toggleNav={toggleNav} isOpen={isOpen} />
      <Slider />
      <Logo />
      <Build />
      <Chat />
      <Instantly />
      <Creations />
      <Features />
      <Footer />
    </>
  );
}

export default App;
