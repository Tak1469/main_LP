// HTMLファイルを生成している
const HtmlWebpackPlugin = require('html-webpack-plugin');
// html監視プラグイン
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// webpack.common.jsとマーズするプラグイン
// webpack-merge の merge をインポート
const { merge } = require('webpack-merge');
// webpackマージ先
const commonConf = require('./webpack.common.js');
// 開発用jsのファイル名
const outputFile = '[name]';
// 開発用imgのファイル名
const assetFile = '[name]';

module.exports = () => merge(commonConf({ outputFile, assetFile }), {
  // mode: 開発用 development、本番用productと分ける
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  devtool: 'source-map',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/ //正規表現で指定
  },
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: "./dist",
    open: true,
    // 監視するかフォルダはどれか
    watchFiles: ["src/**/*"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      alwaysWriteToDisk: true,
    }),
    // html監視プラグイン
    new HtmlWebpackHarddiskPlugin(),
  ],
});