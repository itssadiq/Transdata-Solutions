import { Eye, Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-td-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-td-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal-up">
            <div className="w-12 h-12 bg-td-yellow rounded-sm flex items-center justify-center mb-8 text-black">
              <Target size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To empower businesses through innovative technology, providing
              reliable, scalable, and secure IT infrastructure that drives
              growth and operational excellence. We strive to be the trusted
              partner that bridges the gap between complex technology and
              tangible business results.
            </p>
          </div>

          <div className="reveal-up">
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-8 text-black">
              <Eye size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              To be the global benchmark for intelligent mobility and digital
              transformation services, creating a future where organizations of
              all sizes can leverage cutting-edge technology to predict, adapt,
              and thrive in an ever-changing digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
