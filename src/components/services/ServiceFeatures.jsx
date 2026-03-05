import React from "react";
// Import the potential icons we'll use across all services
import {
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Network,
  HardDrive,
  Headphones,
  Cloud,
  Lock,
  Settings,
  Zap,
  Monitor,
  Activity,
  FileCheck,
  Users,
  Globe,
  Server,
  Radio,
  ShieldAlert,
  Search,
} from "lucide-react";

// Mapping string names from your Data file to actual Lucide Components
const iconMap = {
  layers: Layers,
  shield: ShieldCheck,
  cpu: Cpu,
  database: Database,
  network: Network,
  harddrive: HardDrive,
  support: Headphones,
  cloud: Cloud,
  lock: Lock,
  settings: Settings,
  zap: Zap,
  monitor: Monitor,
  activity: Activity,
  compliance: FileCheck,
  users: Users,
  globe: Globe,
  server: Server,
  wireless: Radio,
  alert: ShieldAlert,
  search: Search,
};

const ServiceFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header - Matching OurStory Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
          <div>
            <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-td-yellow"></span> 01 //
              Capabilities
            </h2>
            <h3 className="text-4xl font-bold leading-tight">
              What We Deliver
            </h3>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Determine which icon to show (fallback to Layers if not found)
            const IconComponent = iconMap[feature.icon] || Layers;

            return (
              <div
                key={index}
                className="group p-8 md:p-10 border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-td-yellow hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                {/* Dynamic Icon Container */}
                <div className="w-14 h-14 bg-black text-td-yellow flex items-center justify-center rounded-sm mb-8 group-hover:bg-td-yellow group-hover:text-black transition-colors duration-300">
                  <IconComponent size={30} strokeWidth={1.5} />
                </div>

                <h4 className="text-xl md:text-2xl font-bold mb-4 text-black group-hover:text-td-yellow transition-colors">
                  {feature.title}
                </h4>

                <p className="text-gray-500 text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
