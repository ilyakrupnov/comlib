require('babel-register')({
    presets: ['es2015'],
    plugins: ["syntax-async-functions", "transform-regenerator"]
});
require('babel-polyfill');
require('./app');