module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // any file that ends with .mjs or .js will be processed by babel
        exclude: /node_modules/, // exclude from babel processing
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // process jsx tags | convert to ES15 syntax
            plugins: ["@babel/plugin-transform-runtime"], // enable features inside browser, e.g. async-await syntax
          },
        },
      },
    ],
  },
};
