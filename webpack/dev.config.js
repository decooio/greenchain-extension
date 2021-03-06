const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const host = 'localhost';
const port = 3000;
const customPath = path.join(__dirname, './customPublicPath');
const hotScript = 'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true';

const args = process.argv.slice(2);
const browser = args.indexOf('--firefox') !== -1 ? 'firefox' : 'chrome';

const baseDevConfig = () => ({
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    reduxDevToolsExtension: [
      customPath,
      hotScript,
      path.join(__dirname, '../browser/extension/redux-devtools-extension'),
    ],
    mainapp: [customPath, hotScript, path.join(__dirname, '../browser/extension/mainapp')],
    background: [customPath, hotScript, path.join(__dirname, '../backgroundScript/background')],
    inPageScript: [customPath, path.join(__dirname, '../contentScript/in-page-script.js')],
  },
  devMiddleware: {
    publicPath: `http://${host}:${port}/js`,
    stats: {
      colors: true,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  hotMiddleware: {
    path: '/js/__webpack_hmr',
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin({resourceRegExp: /[^/]+\/[\S]+.prod$/}),
    new webpack.DefinePlugin({
      __HOST__: `'${host}'`,
      __PORT__: port,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(browser),
      },
    }),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    alias: {
      // https://github.com/facebook/react/issues/20235
      // https://github.com/facebook/create-react-app/issues/11769
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
    extensions: ['*', '.js'],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer")
    }
  },
  node: {
    global: true,
    __filename: false,
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {},
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              }
            },
          },
        ],
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
});

const injectPageConfig = baseDevConfig();

injectPageConfig.entry = [customPath, path.join(__dirname, '../contentScript/content-script')];
delete injectPageConfig.hotMiddleware;
delete injectPageConfig.module.rules[0].options;
injectPageConfig.plugins.shift(); // remove HotModuleReplacementPlugin
injectPageConfig.output = {
  path: path.join(__dirname, '../dev/js'),
  filename: 'contentScript.bundle.js',
};

const appConfig = baseDevConfig();

module.exports = [injectPageConfig, appConfig];
