import os
import time
from collections import OrderedDict
from flask import (Flask, request, send_from_directory, json, current_app as app)
from flask_cors import CORS

app = Flask(__name__, 
            static_url_path='',
            static_folder='../frontend/build',
            template_folder='../frontend/build')

app.config["JSON_SORT_KEYS"] = False
app.json.sort_keys = False

CORS(app)

# ---------------------------------------------
# Routes for index and errors.
# ---------------------------------------------

@app.route("/", defaults={"path": ""})
def serve(path):
    return send_from_directory(app.static_folder, "index.html")


@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

# ---------------------------------------------
# Other
# ---------------------------------------------

# @app.route('/api/time')
# def get():
#     return {'time': time.time()}

# ---------------------------------------------
# Routes for gender article
# ---------------------------------------------

@app.route('/api/gender/line-counts')
def get_gender_line_counts():
    f = open(os.path.join(app.root_path, "gender", "line_counts.json"), "r")
    response = json.load(f)
    return response

@app.route('/api/gender/transitions')
def get_gender_transitions():
    f = open(os.path.join(app.root_path, "gender", "transitions.json"), "r")
    response = json.load(f)
    return response

@app.route('/api/gender/transition')
def get_gender_transitions_game():
    game = request.args.get("game")
    # print(game)
    f = open(os.path.join(app.root_path, "gender", "transitions.json"), "r")
    response = json.load(f)

    if game not in response:
        return "Game not found", 422

    return response[game]

@app.route('/api/gender/char-counts')
def get_gender_char_counts():
    f = open(os.path.join(app.root_path, "gender", "char_counts.json"), "r")
    response = json.load(f)
    return response

# ---------------------------------------------
# Routes for supports article
# ---------------------------------------------

@app.route('/api/relationships/all-supports')
def get_supports():
    f = open(os.path.join(app.root_path, "relationships", "supports.json"), "r")
    response = json.load(f)
    return response

@app.route('/api/relationships/supports')
def get_support():
    game = request.args.get("game")
    print(game)
    f = open(os.path.join(app.root_path, "relationships", "supports.json"), "r")
    response = json.load(f)

    if game not in response:
        return "Game not found", 422

    return response[game]

@app.route('/api/relationships/support-list')
def get_support_games():
    f = open(os.path.join(app.root_path, "relationships", "supports.json"), "r")
    response = json.load(f)

    return list(response.keys())

@app.route('/api/relationships/all-pairings')
def get_pairings():
    f = open(os.path.join(app.root_path, "relationships", "pairings.json"), "r")
    response = json.load(f)
    return response

@app.route('/api/relationships/pairings')
def get_pairing():
    game = request.args.get("game")
    # print(game)
    f = open(os.path.join(app.root_path, "relationships", "pairings.json"), "r")
    response = json.load(f)

    if game not in response:
        return "Game not found", 422

    return response[game]

@app.route('/api/relationships/pairing-list')
def get_pairing_games():
    f = open(os.path.join(app.root_path, "relationships", "pairings.json"), "r")
    response = json.load(f)

    return list(response.keys())

# ---------------------------------------------
# Routes for scripts article
# ---------------------------------------------

@app.route('/api/scripts/word-counts')
def get_word_counts():
    f = open(os.path.join(app.root_path, "script", "nested_word_counts.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/words-per-chapter')
def get_words_per_chapter():
    f = open(os.path.join(app.root_path, "script", "words_per_chapter.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/unique-words')
def get_unique_words():
    f = open(os.path.join(app.root_path, "script", "unique_words.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/words-once')
def get_words_once():
    f = open(os.path.join(app.root_path, "script", "words_once.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/longest-words')
def get_longest_words():
    f = open(os.path.join(app.root_path, "script", "longest_words.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/common-words')
def get_common_words():
    f = open(os.path.join(app.root_path, "script", "most_common_words.json"), "r")
    response = json.load(f)

    return response

@app.route('/api/scripts/similarity')
def get_similarity():
    f = open(os.path.join(app.root_path, "script", "similarity.json"), "r")
    response = json.load(f)

    return response

# ---------------------------------------------
# Routes for sentiment article
# ---------------------------------------------

@app.route('/api/sentiment/sentiments')
def get_sentiments():
    game = request.args.get("game")
    f = open(os.path.join(app.root_path, "sentiment", "sentiments", game + ".json"), "r")
    response = json.load(f)

    return response

@app.route('/api/sentiment/sentiment-curves')
def get_sentiment_curves():
    f = open(os.path.join(app.root_path, "sentiment", "sentiment_curves.json"), "r")
    response = json.load(f)

    return response