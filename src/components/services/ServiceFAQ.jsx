import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ServiceFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // If there are no FAQs for this service, don't render the section at all
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-[2px] bg-td-yellow"></span> 03 // Support
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-black">
            Common Questions
          </h3>
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
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
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

                {/* Answer Area */}
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
