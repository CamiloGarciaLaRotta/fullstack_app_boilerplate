const webpack = require('webpack');
const path = require('path');

const config = {
    // single entry point to js bundle
    entry : path.join(__dirname, 'dummy_app/static/jsx/index.jsx'),
    output : {
        path: path.join(__dirname, 'dummy_app/static/dist'),
        filename: 'bundle.js'
    },
    // Specify how to process each file before bundling
    module : {
        rules : [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    // Which files should Webpack should look to bundle 
    // that are referenced by import or require()
    resolve : {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
