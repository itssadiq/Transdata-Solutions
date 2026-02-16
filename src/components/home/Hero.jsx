import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import videoFile from "../../assets/video.mp4";
import videoPoster from "../../assets/hero-poster.jpg";

const HERO_CONTENT = {
  1: {
    headline: (
      <>
        {" "}
        <span className="text-td-yellow">
          Building Reliable IT Infrastructure
        </span>{" "}
        For Business-Critical Operations{" "}
      </>
    ),
    sub: "DESIGNING, DEPLOYING, AND MANAGING SECURE NETWORKS, CLOUD PLATFORMS, AND IT SYSTEMS THAT BUSINESSES DEPEND ON EVERY DAY.",
  },
  2: {
    headline: (
      <>
        {" "}
        Enterprise-Grade IT Solutions For{" "}
        <span className="text-td-yellow">
          Secure & Scalable Businesses
        </span>{" "}
      </>
    ),
    sub: "FROM CORE NETWORKING TO CLOUD AND CYBERSECURITY, WE DELIVER IT SOLUTIONS BUILT FOR PERFORMANCE AND LONG-TERM RELIABILITY.",
  },
};

const SIDEBAR_LINKS = [
  "About Us",
  "Services",
  "Industries",
  "Contact",
  "Testimonials",
  "FAQ's",
  "Posts",
];

const Hero = () => {
  const heroRef = useRef(null);
  const [heroVersion, setHeroVersion] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Elegant Bottom-to-Top Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.to(".hero-anim-text", {
        y: -20,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => setHeroVersion((prev) => (prev === 1 ? 2 : 1)),
      });
      tl.fromTo(
        ".hero-anim-text",
        { y: 20, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Initial Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.3 },
      );
      gsap.to(".reveal-sidebar", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[95vh] md:h-screen w-full overflow-hidden bg-black"
    >
      {/* 1. BACKGROUND MEDIA (Full Screen) */}
      <div className="absolute inset-0 z-0">
        <img
          src={videoPoster}
          alt="Poster"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. UI LAYER (Symmetry Locked to 1400px Centered Container) */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1400px] px-4 md:px-10">
        {/* Main Content Area - 60% Width Limit */}
        <div className="flex h-full flex-col justify-center">
          <div className="hero-content-reveal w-full md:max-w-[60%]">
            <div className="hero-anim-text">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white capitalize mb-6">
                {HERO_CONTENT[heroVersion].headline}
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] font-mono uppercase tracking-widest leading-relaxed mb-10">
                {HERO_CONTENT[heroVersion].sub}
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-td-yellow text-black font-bold uppercase tracking-widest text-[13px] hover:bg-white transition-all duration-300 shadow-2xl rounded"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Sidebar Menu (Right Anchored) */}
        <div className="hidden md:flex flex-col items-end gap-3 absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 border-r-2 border-white pr-5 opacity-0 translate-x-10 reveal-sidebar">
          {SIDEBAR_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("'", "").replace(" ", "-")}`}
              className="text-white font-sans font-semibold text-[11px] opacity-70 uppercase tracking-widest transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Scroll Down Indicator (Left Anchored) */}
        <div className="absolute bottom-10 left-4 md:left-10 animate-bounce">
          <div className="text-white text-[11px] font-bold uppercase tracking-widest">
            Scroll Down ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
