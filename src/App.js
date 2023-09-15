import React, { useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import MySkills from "./components/MySkills";
import AboutMe from "./components/AboutMe";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <AboutMe />
      <MySkills />
      <Timeline />
      <Work />
      <Services />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
