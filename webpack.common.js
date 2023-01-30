const { ProvidePlugin } = require('webpack');
const path = require('path');
// webpack5 推薦のESlint プラグイン
const ESLintPlugin = require('eslint-webpack-plugin');
// CSSファイルをjsにまとめずに外出しにするプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ outputFile, assetFile }) => ({
  // mode: 開発用 development、本番用productと分ける
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // entry: 指定したファイルを元にdistに吐き出される。
  entry: './src/js/index.js',
  // 複数用意する場合
  // entry: {
  //   app: './src/app.js',
  //   sub: './src/sub.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/${outputFile}.js`,
    // 本番環境なので名前もハッシュ化できる。
    // filename: '[name].[contenthash].js'
    // 複数のバンドルする場合は
    // filename: '[name].bundle.js'
    // とする。[name]にentryで設定したkeyの名前がつく。
    // 今回の場合は index.bundle.js app.bundle.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        // 対象となる拡張子
        test: /\.(scss|sass|css)$/i,
        // 下から実行される
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // postcss-loader と sass-loader の場合は2を指定
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          'postcss-loader',// 設定はpostcss.config.jsにて
          {
            // sassをコンパイルしてcssに変換する
            loader: 'sass-loader',
            options: {
              // Dart Sassを使えるようにする
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        generator: {
          filename: `./img/${assetFile}[ext]`,
        },
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/i,
        generator: {
          filename: `./font/${assetFile}[ext]`,
        },
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    // ESlintプラグイン
    new ESLintPlugin({
      // 自動修正を true
      fix: true,
    }),
    // cssファイルプラグイン
    new MiniCssExtractPlugin({
      filename: `scss/${outputFile}.css`,
    }),
    // よく使うモジュールなどを変数として省略できる。
    new ProvidePlugin({
      // jqueryの場合
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
});