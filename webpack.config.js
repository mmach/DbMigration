var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './web/index.html',
    filename: 'index.html',
    inject: 'head'
});
module.exports = {
    context: __dirname,
    entry: {
        app: './web/app.js',
        //vendor: ['angular']
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(html)$/, loader: 'html-loader', options: {
                attrs: [':data-src']
            }}
    ]}
    ,
    plugins: [HtmlWebpackPluginConfig]

};