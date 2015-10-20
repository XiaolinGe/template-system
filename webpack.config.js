var path = require('path');
var config = {
    entry: {
        demo1:['webpack/hot/dev-server', path.resolve(__dirname, 'app/demo1/main.js')],
        demo2:['webpack/hot/dev-server', path.resolve(__dirname, 'app/demo2/main.js')]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].entry.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            } , {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }]
    }

};

module.exports = config;
