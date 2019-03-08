const path = require('path');

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
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
