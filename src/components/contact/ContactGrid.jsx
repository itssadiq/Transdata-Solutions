import React, { useEffect, useRef } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./Form";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-24" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        {/* HEADING: Kept exactly as your other sections */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-black"></span> Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Connect With Our <br className="hidden md:block" /> Technical
            Experts
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div className="space-y-12">
              {/* Email */}
              <div className="info-item group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={16} className="text-td-yellow" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Official Correspondence
                  </span>
                </div>
                <a
                  href="mailto:info@transdata-solutions.com"
                  className="text-xl md:text-2xl font-bold text-black border-b border-transparent group-hover:border-td-yellow transition-all duration-300 pb-1"
                >
                  info@transdata-solutions.com
                </a>
              </div>

              {/* Phone */}
              <div className="info-item group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={16} className="text-td-yellow" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Direct Hotline
                  </span>
                </div>
                <a
                  href="tel:+97143807338"
                  className="text-xl md:text-2xl font-bold text-black border-b border-transparent group-hover:border-td-yellow transition-all duration-300 pb-1"
                >
                  +971-4-380 7338
                </a>
              </div>

              {/* Hours */}
              <div className="info-item">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={16} className="text-td-yellow" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Operational Hours
                  </span>
                </div>
                <p className="text-lg font-bold text-black uppercase tracking-tight">
                  Mon — Fri: 09:00 — 18:00
                </p>
                <p className="text-gray-400 text-xs mt-1 font-medium">
                  Weekends: Emergency Support Only
                </p>
              </div>

              {/* Address */}
              <div className="info-item border-t border-gray-100 pt-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={16} className="text-td-yellow" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Headquarters
                  </span>
                </div>
                <address className="not-italic text-gray-600 font-medium leading-relaxed">
                  Office No. F-107, Mohammed Ahmed Al Wajdi Building,
                  <br />
                  Khalid Bin Waleed Street, Dubai, UAE
                </address>
              </div>
            </div>
          </div>

          {/* RIGHT: The Form */}
          <div className="lg:col-span-7">
            <ContactForm title="Request a Consultation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
