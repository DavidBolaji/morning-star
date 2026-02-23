"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function PageTransition() {
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [loadStart, setLoadStart] = useState(0);
  const MIN_DISPLAY_MS = 1500;
  const FADE_OUT_MS = 800;

  const startLoading = useCallback(() => {
    setFadeOut(false);
    setLoading(true);
    setLoadStart(Date.now());
  }, []);

  const stopLoading = useCallback(() => {
    const elapsed = Date.now() - loadStart;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        setFadeOut(false);
      }, FADE_OUT_MS);
    }, remaining);
  }, [loadStart]);

  useEffect(() => {
    // Intercept all link clicks for navigation
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      // Only trigger for internal navigation to different pages
      if (href !== window.location.pathname) {
        startLoading();
      }
    };

    // Stop loading when page finishes rendering
    const observer = new MutationObserver(() => {
      if (loading) {
        stopLoading();
      }
    });

    document.addEventListener("click", handleClick);

    // Watch for DOM changes that indicate page content has loaded
    observer.observe(document.querySelector("main") || document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, [loading, startLoading, stopLoading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinning ring around logo */}
        <div className="relative w-40 h-40">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-accent border-r-accent/30 animate-spin" />

          {/* Inner pulsing ring */}
          <div className="absolute inset-3 rounded-full border border-primary/10 animate-pulse" />

          {/* Logo */}
          <div className="absolute inset-5 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Loading"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
              priority
            />
          </div>
        </div>

        {/* School name */}
        <div className="text-center">
          <p className="text-primary font-bold text-sm tracking-wider uppercase">
            Morning Star
          </p>
          <p className="text-gray-400 text-xs tracking-widest uppercase mt-0.5">
            Academy
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent"
              style={{
                animation: "pulse 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
