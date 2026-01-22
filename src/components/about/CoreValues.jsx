import { Handshake, Lightbulb, ShieldCheck } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-16 reveal-up">
          <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-td-yellow"></span> 02 // Core Values
          </h2>
          <h3 className="text-4xl font-bold">The Pillars of Our Success</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
            <Handshake
              size={40}
              className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3">Client-Centricity</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              We don't just sell products; we build relationships. Every
              solution is configured to meet your specific budget and goals.
            </p>
          </div>
          <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
            <Lightbulb
              size={40}
              className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3">Innovation</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              We stay ahead of the curve, constantly exploring emerging
              technologies like AI, IoT, and Blockchain to give you a
              competitive edge.
            </p>
          </div>
          <div className="group p-8 border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-gray-50/50 reveal-up">
            <ShieldCheck
              size={40}
              className="text-gray-300 group-hover:text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3">Integrity</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Transparency is key. From consultation to implementation, we
              ensure clear communication and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
