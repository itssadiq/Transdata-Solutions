import React, { useRef, useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import logo from "../../assets/LOGO_1.png";

// ==========================================
// 🔴 PASTE YOUR INSTAGRAM ACCESS TOKEN HERE
// ==========================================
const INSTAGRAM_ACCESS_TOKEN = "";
// ==========================================

const CARD_WIDTH = 350;
const GAP = 24;
const SCROLL_AMOUNT = CARD_WIDTH + GAP; // 374px

const SocialPosts = () => {
  const socialScrollRef = useRef(null);
  const [instaPosts, setInstaPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Drag State
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // 1. Fetch Logic
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!INSTAGRAM_ACCESS_TOKEN) {
        setInstaPosts([
          {
            id: 1,
            caption:
              "Innovating the future of urban mobility. #SmartCity #Dubai",
            media_url:
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-25",
            like_count: 45,
          },
          {
            id: 2,
            caption:
              "Highlights from our latest team strategy session. Building resilient infrastructure together.",
            media_url:
              "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-20",
            like_count: 128,
          },
          {
            id: 3,
            caption:
              "We are hiring! Looking for talented DevOps Engineers to join our growing team.",
            media_url:
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-15",
            like_count: 76,
          },
          {
            id: 4,
            caption:
              "Securing the digital frontier. Our cybersecurity experts at work.",
            media_url:
              "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-10",
            like_count: 112,
          },
          {
            id: 5,
            caption:
              "Data is the new oil. Transforming raw metrics into actionable intelligence.",
            media_url:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-05",
            like_count: 94,
          },
          {
            id: 6,
            caption: "Partnership announcement: TransData x Global Tech.",
            media_url:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-11-01",
            like_count: 203,
          },
          {
            id: 7,
            caption: "Behind the scenes at our new Dubai Silicon Oasis HQ.",
            media_url:
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-10-28",
            like_count: 88,
          },
          {
            id: 8,
            caption:
              "Exploring Edge Computing applications for real-time traffic analysis.",
            media_url:
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
            timestamp: "2024-10-25",
            like_count: 67,
          },
        ]);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&limit=10&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
        );
        const data = await response.json();
        if (data.data) setInstaPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  // 2. Drag Logic
  const handleMouseDown = (e) => {
    if (e.target.closest("button")) return;
    setIsDown(true);
    setStartX(e.pageX - socialScrollRef.current.offsetLeft);
    setScrollLeftState(socialScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - socialScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    socialScrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  // 3. Arrow Navigation
  const slideSocial = (direction) => {
    if (socialScrollRef.current) {
      const container = socialScrollRef.current;
      const currentScroll = Math.ceil(container.scrollLeft);
      const maxScroll = Math.floor(
        container.scrollWidth - container.clientWidth,
      );

      let newScrollPosition;

      if (direction === "right") {
        if (currentScroll >= maxScroll - 10) newScrollPosition = 0;
        else newScrollPosition = currentScroll + SCROLL_AMOUNT;
      } else {
        if (currentScroll <= 10) newScrollPosition = maxScroll;
        else newScrollPosition = currentScroll - SCROLL_AMOUNT;
      }

      container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  };

  // 4. Auto-Play
  useEffect(() => {
    if (isHovered || isDown) return;

    const interval = setInterval(() => {
      if (socialScrollRef.current) {
        const container = socialScrollRef.current;
        const currentScroll = Math.ceil(container.scrollLeft);
        const maxScroll = Math.floor(
          container.scrollWidth - container.clientWidth,
        );

        if (currentScroll >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isDown, instaPosts]);

  const handleScroll = () => {
    if (socialScrollRef.current) {
      const index = Math.round(
        socialScrollRef.current.scrollLeft / SCROLL_AMOUNT,
      );
      setActiveIndex(index);
    }
  };

  const scrollToDot = (index) => {
    if (socialScrollRef.current) {
      socialScrollRef.current.scrollTo({
        left: index * SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section
      id="social-slider"
      className="bg-gray-50 py-24 border-b border-gray-200"
    >
      <div className="container mx-auto px-6 md:px-20 mb-12 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
          Connect and <span className="text-td-yellow">follow us</span> on
          social media
        </h3>
      </div>

      <div
        className="relative container mx-auto px-6 md:px-20 group"
        onMouseEnter={() => setIsHovered(true)}
      >
        {/* LEFT ARROW */}
        <button
          onClick={() => slideSocial("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black border border-gray-200 rounded-full shadow-xl flex items-center justify-center hover:bg-td-yellow hover:text-black transition-all z-50 cursor-pointer border-2 border-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => slideSocial("right")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black border border-gray-200 rounded-full shadow-xl flex items-center justify-center hover:bg-td-yellow hover:text-black transition-all z-50 cursor-pointer border-2 border-white"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Track */}
        <div
          ref={socialScrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto no-scrollbar py-8 px-1 ${isDown ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollBehavior: isDown ? "auto" : "smooth" }}
        >
          {instaPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-[350px] bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 select-none cursor-pointer"
            >
              {/* Header */}
              <div className="p-4 flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-white">
                    <img
                      src={logo}
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
                    <p className="text-xs text-gray-500">
                      {formatDate(post.timestamp)}
                    </p>
                  </div>
                </div>
                <Instagram color="#E1306C" size={28} strokeWidth={1.5} />
              </div>

              {/* Caption */}
              <div className="px-4 pb-2">
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {post.caption || "No caption provided."}
                </p>
                <span className="text-xs font-bold text-gray-500 mt-1 hover:underline">
                  Read more
                </span>
              </div>

              {/* Media */}
              <div className="mt-2 h-48 bg-gray-100 overflow-hidden">
                <img
                  src={post.media_url || post.thumbnail_url}
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Post"
                />
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-gray-100 flex justify-between text-gray-500 text-xs font-bold mt-auto">
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <Heart size={16} />{" "}
                  {post.like_count || Math.floor(Math.random() * 100) + 20}
                </div>
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <MessageCircle size={16} /> Comment
                </div>
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <Share2 size={16} /> Share
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Dot is Yellow */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap px-4">
          {instaPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-td-yellow w-8"
                  : "bg-gray-300 w-2.5 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialPosts;
