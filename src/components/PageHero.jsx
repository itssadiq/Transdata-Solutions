import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const PageHero = ({ title, highlight, subtitle, description, bgImage }) => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Reveal Subtitle
      tl.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
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
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[80vh] w-full overflow-hidden flex flex-col justify-center items-start text-left bg-td-black"
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-40 select-none pointer-events-none"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-td-black via-td-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-20 mt-20">
        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <p className="hero-subtitle text-td-yellow font-medium text-[11px] uppercase tracking-[0.4em] opacity-0 translate-y-4">
            {subtitle}
          </p>
        </div>

        {/* Main Title (Split for animation) */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-8">
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              {title}
            </div>
          </div>
          {highlight && (
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0 text-gray-500">
                {highlight}
              </div>
            </div>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="hero-desc text-white/70 text-sm font-mono uppercase tracking-widest opacity-0 translate-y-4 max-w-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
