const resolve = require('path').resolve;

module.exports = {
    entry: "./src/script1.js",

    output: {
        path: resolve('./src/build'),
        filename: "bundle.js"
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /(node_modules)/,
    //             loader: 'babel-loader',
    //             query:{
    //                 presets:['es2015']
    //             }
    //         }
    //     ]
    // }
};