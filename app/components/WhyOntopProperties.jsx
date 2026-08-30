// components/WhyOntopProperties.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 1528, label: "Successful Deals Closed" },
  { number: 2445, label: "Transactions Completed" },
  { number: 459, label: "Properties Under Consultation" },
  { number: 874, label: "International Reach" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}+ 
    </span>
  );
};

const WhyOntopProperties = () => {
  return (
    <section className="w-full bg-[#fdf6f4] py-16 pt-[10%] pb-[10%]">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          WHY ONTOP PROPERTIES
        </h2>
        <p className="text-gray-600 mb-12">
          A legacy of excellence in every property we deliver.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900">
                <Counter target={stat.number} />
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOntopProperties;
