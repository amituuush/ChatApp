module.exports = {
  entry: './src',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
            test: /\.(es6|jsx?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
          },
          {
            test: /\.less$/,
            loader: "style!css!less"
          },
          { test: /\.css$/,
            loader: "style!css"
          },
        ]
      },
    resolve: {
    extensions: ["", ".js", ".jsx", ".es6"] // allow you to not include file type when requiring
    }
};