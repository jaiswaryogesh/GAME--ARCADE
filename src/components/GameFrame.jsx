import React, { useEffect, useRef } from "react";
import { sendScore } from "../lib/api";

export default function GameFrame({ title, src }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const onMessage = (event) => {
      const data = event.data || {};
      if (data?.type === "GAME_SCORE") {
        const game = data.game || title || "Game";
        const score = Number(data.score ?? 0);
        const player = data.player || "Guest";
        sendScore(game, score, player);
        console.log("Score sent:", { game, score, player });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [title]);

  useEffect(() => {
    window.saveScore = (game, score, player = "Guest") => {
      sendScore(game || title || "Game", Number(score ?? 0), player);
    };
  }, [title]);

  return (
    <div className="w-full h-[80vh] rounded-2xl overflow-hidden shadow-lg border">
      <iframe
        ref={frameRef}
        title={title}
        src={src}
        className="w-full h-full"
        frameBorder="0"
        allow="gamepad *"
      />
    </div>
  );
}
