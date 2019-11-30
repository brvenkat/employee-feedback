// webpack.config.js
var nodeExternals = require('webpack-node-externals')
var path = require('path')

const js = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  use: {
    loader: 'awesome-typescript-loader',
    options: {
      presets: ['react', 'es2015'],
      plugins: [
        'transform-class-properties'
      ]
    }
  }
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.tsx')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
}

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    'home.js': path.resolve(__dirname, 'src/public/home.tsx')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  }
}

module.exports = [serverConfig, clientConfig]