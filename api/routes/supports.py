import os
from flask import (request, json)
from application import app

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