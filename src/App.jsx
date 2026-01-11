import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Collaborations from "./sections/Collaborations"; 
import Work from "./sections/Work";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials"; 
import Dock from "./components/Dock";
import Contact from "./sections/Contact";
import NotFound from "./sections/NotFound";
import Snowfall from "react-snowfall";
import Preloader from "./components/Preloader";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" />
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative selection:bg-brand-green/30 bg-dark-bg"
          >
            <Snowfall 
              color="#82C3D9" 
              snowflakeCount={100} 
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: 1,
              }}
            />
            <CustomCursor />
            
            <Routes>
              <Route 
                path="/" 
                element={
                  <MainPortfolio 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                  />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;