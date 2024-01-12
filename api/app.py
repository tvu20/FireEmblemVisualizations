import time
from flask import (Flask, send_from_directory)
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

@app.route('/api/time')
def get():
    return {'time': time.time()}

# @app.errorhandler(404)
# def not_found(e):
#     return render_template("index.html")