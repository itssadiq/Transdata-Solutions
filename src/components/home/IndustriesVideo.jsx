import Industries from "../../assets/Industries.mp4";

const IndustriesVideo = () => {
  return (
    <section className="w-full bg-white py-6">
      {/* 1. Main Site Wrapper (Locked to 1400px) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* 2. Inner Wrapper (Mid-Screen symmetry - 1100px) */}
        <div className="max-w-[1100px] mx-auto">
          <video
            className="w-full h-auto rounded-xl md:rounded-3xl shadow-sm object-cover transition-all duration-500"
            autoPlay
            loop
            muted
            playsInline
            // poster="/path-to-thumbnail.jpg"
          >
            <source src={Industries} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default IndustriesVideo;
