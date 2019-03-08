const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      loader: 'style-loader!css-loader!less-loader',
      test: /\.less$/,
    },
    {
      loader: 'style-loader!css-loader!sass-loader',
      test: /\.scss$/,
    },
    {
      loader: 'awesome-typescript-loader!react-docgen-typescript-loader',
      test: /\.(ts|tsx)$/,
    },
  );
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
