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
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`
                flex flex-col justify-center items-center text-center px-4
                ${
                  index !== statsData.length - 1
                    ? "md:border-r md:border-gray-300" // Vertical line on desktop
                    : ""
                }
                ${
                  index !== statsData.length - 1
                    ? "border-b border-gray-200 pb-8 md:border-b-0 md:pb-0" // Horizontal line on mobile
                    : ""
                }
              `}
            >
              {/* Highlight Text (Yellow) */}
              <h3 className="text-4xl lg:text-3xl font-extrabold text-td-yellow leading-none mb-3">
                {stat.highlight}
              </h3>

              {/* Remaining Text (Black) */}
              <p className="text-black text-lg md:text-xl font-bold leading-tight max-w-[250px]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
