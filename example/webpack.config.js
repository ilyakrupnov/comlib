const { resolve } = require('path');

module.exports = {
    entry: {
        js: './example/index.js'
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
            }
        ]
    }
};