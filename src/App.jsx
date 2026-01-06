import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Collaborations from "./sections/Collaborations"; 
import Work from "./sections/Work";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials"; // New Import
import Dock from "./components/Dock";
import Contact from "./sections/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="relative selection:bg-brand-green/30 bg-dark-bg">
      <CustomCursor />
      
      <Hero />
      <Collaborations /> 
   <Work onSectionChange={setActiveSection} />
      <About onSectionChange={setActiveSection} />
      <Testimonials onSectionChange={setActiveSection} />
      <Contact onSectionChange={setActiveSection} />
      <Dock activeSection={activeSection} />
    </main>
  );
}

export default App;