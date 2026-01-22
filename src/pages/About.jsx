import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Handshake, Lightbulb, ShieldCheck } from "lucide-react";

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
      <div className="relative h-[80vh] w-full overflow-hidden flex flex-col justify-center items-start text-left bg-td-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-td-black via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-20 mt-20">
          <div className="overflow-hidden mb-6">
            <p className="text-td-yellow font-medium text-[11px] uppercase tracking-[0.4em] opacity-0 translate-y-4 animate-in">
              Who We Are
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-8">
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0">
                Architects of
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0">
                Intelligent{" "}
                <span className="text-gray-500">Infrastructure.</span>
              </div>
            </div>
          </h1>
          <p className="text-white/70 text-sm font-mono uppercase tracking-widest opacity-0 translate-y-4 animate-in max-w-xl">
            Since 2013, we have been bridging the gap between complex technology
            and tangible business results across the globe.
          </p>
        </div>
      </div>

      {/* OUR STORY & STATS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
            <div>
              <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
                <span class="w-8 h-[2px] bg-black"></span> 01 // The Story
              </h2>
              <h3 className="text-4xl font-bold leading-tight">
                More than just an IT company. We are your strategic growth
                partner.
              </h3>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                TransData Solutions was founded on a simple yet powerful
                premise: Technology should be an enabler, not a hurdle. For over
                a decade, we have dedicated ourselves to serving the IT sector
                throughout the UAE and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in end-to-end digital solutions, from procuring
                the best-in-class hardware to architecting complex cloud
                environments. Our "Client-First" philosophy ensures that every
                solution we design is tailored to the specific macroeconomic
                environment and institutional context of your business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-100 py-12 reveal-up">
            <div className="text-center md:text-left">
              <h4 className="text-5xl font-black text-black mb-2">
                <span className="counter" data-target="12">
                  0
                </span>
                +
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Years Experience
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 class="text-5xl font-black text-black mb-2">
                <span className="counter" data-target="350">
                  0
                </span>
                +
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Projects Delivered
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 class="text-5xl font-black text-black mb-2">
                <span className="counter" data-target="265">
                  0
                </span>
                +
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Happy Clients
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 class="text-5xl font-black text-black mb-2">
                <span className="counter" data-target="24">
                  0
                </span>
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-td-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-td-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal-up">
              <div className="w-12 h-12 bg-td-yellow rounded-sm flex items-center justify-center mb-8 text-black">
                <Target size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower businesses through innovative technology, providing
                reliable, scalable, and secure IT infrastructure that drives
                growth and operational excellence. We strive to be the trusted
                partner that bridges the gap between complex technology and
                tangible business results.
              </p>
            </div>

            <div className="reveal-up">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-8 text-black">
                <Eye size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the global benchmark for intelligent mobility and digital
                transformation services, creating a future where organizations
                of all sizes can leverage cutting-edge technology to predict,
                adapt, and thrive in an ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 reveal-up">
            <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
              <span class="w-8 h-[2px] bg-td-yellow"></span> 02 // Core Values
            </h2>
            <h3 className="text-4xl font-bold">The Pillars of Our Success</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
              <Handshake
                size={40}
                className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
              />
              <h4 className="text-xl font-bold mb-3">Client-Centricity</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We don't just sell products; we build relationships. Every
                solution is configured to meet your specific budget and goals.
              </p>
            </div>
            <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
              <Lightbulb
                size={40}
                className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
              />
              <h4 className="text-xl font-bold mb-3">Innovation</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We stay ahead of the curve, constantly exploring emerging
                technologies like AI, IoT, and Blockchain to give you a
                competitive edge.
              </p>
            </div>
            <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
              <ShieldCheck
                size={40}
                className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
              />
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Transparency is key. From consultation to implementation, we
                ensure clear communication and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
