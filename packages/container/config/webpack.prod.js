const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // to resolve caching issues
    publicPath: "/container/latest/", // Webpack plugins will (HtmlWebpackPlugin) reference files built by webpack using this path
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // remoteEntry files must point to production domains
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`, // we assume that the remoteEntry.js for each will be nested in a dir named for the app
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
