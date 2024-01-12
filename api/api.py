import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/time')
def get():
    return {'time': time.time()}