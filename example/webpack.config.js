const { resolve } = require('path');

module.exports = {
    entry: {
        js: './example/index.js',
        vendor: [
            'react-dom',
            'react'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '.')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015', 'react']
                    }
                }]
            },
            {
                test: /\.pug/,
                use: [{
                    loader: 'pug-loader'
                }]
            }
        ]
    }
};