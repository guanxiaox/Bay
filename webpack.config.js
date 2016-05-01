module.exports = {
    entry:{ 
        FinanceBox: ['./app/js/src/FinanceBox.js'],
        SuccessBox:['./app/js/src/SuccessBox.js'],
        Detail:['./app/js/src/Detail.js'],
        Product:['./app/js/src/Product.js']
    },
    output: {
        path: 'app/static/js/',
        filename: '[name].js'
    },
    module: {

    loaders: [

        { 
            test: /\.js$/, 
            loader: 'babel',
            exclude: /node_modules/,
            query: {compact: false}
        },
        {
            test: /\.css$/,
            loader: 'style!css',
            query: {compact: true}
        }
    ]
    }         
};