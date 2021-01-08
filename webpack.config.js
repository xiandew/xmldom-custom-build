const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    mode: 'production',

    entry: {
        "dom-parser": path.join(__dirname, './index'),
        "dom-parser.min": path.join(__dirname, './index')
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        library: 'DOMParser',
        libraryTarget: 'umd'
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    output: { comments: false },
                    warnings: false
                },
                warningsFilter: () => false
            })
        ]
    },

    plugins: [

        new CleanWebpackPlugin()
    ],
}
