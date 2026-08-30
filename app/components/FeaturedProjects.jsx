// components/FeaturedProjects.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skyline Residence",
    category: "Residential",
    location: "Los Angeles",
    year: "2022",
    image: "/i3.png",
    link: "#",
  },
  {
    title: "Harmony Cultural Center",
    category: "Cultural",
    location: "Berlin",
    year: "2021",
    image: "/i1.png",
    link: "#",
  },
  {
    title: "Urban Oasis Tower",
    category: "Commercial",
    location: "Singapore",
    year: "2023",
    image: "/i2.png",
    link: "#",
  },
];

// Variants for animation
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-[#fdf6f4] py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-900 font-medium hover:underline"
          >
            View all projects
            <motion.span
              className="ml-2 text-xl"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              variants={itemVariant}
            >
              {/* Image */}
              <div className="w-full aspect-[4/5] relative overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link href={project.link} className="text-xl">
                    →
                  </Link>
                </motion.div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {project.category} | {project.location}, {project.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
