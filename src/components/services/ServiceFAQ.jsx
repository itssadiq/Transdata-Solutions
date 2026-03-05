import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ServiceFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Safety check: don't render if no FAQs are provided in the data file
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      {/* Container updated to match OurStory hierarchy */}
      <div className="container mx-auto px-6 md:px-20">
        {/* Header - Updated to match 2-column site hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
          <div>
            <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-td-black"></span> Support
            </h2>
            <h3 className="text-4xl font-bold leading-tight">
              Common Questions
            </h3>
          </div>
          <div className="flex items-end">
            <p className="text-gray-600 leading-relaxed font-medium">
              We've compiled a list of frequently asked questions to help you
              understand our processes and how we deliver value to your
              business.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border transition-all duration-300 rounded-sm overflow-hidden ${
                  isOpen
                    ? "border-td-yellow bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className={`font-bold text-lg md:text-xl pr-8 transition-colors ${
                      isOpen ? "text-td-yellow" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    {isOpen ? (
                      <Minus size={24} className="text-td-yellow" />
                    ) : (
                      <Plus size={24} className="text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
