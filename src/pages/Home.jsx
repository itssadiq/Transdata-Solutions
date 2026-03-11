import React, { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import Partners from "../components/home/Partners";
import Services from "../components/home/Services";
import Industries from "../components/home/Industries";
import Insights from "../components/home/Insights";
import SocialPosts from "../components/home/SocialPosts";
import Stats from "../components/home/Stats";
import ContactGrid from "../components/contact/ContactGrid";
import Quote from "../components/home/Quote";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);

  const location = useLocation();

  // Scroll to hash on load if present
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Reveal
      const tl = gsap.timeline();
      tl.to(".hero-text-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      }).to(
        ".animate-in",
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.8",
      );

      // Reveal Sidebar
      gsap.to(".reveal-sidebar", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });

      // Global Reveal for Sections
      gsap.utils.toArray(".reveal-up").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* ABOUT US SECTION */}
      <WhoWeAre />

      {/* SERVICES */}
      <Services />

      {/* Standardized Quote Section */}
      <Quote />

      {/* INDUSTRIES */}
      <Industries />

      {/* Contact Form */}
      <ContactGrid />

      {/* PARTNER MARQUEE */}
      <Partners />

      {/* INSIGHTS */}
      <Insights />

      {/* SOCIAL HUB */}
      <SocialPosts />
    </div>
  );
};

export default Home;
