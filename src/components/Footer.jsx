import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../assets/BhashaBot Logo-Photoroom.png";

export default function Footer({ scrollToFeatures, scrollToServices }) {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Logo & About */}
        <div 
        data-aos="fade-right"
        className="flex flex-col space-y-3">
          <img src={Logo} alt="BhashaBot Logo" className="h-25 w-25 mr-2" />
          <p className="text-gray-400 text-sm">
            Empowering businesses with AI-driven solutions for a smarter future.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div 
        data-aos="fade-up"
        className="flex flex-col space-y-2 text-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link to="/" className="text-gray-400 hover:text-cyan-400 transition">
            Home
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition">
            Services
          </Link>
          <Link to="/features" className="text-gray-400 hover:text-cyan-400 transition">
            Features
          </Link>
          
          <Link to="/company" className="text-gray-400 hover:text-cyan-400 transition">
            Company
          </Link>
        </div>

        {/* Right: Social Media */}
        <div
        data-aos="fade-left"
         className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">© 2025 BhashaBot. All rights reserved.</p>
      </div>
    </footer>
  );
}
