import os
import time
from collections import OrderedDict
from flask import (Flask, request, send_from_directory, json, 
                #    current_app as app
                   )
from flask_cors import CORS

from routes.gender import *
from routes.supports import *
from routes.sentiment import *
from routes.scripts import *
from routes.characters import *

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

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)