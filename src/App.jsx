import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Collaborations from "./sections/Collaborations"; 
import Work from "./sections/Work";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials"; 
import Dock from "./components/Dock";
import Contact from "./sections/Contact";
import NotFound from "./sections/NotFound"; // Make sure this file exists in src/sections/
import Snowfall from "react-snowfall";
// This component holds your main website content
const MainPortfolio = ({ activeSection, setActiveSection }) => (
  <>
    <Hero />
    <Collaborations /> 
    <Work onSectionChange={setActiveSection} />
    <About onSectionChange={setActiveSection} />
    <Testimonials onSectionChange={setActiveSection} />
    <Contact onSectionChange={setActiveSection} />
    <Dock activeSection={activeSection} />
  </>
);

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Router>
      <main className="relative selection:bg-brand-green/30 bg-dark-bg">
      <Snowfall 
          color="#82C3D9" 
          snowflakeCount={50} 
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1, // Keep it behind your text
          }}
        />
        <CustomCursor />
        
        <Routes>
          {/* 1. The Home Path (Your Portfolio) */}
          <Route 
            path="/" 
            element={
              <MainPortfolio 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} 
              />
            } 
          />

          {/* 2. The "Catch-All" Path (The Robot 404) */}
          {/* This will show if the user types muqsitshafat.netlify.app/whatever */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;