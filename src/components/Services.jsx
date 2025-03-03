"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessageSquare, Paintbrush, ClipboardList, Search ,Volume2,Mic,ArrowRight } from "lucide-react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, // Ensures animation triggers every time you scroll
      mirror: true, // Animates again when scrolling back up
    });
  }, []);

  const services = [
    {
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Chat UI",
      description: " A sleek chatbot interface with animations, themes, and user-friendly interactions.",
    },
    {
      icon: <Paintbrush className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Customizable Chatbot Themes",
      description: "Allow users to switch chatbot themes, fonts, and avatars.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: " AI-Powered Notes & To-Do List",
      description: "A simple UI to save chatbot responses and manage tasks using LocalStorage.",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI-Powered Search & Wikipedia Lookup ",
      description: "A smart search bar that fetches results from Wikipedia or Google APIs.",
    },
    {
      icon: <Volume2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Text-to-Speech (TTS)",
      description: "Convert text to voice using the Web Speech API for hands-free interaction.",
    },
    {
      icon: <Mic className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: " Speech-to-Text (STT)",
      description: "Allow users to speak instead of typing using the Web Speech API.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-white">
      {/* Container with responsive padding */}
      <div 
        data-aos="fade-up"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-[#4A5568] px-4">
            Empowering your business with cutting-edge AI solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 200}
              className="group relative bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 sm:p-6 lg:p-8 
                         transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:rotate-y-6
                         hover:shadow-2xl hover:shadow-blue-500/50"
              style={{ perspective: "1000px" }}
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                {/* Icon with flip effect and tilt */}
                <div
                  className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 sm:p-3 
                              transform transition-transform duration-500 group-hover:-rotate-y-12
                              group-hover:shadow-lg group-hover:shadow-pink-500/50"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  {service.description}
                </p>

                {/* "Learn More" button with arrow appearing on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-blue-500 font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Hover effect border overlay */}
              <div className="absolute inset-0 border border-blue-500 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
