import React, { useState } from "react";
import video from "../../assets/video-2.mp4";

const WhoWeAre = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  return (
    // Updated padding to py-20 md:py-24 to match Stats section symmetry
    <section
      id="about-us"
      className="py-20 md:py-24 bg-white border-b border-gray-100"
    >
      {/* Container locked to 1400px framework */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Video */}
          <div className="lg:col-span-4 h-100 bg-gray-100 relative overflow-hidden rounded-md reveal-up">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-8 reveal-up">
              <h2 className="text-lg font-bold text-td-yellow mb-4 uppercase tracking-widest">
                Who We Are
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-up">
              <div>
                <h4 className="text-lg font-bold mb-4 border-b-2 border-td-yellow inline-block pb-1">
                  About Us
                </h4>
                <p className="text-gray-600 text:lg md:text-sm leading-relaxed mb-4">
                  Transdata Solutions takes pride in being the leading IT
                  solutions integrator, providing consultation services to
                  businesses across industries, for 13+ years. Our expertise
                  spans hardware infrastructure, enterprise software, data
                  center and storage solutions, cybersecurity, and cloud
                  technologies.
                </p>

                <div
                  className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                    isReadMoreOpen ? "max-h-125" : "max-h-12"
                  }`}
                >
                  <p className="text-gray-600 text:lg md:text-sm leading-relaxed mb-4">
                    From strengthening core IT infrastructure to securing and
                    optimizing digital environments, we design solutions that
                    are reliable, secure, and built for long-term performance.
                    At Transdata Solutions, we believe technology should enable
                    progress — not complicate it.
                  </p>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-white via-white/90 to-transparent pointer-events-none transition-opacity duration-300 ${
                      isReadMoreOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></div>
                </div>

                <button
                  onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                  className="mt-4 text-xs font-bold uppercase tracking-widest border-b-2 border-td-yellow pb-1 hover:text-td-yellow transition-colors cursor-pointer"
                >
                  {isReadMoreOpen ? "Show Less" : "Read More"}
                </button>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 border-b-2 border-td-yellow inline-block pb-1">
                  Our Mission
                </h4>
                <p className="text-gray-600 text:lg md:text-sm leading-relaxed">
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
