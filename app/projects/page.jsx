import React from "react";
import ProjectGallery from "./components/Projects";

const Project = () => {
  return (
    <section className="relative w-full py-16 bg-[#f7f3f1] mt-20 ">

      <div className="max-w-[90vw] md:max-w-[80vw] mx-auto pb-20">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 mt-20">
          Our Projects
        </h2>

        {/* Content Area */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-[700px]">
          Our projects are crafted to reflect the finest in modern luxury living. Each development combines elegance, functionality, and attention to detail, creating spaces that inspire and endure.
        </p>
      </div><ProjectGallery/>
    </section>
  );
};

export default Project;
