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
// 📸 IMPORT YOUR DOWNLOADED IMAGES HERE
// ==========================================
import post1 from "../../assets/instagram/post1.jpg";
import post2 from "../../assets/instagram/post2.jpg";
import post3 from "../../assets/instagram/post3.jpg";
import post4 from "../../assets/instagram/post4.jpg";
import post5 from "../../assets/instagram/post5.jpg";
import post6 from "../../assets/instagram/post6.jpg";
import post7 from "../../assets/instagram/post7.jpg";
import post8 from "../../assets/instagram/post8.jpg";
import post9 from "../../assets/instagram/post9.jpg";
import post10 from "../../assets/instagram/post10.jpg";
// ==========================================

const CARD_WIDTH = 350;
const GAP = 24;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

// ==========================================
// 📝 CONFIGURE YOUR 10 INSTAGRAM POSTS HERE
// ==========================================
const INSTAGRAM_POSTS = [
  {
    id: 1,
    caption:
      "⚠️ Cybersecurity Alert: Stay Protected Against Wiper Malware The UAE Cyber Security Council has issued an important advisory highlighting the rising threat of Wiper Malware—one of the most destructive types of cyberattacks that can erase critical data and disrupt entire systems.", // 👈 Add your caption
    media_url: post1, // 👈 Replace with: post1
    permalink:
      "https://www.instagram.com/p/DWVguSGDGj9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2026-03-26",
    like_count: 2,
  },
  {
    id: 2,
    caption:
      "As your team grows, your network must grow stronger too. 🚀🔐 At Transdata Solutions, we deliver advanced Firewall Solutions designed to protect your expanding IT environment from evolving cyber threats. Whether you're onboarding new employees, opening new branches, or enabling secure remote access, your security should scale with your business.", // 👈 Add your caption
    media_url: post2, // 👈 Replace with: post2
    permalink:
      "https://www.instagram.com/p/DVf-TkajfGl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2026-03-05",
    like_count: 1,
  },
  {
    id: 3,
    caption:
      "🚨 Cyber Awareness Alert 🚨 Nearly 40% of users in the UAE have faced privacy breaches due to oversharing personal information on social media. Irresponsible posting puts individuals and businesses at risk of fraud, identity theft, and digital scams. Robust digital safeguards, cautious sharing habits, and strong cybersecurity practices are more essential than ever. Stay safe online! 💻🔒", // 👈 Add your caption
    media_url: post3, // 👈 Replace with: post3
    permalink:
      "https://www.instagram.com/p/DVdO5JEDR8U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2026-03-04",
    like_count: 0,
  },
  {
    id: 4,
    caption:
      "🔐 16 Billion Passwords Leaked. Yes—Apple, Google, Facebook, and possibly yours. Your business accounts could already be exposed. Reused passwords, weak access policies, and unaware staff are open doors for attackers.", // 👈 Add your caption
    media_url: post4, // 👈 Replace with: post4
    permalink:
      "https://www.instagram.com/p/DLXCMsDtwrC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2025-06-26",
    like_count: 3,
  },
  {
    id: 5,
    caption:
      "🚨 Gunra Ransomware: The New Threat You Can’t Ignore A Conti-based threat targeting Windows systems, Gunra encrypts, exfiltrates, and demands double extortion via Tor. From .ENCRT file locks to R3ADM3.txt ransom notes, it’s actively hitting sectors like healthcare, real estate, and manufacturing — putting sensitive data and trust at risk.", // 👈 Add your caption
    media_url: post5, // 👈 Replace with: post5
    permalink:
      "https://www.instagram.com/p/DKzSdNXNiW0/?utm_source=ig_web_copy_link", // 👈 Add Instagram post link
    timestamp: "2025-06-12",
    like_count: 3,
  },
  {
    id: 6,
    caption:
      "🚨🚨 Microsoft Employees' Data was Recently Exposed Online Due to a Third-Party Breach. To protect against third-party data breaches, companies can: 🔍 Vendor Risk Management: Conduct thorough due diligence and regular security audits of third-party vendors. 🔐 Data Encryption: Encrypt all data shared with third parties. 🔒 Access Control: Limit third-party access to only necessary data.", // 👈 Add your caption
    media_url: post6, // 👈 Replace with: post6
    permalink:
      "https://www.instagram.com/p/C9T-B9ftJpc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2024-07-12",
    like_count: 0,
  },
  {
    id: 7,
    caption:
      "At Transdata, we understand the importance of safeguarding your valuable data. With over 14 years of experience, our team of experts specializes in implementing robust security measures tailored to your specific needs. From encryption protocols to access controls, we offer a comprehensive range of services and solutions to address all your security concerns.", // 👈 Add your caption
    media_url: post7, // 👈 Replace with: post7
    permalink:
      "https://www.instagram.com/p/C6a2oSUrgXr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2024-05-01",
    like_count: 0,
  },
  {
    id: 8,
    caption:
      "Expanding endpoint numbers heightens cyber threat exposure. Robust security measures are crucial for safeguarding against breaches in growing networks. Discover how Transdata can bolster your endpoint security framework, ensuring robust protection against evolving cyber threats.", // 👈 Add your caption
    media_url: post8, // 👈 Replace with: post8
    permalink:
      "https://www.instagram.com/p/C6D7rrIrG6I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2024-04-24",
    like_count: 0,
  },
  {
    id: 9,
    caption:
      "Concerned about cyber threats? Last year, the Middle East and the UAE saw a troubling 59% of data breaches. At Transdata, we specialize in cyber threat intelligence, offering proactive solutions to safeguard your business. Our expertise spans threat detection, incident response, and risk mitigation, ensuring comprehensive protection against evolving cyber risks.", // 👈 Add your caption
    media_url: post9, // 👈 Replace with: post9
    permalink:
      "https://www.instagram.com/p/C5fd3ShtJt-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2024-04-08",
    like_count: 1,
  },
  {
    id: 10,
    caption:
      "🚨 Is your network architecture resilient enough for today’s digital demands? Frequent downtime, lack of redundancy, legacy hardware, and weak security layers are critical red flags. At Transdata Solutions, we engineer robust IT infrastructures built for uptime, scalability, and cyber defense. ⚙️🛡️", // 👈 Add your caption
    media_url: post10, // 👈 Replace with: post10
    permalink:
      "https://www.instagram.com/p/DKrjkjnt3hN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // 👈 Add Instagram post link
    timestamp: "2025-06-09",
    like_count: 0,
  },
];
// ==========================================

const SocialPosts = () => {
  const socialScrollRef = useRef(null);
  const [instaPosts] = useState(INSTAGRAM_POSTS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Drag State
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // 2. Drag Logic
  const handleMouseDown = (e) => {
    if (e.target.closest("button") || e.target.closest("a")) return;
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
  }, [isHovered, isDown]);

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
    <section id="posts" className="bg-gray-50 py-24 border-b border-gray-200">
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
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-[350px] bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 select-none cursor-pointer"
              onClick={(e) => {
                if (isDown) e.preventDefault();
              }}
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
                  src={post.media_url}
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Instagram Post"
                />
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-gray-100 flex justify-between text-gray-500 text-xs font-bold mt-auto">
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <Heart size={16} /> {post.like_count}
                </div>
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <MessageCircle size={16} /> Comment
                </div>
                <div className="flex items-center gap-1 hover:text-[#E1306C] transition-colors">
                  <Share2 size={16} /> Share
                </div>
              </div>
            </a>
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
