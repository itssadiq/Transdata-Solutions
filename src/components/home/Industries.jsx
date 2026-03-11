import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { ArrowRight } from "lucide-react"; // Optional icon
import IndustriesVideo from "./IndustriesVideo"; // Adjust path as needed

const Industries = () => {
  return (
    <section className="bg-white pt-20 md:pt-24 border-t border-gray-100">
      {/* 1. Text Content Wrapper (Locked to 1400px) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 mb-16 md:mb-20">
        {/* Header Label */}
        <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest flex items-center gap-3">
          <span className="w-8 h-0.5 bg-black"></span> Sectors
        </h2>

        <div className="max-w-4xl">
          {/* Main Title */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
            Experience Across <br className="hidden md:block" /> Multiple
            Industries
          </h3>

          {/* Description Paragraph */}
          <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-10">
            Transdata Solutions delivers industry-specific IT expertise designed
            to drive efficiency and business growth. We understand the unique
            challenges of each sector and provide tailored technology solutions
            to meet them. From banking and healthcare to retail and
            construction, our services help organizations optimize operations.
            Our team ensures businesses have the support and tools they need to
            stay competitive and future-ready.
          </p>

          {/* View More Button */}
          {/* Update the 'to' prop to match your actual industries route (e.g., /solutions or /industries) */}
          <Link
            to="/solutions"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm group"
          >
            See Our Work Across Industries
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      <IndustriesVideo />
    </section>
  );
};

export default Industries;
