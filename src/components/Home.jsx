import React, { useRef } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import JoinUs from './JoinUs'

import Footer from "./Footer";

const Home = () => {
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  
  

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      <Hero 
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        
        
      />
      
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <JoinUs/>
      
        <Footer />
      
    </div>
  );
};

export default Home;