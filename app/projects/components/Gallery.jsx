"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function MasonryGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Normalize images (handle both strings and imported images)
  const slides = images.map((img) => ({
    src: typeof img === "string" ? img : img.src,
  }));

  return (
    <div>
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={typeof img === "string" ? img : img.src}
              alt={`Gallery ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
}
