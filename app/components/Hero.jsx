"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/herobg.jpg"
        alt="Luxury Properties"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-transparent"></div>

 

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-[90vw] mx-auto flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight tracking-wide"
          >
            Exclusive Homes, Exceptional Returns.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 max-w-2xl"
          >
            Discover properties that don’t just define lifestyles—they multiply
            wealth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center bg-white text-black font-medium px-5 py-3 rounded-md shadow-lg hover:bg-gray-100 transition text-sm sm:text-base md:text-lg"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
