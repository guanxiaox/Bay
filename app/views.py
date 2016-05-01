from flask import render_template

from app import app


@app.route('/')
@app.route('/index/')
def index():
    return render_template("index.html",
                           title='Home',
                           app='index')


@app.route('/detail/')
def detail():
    return render_template("detail.html",
                           title='detail',
                           app='detail')
