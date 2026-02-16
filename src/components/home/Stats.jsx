import React from "react";

const Stats = () => {
  const statsData = [
    {
      highlight: "13+ Years",
      text: "in the IT Industry",
    },
    {
      highlight: "Mission-Critical",
      text: "IT Environments",
    },
    {
      highlight: "Security-First",
      text: "IT Approach",
    },
    {
      highlight: "High-Availability",
      text: "IT Systems",
    },
  ];

  return (
    // Standardized py-24 for equal vertical spacing across all sections
    <section className="w-full bg-white py-20 md:py-24">
      {/* 1. Main Site Wrapper (Locked to 1400px & Centered) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* 2. Inner Grid Wrapper (Constrained to 1100px & Centered with mx-auto) */}
        {/* This creates the "Mid-Screen" symmetry you requested */}
        <div className="max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`
                  flex flex-col justify-center items-center text-center px-4
                  ${
                    index !== statsData.length - 1
                      ? "md:border-r md:border-gray-300"
                      : ""
                  }
                  ${
                    index !== statsData.length - 1
                      ? "border-b border-gray-200 pb-8 md:border-b-0 md:pb-0"
                      : ""
                  }
                `}
              >
                <h4 className="text-2xl font-extrabold text-td-yellow leading-none mb-3">
                  {stat.highlight}
                </h4>

                <p className="text-black text-sm md:text-base font-bold leading-tight max-w-[200px]">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
