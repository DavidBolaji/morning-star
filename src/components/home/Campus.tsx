"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

const galleryImages = [
  { src: "/images/SaveClip.App_549075827_18086485969889899_7597846736379430309_n.jpg.jpeg", label: "Main Building" },
  { src: "/images/SaveClip.App_549160157_18086485939889899_5993769134661805859_n.jpg.jpeg", label: "Classroom" },
  { src: "/images/SaveClip.App_549292547_18086485942889899_8768031352741689332_n.jpg.jpeg", label: "Library" },
  { src: "/images/SaveClip.App_549425592_18086485978889899_6790331674019374766_n.jpg.jpeg", label: "Sports Field" },
  { src: "/images/07.16.27_145bcec2.jpg.jpeg", label: "Science Lab" },
  { src: "/images/7.07.58 AM.jpeg", label: "Assembly Hall" },
];

export default function Campus() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SectionWrapper bg="surface" id="campus">
      <SectionHeading
        title="Our Campus"
        subtitle="Explore our modern facilities designed to inspire learning and growth."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-end">
              <span className="text-white font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full aspect-4/3" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].label}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === selected ? "bg-accent w-6" : "bg-white/50"}`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
