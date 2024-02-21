from flask import Flask

app = Flask(__name__, 
            static_url_path='',
            static_folder='../frontend/build',
            template_folder='../frontend/build')

app.config["JSON_SORT_KEYS"] = False
app.json.sort_keys = False