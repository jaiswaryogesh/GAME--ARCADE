from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:5174"]}})

# Ensure scores.json exists
if not os.path.exists('scores.json'):
    with open('scores.json', 'w') as f:
        json.dump([], f)

@app.route('/submit-score', methods=['POST'])
def submit_score():
    data = request.json
    game = data.get('game')
    score = data.get('score')
    player = data.get('player', 'Guest')
    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    new_entry = {
        "game": game,
        "score": score,
        "player": player,
        "time": time
    }

    with open('scores.json', 'r+') as f:
        scores = json.load(f)
        scores.append(new_entry)
        f.seek(0)
        json.dump(scores, f)

    return jsonify({"message": "Score submitted successfully!"}), 201

@app.route('/get-scores', methods=['GET'])
def get_scores():
    with open('scores.json', 'r') as f:
        scores = json.load(f)
    return jsonify(scores[::-1])  # Return newest first

if __name__ == '__main__':
    app.run(debug=True)
