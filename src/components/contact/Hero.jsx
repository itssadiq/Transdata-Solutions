const Hero = () => {
  return (
    <div className="bg-td-black text-white pt-48 pb-24 border-b border-white/10">
      <div className="container mx-auto px-6 md:px-20">
        <p className="text-td-yellow font-mono text-xs uppercase tracking-[0.3em] mb-6 translate-y-8 opacity-0 contact-reveal">
          Get in Touch
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          <div className="overflow-hidden">
            <div className="translate-y-full opacity-0 contact-reveal">
              Let's Start a
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full opacity-0 contact-reveal">
              Conversation.
            </div>
          </div>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl translate-y-8 opacity-0 contact-reveal font-medium">
          Have a project in mind or want to consult with our experts? We are
          ready to build the intelligent infrastructure of your future.
        </p>
      </div>
    </div>
  );
};

export default Hero;
