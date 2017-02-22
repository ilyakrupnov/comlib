const { resolve, join } = require('path');

module.exports = {
    entry: {
        js: './example/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '.')
    },

    resolveLoader: {
        alias: {
            'com-lib-loader': join(__dirname, '../com-lib-loader'),
        },
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
                test: /\.js/,
                use: ['com-lib-loader']
            }
        ]
    }
};