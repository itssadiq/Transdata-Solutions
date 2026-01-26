import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageHero = ({
  subtitle = "Get in Touch",
  title1 = "Let's Start a",
  title2 = "Conversation.",
  description = "Have a project in mind? We are ready to build the future.",
  bgImage,
}) => {
  const compRef = useRef(null);

  // Self-contained animation logic (Optional: you can also trigger this from parent)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".hero-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={compRef}
      className="relative bg-td-black text-white pt-48 pb-24 border-b border-white/10 overflow-hidden"
    >
      {/* 1. Background Image Layer */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title1}
            className="w-full h-full object-cover opacity-40 select-none pointer-events-none"
          />
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-td-black via-td-black/60 to-transparent"></div>
        </div>
      )}

      {/* 2. Content Layer */}
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        {/* Subtitle */}
        <p className="hero-reveal text-td-yellow font-mono text-xs uppercase tracking-[0.3em] mb-6 translate-y-8 opacity-0">
          {subtitle}
        </p>

        {/* Title (Split for Staggered Animation) */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          <div className="overflow-hidden">
            <div className="hero-reveal translate-y-full opacity-0">
              {title1}
            </div>
          </div>
          {title2 && (
            <div className="overflow-hidden">
              <div className="hero-reveal translate-y-full opacity-0 text-gray-300">
                {title2}
              </div>
            </div>
          )}
        </h1>

        {/* Description */}
        <p className="hero-reveal text-gray-300 text-lg max-w-2xl translate-y-8 opacity-0 font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
