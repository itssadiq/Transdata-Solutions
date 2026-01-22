const OurStory = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
          <div>
            <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-black"></span> 01 // The Story
            </h2>
            <h3 className="text-4xl font-bold leading-tight">
              More than just an IT company. We are your strategic growth
              partner.
            </h3>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              TransData Solutions was founded on a simple yet powerful premise:
              Technology should be an enabler, not a hurdle. For over a decade,
              we have dedicated ourselves to serving the IT sector throughout
              the UAE and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in end-to-end digital solutions, from procuring the
              best-in-class hardware to architecting complex cloud environments.
              Our "Client-First" philosophy ensures that every solution we
              design is tailored to the specific macroeconomic environment and
              institutional context of your business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-100 py-12 reveal-up">
          <div className="text-center md:text-left">
            <h4 className="text-5xl font-black text-black mb-2">
              <span className="counter" data-target="12">
                0
              </span>
              +
            </h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Years Experience
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-5xl font-black text-black mb-2">
              <span className="counter" data-target="350">
                0
              </span>
              +
            </h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Projects Delivered
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-5xl font-black text-black mb-2">
              <span className="counter" data-target="265">
                0
              </span>
              +
            </h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Happy Clients
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-5xl font-black text-black mb-2">
              <span className="counter" data-target="24">
                0
              </span>
            </h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Countries Served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
