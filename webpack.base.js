
module.exports = {
  module: {
    rules: [
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
        test: /\.css$/,
        use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            }
          ]
      },
    ]
  }
};
