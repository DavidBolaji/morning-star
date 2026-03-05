"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

const galleryImages = [
  { src: "/images/gallery/01.jpeg", label: "Campus Life" },
  { src: "/images/gallery/02.jpeg", label: "Learning Environment" },
  { src: "/images/gallery/03.jpeg", label: "School Facilities" },
  { src: "/images/gallery/04.jpeg", label: "Student Activities" },
  { src: "/images/gallery/05.jpeg", label: "Classroom Setting" },
  { src: "/images/gallery/06.jpeg", label: "Academic Excellence" },
  { src: "/images/gallery/07.jpeg", label: "Modern Facilities" },
  { src: "/images/gallery/08.jpeg", label: "Campus View" },
  { src: "/images/gallery/09.jpeg", label: "Learning Spaces" },
  { src: "/images/gallery/10.jpeg", label: "Educational Programs" },
  { src: "/images/gallery/11.jpeg", label: "Student Life" },
  { src: "/images/gallery/12.jpeg", label: "School Community" },
  { src: "/images/gallery/13.jpeg", label: "Academic Facilities" },
  { src: "/images/gallery/14.jpeg", label: "Campus Buildings" },
  { src: "/images/gallery/15.jpeg", label: "School Environment" },
  { src: "/images/gallery/16.jpeg", label: "Learning Center" },
  { src: "/images/gallery/17.jpeg", label: "Student Engagement" },
  { src: "/images/gallery/18.jpeg", label: "Campus Activities" },
  { src: "/images/gallery/19.jpeg", label: "Educational Spaces" },
  { src: "/images/gallery/20.jpeg", label: "School Grounds" },
  { src: "/images/gallery/21.jpeg", label: "Learning Facilities" },
  { src: "/images/gallery/22.jpeg", label: "Academic Spaces" },
  { src: "/images/gallery/23.jpeg", label: "Campus Facilities" },
];

const IMAGES_PER_PAGE = 9;

export default function Campus() {
  const [selected, setSelected] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const goToNextImage = () => {
    if (selected !== null) {
      setSelected((selected + 1) % galleryImages.length);
    }
  };

  const goToPrevImage = () => {
    if (selected !== null) {
      setSelected((selected - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNextImage();
    if (e.key === "ArrowLeft") goToPrevImage();
    if (e.key === "Escape") setSelected(null);
  };

  return (
    <SectionWrapper bg="surface" id="campus">
      <SectionHeading
        title="Our Campus"
        subtitle="Explore our vibrant campus and modern facilities designed to inspire learning and growth."
      />
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {currentImages.map((img, i) => {
          const actualIndex = startIndex + i;
          return (
            <button
              key={actualIndex}
              onClick={() => setSelected(actualIndex)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-primary-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-semibold text-sm p-4 w-full">
                  {img.label}
                </span>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 bg-white/90 text-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? "bg-primary text-white"
                    : "border border-gray-300 hover:bg-gray-100 text-gray-700"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Image Counter */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        Showing {startIndex + 1}-{Math.min(endIndex, galleryImages.length)} of {galleryImages.length} images
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label="Image lightbox"
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-black/50 p-2 rounded-full z-10 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 p-3 rounded-full z-10 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/50 p-3 rounded-full z-10 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].label}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
            {/* Image Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg font-semibold">{galleryImages[selected].label}</p>
              <p className="text-white/70 text-sm mt-1">
                {selected + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-md overflow-x-auto">
            <div className="flex gap-2 px-4">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === selected ? "border-accent scale-110" : "border-white/30 hover:border-white/60"
                  }`}
                  aria-label={`View ${img.label}`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
