import React from "react";
import { useParams } from "react-router-dom";
import GameFrame from "./GameFrame";
import 'boxicons/css/boxicons.min.css';

// Game data array with titles, image paths, and local game paths
const games = [
  { title: "Bird Game", image: "/images/canplay/bird.jpg", path: "/PLAYABLEGAMES/birdgame/index.html" },
  { title: "Ping Pong", image: "/images/canplay/pingpong.png", path: "/PLAYABLEGAMES/PINGPONG/index.html" },
  { title: "Snake Game", image: "/images/canplay/snake.jpg", path: "/PLAYABLEGAMES/snake/index.html" },
  { title: "Tic Tac Toe", image: "/images/canplay/cross.jpg", path: "/PLAYABLEGAMES/tic tac toe/index.html" },
  { title: "Typing Game", image: "/images/canplay/type.jpg", path: "/PLAYABLEGAMES/typinggame/index.html" },
  { title: "Pacman", image: "/images/canplay/pack.jpg", path: "/PLAYABLEGAMES/pacman-master/index.html" },
  { title: "Demon Slayer", image: "/images/canplay/demon.jpg", path: "/PLAYABLEGAMES/demon_slayer_runner_v4/demon_slayer_runner_v3.html" },
  { title: "Shuffle Game", image: "/images/canplay/word.jpg", path: "/PLAYABLEGAMES/shuffle/index.html" },
];

// Component to display a specific game
export const GameView = () => {
  const { gameName } = useParams();
  const game = games.find(g => g.title.toLowerCase().replace(/\s+/g, '-') === gameName);
  
  if (!game) {
    return (
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold">Game not found</h1>
        <p>The requested game could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-white">{game.title}</h1>
      <GameFrame title={game.title} src={game.path} />
    </div>
  );
};

// Component to display the game selection grid
const Playable = () => {
  return (
    <div className="bg-[#0a0a23] min-h-screen py-12 px-6 text-white font-sans relative">
      {/* Container for game section */}
      <div className="max-w-7xl mx-auto border-2 border-purple-500 rounded-xl p-8 bg-[#15152e] shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
          PLAY NOW
        </h2>

        {/* Grid of Game Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {games.map((game, index) => (
            <a
              key={index}
              href={`/games/${game.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 block"
            >
              <div className="relative group">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                  <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-lg">
                    <i className="bx bx-play-circle text-lg"></i> Play
                  </span>
                </div>
              </div>
              <p className="text-center mt-3 text-sm tracking-wider font-semibold text-white/90">
                {game.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playable;
