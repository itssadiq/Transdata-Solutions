import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurStory from "../components/about/OurStory";
import Mission from "../components/about/Mission";
import CoreValues from "../components/about/CoreValues";
import PageHero from "../components/PageHero";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.to(".hero-text-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.to(".animate-in", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Counters
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: counter, start: "top 85%" },
        });
      });

      // Global Reveal
      gsap.utils.toArray(".reveal-up").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}

      <PageHero
        subtitle="Who We Are"
        title="Architects of"
        highlight="Intelligent Infrastructure."
        description="Since 2013, we have been bridging the gap between complex technology and tangible business results across the globe."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />
      {/* OUR STORY & STATS */}
      <OurStory />

      {/* MISSION & VISION */}
      <Mission />

      {/* CORE VALUES */}
      <CoreValues />
    </div>
  );
};

export default About;
