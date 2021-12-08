const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "web_worker_js",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
            },
          },
        },
      },
      {
        test: /\.worker\.js$/i,
        loader:"worker-loader",
        options:{
          filename: "[name].[contenthash].worker.js",
          chunkFilename:"[id].[contenthash].worker.js",
          inline: "fallback"
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".tsx", ".ts", ".js"],
    alias:{},
    fallback: {},
  },
  plugins: [
  ],
  externals: [].filter((a) => a !== "matico_spec"),
  experiments: {},
};

module.exports = config;
