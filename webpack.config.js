const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "img/[hash]-[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/img", to: "img" }],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: "body",
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
};
