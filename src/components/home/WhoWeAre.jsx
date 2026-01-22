import React, { useState } from "react";

const WhoWeAre = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  return (
    <section id="about" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 h-100 bg-gray-100 relative overflow-hidden rounded-md reveal-up">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/10395146/"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-8 reveal-up">
              <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest">
                01 // Who We Are
              </h2>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight max-w-2xl">
                With more than 12 years of experience, 350+ projects, and 265+
                satisfied clients in 24 countries, Transdata Solutions is a
                leading end-to-end digital solutions provider.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-up">
              <div>
                <h4 className="text-lg font-bold mb-4">About Us</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Transdata Solutions has been working diligently since 2013 to
                  serve the IT sector throughout the UAE. Notably, we are
                  passionate about delivering the best value IT products.
                </p>
                <div
                  className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isReadMoreOpen ? "max-h-125" : "max-h-12"}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    As a technology consulting company, Transdata Solutions
                    caters to all types of organizations at each level. We
                    firmly believe that we have built an organization uniquely
                    equipped for this task.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Furthermore, Transdata Solutions holds the perfect expertise
                    and knowledge to find the best combination when it comes to
                    product configuration for our clients.
                  </p>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-white via-white/90 to-transparent pointer-events-none transition-opacity duration-300 ${isReadMoreOpen ? "opacity-0" : "opacity-100"}`}
                  ></div>
                </div>
                <button
                  onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                  className="mt-4 text-xs font-bold uppercase tracking-widest border-b-2 border-td-yellow pb-1 hover:text-td-yellow transition-colors"
                >
                  {isReadMoreOpen ? "Show Less" : "Read More"}
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Our Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To empower businesses through innovative technology, providing
                  reliable, scalable, and secure IT infrastructure that drives
                  growth and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
