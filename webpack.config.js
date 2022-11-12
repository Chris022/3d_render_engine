const path = require('path');

module.exports = {
    mode: "production",
    devServer: {
        static: './dist',
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                  {
                    loader: 'raw-loader',
                    options: {
                      esModule: false,
                    },
                  },
                ],
              },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    }
};