const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
