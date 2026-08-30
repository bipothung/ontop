"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [year, setYear] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#fdf6f4] opacity-100 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-700"></div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20 pt-8 pb-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-yellow-700 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            <Link href="/" className="cursor-pointer">
              <Image
                src="/logo.png"
                alt="OnTop Properties"
                width={100}
                height={100}
                className="relative z-10"
              />
            </Link>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="hidden md:flex items-center space-x-8 font-medium"
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                hidden: { opacity: 0, y: -15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                className={`relative group text-lg font-normal transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-yellow-500"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Contact button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Link href="/contact">
              <span className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20">
                <Phone size={18} aria-hidden="true" />
                <span>CONTACT</span>
              </span>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`md:hidden p-2 rounded-lg focus:outline-none transition-colors duration-300 ${
            scrolled
              ? "text-gray-200 hover:text-yellow-500"
              : "text-white hover:text-yellow-300"
          }`}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-lg z-50 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-yellow-500 transition p-2"
            >
              <X size={32} />
            </button>

            {/* Logo in mobile menu */}
            <div className="absolute top-6 left-6 flex items-center space-x-3">
              <div className="absolute -inset-2 bg-yellow-700 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="OnTop Properties"
                  width={100}
                  height={100}
                  className="relative z-10"
                />
              </Link>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-semibold text-white hover:text-yellow-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile contact button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <span className="flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-xl transition-all duration-300 mt-6">
                    <Phone size={20} aria-hidden="true" />
                    <span>CONTACT US</span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Footer in mobile menu */}
            <div className="absolute bottom-8 text-gray-400 text-sm">
              {year && <>© {year} OnTop Properties</>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
