import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Linkedin,
  MessageCircle,
  Share2,
} from "lucide-react";
import React, { useRef } from "react";

const SocialPosts = () => {
  const socialScrollRef = useRef(null);

  const slideSocial = (direction) => {
    if (socialScrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      socialScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="social-slider"
      className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
    >
      <div className="container mx-auto px-6 md:px-20 mb-12 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
          Connect and <span className="text-td-yellow">follow us</span> on
          social media
        </h3>
      </div>

      <div className="relative container mx-auto px-6 md:px-20">
        <button
          onClick={() => slideSocial("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-all z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => slideSocial("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-all z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={socialScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-4"
        >
          {[
            {
              date: "November 25, 2024",
              text: "The world doesn’t need another security tool. It needs a smarter way to connect the ones that already exist. We are revolutionizing how enterprises handle data security...",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
              likes: 40,
            },
            {
              date: "November 20, 2024",
              text: "Excited to showcase our latest innovations in Intelligent Mobility at GITEX Global this year. Visit our stand to see the future of urban transport...",
              img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
              likes: 128,
            },
            {
              date: "November 15, 2024",
              text: "We are expanding our Dubai team! Looking for Senior DevOps Engineers who are passionate about building scalable infrastructure. Apply now...",
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
              likes: 76,
            },
            {
              date: "November 10, 2024",
              text: "At a time when cyber threats evolve faster than the systems meant to stop them, the banking sector's ability to stay resilient is paramount...",
              img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
              likes: 112,
            },
          ].map((post, i) => (
            <div
              key={i}
              className="flex-none w-87.5 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden snap-center flex flex-col"
            >
              <div className="p-4 flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <img
                      src="/LOGO_1.png"
                      className="w-full h-full object-contain bg-black p-1"
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="text-sm font-bold text-black">
                        TransData Solutions
                      </h4>
                      <CheckCircle2 size={12} className="text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <Linkedin
                  className="text-linkedin"
                  size={24}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </div>
              <div className="px-4 pb-2">
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {post.text}
                </p>
                <span className="text-xs font-bold text-gray-500 mt-1 cursor-pointer hover:underline">
                  Read more
                </span>
              </div>
              <div className="mt-2 h-48 bg-gray-100 overflow-hidden">
                <img
                  src={post.img}
                  className="w-full h-full object-cover"
                  alt="Post"
                />
              </div>
              <div className="p-3 border-t border-gray-100 flex justify-between text-gray-500 text-xs font-bold mt-auto">
                <div className="flex items-center gap-1 hover:text-linkedin cursor-pointer transition-colors">
                  <Heart size={16} /> {post.likes}
                </div>
                <div className="flex items-center gap-1 hover:text-linkedin cursor-pointer transition-colors">
                  <MessageCircle size={16} /> Comment
                </div>
                <div className="flex items-center gap-1 hover:text-linkedin cursor-pointer transition-colors">
                  <Share2 size={16} /> Share
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default SocialPosts;
