import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const games = [
  { title: "GTA 6", image: "/images/modernimg/img1.jpg" },
  { title: "VALORANT", image: "/images/modernimg/img2.jpg" },
  { title: "ELDEN RING", image: "/images/modernimg/img3.jpg" },
  { title: "AGENT 47", image: "/images/modernimg/img4.jpg" },
  { title: "CALL OF DUTY", image: "/images/modernimg/img5.jpg" },
  { title: "DOOM KNIGHT", image: "/images/modernimg/img6.jpg" },
  { title: "INDIANA JONES", image: "/images/modernimg/img7.jpg" },
  { title: "TEKKEN 8", image: "/images/modernimg/img8.jpg" },
  { title: "QUEEN", image: "/images/modernimg/img9.jpg" },
  { title: "DISASTER", image: "/images/modernimg/img10.jpg" },
];

const Retro = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeGame, setActiveGame] = useState(null);

  const handlePlayClick = (game) => {
    setActiveGame(game);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveGame(null);
  };

  const handleBuy = () => {
    alert(`Redirecting to buy ${activeGame?.title}...`);
    closeModal();
  };

  return (
    <div className="bg-[#0a0a23] min-h-screen py-12 px-6 text-white font-sans">
      <div className="max-w-7xl mx-auto p-6 bg-[#161336] border border-white/10 rounded-2xl shadow-xl">
        <h2
          className="text-4xl font-extrabold text-center mb-10 tracking-wider"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
        >
          MODERN GAMES
        </h2>

        {/* 🎠 Horizontal Carousel */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {games.map((game, index) => (
              <div
                key={index}
                className="relative min-w-[200px] sm:min-w-[220px] lg:min-w-[250px] rounded-xl overflow-hidden shadow-lg bg-[#1e1a3c] border border-white/10 hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative group h-44 w-full overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayClick(game)}
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-semibold py-1.5 px-4 rounded-full text-sm hover:scale-105 transition"
                    >
                      <i className="bx bx-play-circle text-lg"></i> Play
                    </button>
                  </div>
                </div>

                <div className="py-3 px-4 text-center">
                  <h3 className="text-sm font-semibold tracking-wide text-white">
                    {game.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#1e1a3c] border border-pink-500 rounded-xl p-6 w-[90%] sm:w-96 text-center shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-xl font-bold hover:text-pink-400"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 tracking-widest text-white">
              Buy to Play
            </h3>
            <p className="text-sm mb-6 text-white/80">
              You must purchase{" "}
              <span className="text-pink-400 font-semibold">
                {activeGame?.title}
              </span>{" "}
              to start playing.
            </p>

            {/* ✅ Centered Buy Button */}
            <div className="flex justify-center">
              <button
                onClick={handleBuy}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-pink-600 transition-all duration-300"
              >
                <i className="bx bx-cart"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Retro;
