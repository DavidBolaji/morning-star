"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Morning Star Academy transformed my child's confidence and academic performance. The teachers genuinely care about each student's growth.",
    name: "Mrs. Adebayo",
    role: "Parent",
    initials: "MA",
  },
  {
    quote:
      "The holistic approach to education here prepared me not just for university, but for life. I'm grateful for every moment at Morning Star.",
    name: "David Okonkwo",
    role: "Alumni, Class of 2022",
    initials: "DO",
  },
  {
    quote:
      "As an educator, I've never worked in a more supportive and innovative environment. Morning Star truly puts students first.",
    name: "Mr. Johnson",
    role: "Senior Teacher",
    initials: "MJ",
  },
  {
    quote:
      "The facilities are world-class and the curriculum is challenging yet engaging. My children love going to school every day.",
    name: "Dr. Nnamdi",
    role: "Parent",
    initials: "DN",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper bg="primary" id="testimonials">
      <SectionHeading
        title="What Our Community Says"
        subtitle="Hear from parents, students, and staff about the Morning Star experience."
        light
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative min-h-[200px]">
          <svg className="w-12 h-12 text-accent/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-500 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="text-white/90 text-lg md:text-xl leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-2 bg-white/30"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
