// components/ExperienceSection.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ExperienceSection = () => {
  return (
    <section className="w-full bg-[#fdf6f4] min-h-screen flex items-center pt-[15%] pb-[15%] md:pt-0 md:pb-0">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div
          className="text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Luxury Living, Backed by Experience.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At OnTop Properties, we believe real estate is more than
            transactions, it’s about shaping lifestyles, building legacies,
            and creating value that lasts. With over 25 years of expertise,
            we combine deep market knowledge with innovative strategies to
            deliver homes and investments that go beyond expectations.
            Every property we present is chosen with purpose, crafted for
            those who seek both elegance and return, resulting in spaces
            that inspire, empower, and endure.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Learn more about our approach
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariant}
        >
          <Image
            src="/experience.jpg" // replace with your actual image path
            alt="Luxury Living"
            width={600}
            height={500}
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
