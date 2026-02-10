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
import Location from "../components/home/Location";
import Stats from "../components/home/Stats";

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
      {/* SERVICES */}
      <Services />

      {/* INDUSTRIES */}
      <Industries />

      {/* PARTNER MARQUEE */}
      <Partners />

      {/* ABOUT US SECTION */}
      <WhoWeAre />

      {/* INSIGHTS */}
      <Insights />

      {/* SOCIAL HUB */}
      <SocialPosts />

      {/* CONTACT FORM */}
      {/* <section id="contact" className="bg-white py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-0.5 bg-td-yellow"></span> 06 // Contact
              </h2>
              <h3 className="text-5xl font-black leading-tight mb-8 text-black">
                Start a<br />
                Conversation.
              </h3>
              <p className="text-gray-600 font-medium mb-12 max-w-md leading-relaxed">
                Interested in our solutions? Fill out the form or reach out to
                us directly. We are ready to build the future with you.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@transdata-solutions.com"
                    className="text-xl font-bold text-black hover:text-td-yellow transition-colors"
                  >
                    info@transdata-solutions.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+97143807338"
                    className="text-xl font-bold text-black hover:text-td-yellow transition-colors"
                  >
                    + 971 4 380 7338
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                      placeholder="Organization Inc."
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-black text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-td-yellow hover:text-black transition-colors rounded-sm"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* LOCATION */}
      <Location />
    </div>
  );
};

export default Home;
