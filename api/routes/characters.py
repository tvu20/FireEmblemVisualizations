import os
from flask import (request, json)
from application import app

# ---------------------------------------------
# Routes for characters article
# ---------------------------------------------

@app.route('/api/characters/bar')
def get_character_bar():
    f = open(os.path.join(app.root_path, "characters", "character_bar.json"), "r")
    response = json.load(f)
    return response