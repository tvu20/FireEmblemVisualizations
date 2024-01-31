import os
import time
from flask import (Flask, send_from_directory, json, current_app as app)
from flask_cors import CORS

app = Flask(__name__, 
            static_url_path='',
            static_folder='../frontend/build',
            template_folder='../frontend/build')

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