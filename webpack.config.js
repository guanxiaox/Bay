var path = require("path");
var webpack = require("webpack");
var modulesDir = __dirname + '/node_modules';

module.exports = {
    context: __dirname,
    addVendor: function (name, path_name) {
        this.resolve.alias[name] = path_name;
    },
    entry: {
        index :['./app/static/js/index.js'],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/static/build/",
        filename: "[name].js"
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/,
                query: {
                    presets: [ 'react', 'es2015','stage-0', 'stage-1', 'stage-2', 'stage-3']
                }

            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};