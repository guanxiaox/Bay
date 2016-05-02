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


@app.route('/product/')
@app.route('/product/<string:pid>/')
def product(pid):
    if not pid:
        return render_template('detail.html',
                               title='product',
                               app='product')
    else:
        return render_template('product.html',
                               title='product',
                               app='product')


@app.route('/order/')
def order():
    return render_template('order.html',
                           title='order',
                           app='order')
