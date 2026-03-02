import React from "react";
import { Check } from "lucide-react";

const ServiceInfoSection = ({ title, content, listTitle, items, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-24 ${isEven ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}
    >
      {/* Container updated to match OurStory hierarchy exactly */}
      <div className="container mx-auto px-6 md:px-20">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-16 items-start`}
        >
          {/* Main Text Content Block */}
          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-black"></span> 0{index + 2} //
              Insights
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              {content}
            </p>
          </div>

          {/* Technical Requirements / Services List Block */}
          <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-sm relative overflow-hidden">
            {/* Subtle brand accent on the card */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-td-yellow"></div>

            {listTitle && (
              <h4 className="text-td-yellow font-bold uppercase tracking-widest text-xs mb-8 border-b border-gray-100 pb-4">
                {listTitle}
              </h4>
            )}

            <ul className="space-y-6">
              {items?.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <Check size={20} className="text-td-yellow mt-1 shrink-0" />
                  <span className="text-black font-bold text-base md:text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoSection;
