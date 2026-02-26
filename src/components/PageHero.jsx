import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

const PageHero = ({ title, highlight, subtitle, description, bgImage }) => {
  const heroRef = useRef(null);

  // Fix 1: Ensure page scrolls to top on content change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title, highlight]);

  // Fix 2: Re-trigger animation when props change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset states immediately before animating
      gsap.set([".hero-subtitle", ".hero-text-reveal", ".hero-desc"], {
        y: 40,
        opacity: 0,
      });

      // 1. Reveal Subtitle
      tl.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      // 2. Reveal Title Lines
      tl.to(
        ".hero-text-reveal",
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.8",
      );

      // 3. Reveal Description
      tl.to(
        ".hero-desc",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );
    }, heroRef);

    return () => ctx.revert();
  }, [title, highlight, subtitle]); // Dependency array ensures re-animation on navigation

  return (
    <div
      ref={heroRef}
      className="relative h-[80vh] md:h-screen w-full overflow-hidden flex flex-col justify-center items-start text-left bg-td-black border-b border-white/10"
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <img
            key={bgImage} // Forces image to transition visually on change
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none animate-fade-in"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-td-black via-td-black/60 to-transparent"></div>
      </div>

      {/* Symmetrical Container Locked to 1400px */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <p className="hero-subtitle text-td-yellow font-bold text-[11px] md:text-xs uppercase tracking-[0.4em]">
            {subtitle}
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-8 max-w-4xl">
          <div className="overflow-hidden">
            <div className="hero-text-reveal">{title}</div>
          </div>
          {highlight && (
            <div className="overflow-hidden">
              <div className="hero-text-reveal text-white/50">{highlight}</div>
            </div>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="hero-desc text-white/70 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Scroll Indicator (Aligned with 1400px left edge) */}
      <div className="absolute bottom-10 left-0 w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="w-px h-12 bg-td-yellow/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
