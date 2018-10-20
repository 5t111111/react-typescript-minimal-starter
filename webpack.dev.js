const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "react-typescript-minimal-starter",
      template: "src/index.html"
    })
  ],

  devServer: {
    contentBase: "./dist"
  }
};
