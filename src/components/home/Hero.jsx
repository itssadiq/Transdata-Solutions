import React from "react";
import video from "../../assets/video.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-start text-left">
      <div className="absolute inset-0 z-0 bg-gray-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 w-full md:w-1/2 ml-0 md:ml-20">
        <div className="overflow-hidden mb-6">
          <p className="text-white/80 font-medium text-[11px] uppercase tracking-[0.4em] opacity-0 translate-y-4 animate-in">
            Intelligent Infrastructure
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white capitalize mb-8">
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              Tailored IT Services &
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              Solution to <span className="text-td-yellow">Boost</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              <span className="text-td-yellow">Your Business</span>
            </div>
          </div>
        </h1>
        <p className="text-white/70 text-sm font-mono uppercase tracking-widest opacity-0 translate-y-4 animate-in">
          Predict the future through AI & Machine Learning
        </p>
      </div>

      {/* Hero Sidebar */}
      <div className="hidden md:flex flex-col items-end gap-2 absolute right-[5%] top-1/2 -translate-y-1/2 z-30 border-r-2 border-white pr-5 opacity-0 translate-x-10 reveal-sidebar">
        <a
          href="#about"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Our Mission
        </a>
        <a
          href="#insights"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Testimonials
        </a>
        <a
          href="#insights"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          FAQ's
        </a>
        <a
          href="#social-slider"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Social Updates
        </a>
        <a
          href="#contact"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Contact
        </a>
        <a
          href="#location"
          className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
        >
          Our Office
        </a>
      </div>

      <div className="absolute bottom-10 left-10 md:left-20 animate-bounce">
        <div className="text-white text-xs font-bold uppercase tracking-widest">
          Scroll Down ↓
        </div>
      </div>
    </div>
  );
};

export default Hero;
