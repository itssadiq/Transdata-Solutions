import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceNowData } from "../data/serviceNowData";

gsap.registerPlugin(ScrollTrigger);

const ServiceNow = () => {
  const [currentCert, setCurrentCert] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  // Destructure Data for easier access
  const { hero, strategicBenefits, hiring, whyChoose, faq, cta } =
    serviceNowData;

  // 1. Certificate Slider Logic (Auto-rotate every 3.5 seconds)
  useEffect(() => {
    if (!hiring.certificates || hiring.certificates.length === 0) return;

    const timer = setInterval(() => {
      setCurrentCert((prev) =>
        prev === hiring.certificates.length - 1 ? 0 : prev + 1,
      );
    }, 3500);
    return () => clearInterval(timer);
  }, [hiring.certificates]);

  // 2. GSAP Animations (Lag Optimized)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade Up Animation for sections
      gsap.utils.toArray(".fade-up").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert(); // Cleanup to prevent lag
  }, []);

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div ref={pageRef} className="bg-white min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={
              hero.bgImage ||
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            }
            alt="ServiceNow Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-[1000px] px-6 text-center flex flex-col items-center">
          {/* Specific ServiceNow Logo */}
          <div className="mb-8 fade-up">
            <img
              src={
                hero.serviceLogo ||
                "https://upload.wikimedia.org/wikipedia/commons/1/12/ServiceNow_logo.svg"
              }
              alt="ServiceNow Partner Logo"
              className="h-16 md:h-20 w-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight fade-up">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto fade-up font-light leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* ================= STRATEGIC BENEFITS (Full Width) ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight">
            {strategicBenefits.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-5xl mx-auto">
            {strategicBenefits.description}
          </p>
        </div>
      </section>

      {/* ================= HIRING & CERTIFICATES (Split: Text Left / Slider Right) ================= */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="fade-up space-y-6">
            <h2 className="text-3xl font-extrabold text-black mb-6 leading-tight">
              {hiring.title}
            </h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-6">
              {hiring.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Badges for Professional Look */}
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">
                CSA
              </span>
              <span className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">
                CIS-SPM
              </span>
              <span className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">
                CMDB & CSDM
              </span>
            </div>
          </div>

          {/* Right: Certificate Slider (One by One) */}
          <div className="fade-up w-full flex justify-center lg:justify-end">
            <div className="relative w-full h-[450px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              {hiring.certificates && hiring.certificates.length > 0 ? (
                hiring.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center p-8 bg-white ${
                      index === currentCert
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                      className="max-w-full max-h-[80%] object-contain mb-6 drop-shadow-md"
                    />
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Certified Professional
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p>Certificates Loading...</p>
                </div>
              )}

              {/* Slider Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {hiring.certificates &&
                  hiring.certificates.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCert(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentCert
                          ? "bg-td-yellow w-8"
                          : "bg-gray-200 w-2"
                      }`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE (Split: Image Left / Text Right) ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="fade-up relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={
                whyChoose.image ||
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              }
              alt="Why Choose Us"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for text contrast if needed, or subtle style */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Right: Text List */}
          <div className="fade-up pl-0 lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-10 leading-tight">
              {whyChoose.title}
            </h2>
            <ul className="space-y-6">
              {whyChoose.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-td-yellow flex items-center justify-center shrink-0 shadow-sm">
                    <Check size={14} className="text-black font-bold" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6 fade-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            {faq.title}
          </h2>

          <div className="space-y-4">
            {faq.items.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "border-black shadow-md"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-black pr-8">
                    {item.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-td-yellow shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${
                    openFaq === index
                      ? "max-h-60 opacity-100 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            <a
              href={`tel:${cta.contactInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-2xl font-bold hover:text-td-yellow transition-colors group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-td-yellow group-hover:text-black transition-all">
                <Phone size={24} />
              </div>
              {cta.contactInfo.phone}
            </a>

            <a
              href={`mailto:${cta.contactInfo.email}`}
              className="flex items-center gap-3 text-2xl font-bold hover:text-td-yellow transition-colors group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-td-yellow group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              {cta.contactInfo.email}
            </a>
          </div>

          <div>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-td-yellow text-black px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceNow;
