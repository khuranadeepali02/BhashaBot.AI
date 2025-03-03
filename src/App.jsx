import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Company from './components/Company';
import LogIn from "./pages/LogIn";
import BhashaBot from './chatBot.jsx/BhashaBot'
import Services from "./components/Services";
import Features from "./components/Features"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/chat" element={<BhashaBot/>}/>
      </Routes>
    </Router>
  );
};

export default App;
