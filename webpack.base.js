const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 version"]
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
     
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};
