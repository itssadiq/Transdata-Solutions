import React from "react";
import { CheckCircle2 } from "lucide-react";

const ServiceOverview = ({ text, benefits }) => {
  if (!text) return null;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Long Description */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-black leading-tight">
            The Foundation of <br /> Operational Success
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium">
            {text}
          </p>
        </div>

        {/* Right: Benefits Card */}
        <div className="bg-gray-50 p-10 md:p-12 rounded-sm border border-gray-200 shadow-sm relative overflow-hidden">
          {/* Subtle brand accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-td-yellow"></div>

          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-gray-400">
            Key Benefits
          </h4>
          <ul className="space-y-6">
            {benefits?.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-td-yellow mt-1 shrink-0"
                  size={22}
                />
                <span className="text-black font-bold text-lg md:text-xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
