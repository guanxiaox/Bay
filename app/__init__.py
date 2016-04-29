import os

from flask import Flask


APP_DIR = os.path.dirname(__file__)

app = Flask(__name__)

app.static_folder = os.path.join(APP_DIR, 'static')

from app import views
