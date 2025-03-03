import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import AiVideo from "../assets/ai video.mp4";
import Logo from "../assets/BhashaBot Logo-Photoroom.png";

const Hero = ({ scrollToFeatures, scrollToServices }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out", delay: 100 });

    // Prevent horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div id="hero" className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={AiVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 lg:px-12 bg-black/50 z-50">
        {/* Logo */}
        <button onClick={() => window.scrollTo(0, 0)} className="flex items-center">
          <img src={Logo} alt="BhashaBot" className="h-10 w-auto" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => window.scrollTo(0, 0)} className="text-white hover:text-cyan-400 transition-colors">
            Home
          </button>
          <button onClick={scrollToServices} className="text-white hover:text-cyan-400 transition-colors">
            Services
          </button>
          <button onClick={scrollToFeatures} className="text-white hover:text-cyan-400 transition-colors">
            Features
          </button>
          <Link to="/company" className="text-white hover:text-cyan-400 transition-colors">
            Company
          </Link>
        </div>

        {/* Login Button (Desktop) */}
        <button className="hidden md:block px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          <Link to="/login">Login</Link>
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white text-2xl">
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu - Slides in from the top */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/90 text-white z-50 transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-2xl">
          <FaTimes />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
          <button onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }} className="text-xl hover:text-cyan-400">
            Home
          </button>
          <button onClick={() => { setMenuOpen(false); scrollToServices(); }} className="text-xl hover:text-cyan-400">
            Services
          </button>
          <button onClick={() => { setMenuOpen(false); scrollToFeatures(); }} className="text-xl hover:text-cyan-400">
            Features
          </button>
          <Link to="/company" onClick={() => setMenuOpen(false)} className="text-xl hover:text-cyan-400">
            Company
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-purple-600 px-6 py-3 rounded-full text-white hover:bg-purple-700">
            Login
          </Link>
        </div>
      </div>

      {/* Hero Content */}
      <div data-aos="fade-up" className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Unlock the Power of AI for Your Business
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-lg">
          Explore intelligent solutions and enhance your productivity with cutting-edge AI technologies. Join the future today!
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          <input
            type="email"
            placeholder="Enter your email to stay updated"
            className="px-6 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
          />
          <button className="bg-purple-600 px-6 py-3 rounded-md text-white hover:bg-purple-700 transition-colors">
            <Link to="/login">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
