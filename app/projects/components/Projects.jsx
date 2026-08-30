"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; //
import { projects } from "../../data/Project.js";

const categories = [
  "All",
  "Residential",
  "Cultural",
  "Commercial",
  "Public Space",
  "Educational",
  "Urban Design",
];

export default function ProjectGallery() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section className="w-full px-6 py-12 bg-[#f7f3f1]">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition ${
              selected === cat
                ? "bg-black text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
  {filtered.map((project) => (
    <div
      key={project.id}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <Link href={`/projects/${project.id}`}>
        {/* Image */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 flex justify-between items-center">
            {project.title}
            <span className="text-xl">→</span>
          </h3>
          <p className="text-sm text-gray-600">
            {project.category} | {project.location}, {project.year}
          </p>
        </div>
      </Link>
    </div>
  ))}
</div>



    </section>
  );
}
