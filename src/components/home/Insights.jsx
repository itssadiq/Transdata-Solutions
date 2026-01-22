import React, { useEffect, useState } from "react";

const Insights = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const testimonials = [
    {
      text: `"I am delightful to say that team transdata is amazing. They managed to cater all our hardware and software requirements instantly and we've been running like clock work ever since. They really know the process and are brilliant at it, hence they made all the process a breeze, Thanks a ton, guys!"`,
      author: "POOJA",
      color: "bg-black",
    },
    {
      text: `"I was blown by the speed and reliability of our new digital infrastructure after working with this team. Their expertise in cabling, internet and networking made all the difference our business operations. Thanks to them, we have a seamless and robust system we can count on everyday"`,
      author: "JOSEF",
      color: "bg-td-yellow",
    },
    {
      text: `"Wow, these transdata's team really came through for us! When we experienced a major data loss, we were worried our business was going to suffer. But thanks to their backup and disaster recovery solutions, we were up and running again in no time. Their team was so responsive and tailored a solution to fit our needs perfectly."`,
      author: "SARAH",
      color: "bg-gray-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="insights"
      className="py-24 bg-white container mx-auto px-6 md:px-20 reveal-up border-b border-gray-100"
    >
      <h2 className="text-xs font-bold text-black mb-16 uppercase tracking-widest flex items-center gap-3">
        <span className="w-8 h-0.5 bg-td-yellow"></span> 04 // Insights
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Client Voices</h3>
          <div className="relative h-100 overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-slide absolute inset-0 transition-opacity duration-1000 flex flex-col justify-start ${i === testimonialIndex ? "opacity-100" : "opacity-0"}`}
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-black mb-8">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color}`}></div>
                  <div>
                    <p className="font-bold text-sm">{t.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Common Inquiries</h3>
          <div className="space-y-4">
            {[
              {
                q: "Why hire IT consultants?",
                a: "Passionate about your business but not about IT? Transdata-Solution's IT support and IT Solutions Company in Dubai specialists can help. With years of experience, we strategize and implement best-in-class IT systems to help you meet your objectives. In addition, we partner with you for dedicated IT consulting and support throughout the entire setup process.",
              },
              {
                q: "Why Do I need IT consultancy?",
                a: "Passionate about your business but not about IT? Transdata-Solutions' IT support specialists can help. In fact, with years of experience, we strategize and implement best-in-class IT systems to help you meet your objectives. Furthermore, we partner with you for dedicated IT consulting and support throughout the entire setup process.",
              },
              {
                q: "What is your consultation process?",
                a: "We encounter numerous challenges. As technology consultants, we offer services to organizations of all types. Our process involves Evaluation (discussions with stakeholders), Identification (technical survey analysis), and Implementation (scope presentation and execution).",
              },
              {
                q: "How IT consulting firm operates?",
                a: "Transdata operates by providing expert advice, guidance, and services related to information technology. We start with client needs assessment, followed by solution proposal, project planning, implementation, and ongoing monitoring and support.",
              },
              {
                q: "How long do you need IT consulting services?",
                a: "At Transdata-Solutions, we offer IT consulting services tailored to your needs. Whether you need assistance with a simple software installation or a complex IT networking project that takes over a year, our experts are here to help your business.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="accordion-item border-b border-black py-4"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(i)}
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  <span className="text-xl font-light">
                    {activeAccordion === i ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${activeAccordion === i ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="pt-4 text-gray-600 font-medium text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
