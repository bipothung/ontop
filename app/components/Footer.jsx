// components/Footer.jsx
"use client"
import { Instagram, Twitter, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-gray-200 py-20 px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-80"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-yellow-800 opacity-10 blur-xl"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-yellow-600 opacity-5 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo + Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img src="/logo.png" alt="OnTop Properties" className="h-20 w-20" />
                <div className="absolute -inset-2 bg-yellow-700 rounded-full opacity-20 blur-sm"></div>
              </div>
            
            </div>
            <p className="mt-5 text-base leading-relaxed tracking-wide text-gray-400 max-w-md">
              Luxury real estate agency delivering homes that inspire, 
              investments that grow, and experiences that redefine modern living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <a href="#" aria-label="Instagram" className="group">
                <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gradient-to-r from-yellow-600 to-yellow-800 transition-all duration-300 transform group-hover:scale-110">
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
              </a>
              <a href="#" aria-label="Twitter" className="group">
                <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gradient-to-r from-yellow-600 to-yellow-800 transition-all duration-300 transform group-hover:scale-110">
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
              </a>
              <a href="#" aria-label="LinkedIn" className="group">
                <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gradient-to-r from-yellow-600 to-yellow-800 transition-all duration-300 transform group-hover:scale-110">
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-6 tracking-wider relative pb-2 inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-600"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-500 transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-yellow-600 rounded-full mr-3 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-yellow-500 transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-yellow-600 rounded-full mr-3 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-yellow-600 rounded-full mr-3 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-yellow-600 rounded-full mr-3 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-6 tracking-wider relative pb-2 inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-600"></span>
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-400">United Arab Emirates<br />Dubai</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-400">+97 1526346002</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-400">info@ontopproperties.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 tracking-wide">
          <p>© {new Date().getFullYear()} OnTop Properties. All rights reserved.</p>
          
          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 mt-4 md:mt-0 font-medium group ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            BACK TO TOP 
            <div className="p-1 rounded-full bg-gray-800 group-hover:bg-yellow-700 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;