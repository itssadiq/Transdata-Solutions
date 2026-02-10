import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import video from "../../assets/video.mp4";

const Hero = () => {
  const heroRef = useRef(null);
  const [heroVersion, setHeroVersion] = useState(1);

  // Content Data - Updated with colors and JSX
  const content = {
    1: {
      headline: (
        <>
          <span className="text-td-yellow">
            Building Reliable IT Infrastructure
          </span>{" "}
          for Business-Critical Operations
        </>
      ),
      sub: "Designing, deploying, and managing secure networks, cloud platforms, and IT systems that businesses depend on every day.",
    },
    2: {
      headline: (
        <>
          Enterprise-Grade IT Solutions for{" "}
          <span className="text-td-yellow">Secure & Scalable Businesses</span>
        </>
      ),
      sub: "From core networking to cloud and cybersecurity, we deliver IT solutions built for performance and long-term reliability.",
    },
  };

  // Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Animate Out
      gsap.to(".hero-anim-text", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // 2. Change State
          setHeroVersion((prev) => (prev === 1 ? 2 : 1));
        },
      });
    }, 5000); // 5 Seconds

    return () => clearInterval(interval);
  }, []);

  // Animate In (Triggered when heroVersion changes)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );
    }, heroRef);
    return () => ctx.revert();
  }, [heroVersion]);

  // Initial Sidebar Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".reveal-sidebar", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[95vh] md:h-screen w-full overflow-hidden flex flex-col justify-center items-start text-left"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-gray-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 md:w-[60%] px-5 md:px-10 h-full flex flex-col justify-center">
        <div className="hero-anim-text max-w-4xl">
          {/* Removed 'flex' and 'items-center' to fix the split text issue */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white capitalize mb-6 min-h-[120px] md:min-h-[160px]">
            {content[heroVersion].headline}
          </h1>
          <p className="text-white/80 text-sm md:text-md font-mono uppercase tracking-widest max-w-2xl leading-relaxed">
            {content[heroVersion].sub}
          </p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="hidden md:flex flex-col items-end gap-3 absolute right-[5%] top-1/2 -translate-y-1/2 z-30 border-r-2 border-white pr-5 opacity-0 translate-x-10 reveal-sidebar">
        <a
          href="#about"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          About Us
        </a>
        <a
          href="#services-drag"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Services
        </a>
        <a
          href="#industries"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Industries
        </a>
        <a
          href="#insights"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Testimonials
        </a>
        <a
          href="#insights"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          FAQ's
        </a>
        <a
          href="#location"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Our Office
        </a>
        <a
          href="#contact"
          className="text-white font-sans font-semibold text-xs opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Contact
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-5 md:left-10 animate-bounce">
        <div className="text-white text-xs font-bold uppercase tracking-widest">
          Scroll Down ↓
        </div>
      </div>
    </div>
  );
};

export default Hero;
