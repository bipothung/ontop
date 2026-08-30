// components/ExpertiseBanner.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ExpertiseBanner = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/expert.jpg" // replace with your image path
          alt="Luxury Real Estate Expertise"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          25+ Years of Expertise
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          in Luxury Real Estate, Backed by Proven Success.
        </motion.p>
      </div>
    </section>
  );
};

export default ExpertiseBanner;
