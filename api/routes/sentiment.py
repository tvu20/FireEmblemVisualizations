import os
from flask import (request, json)
from application import app

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

@app.route('/api/sentiment/emotions')
def get_emotion_game():
    game = request.args.get("game")
    f = open(os.path.join(app.root_path, "sentiment", "emotions", game + ".json"), "r")
    response = json.load(f)

    if game == "FE16":
        route = request.args.get("route")
        return response["Main-" + route]

    return response["Main"]

@app.route('/api/sentiment/emotions-chapter')
def get_emotion_chapter():
    game = request.args.get("game")
    route = request.args.get("route")
    chapter = request.args.get("chapter")
    f = open(os.path.join(app.root_path, "sentiment", "emotions", game + ".json"), "r")
    response = json.load(f)

    if route == None:
        route = "Main"
    
    if route not in response:
        return "Route not found", 422

    for c in response[route]:
        if c['chapter'] == chapter:
            data = c
            break
    else:
        return "Chapter not found", 422

    return data