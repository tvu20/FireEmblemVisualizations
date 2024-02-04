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
    print(game)
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