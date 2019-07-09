const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }          
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    before: function(app, server) {
      console.log("'before' callback is here")
    },
    after: function(app, server) {
      console.log("'after' callback is here")
    },
    allowedHosts: [
      '.localhost'
    ],
    headers: {
      'Access-Control-Allow-Headers': '*'
    }
  }  
}