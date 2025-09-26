# Manual Testing for Score Saving Functionality

## Prerequisites
- Node.js and npm installed
- Python 3.x installed
- Flask installed (`pip install flask flask-cors`)

## Testing Steps

### 1. Start the Backend Server
```bash
python app.py
```
The backend will start on `http://127.0.0.1:5000`

### 2. Start the Frontend Development Server
```bash
npm run dev
```
The frontend will start on `http://localhost:5173`

### 3. Test Score Saving Manually

#### Option A: Play Games in the Application
1. Open your browser and navigate to `http://localhost:5173`
2. Play any of the available games (Bird Game, Pacman, Snake, etc.)
3. When the game ends, check if the score is saved:
   - Open browser developer tools (F12) and check the Console tab for "Score sent:" messages
   - Check the Network tab for POST requests to `/submit-score`
   - Verify the score appears in `scores.json`

#### Option B: Direct API Testing
You can test the API directly using curl:

```bash
# Test POST request to submit a score
curl -X POST http://127.0.0.1:5000/submit-score \
  -H "Content-Type: application/json" \
  -d '{"game": "Test Game", "score": 100, "player": "Test Player"}'

# Test GET request to retrieve scores
curl http://127.0.0.1:5000/get-scores
```

#### Option C: Browser Console Testing
Open browser console on the game page and use:
```javascript
// Test the global saveScore function
window.saveScore("Test Game", 50, "Console Player");

// Or simulate a message event
window.postMessage({
  type: "GAME_SCORE",
  game: "Test Game",
  score: 75,
  player: "Message Player"
}, "*");
```

### 4. Verify Results
Check the `scores.json` file to confirm scores are being saved:
```bash
cat scores.json
```

### Expected Results
- Scores should appear in `scores.json` with proper formatting
- Each score entry should include: game, score, player, and timestamp
- No errors should appear in the browser console or backend terminal

### Troubleshooting
- Ensure both servers are running
- Check CORS settings if getting cross-origin errors
- Verify the `scores.json` file exists and is writable
