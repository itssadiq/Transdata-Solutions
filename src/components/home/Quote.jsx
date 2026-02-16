import React from "react";
import quote from "../../assets/Quote-part.png";

const Quote = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      {/* 1. Main Site Wrapper (Locked to 1400px) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* 2. Inner Wrapper (Mid-Screen symmetry - 1100px) */}
        <div className="max-w-[1100px] mx-auto">
          <img
            src={quote}
            alt="Client Quote"
            className="w-full h-auto rounded-xl md:rounded-3xl shadow-sm object-contain transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
