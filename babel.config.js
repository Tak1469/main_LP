
module.exports = api => {
  // 一度設定されたものはキャッキュされるので、ビルド時間が短縮できる。
  api.cache(true);

  return {
    "presets": [
      [
        "@babel/preset-env", {
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true,
          },
        },
      ]

    ]
  };
};