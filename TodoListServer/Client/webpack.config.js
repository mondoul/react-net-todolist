module.exports = {
    entry: './app/App.js',

    output: {
        path: '../Scripts',
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        inline: true,
        contentBase: './public'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};