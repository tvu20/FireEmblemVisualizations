import time
from flask import (
    Flask,
    send_from_directory,
    request
)
from flask_cors import CORS

import predictor as prd

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
def get_time():
    return {'time': time.time()}


# -----
# testing the predictors

# predictor = ktrain.load_predictor('models/my_model.keras')

# def prediction(text):
#     result = predictor.predict(text)

#     return result

@app.route('/api/predict-emotion')
def get_prediction():
    sentence = request.args.get('sentence')
    sentence = sentence.replace("%20", " ")
    print(sentence)

    label = prd.prediction(sentence)

    return {'label': label}

# -----


# ----------------------------------------------------------------------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)