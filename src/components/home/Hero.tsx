"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slide-1.jpeg",
    title: "Nurturing Excellence for Generations",
    subtitle:
      "At Morning Star group of schools, we provide a world-class education that nurtures academic excellence, creativity, and character in every child.",
  },
  {
    image: "/images/slide-2.jpeg",
    title: "Inspiring Excellence, Creating Leaders",
    subtitle:
      "Our students thrive in a supportive environment designed to unlock their full potential and prepare them for global success.",
  },
  {
    image: "/images/slide-3.jpeg",
    title: "A Legacy of Academic Distinction",
    subtitle:
      "Join a community of learners, thinkers, and achievers who are making a difference in the world.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-150 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/80 via-primary-dark/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent/90 text-primary-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Admissions Open 2026/2027
            </span>
            <h1
              key={current}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button href="/contact" variant="primary">
                Begin Application
              </Button>
              <Button href="/about" variant="outline">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
