import os
from flask import (request, json)
from application import app

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

@app.route('/api/scripts/prevalence')
def get_prevalence():
    game = request.args.get("game")
    f = open(os.path.join(app.root_path, "script", "prevalence", game + ".json"), "r")
    response = json.load(f)

    return response