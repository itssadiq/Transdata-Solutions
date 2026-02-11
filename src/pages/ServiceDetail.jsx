import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import PageHero from "../components/PageHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceCTA from "../components/services/ServiceCTA";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceInfoSection from "../components/services/ServiceInfoSection";

const ServiceDetail = () => {
  const { id } = useParams();
  const data = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data)
    return (
      <div className="py-40 text-center font-bold">
        Service Page Under Construction.
      </div>
    );

  return (
    <div className="bg-white">
      <PageHero
        subtitle={data.subtitle}
        title={data.title1}
        highlight={data.title2}
        description={data.desc}
        bgImage={data.image}
      />

      <ServiceOverview text={data.overview} benefits={data.benefits} />

      {/* Capability Grid */}
      <ServiceFeatures features={data.features} />

      {/* Renders every single extra block of content provided by the client */}
      {data.extraSections?.map((section, index) => (
        <ServiceInfoSection key={index} index={index} {...section} />
      ))}

      {/* Methodology Section */}
      <ServiceProcess steps={data.processSteps} title={data.processTitle} />

      {/* FAQ Section */}
      <ServiceFAQ faqs={data.faqs} />

      <ServiceCTA />
    </div>
  );
};

export default ServiceDetail;
