import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-scores")
      .then((r) => r.json())
      .then((data) => setHistory(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Game History</h1>
      {loading ? (
        <p>Loading…</p>
      ) : history.length === 0 ? (
        <p>No scores yet!</p>
      ) : (
        <div className="space-y-2">
          {history.map((item, i) => (
            <div key={i} className="p-3 border rounded-xl shadow-sm flex justify-between">
              <div>
                <div className="font-semibold">{item.game}</div>
                <div className="text-sm text-gray-500">{item.time}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">{item.score}</div>
                <div className="text-xs text-gray-500">{item.player}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
