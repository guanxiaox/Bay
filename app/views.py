from flask import render_template

from app import app


@app.route('/')
@app.route('/index/')
def index():
    return render_template("index.html",
                           title='Home',
                           app='index')


@app.route('/product_list/')
def product_list():
    return render_template("product_list.html",
                           title='detail',
                           app='detail')


@app.route('/product/')
@app.route('/product/<string:pid>/')
def product(pid):
    if not pid:
        return render_template('product_list.html',
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


@app.route('/company/')
@app.route('/company/<string:gid>')
def company(gid):
    if not gid:
        return render_template('index.html',
                               title='Home',
                               app='index')
    else:
        return render_template('company.html',
                               title='company',
                               app='company')

@app.route('/user/')
@app.route('/user/<string:uid>')
def user(uid):
    if not uid:
        return render_template('index.html',
                               title='Home',
                               app='index')
    else:
        return render_template('user.html',
                               title='user',
                               app='user')
