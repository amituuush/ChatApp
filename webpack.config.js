module.exports = {
  entry: './src',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
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
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          { test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.json$/,
            loader: "json-loader"
          }
        ]
      },
    resolve: {
    extensions: ["", ".js", ".jsx", ".es6"] // allow you to not include file type when requiring
    }
};