module.exports = {
    entry: {
        FinanceBox: ['./app/js/src/FinanceBox.js'],
        SuccessBox: ['./app/js/src/SuccessBox.js'],
        Detail: ['./app/js/src/Detail.js'],
        Product: ['./app/js/src/Product.js'],
        Evaluation: ['./app/js/src/Evaluation.js'],
        Order:['./app/js/src/Order.js'],
        Pay:['./app/js/src/Pay.js']
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
                query: {compact: true}
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                query: {compact: true}
            }
        ]
    }
};