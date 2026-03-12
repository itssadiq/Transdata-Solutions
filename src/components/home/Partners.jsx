import client1 from "../../assets/clients/2.png";
import client2 from "../../assets/clients/3.png";
import client3 from "../../assets/clients/4.png";
import client4 from "../../assets/clients/5.png";
import client5 from "../../assets/clients/6.jpg";
import client6 from "../../assets/clients/7.png";
import client7 from "../../assets/clients/8.png";
import client8 from "../../assets/clients/9.jpg";
import client9 from "../../assets/clients/10.png";
import client12 from "../../assets/clients/12.png";
import client13 from "../../assets/clients/13.png";
import client14 from "../../assets/clients/14.png";
import client15 from "../../assets/clients/15.png";
import client16 from "../../assets/clients/16.png";
import client17 from "../../assets/clients/17.png";
import client18 from "../../assets/clients/18.png";
import client19 from "../../assets/clients/19.png";
import client20 from "../../assets/clients/20.png";
import client21 from "../../assets/clients/21.png";
import client23 from "../../assets/clients/23.png";
import client24 from "../../assets/clients/24.png";
import client25 from "../../assets/clients/25.png";
import client26 from "../../assets/clients/26.png";
import client27 from "../../assets/clients/27.png";
import client29 from "../../assets/clients/29.png";
import client30 from "../../assets/clients/30.png";
import client31 from "../../assets/clients/31.png";
import client34 from "../../assets/clients/34.png";
import client35 from "../../assets/clients/35.png";
import client36 from "../../assets/clients/36.png";
import client37 from "../../assets/clients/37.png";
import client38 from "../../assets/clients/38.png";
import client39 from "../../assets/clients/39.png";
import client40 from "../../assets/clients/40.png";

const partners = [
  { name: "Client 1", src: client1 },
  { name: "Client 2", src: client2 },
  { name: "Client 3", src: client3 },
  { name: "Client 4", src: client4 },
  { name: "Client 5", src: client5 },
  { name: "Client 6", src: client6 },
  { name: "Client 7", src: client7 },
  { name: "Client 8", src: client8 },
  { name: "Client 9", src: client9 },
  { name: "Client 12", src: client12 },
  { name: "Client 13", src: client13 },
  { name: "Client 14", src: client14 },
  { name: "Client 15", src: client15 },
  { name: "Client 16", src: client16 },
  { name: "Client 17", src: client17 },
  { name: "Client 18", src: client18 },
  { name: "Client 19", src: client19 },
  { name: "Client 20", src: client20 },
  { name: "Client 21", src: client21 },
  { name: "Client 23", src: client23 },
  { name: "Client 24", src: client24 },
  { name: "Client 25", src: client25 },
  { name: "Client 26", src: client26 },
  { name: "Client 27", src: client27 },
  { name: "Client 29", src: client29 },
  { name: "Client 30", src: client30 },
  { name: "Client 31", src: client31 },
  { name: "Client 34", src: client34 },
  { name: "Client 35", src: client35 },
  { name: "Client 36", src: client36 },
  { name: "Client 37", src: client37 },
  { name: "Client 38", src: client38 },
  { name: "Client 39", src: client39 },
  { name: "Client 40", src: client40 },
];

const Partners = () => {
  return (
    <section
      id="partner-marquee"
      className="container mx-auto px-6 md:px-20 bg-white border-b border-gray-100 overflow-hidden py-10"
    >
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
        Our Clients
      </p>

      <div className="flex overflow-hidden">
        {/* Loop 1 */}
        <div
          // 1. SLOW DOWN: Increased duration to 60s
          style={{ animationDuration: "60s" }}
          className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate"
        >
          {partners.map((partner, i) => (
            <img
              key={i}
              src={partner.src}
              alt={partner.name}
              loading="lazy"
              // 2. BIGGER LOGOS: Changed to h-20 (mobile) and h-28 (desktop)
              className="h-20 md:h-28 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

        {/* Loop 2 (Duplicate for infinite effect) */}
        <div
          // 1. SLOW DOWN: Must match Loop 1
          style={{ animationDuration: "90s" }}
          className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate"
        >
          {partners.map((partner, i) => (
            <img
              key={`dup-${i}`}
              src={partner.src}
              alt={partner.name}
              loading="lazy"
              // 2. BIGGER LOGOS: Must match Loop 1 exactly
              className="h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
