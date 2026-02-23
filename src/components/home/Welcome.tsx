"use client";

import { useRef, useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function Welcome() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <SectionWrapper bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Welcome to Morning Star
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mt-3 mb-6">
            A Tradition of Excellence in Education
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Morning Star Academy is a premier educational institution dedicated to
            providing a holistic learning experience. Our curriculum blends
            rigorous academics with character development, creative arts, and
            physical education.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We believe every child has unique potential. Our experienced educators
            create an environment where students are inspired to think critically,
            collaborate effectively, and lead with integrity.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { num: "20+", label: "Years of Excellence" },
              { num: "500+", label: "Students Enrolled" },
              { num: "98%", label: "Graduation Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-3xl font-bold text-accent block">{stat.num}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
          <Button href="/about">Learn More About Us</Button>
        </div>
        <div className="relative max-w-md mx-auto lg:mx-0">
          <div className="group rounded-2xl overflow-hidden shadow-2xl relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-9/16 object-contain bg-black rounded-2xl"
              poster="/images/06.54.06_428ec7af.jpg.jpeg"
            >
              <source src="/images/school-video.mp4" type="video/mp4" />
            </video>

            {/* Centered play/pause button */}
            <button
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors">
                {playing ? (
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Mute button — bottom right */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent text-primary-dark p-6 rounded-2xl shadow-xl hidden lg:block">
            <p className="font-bold text-2xl">Est. 2005</p>
            <p className="text-sm">Building futures</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
