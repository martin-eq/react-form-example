const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  context: __dirname,

  entry: './entry.js',

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Form Example',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'react-root'
    })
  ]

}
