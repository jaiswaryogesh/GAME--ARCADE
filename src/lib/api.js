export async function sendScore(game, score, player = "Guest") {
  console.log("Sending score:", { game, score, player }); // Log the score being sent
  try {
    const res = await fetch("http://127.0.0.1:5000/submit-score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ game, score, player }),
    });
    if (!res.ok) console.error("Score send failed", await res.text());
  } catch (e) {
    console.error("Error sending score:", e);
  }
}
