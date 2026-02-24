module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@apps': './src/apps',
          '@core': './src/core',
          '@data': './src/data',
          '@domain': './src/domain',
          '@presentation': './src/presentation',
        },
      },
    ],
  ],
};
