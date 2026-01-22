const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-start text-left bg-td-black">
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-td-black via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-20 mt-20">
        <div className="overflow-hidden mb-6">
          <p className="text-td-yellow font-medium text-[11px] uppercase tracking-[0.4em] opacity-0 translate-y-4 animate-in">
            Who We Are
          </p>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-8">
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              Architects of
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-text-reveal translate-y-full opacity-0">
              Intelligent <span className="text-gray-500">Infrastructure.</span>
            </div>
          </div>
        </h1>
        <p className="text-white/70 text-sm font-mono uppercase tracking-widest opacity-0 translate-y-4 animate-in max-w-xl">
          Since 2013, we have been bridging the gap between complex technology
          and tangible business results across the globe.
        </p>
      </div>
    </div>
  );
};

export default Hero;
