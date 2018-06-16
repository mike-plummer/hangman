const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/js/index.tsx']
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all'
    }
  },
  output: {
    filename: '[chunkname].[hash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css']
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              babelCore: "@babel/core", // Use Babel7
              useBabel: true,
              useCache: true
            }
          }
        ]
      },
      {
        test: /.jsx?$/,
        exclude: '/node_modules',
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};