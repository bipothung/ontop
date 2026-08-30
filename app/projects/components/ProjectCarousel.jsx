"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectCarousel({ mainImage, gallery, title }) {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div>
      {/* Hero Image */}
      <div className="w-full flex justify-center mb-6">
        <Image
          src={currentImage}
          alt={title}
          width={1200} // high resolution width
          height={800} // high resolution height
          className="rounded-xl shadow-lg object-contain max-h-[500px] w-full"
          priority
          unoptimized
        />
      </div>

      {/* Thumbnail Carousel */}
      <div className="flex gap-4 overflow-x-auto mb-12">
  {gallery.map((img, i) => (
    <div
      key={i}
      className={`relative flex-shrink-0 cursor-pointer border-2 rounded-lg transition-all duration-300 ${
        currentImage === img ? "border-black" : "border-transparent"
      }`}
      onClick={() => setCurrentImage(img)}
    >
      <Image
        src={img}
        alt={`Thumbnail ${i + 1}`}
        width={200}
        height={130}
        className="rounded-md object-contain bg-white w-14 h-auto md:w-30 md:h-auto"
        unoptimized
      />
    </div>
  ))}
</div>

    </div>
  );
}
