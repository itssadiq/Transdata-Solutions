import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/contact/Hero";
import ContactGrid from "../components/contact/ContactGrid";
import Map from "../components/contact/Map";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.to(".contact-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      // 2. Form & Info Reveal
      gsap.from(".contact-card", {
        scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 3. Map Parallax Effect (Subtle)
      gsap.from(".map-container", {
        scrollTrigger: { trigger: ".map-wrapper", start: "top 90%" },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* 1. HERO HEADER (Dark Theme) */}
      <Hero />

      {/* 2. CONTACT GRID */}
      <ContactGrid />

      {/* 3. FULL WIDTH MAP */}
      <Map />
    </div>
  );
};

export default Contact;
