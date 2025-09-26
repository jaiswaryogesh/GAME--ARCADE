import 'boxicons/css/boxicons.min.css';

const Mobile = () => {
  return (
    <div className="md:min-h-[90%] p-4 lg:p-8 md:mt-0 mt-60 bg-[#0a0a23] text-white font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1
          className="text-5xl font-extrabold tracking-widest"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 25px rgba(167, 139, 250, 0.6)",
          }}
        >
          ARENA
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          {/* NFT Store Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white shadow-lg aspect-[4.4/4] transition-transform hover:scale-105">
            <img
              src="/images/bento-card1.png"
              alt="NFT Store"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-0 w-full py-4 bg-black/70 text-xl font-bold hover:text-yellow-400 transition-all duration-300">
              <i className="bx bx-store-alt mr-2"></i> NFT STORE
            </button>
          </div>

          {/* Video Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white shadow-lg aspect-[4.5/4] transition-transform hover:scale-105">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/videos/bento-card2.mp4"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Top Row: 3 Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Scoriox", video: "/videos/bento-card3.mp4" },
              { name: "Floralynx", video: "/videos/bento-card4.mp4" },
              { name: "Axolotl", video: "/videos/bento-card5.mp4" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-white shadow-lg aspect-square transition-transform hover:scale-105"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={card.video}
                />
                <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold drop-shadow-md">
                  {card.name}
                </h1>
              </div>
            ))}
          </div>

          {/* Bottom Image Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-white shadow-lg aspect-[16/9] transition-transform hover:scale-105">
            <img
              src="/images/bento-card5.png"
              alt="Buy Banner"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-0 w-full py-4 bg-black/70 text-xl font-bold hover:text-yellow-400 transition-all duration-300">
              <i className="bx bx-link-external mr-2"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
