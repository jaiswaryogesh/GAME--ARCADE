import React, { useState } from "react";
import 'boxicons/css/boxicons.min.css';

// Game data array with titles and image paths
const games = [
  { title: "GOD OF WAR", image: "/images/retroimg/image1.jpg" },
  { title: "SUNSET COWBOY", image: "/images/retroimg/image2.jpg" },
  { title: "WORRIORS", image: "/images/retroimg/image3.jpg" },
  { title: "RED CANYON", image: "/images/retroimg/image4.jpg" },
  { title: "SNOW MASTER", image: "/images/retroimg/image5.jpg" },
  { title: "ASSASSIN REUNINE", image: "/images/retroimg/image6.jpg" },
  { title: "VIKINGS", image: "/images/retroimg/image7.jpg" },
  { title: "POKEMON", image: "/images/retroimg/image8.jpg" },
  { title: "CYBERPUNK", image: "/images/retroimg/image9.jpg" },
  { title: "JOJO BIZZARE", image: "/images/retroimg/image10.jpg" },
];

const Retro = () => {
  // State to control modal visibility and store selected game
  const [showModal, setShowModal] = useState(false);
  const [activeGame, setActiveGame] = useState(null);

  // Trigger modal with selected game info
  const handlePlayClick = (game) => {
    setActiveGame(game);
    setShowModal(true);
  };

  // Close modal and reset selected game
  const closeModal = () => {
    setShowModal(false);
    setActiveGame(null);
  };

  // Simulate game purchase
  const handleBuy = () => {
    alert(`Redirecting to buy ${activeGame?.title}...`);
    closeModal();
  };

  return (
    <div className="bg-[#0a0a23] min-h-screen py-12 px-6 text-white font-sans relative">
      {/* Container for game section */}
      <div className="max-w-7xl mx-auto border-2 border-purple-500 rounded-xl p-8 bg-[#15152e] shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
          RETRO GAMES
        </h2>

        {/* Grid of Game Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Game Image with hover overlay Play button */}
              <div className="relative group">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayClick(game)}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-lg hover:shadow-pink-600 transition-all duration-300"
                  >
                    <i className="bx bx-play-circle text-lg"></i> Play
                  </button>
                </div>
              </div>

              {/* Game Title */}
              <p className="text-center mt-3 text-sm tracking-wider font-semibold text-white/90">
                {game.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup on Play Click */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur">
          <div className="bg-[#1e1a3c] border border-pink-500 rounded-xl p-6 w-[90%] sm:w-96 text-center shadow-2xl animate-fadeIn relative">

            {/* Modal Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-xl font-bold hover:text-pink-400"
            >
              ×
            </button>

            {/* Modal Title */}
            <h3 className="text-xl font-bold mb-4 tracking-widest text-white">Buy to Play</h3>

            {/* Modal Message */}
            <p className="text-sm mb-6 text-white/80">
              You must purchase{" "}
              <span className="text-pink-400 font-semibold">
                {activeGame?.title}
              </span>{" "}
              to start playing.
            </p>

            {/* Centered Buy Button */}
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
