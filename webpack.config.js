module.exports = {
    entry: './app/static/js/index.js',
    output: {
        path: 'app/static/build/',
        filename: 'app.js'
    },
    module: {

    loaders: [

        { 
            test: /\.js$/, 
            loader: 'babel',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }
    ]
    }         
};