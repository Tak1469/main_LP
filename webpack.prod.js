
// HTMLファイルを生成している
const HtmlWebpackPlugin = require('html-webpack-plugin');
//パッケージのライセンス情報をjsファイルの中に含める
const TerserPlugin = require('terser-webpack-plugin');
// CSSファイルを外出しにするプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 画像圧縮プラグイン
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

// webpack.common.jsとマーズするプラグイン
// webpack-merge の merge をインポート
const { merge } = require('webpack-merge');
// webpackマージ先
const commonConf = require('./webpack.common.js');

// 開発用jsのファイル名
const outputFile = '[name][chunkhash]';
// 開発用imgのファイル名
const assetFile = '[name][contenthash]';

module.exports = () => merge(commonConf({ outputFile, assetFile }), {
  // mode: 開発用 development、本番用productと分ける
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',
  //webpackの中に画像の圧縮処理など、重い処理を含めるとwarningが表示されます。それを回避する設定
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 対象のhtmlファイル
      template: './src/index.html',
      // 自動的にバンドル対象のjs(main.js)とcss(style.css)を入れる。お節介ならfalseにする。
      inject: 'body',
      // favicon: "./public/favicon.ico",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new ImageminPlugin({ //画像圧縮処理の指定
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ],
      pngquant: {
        quality: "70-85"
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 10,
        colors: 256
      },
      svgo: {}
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new MiniCssExtractPlugin()
    ]
  }
});