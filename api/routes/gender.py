import os
from flask import (request, json)
from application import app

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

@app.route('/api/gender/class-timeline')
def get_class_timeline():
    f = open(os.path.join(app.root_path, "gender", "class_timeline.json"), "r")
    response = json.load(f)
    return response