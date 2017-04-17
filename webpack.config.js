const resolve = require('path').resolve;
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const paths = {
    dist: resolve(__dirname, 'dist'),
    public: resolve(__dirname, 'public')
};

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: ['./backend.js', './index.js'],

    output: {
        path: paths.dist,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },

    devServer: {
        contentBase: paths.dist
    },

    plugins: [
        // clean up dist/
        new CleanPlugin(['dist/**/*']),

        // generate index.html
        new HtmlPlugin({
            template: resolve(paths.public, 'index.html')
        }),

        // copy the images over to dist/
        new CopyPlugin([
            { from: resolve(paths.public, 'images'), to: resolve(paths.dist, 'images') },
            { from: resolve(paths.public, 'fa') }
        ])
    ]
};
